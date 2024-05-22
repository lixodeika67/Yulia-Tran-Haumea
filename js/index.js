//creating a foooter
const footer = document.createElement("footer");

//get the body element
const body = document.body;

//Append the footer to the body
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

//// Skills section
const skills =["JavaScript","HTML","CSS","GitHub","SEO","Content Marketing"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i=0; i < skills.length; i++){
    const skill = document.createElement('li');

skill.innerText = skills[i];
skillsList.appendChild(skill);
}
// Handle the message form submission
const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

  // Get the messages section and list element within it
 const messageSection = document.getElementById('messages');
 const messageList = messageSection.querySelector('ul');

  // Create a new message list item
 const newMessage = document.createElement('li');
 newMessage.innerHTML = `
     <a href="mailto:${usersEmail}">${usersName}</a>: 
     <span>${usersMessage}</span>`;

// Create a remove button
 const removeButton = document.createElement('button');
 removeButton.innerText = 'remove';
 removeButton.type = 'button';

// Add event listener to the remove button to remove the message
 removeButton.addEventListener('click', function() {
     const entry = removeButton.parentNode;
     entry.remove();
 });

 // Append the remove button to the new message and the message to the list
 newMessage.appendChild(removeButton);
 messageList.appendChild(newMessage);

    // Reset the form fields
     event.target.reset();

});
// Fetch GitHub repositories
const requestUrl = 'https://api.github.com/users/lixodeika67/repos'; 
fetch(requestUrl)
    .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Check Username'+ response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const repositories = data;

         // Get the projects section and the list element within it
         const projectSection = document.getElementById('projects');
         const projectList = projectSection.querySelector('ul');

     // Loop through the repositories and create list items for each project
         for (let i = 0; i < repositories.length; i++) {
             const project = document.createElement('li');
             // Make the repository name a clickable link
             project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
             projectList.appendChild(project);
         }
     })
     .catch(error => {
         console.error('Error:', error);
     });