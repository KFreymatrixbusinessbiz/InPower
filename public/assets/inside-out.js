const revealItems = document.querySelectorAll('[data-reveal]');

if (revealItems.length) {
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const expressiveFade = (value) => {
    const t = clamp(value);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const updateRevealItems = () => {
    revealItems.forEach((item) => {
      const panel = item.closest('.chapter-panel, .realization-panel, .diagram-panel') || item.parentElement || item;
      const rect = panel.getBoundingClientRect();
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
      const fadeIn = expressiveFade((progress - 0.18) / 0.2);
      const isModelPanel = panel.classList.contains('inside-model');
      const fadeOutStart = isModelPanel ? 0.86 : 0.72;
      const fadeOutDuration = isModelPanel ? 0.2 : 0.26;
      const fadeOut = 1 - expressiveFade((progress - fadeOutStart) / fadeOutDuration);
      const opacity = fadeIn * fadeOut;
      const direction = progress < (isModelPanel ? 0.72 : 0.62) ? 1 : -1;
      const translate = direction * (1 - opacity) * 44;

      item.style.setProperty('--reveal-opacity', opacity.toFixed(3));
      item.style.setProperty('--reveal-y', translate.toFixed(2) + 'px');
    });
  };

  updateRevealItems();
  window.addEventListener('scroll', updateRevealItems, { passive: true });
  window.addEventListener('resize', updateRevealItems);
}
