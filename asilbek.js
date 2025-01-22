
const menuIcon = document.querySelector(`#menu-icon`);
const navLinks = document.querySelector(`.nav-links`);

menuIcon.onclick = () => {
    navLinks.classList.toggle(`active`);
}

const languageData = {
    uz: {
        hi: "Salom, men",
        name: "Asilbek Sodiqov",
        profession: "Frontend Dasturchi",
        downloadLogo: "Logo yuklab olish",
        follow: "Kuzatish",
        error: "Siz allaqachon kuzatgansiz!",
        chooseLanguage: "Tilni tanlang:",
        nav:{
            about: "Asosiy",
            experience: "Tajriba",
            projects: "Loyiha",
            contact: "Aloqa"
        },
        visitGithub: "GitHubga tashrif buyuring"
    },
    en: {
        hi: "Hi, I'm",
        name: "Asilbek Sodiqov",
        profession: "Frontend Developer",
        downloadLogo: "Download Logo",
        follow: "Follow",
        error: "You have already followed!",
        chooseLanguage: "Choose Language:",
        nav:{
            about: "Home",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        visitGithub: "Visit GitHub"
    },
    ru: {
        hi: "Привет, я",
        name: "Asilbek Sodiqov",
        profession: "Разработчик Интерфейса",
        downloadLogo: "Скачать логотип",
        follow: "Подписка",
        error: "Вы уже подписались!",
        chooseLanguage: "Выберите язык:",
        nav:{
            about: "Дом",
            experience: "Oпыт",
            projects: "Проекты",
            contact: "Контакт"
        },
        visitGithub: "Посетите GitHub"
    }
};

let currentLanguage = 'uz';

function changeLanguage() {
    const language = document.getElementById('language').value;

    document.querySelector('.text h3').innerText = languageData[language].hi;
    document.querySelector('.text h1').innerText = languageData[language].name;
    document.querySelector('.text span').innerText = languageData[language].profession;
    document.querySelector('.btn').innerText = languageData[language].downloadLogo;

    document.querySelector('a[href="#about"]').innerText = languageData[language].nav.about;
    document.querySelector('a[href="#experience"]').innerText = languageData[language].nav.experience;
    document.querySelector('a[href="#projects"]').innerText = languageData[language].nav.projects;
    document.querySelector('a[href="#contact"]').innerText = languageData[language].nav.contact;

    document.querySelector('.visit-btn').innerText = languageData[language].visitGithub;

    document.getElementById('follow-btn').innerText = languageData[language].follow;
    document.getElementById('error-msg').innerText = languageData[language].error;
    document.querySelector('label[for="language"]').innerText = languageData[language].chooseLanguage;
}
