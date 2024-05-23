// Function to create and append footer
function createFooter() {
    const footer = document.createElement("footer");
    const body = document.body;
    body.appendChild(footer);
    return footer;
}

// Function to add copyright to footer
function addCopyright(footer) {
    const today = new Date();
    const thisYear = today.getFullYear();
    const copyright = document.createElement('p');
    copyright.innerHTML = "Yulia Tran&copy;" + thisYear;
    footer.appendChild(copyright);
}

// Function to add skills to the skills section
function addSkills() {
    const skills = ["JavaScript", "HTML", "CSS", "GitHub", "SEO", "Content Marketing"];
    const skillsSection = document.getElementById('skills');
    const skillsList = skillsSection.querySelector('ul');
    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
    }
}

// Function to handle message form submission
function handleMessageFormSubmission(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>: 
        <span>${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function () {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
}

// Function to fetch GitHub repositories
function fetchGitHubRepositories() {
    const requestUrl = 'https://api.github.com/users/lixodeika67/repos';
    fetch(requestUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Check Username' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const repositories = data;
            const projectSection = document.getElementById('projects');
            const projectList = projectSection.querySelector('ul');

            for (let i = 0; i < repositories.length; i++) {
                const project = document.createElement('li');
                project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
                projectList.appendChild(project);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Main function to initialize the page
function initializePage() {
    const footer = createFooter();
    addCopyright(footer);
    addSkills();
    const messageForm = document.forms.leave_message;
    messageForm.addEventListener('submit', handleMessageFormSubmission);
    fetchGitHubRepositories();
}

// Call the initializePage function 
document.addEventListener('DOMContentLoaded', initializePage);
