import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(onDataInput), 500);
form.addEventListener('submit', onFormSubmit);

const FORMLASTINPUT_KEY = "feedback-form-state";

let dataForm = JSON.parse(localStorage.getItem(FORMLASTINPUT_KEY));
const { email, message } = form.elements;

function onDataInput(e) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(FORMLASTINPUT_KEY, JSON.stringify(dataForm));
}

onPageLoad();

function onPageLoad() {
    email.value = dataForm.email;
    message.value = dataForm.message;
}

function onFormSubmit(e) {
  e.preventDefault();
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(FORMLASTINPUT_KEY);
    e.currentTarget.reset();
    dataForm = {};
}