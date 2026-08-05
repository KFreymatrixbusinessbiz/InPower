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

  if (total === 0) result.textContent = 'Select the conditions that apply. The useful result is not the number; it is the pattern they reveal.';
  else if (total <= 2) result.textContent = 'A limited dependency may be addressable without changing the entire operating model. Examine the selected condition and its consequence.';
  else if (activeThemes.length === 1) result.textContent = 'Several related signals point to a concentrated dependency. That area deserves examination before the next acquisition, renewal, or service decision.';
  else result.textContent = 'The signals cross operating themes. This suggests the issue may be the operating model, not an isolated device or service event.';
}

inputs.forEach((input) => input.addEventListener('change', updateAssessment));
updateAssessment();
