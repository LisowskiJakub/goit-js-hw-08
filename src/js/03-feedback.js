import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let lastSession = {};

try {
    lastSession = JSON.parse(localStorage.getItem('feedback-form-state'));

} catch (err) {
    console.log('Parse error:' + err.message);
}

form.addEventListener('input', throttle(
    () => {
        localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }))
        lastSession= {email:"email.Value", message:"message.value"}
    }
    , 500)
);
form.addEventListener('submit', e => {
    e.preventDefault();
    lastSession==null ? undefined : console.log(lastSession); 
    localStorage.removeItem('feedback-form-state');
    form.reset();
})
