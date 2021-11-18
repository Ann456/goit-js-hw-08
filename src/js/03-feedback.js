
import throttle from 'lodash.throttle'

// const form = document.querySelector('.feedback-form')

// form.addEventListener('input', throttle(onFormInput, 500))
// form.addEventListener('submit', onFormSubmit)

// populateForm()
// // приводим массив введенных данных к строке
// function onFormInput() {
//   const formDataStringified = JSON.stringify({ email: form.email.value, message: form.message.value })
//   localStorage.setItem('feedback-form-state', formDataStringified)
// }
// //выводим сообщение пользователю если не заполнен email или message
// function onFormSubmit(e) {
//   e.preventDefault()//запрещаем перезагрузку страницы

//   if (e.target.email.value === '' || e.target.message.value === '') {
//     alert('Please enter your email')
//     return
//   }

//   console.log({ email: form.email.value, message: form.message.value })

//   e.currentTarget.reset()
//   localStorage.removeItem('feedback-form-state')
// }
// // приводим строку введенных данных к массиву и получаем ключ из хранилища
// function populateForm() {
//   const storageValueParsed = JSON.parse(localStorage.getItem('feedback-form-state'))

//   if (storageValueParsed) {
//     form.email.value = storageValueParsed.email
//     form.message.value = storageValueParsed.message
//   }
// }





const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 200));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput() {
  const formDataStringified = JSON.stringify({ email: form.email.value, message: form.message.value })
  localStorage.setItem('feedback-form-state', formDataStringified)
}

function populateTextarea() {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    form.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    form.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
  }
}