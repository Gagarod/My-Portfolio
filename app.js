const allProjects = document.getElementById('allProject');
const navIcon = document.querySelectorAll('.navLink i');
const scrollDownBtn = document.querySelector('.scrollDownBtn');
const lightModeBtn = document.getElementById('lightMode');
const darkModeBtn = document.getElementById('darkMode');
const showBtnDiv = document.querySelector('.showBtnDiv');
const showAllBtn = document.getElementById('showAll');

scrollDownBtn.addEventListener('click', function () {
    window.scrollTo(0, document.querySelector("body").scrollHeight);
});

for (let i = 0; i < navIcon.length; i++) {
    navIcon[i].style.display = 'none';
}

// fetch project start
function getProjects() {
    return fetch("project.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

var state = "less";
let projectsHTML = "";

showAllBtn.addEventListener('click', function () {
    showBtnDiv.style.display = 'none';
    state = 'more';
});

function showProjects(project) {
    if (state == 'less') {
        for (let i = 0; i < 9; i++) {
            projectCreation(project[i]);
        }
    }
    else if (state == 'more') {
        for (let i = 0; i < project.length; i++) {
            projectCreation(project[i]);
        }
    }
}

function projectCreation(project) {
    projectsHTML += `
        <div class="card" >
                <img class="projectImg" src="${project.image}" alt="">
                    <div class="titleAndIconDiv">
                    <h3 class="projectTitle">${project.name}</h3>
                        <div class="projectIcons">
                        <a class="projectLinks" href="${project.links.code}" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        <a class="projectLinks" href="${project.links.view}" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fas fa-eye"></i>
                            </a>
                        </div>
                    </div>
              </div>`
    allProjects.innerHTML = projectsHTML;
}


getProjects().then(data => {
    showProjects(data);
});

lightModeBtn.addEventListener('click', function () {
    lightModeBtn.style.display = 'none';
    darkModeBtn.style.display = 'block';
    document.body.classList.add('dark-theme');
});

darkModeBtn.addEventListener('click', function () {
    darkModeBtn.style.display = 'none';
    lightModeBtn.style.display = 'block';
    document.body.classList.remove('dark-theme');
});