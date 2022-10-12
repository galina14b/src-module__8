let data = {
  email: '',
  message: ''
}

const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInput);
function onInput(e) {
  e.preventDefault();
  data.email = form[0].value;
  data.message = form[1].value;
  localStorage.setItem("feedbak-form-state", JSON.stringify(data))
};

let gotItem = localStorage.getItem("feedbak-form-state");
let parsedItem = JSON.parse(gotItem);

window.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('feedbak-form-state')){
    form[0].value = parsedItem.email;
    form[1].value = parsedItem.message;
    data.email = parsedItem.email;
    data.message = parsedItem.message;
    console.log('writing...');
  } else {
    form[0].value = '';
    form[1].value = '';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(data);
  localStorage.clear();
  form[0].value = '';
  form[1].value = '';
})

