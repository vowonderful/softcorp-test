const _e = 'form__elements_';
const settings = document.getElementById('layout-settings');
const changeInputs = document.getElementById('change-inputs');
const changeCircle = document.getElementById('change-circle');
const form = document.getElementById('order-form');

const changeable = form.getElementsByClassName('form__changeable')[0];
const cloneChild = changeable.querySelector('.form__col:last-child');

const message = function(text, display, type = 'log') {
  switch (display) {
    case 'alert': {
      alert(text);
    } break;
    case 'console': {
      if (type == 'error')
        console.error(text);
      else if (type == 'warn')
        console.warn(text);
      else
        console.log(text);
    } break;
    case 'any':
    default: {
      alert(text);
      if (type == 'error')
        console.error(text);
      else if (type == 'warn')
        console.warn(text);
      else
        console.log(text);
    } break;
  }
}

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const getCurrentClassName = function() {
  return Array.from(changeable.classList).find(className => {
    if (className.indexOf(_e, 0) === 0)
      return className;
  });
}

const classRename = function(value) {
  let className = getCurrentClassName();
  
  changeable.classList.remove(className);
  changeable.classList.add(_e + value);
}

const getCurrentCountElements = function() {
  return +getFormElements().length;
}

const getFormElements = function() {
  return Array.from(changeable.childNodes).filter(child => child.classList !== undefined);
}

const getClassNumber = function(value) {
  //let f = arguments.callee.name;
  if (value % 12 == 0) {
    return 12;
  }
  
  value = (value % 12) + 6;
  if (value > 12) {
    value = getClassNumber(value);
  }
  return value;
}

const createChildren = function() {

  const name = 'form-dynamic-field-';
  const typesList = [
    'time', 'date', 'number', 'tel', 'email', 'text', 'url', 'password'
  ]; 
  // 'week' don't work on iOs
  // 'month' don't work on Firefox
  // 'datetime-local' too long

  if (cloneChild === null || !cloneChild) {
    console.error('The child was not cloned.');
    return false;
  }

  let random = getRandomIntInclusive(0, typesList.length-1);

  const clone = cloneChild.cloneNode(true);
  
  let label = clone.childNodes[1];
  let input = label.childNodes[1];

  let n = getCurrentCountElements() + 1;

  clone.setAttribute('id', name + n);
  label.setAttribute('for', name + n);
  input.setAttribute('name', name + n);
  input.setAttribute('id', name + n);
  input.setAttribute('type', typesList[random])
  input.setAttribute('placeholder', 'Укажите ' + typesList[random]);

  return changeable.appendChild(clone);
}

const addNewInput = function(value) {

  const countNow = getCurrentCountElements();
  
  const needToAdd = value - countNow;

  for (let i = 0; i < needToAdd; i++) {
    let tryCreateNewEleemnt = createChildren();

    if (tryCreateNewEleemnt == null || !tryCreateNewEleemnt) {
      console.error('Failed to add element');
      return false;
    };
  }

}

const removeInputs = function(leaveCount) {

  const allChildrens = getFormElements();
  const countChildrens = getCurrentCountElements();
  
  for (let i = 0; i < countChildrens; i++) {
    if ( i > leaveCount-1 ) {
      allChildrens[i].remove(this);
    }
  }
}

const changeClassName = function(event) {

  let value = +this.value.replace(/[^0-9]/ig,'');

  if (!Number.isInteger(value)) {
    message('Not a number is specified', 'console', 'error');
    return false;
  } else if (changeable === null) {
    message('An element with the "form__changeable" class was not found', 'console', 'error');
    return false;
  }

  if ( value > 99 ) {
    this.value = 99;
    message('Возможно, стоит разделить форму на несколько этапов/страниц заполнения формы? Пользователи не любят заполнять длинные формы. Сейчас рекмоендуется предлагать пользователям не больше 3-ёх пунктов заполнения формы. Четыре -- уже считается избыточным. Если их больше трёх -- их заполнение разбивают на несколько этапов (форм).', 'any', 'warn');
    return false;
  } else if ( value < 1 ) {
    changeable.style.display = 'none';
    this.value = 0;
    return false;
  } else {
    changeable.style.display = '';
  }

  const current = getCurrentCountElements();

  if ( value > current ) {
    addNewInput(value);
  } else if ( value < current ) {
    removeInputs(value);
  }

  if (value > 12) {
    value = getClassNumber(value);
  }

  classRename(value);
 
}

settings.addEventListener('click', () => {
  settings.parentElement.classList.toggle('open');
});


//changeInputs.addEventListener('change', changeClassName);
changeInputs.oninput = 
changeInputs.oncut = 
changeInputs.oncopy = 
changeInputs.onpaste = changeClassName;

