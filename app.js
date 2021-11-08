window.addEventListener('load', animeBlobGenerator);
const allProjects = document.getElementById('allProject');
const sections = document.querySelectorAll('section[id]');
const scrollDownBtn = document.querySelector('.scrollDownBtn');
const lightModeBtn = document.getElementById('lightMode');
const darkModeBtn = document.getElementById('darkMode');
const showBtnDiv = document.querySelector('.showBtnDiv');
const showAllBtn = document.getElementById('showAll');


const navMenuDiv = document.querySelector('.navMenuDiv');
const myLogo = document.querySelector('.myLogo');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');


const clientName = document.getElementById('clientName');
const clientMail = document.getElementById('clientMail');
const clientMsg = document.getElementById('clientMsg');

function sendMail(params) {
    var tempParams = {
        to_name: "Neelesh singh",
        from_name: clientName.value,
        message: clientMsg.value,
        reply_to: clientMail.value,
    };

    clientName.value = "";
    clientMail.value = "";
    clientMsg.value = "";

    emailjs.send('gmail', 'template_o6ge12b', tempParams)
        .then(function (res) {
            console.log("sucess", res.status);
            alert("Your message sent successfully");
        });
}

function blank() {
    clientName.value = "";
    clientMail.value = "";
    clientMsg.value = "";
    console.log("hello")
}



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
        <div data-aos="fade-up" data-aos-delay="${i*150}" class="card" >
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


window.addEventListener('scroll', scrollActive);
// window.addEventListener('scroll', animeImgDiv);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navMenuDiv a[href*=' + sectionId + ']').classList.add('active-link');
            // if (document.querySelector('.navMenuDiv a[href *= about ]' )) {
            //     myImgDiv.style.animation = "1.5s loading"
            //     myImgDiv.style.opacity = "1"
            // }

        } else {
            document.querySelector('.navMenuDiv a[href*=' + sectionId + ']').classList.remove('active-link');
        }

    });
}

const blobGenerator = document.querySelector('.blobGenerator');
const myImgDiv = document.querySelector('.myImgDiv');

function animeBlobGenerator() {
    blobGenerator.style.animation = "1s ease-in loading"
    blobGenerator.style.opacity = "1"
}

function animeImgDiv() {
   
    if (document.querySelector('.navMenuDiv a[href *= about ]' && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight )) {
        myImgDiv.style.animation = "1.5s loading"
        myImgDiv.style.opacity = "1"
    }

}
