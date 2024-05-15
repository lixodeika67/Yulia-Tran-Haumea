//creating a folder
const footer = document.createElement("footer");

//get the body element
const body = document.body;

//Append the footer toooo the body
body.appendChild(footer);

//date
const today = new Date();

//year
const thisYear = today.getFullYear();

//footer from DOM
const footer2 = document.querySelector('footer');

//copyright
const copyright = document.createElement('p');
//name and year
copyright.innerHTML = "Yulia Tran&copy;"+thisYear;
//append the copy to the footer

footer.appendChild(copyright);

//skills
const skills =["JavaScript","HTML","CSS","GitHub","SEO","Content Marketing"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i=0; i < skills.length; i++){
    const skill = document.createElement('li');

skill.innerText = skills[i];
skillsList.appendChild(skill);
}
//message forms
const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);

    ////

 const messageSection = document.getElementById('messages');
 const messageList = messageSection.querySelector('ul');
 const newMessage = document.createElement('li');

 newMessage.innerHTML = `
     <a href="mailto:${usersEmail}">${usersName}</a>: 
     <span>${usersMessage}</span>`;

 const removeButton = document.createElement('button');

 removeButton.innerText = 'remove';
 removeButton.type = 'button';


 removeButton.addEventListener('click', function() {

     const entry = removeButton.parentNode;
     entry.remove();
 });


 newMessage.appendChild(removeButton);
 messageList.appendChild(newMessage);

    ////

     event.target.reset();

});