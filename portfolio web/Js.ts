// script.js
<script>
// JavaScript
const translations = {
    en: {
menuPresentation: "Presentation",
menuExperience: "Experience",
menuProjects: "Projects",
presentationTitle: "HI! I AM <span class='highlight_orange'>ADRIÁN RODRÍGUEZ</span> <br> SYSTEMS AND NETWORKS ADMINISTRATOR",
experienceH2: "<span class='highlight_orange'>1 year in IT positions but much more than that</span>",
experienceText: 'Around<span class="highlight_orange"> a year of experience</span> working in IT positions, some of them were small companies with dinamic roles demanding me more than only the IT part. The positions were:',
job1: "<span class='highlight_orange'>Web Technician in EnvíoMédical</span> (7 months).",
job1Description: "-Worked as a FullStack Developer combined with other tasks.",
job2: "<span class='highlight_orange'>Support Technician in Inelcom</span> (3 months).",
job2Description: "-Support Technician working with Cisco Packet Tracer.",
job3: "<span class='highlight_orange'>Database Developer in NovaMetal</span> (3 months).",
job3Description: "-I helped create a database about the suppliers, clients, and workers for NovaMetal, a metallurgy business.",
experienceText2: "Additionally, I would like to count the experience that my <span class='highlight_orange'>IT training as a Systems and Network Administrator Technician</span> gave me, as well as all the time dedicated to self-learning. That way, <span class='highlight_orange'>it's more than just one year</span>!.<br>If you want to know more about my work experience, download my resumé here:",
downloadButton: "Resumé",
projectsTitle:'<span class="highlight_orange">My Projects</span>',
soonMessage: "<span class='highlight_orange'>Soon...</span> I am working on it.",
soonDescription: 'For the moment you can <span class="highlight_orange">take a look to my portfolio</span> that is one of my projects too. Feel free to <span class="highlight_orange">explore the files in my GitHub repository</span>!',
},
es: {
menuPresentation: "Presentación",
menuExperience: "Experiencia",
menuProjects: "Proyectos",
presentationTitle: "¡Hola! Soy <span class='highlight_orange'>ADRIÁN RODRÍGUEZ</span> Administrador<br> de Sistemas informáticos y redes",
experienceH2: "<span class='highlight_orange'>1 año en posiciones de Informático pero mucho más que eso</span>",
experienceText: "Cerca de <span class='highlight_orange'>un año de experiencia</span> trabajando en algunas pequeñas empresas con roles dinámicos que requerían más que solo tareas de Informática. Las posiciones fueron:",
job1: "<span class='highlight_orange'>Técnico Web en EnvíoMédical</span> (7 meses).",
job1Description: "-Trabajé como desarrollador FullStack combinado con otras tareas de administración y marketing.",
job2: "<span class='highlight_orange'>Técnico de Soporte en Inelcom</span> (3 meses).",
job2Description: "-Técnico de soporte trabajando con Cisco Packet Tracer.",
job3: "<span class='highlight_orange'>Desarrollador de Base de Datos en NovaMetal</span> (3 meses).",
job3Description: "-Ayudé a crear una base de datos sobre los proveedores, clientes y trabajadores en NovaMetal, una empresa de metalurgia.",
experienceText2: "Además, me gustaría contar la experiencia que mi <span class='highlight_orange'>formación como Técnico en Administración de Sistemas informáticos y redes</span> me brindó, así como todo el tiempo dedicado al autoaprendizaje. De esta forma puedo decir que,<br> ¡<span class='highlight_orange'>es más que solo un año</span>!.<br>Si deseas saber más sobre mi experiencia laboral, descarga mi currículum aquí:",
downloadButton: "Currículum",
projectsTitle: '<span class="highlight_orange">Mis proyectos</span>',
soonMessage: "<span class='highlight_orange'>Pronto tendre cosas que mostrar...</span> el trabajo no para.",
soonDescription: "Por ahora, puedes <span class='highlight_orange'>revisar mi portafolio web</span>, que es uno de mis proyectos también. Te invito a <span class='highlight_orange'>explorar los archivos en mi repositorio de GitHub</span>.",
},
};


const langEn = document.getElementById("lang-en");
const langEs = document.getElementById("lang-es");

