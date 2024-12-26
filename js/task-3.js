document.querySelector('#name-input').addEventListener('input', event => {
  document.querySelector('#name-output').textContent = event.target.value.trim() || 'Anonymous';
});
