console.log(document.getElementById('contact__form'));
const btn = document.querySelector('.btn');
btn.style.background='red'
btn.addEventListener('mouseover' , (e) =>{
    e.preventDefault();
    document.querySelector('btn').style.background = '#ffff';
});

const form = document.querySelector('#contact__form')
const nameinput =document.querySelector('#name')
const emailinput = document.querySelector('#email')
const msginput = document.querySelector('#message')

form.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault()

    if(nameinput.value ===' ' || emailinput.value===' ' || msginput.value===' '){
        msg.innerHTML = 'please enter all fields';
        
    }else{console.log('success')}
}

