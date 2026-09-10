const inputs = [...document.querySelectorAll('input[name="signal"]')];
const count = document.querySelector('#signal-count');
const result = document.querySelector('#result-copy');
const themes = document.querySelector('#theme-copy');

function updateAssessment() {
  const selected = inputs.filter((input) => input.checked);
  const total = selected.length;
  const activeThemes = [...new Set(selected.map((input) => input.dataset.theme))];

  count.textContent = `${total} ${total === 1 ? 'condition' : 'conditions'} selected`;
  themes.textContent = activeThemes.length ? `Themes exposed: ${activeThemes.join(' · ')}` : '';

  if (total === 0) result.textContent = 'Select the conditions that apply. The useful result is not the number; it is what the pattern suggests you should examine next.';
  else if (total <= 2) result.textContent = 'Your selections identify a specific operating condition worth examining. Consider its consequence, the capability already available, and whether the present response model fits the work.';
  else if (activeThemes.length === 1) result.textContent = 'Your selections concentrate in one part of the operating model. Examine that dependency before the next acquisition, renewal, or support decision.';
  else result.textContent = 'Your selections cross operating themes. Examine whether workflow, locations, internal capability, recovery preference, and outside-support reliance still fit together.';
}

inputs.forEach((input) => input.addEventListener('change', updateAssessment));
updateAssessment();
