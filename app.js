const allProjects = document.getElementById('allProject');
const navIcon = document.querySelectorAll('.navLink i');

for (let i = 0; i < navIcon.length; i++) {
    navIcon[i].style.display = 'none';
}

// fetch project start
function getProjects() {
    return fetch("project.json")
        .then(response => response.json())
        .then(data => {
            return data
        })
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