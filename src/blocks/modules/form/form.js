const percent = document.getElementById('form-percent');
const range = percent.getElementsByClassName('input-range__input')[0];
const label = percent.getElementsByClassName('input-range__label_percent')[0];
range.addEventListener('input', function() {
  label.innerHTML = this.value;
});