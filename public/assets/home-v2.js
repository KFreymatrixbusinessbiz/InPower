
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  const revealTargets = [
    ...document.querySelectorAll(
      ".section-header, .outcome-grid article, .evidence-heading, .evidence-layout, .number-statement, .parts-evidence .evidence-image-frame, .waste-layout, .evidence-conclusion, .recovery-compare, .boundary-grid, .capability-flow > div, .inpower-mark, .inpower-copy, .economics .section-header, .discussion > div, .discussion-actions"
    )
  ];

  revealTargets.forEach(el => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("visible"));
  }

})();