// Función para cambiar el idioma
function switchLanguage(lang) {
    const content = translations[lang];

    document.getElementById("menu_presentation").textContent = content.menuPresentation;
    document.getElementById("menu_experience").textContent = content.menuExperience;
    document.getElementById("menu_projects").textContent = content.menuProjects;

    document.getElementById("presentation_title").innerHTML = content.presentationTitle;
    //document.getElementById("presentation_text").innerHTML = content.presentationText;
    document.getElementById("experience_h2").innerHTML = content.experienceH2;
    document.getElementById("experience_text").innerHTML = content.experienceText;
    document.getElementById("job1").innerHTML = content.job1;
    document.getElementById("job1_description").innerHTML = content.job1Description;
    document.getElementById("job2").innerHTML = content.job2;
    document.getElementById("job2_description").innerHTML = content.job2Description;
    document.getElementById("job3").innerHTML = content.job3;
    document.getElementById("job3_description").innerHTML = content.job3Description;
    document.getElementById("experience_text2").innerHTML = content.experienceText2;
    document.getElementById("download_button").innerHTML = content.downloadButton;
    document.getElementById("projects_title").innerHTML = content.projectsTitle;
    document.getElementById("Soon_message").innerHTML = content.soonMessage;
    document.getElementById("Soon_description").innerHTML = content.soonDescription;
    //document.getElementById("project2_title").innerHTML = content.project2Title;
    //document.getElementById("project2_description").innerHTML = content.project2Description;

    // Actualizar estado visual del idioma activo
    if (lang === "en") {
        langEn.classList.add("active");
        langEs.classList.remove("active");
    } else {
        langEs.classList.add("active");
        langEn.classList.remove("active");
    }
}

// Listeners para cambiar el idioma
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-es").addEventListener("click", () => switchLanguage("es"));

//Menu laterel
const menuItems = document.querySelectorAll("nav a");
const indicator = document.querySelector(".indicator");
const sections = document.querySelectorAll("section");

let currentSectionIndex = 0;

const updateActiveSection = (index) => {

    // Actualizar el estado del menú
    menuItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });

    // Mover el indicador
    const targetMenuItem = menuItems[index];
    indicator.style.transform = `translateY(${targetMenuItem.offsetTop}px)`;

    // Desplazar la sección al centro de la vista
    sections[index].scrollIntoView({ behavior: "smooth" });

    // Actualizar índice actual
    currentSectionIndex = index;
};

//El selector del menú se mueve con el scroll
const handleScroll = () => {
    let closestSectionIndex = -1;
    let minDistance = Infinity;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distanceToTop = Math.abs(rect.top);

        if (distanceToTop < minDistance) {
            minDistance = distanceToTop;
            closestSectionIndex = index;
        }
    });

    if (closestSectionIndex !== currentSectionIndex) {
        menuItems.forEach((item, i) => {
            item.classList.toggle("active", i === closestSectionIndex);
        });

        const targetMenuItem = menuItems[closestSectionIndex];
        indicator.style.transform = `translateY(${targetMenuItem.offsetTop}px)`;

        currentSectionIndex = closestSectionIndex;
    }
};


window.addEventListener("scroll", handleScroll);

// Navegación mediante clic
menuItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        updateActiveSection(index);
    });
});

// Inicializar sección activa
updateActiveSection(0);

//Funcion para la animacion de la seccion Projects
let projectsLoaded = false;

function showLoadingAnimation() {
const loadingAnimation = document.getElementById("loading-animation");
const projectsContent = document.getElementById("projects-content");
const loadingFill = document.querySelector('.loading-fill');
const loadingPercent = document.querySelector('.loading-percent');
const loadingText = document.querySelector('.loading-text');
const loadingBar = document.querySelector('.loading-bar');
const errorMessage = document.querySelector('.error-message');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
//const line3 = document.getElementById('line3');
const errorText1 = "Error 404";
const errorText2 = "Page not Found";
//const errorText3 = "Soon I will upload some projects here, but right now you are watching one of them, so I invite you to enter to my GitHub repository and take a look to the files of my portfolio!";

loadingAnimation.style.display = "block";
projectsContent.style.display = "none";
errorMessage.style.display = "none";

let percent = 0;
let charIndex = 0;

function updateLoader() {
    percent += 1;
    loadingFill.style.width = percent + '%';
    loadingPercent.textContent = percent + '%';

    if (percent < 99.5) {
        setTimeout(updateLoader, 30);
    } else {
        loadingPercent.textContent = "99.5%";
        loadingText.style.display = "none";
        loadingBar.style.display = "none";
        loadingPercent.style.display = "none";
        errorMessage.style.display = "block";
        typeText(line1, errorText1, () => {
            typeText(line2, errorText2, () => {
                //typeText(line3, errorText3, () => {
                    // Mostrar contenido después de la animación
                    //loadingAnimation.style.display = "none";
                    projectsContent.style.display = "block";
                //});
            });
        });
    }
}

function typeText(element, text, callback) {
    charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(typeChar, 100);
        } else if (callback) {
            callback();
        }
    }

    typeChar();
}

updateLoader();
}

// Detectar cuando se visualiza la sección `projects`
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !projectsLoaded) {
            projectsLoaded = true;
            showLoadingAnimation();
        }
    });
},
{
    root: null, // Viewport del navegador
    rootMargin: "0px", // Sin margen adicional
    threshold: 0.5, // El 50% de la sección debe estar visible
}
);

observer.observe(document.getElementById("projects"));
</script>