const body = document.body;

//#region Theme Toggle with Persistence
const themeButton = document.getElementById('themeButton');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeButton.textContent = '🌙'
}

themeButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        themeButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});
//#endregion

//#region Event listener for name input
const nameInput = document.getElementById('name');
const label = document.querySelector('label[for="name"]');
if (nameInput && label)
    nameInput.addEventListener('input', () => { label.textContent = `Hi ${nameInput.value}`; });
//#endregion

//#region Populate project list in projects.html
const projectList = document.getElementById('projectList');
if (projectList) {
    const projects = [
        'Project 1: Personal Website',
        'Project 2: G T | Edilizia Website',
        'Project 3: TGS Termoidraulica Website',
        'Project 4: AI Chatbot',
        'Project 5: AxiomFit App',
        'Project 6: AI Emotion Detector',
        'Project 7: Smart Desk Project'
    ];
    projectList.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project;
        li.style.marginBottom = '2vh';
        projectList.appendChild(li);
    });
}
//#endregion

//#region Show project details on click
if (projectList) {
    const projectTitle = document.getElementById('projectTitle');
    projectList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            //show project title
            const projectName = event.target.textContent;
            projectTitle.textContent = projectName.split(':')[1].trim();
            projectTitle.style.display = 'block';
            
            //hide all descriptions first
            const projectsDescriptions = document.getElementsByClassName('projectDescription');
            for (let desc of projectsDescriptions) {
                desc.style.display = 'none';
            }

            //show corresponding project description
            switch (projectName) {
                case 'Project 1: Personal Website':
                    document.getElementById('personalWebsiteDetails').style.display = 'block';
                    break;
                case 'Project 2: G T | Edilizia Website':
                    document.getElementById('gtEdiliziaDetails').style.display = 'block';
                    break;
                case 'Project 3: TGS Termoidraulica Website':
                    document.getElementById('tgsTermoidraulicaDetails').style.display = 'block';
                    break;
                case 'Project 4: AI Chatbot':
                    document.getElementById('aiChatbotDetails').style.display = 'block';
                    break;
                case 'Project 5: AxiomFit App':
                    document.getElementById('axiomFitDetails').style.display = 'block';
                    break;
                case 'Project 6: AI Emotion Detector':
                    document.getElementById('aiEmotionDetectorDetails').style.display = 'block';
                    break;
                case 'Project 7: Smart Desk Project':
                    document.getElementById('smartDeskDetails').style.display = 'block';
                    break;
            }
        }
    });
}

