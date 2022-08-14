const selectParent = document.getElementById('form-select');
const select = selectParent.getElementsByClassName('custom-select')[0];
const selected = selectParent.getElementsByClassName('custom-select__fake-selected')[0];
const selectValue = selectParent.getElementsByClassName('custom-select__value')[0];
// const options = selectParent.getElementsByClassName('custom-select__fake-options');
const optionsList = selectParent.getElementsByClassName('custom-select__fake-option');
const realSelect = selectParent.getElementsByClassName('custom-select__real')[0];

let processOpening = '';
let processClosing = '';

selected.addEventListener('click', () => {
  if (select.classList.contains('active')) {

    if(processOpening) clearTimeout(processOpening);

    select.classList.remove('active');
    
    processClosing = setTimeout(() => {
      select.classList.remove('opened');
    }, 500);

  } else {

    if(processClosing) clearTimeout(processClosing);

    select.classList.add('active');

    processOpening = setTimeout(() => {
      select.classList.add('opened');
    }, 500);

  }
});

Array.from(optionsList).forEach(option => {
  option.addEventListener('click', function() {

    const optionValue = this.getAttribute('data-value');
    const optionText = this.innerText;

    realSelect.value = optionValue;
    selectValue.innerHTML = optionText;

    selectValue.classList.remove('custom-select__value_disabled');

    select.classList.remove('active');
    select.classList.remove('opened');

  })
});