const allProjects = document.getElementById('allProject');
const scrollDownBtn = document.querySelector('.scrollDownBtn');
const lightModeBtn = document.getElementById('lightMode');
const darkModeBtn = document.getElementById('darkMode');
const showBtnDiv = document.querySelector('.showBtnDiv');
const showAllBtn = document.getElementById('showAll');

const navMenuDiv = document.querySelector('.navMenuDiv');
const myLogo = document.querySelector('.myLogo');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');


navToggle.addEventListener('click', function () {
    navMenuDiv.classList.remove('hideAndSeek');
    navToggle.classList.add('hideAndSeek');
    myLogo.classList.add('hideAndSeek');
});

navClose.addEventListener('click', function () {
    navMenuDiv.classList.add('hideAndSeek');
    navToggle.classList.remove('hideAndSeek');
    myLogo.classList.remove('hideAndSeek');
});


scrollDownBtn.addEventListener('click', function () {
    window.scrollTo(0, document.querySelector("body").scrollHeight);
});


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
let i = 0;

let bodyWidth = '';

function m() {
    bodyWidth = document.querySelector('body').clientWidth;
    getProjects().then(data => {
        showProjects(data);
    });
}

setInterval(m, 100);

showAllBtn.addEventListener('click', function () {
    showBtnDiv.style.display = 'none';
    state = 'more';
    getProjects().then(data => {
        showProjects(data);
    });
});



function showProjects(project) {
    if (bodyWidth < 741 && state == 'less') {
        for (; i < 5; i++) {
            projectCreation(project[i]);
        }
    }
    else if (bodyWidth > 740 && state == 'less') {
        for (; i < 9; i++) {
            projectCreation(project[i]);
        }
    }
    else if (state == 'more') {
        for (; i < project.length; i++) {
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