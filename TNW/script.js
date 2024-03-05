const feedbackBtn = document.getElementById('feedbackBtn');
const sendFeedabck = document.getElementById('detail');

const xmark = document.getElementById('xmark');

const fullName = document.getElementById('fullName');
const nameIcon = document.getElementById('nameIcon');
const nameError = document.getElementById('nameError');

const mail = document.getElementById('mail');
const mailIcon = document.getElementById('mailIcon');
const mailError = document.getElementById('mailError');

const phoneNum = document.getElementById('phoneNum');
const numberIcon = document.getElementById('numberIcon');
const phoneError = document.getElementById('phoneError');


const message = document.getElementById('textarea');
const messageIcon = document.getElementById('messageIcon');
const msgError = document.getElementById('msgError');

const nameRegex = /^[a-z ,.'-]+$/;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const phoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
const msgRegex = /^[a-z ,.'-]+$/;

const sumbit = document.getElementById('sumbit');
const dlBtn = document.getElementById('dlBtn');

feedbackBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        sendFeedabck.style.display = 'block';
    },110.5);
    xmark.style.border = 'none';
    document.body.style.overflowY = 'hidden';
});

xmark.addEventListener('click' , (e)=> {
    e.preventDefault();
    setTimeout(() => {
        sendFeedabck.style.display = 'none';
    },110.5);
    xmark.style.border = '20px double gray';
    xmark.style.padding = '5px';
    document.body.style.overflowY = 'auto';
})


sumbit.addEventListener('click' , (e) =>{
    e.preventDefault();
    sumbit.style.marginBottom = '10px';
    message.style.height = '150px';

    const resultOfName = nameRegex.test(fullName.value)
    const resultOfMail = emailRegex.test(mail.value);
    const resultOfNumber = phoneRegex.test(phoneNum.value);
    const resultOfMessage = msgRegex.test(message.value);

    resultOfName == true ? nameError.innerHTML = '' : nameError.innerHTML = 'A name is required.';
    resultOfMail == true ? mailError.innerHTML = '' : mailError.innerHTML = 'An email is required.';
    resultOfNumber == true ? phoneError.innerHTML = '' : phoneError.innerHTML = 'A phone number is required.';
    resultOfMessage == true ? msgError.innerHTML = '' : msgError.innerHTML = 'A message is required.';

    if(resultOfName !== true){
        fullName.style.border = '1px solid red';
        nameIcon.style.display = 'block';

    }else {
        fullName.style.border = '1px solid rgba(128, 128, 128, 0.472)'
        nameIcon.style.display = 'none';
    }

    if(resultOfMail !== true){
        mail.style.border = '1px solid red';
        mailIcon.style.display = 'block';
    } else {
        mail.style.border = '1px solid rgba(128, 128, 128, 0.472)';
        mailIcon.style.display = 'none';
    }

    if(resultOfNumber !== true){
        phoneNum.style.border = '1px solid red';
        numberIcon.style.display = 'block';
    }else {
        phoneNum.style.border = '1px solid rgba(128, 128, 128, 0.472)';
        numberIcon.style.display = 'none';
    }

    if(resultOfMessage !== true){
        message.style.border = '1px solid red';
        messageIcon.style.display = 'block';
    }else {
        message.style.border = '1px solid rgba(128, 128, 128, 0.472)';
        messageIcon.style.display = 'none';
    }

});

dlBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    alert("it's just an example")
})

if(resultOfName == true , resultOfMail == true , resultOfNumber == true , resultOfMessage == true){
    sumbit.addEventListener('mouseover', function() {
        sumbit.style.cursor = 'pointer';
    });

    sumbit.addEventListener('mouseout' , function(){
        sumbit.style.cursor = 'default';
    })
}