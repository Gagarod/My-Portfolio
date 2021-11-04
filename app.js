const allProjects = document.getElementById('allProject');
const navIcon = document.querySelectorAll('.navLink i');
const scrollDownBtn = document.querySelector('.scrollDownBtn');
const lightModeBtn = document.getElementById('lightMode');
const darkModeBtn = document.getElementById('darkMode');


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


function showProjects(project) {
    let projectsHTML = "";
    project.forEach(projects => {
        projectsHTML += `
        <div class="card" >
                <img class="projectImg" src="${projects.image}" alt="">
                    <div class="titleAndIconDiv">
                    <h3 class="projectTitle">${projects.name}</h3>
                        <div class="projectIcons">
                        <a class="projectLinks" href="${projects.links.code}" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        <a class="projectLinks" href="${projects.links.view}" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fas fa-eye"></i>
                            </a>
                        </div>
                    </div>
              </div>`
        allProjects.innerHTML = projectsHTML;

    });


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