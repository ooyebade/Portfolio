import chefBoogs from '../assets/images/Chef-Boogs.png';
import bethelInnovations from '../assets/images/bethel-logo.jpg';
import kadiHairGallery from '../assets/images/kadis.png';
import nowThrive from '../assets/images/NOWThrive-Logo.png';
import trayMaya from '../assets/images/Traymaya_logo-transparent-1.png';
import abof from '../assets/images/Abof-logo-1.jpg';

export const greetings = {
    name: "Elizabeth Oyebade",
    professionals: "Front-End Developer & WordPress Designer",
    copyright: "Designed and Developed by Elizabeth Oyebade",
    copyrightyear: "2026",
    linkedin: "https://www.linkedin.com/in/oyebadeoe/",
    github: "https://github.com/ooyebade",
    resumePdf:
        "https://www.dropbox.com/scl/fi/jqxtyj9na4m7p4nxitwz2/Oyindamola_Oyebade_Resume.pdf?rlkey=pu4479wye1uoj2eyz8b0to2wo&st=0snftbfh&dl=0"
};

export const aboutSection = {
    abouttitle: "ABOUT ME",
    aboutname: "I'm Elizabeth",
    aboutrole: "Front-End Developer & Designer",
    description:
        "I am a Front-End Developer and Designer passionate about creating engaging, responsive, and user-friendly digital experiences.",
    description2:
        "My journey into web development and design began during high school when I challenged myself to build a simple to-do list application. Through hands-on practice and countless tutorials, I developed a strong foundation in HTML and CSS. Since then, I have continued expanding my skills by designing and developing responsive websites and web applications from the ground up. I work with technologies and tools including HTML, CSS, JavaScript, React, Bootstrap, WordPress, Elementor, Figma, and VS Code.",
    description3:
        "I am always eager to learn new technologies, improve my skills, and stay current with the latest trends in web development and design. Explore my portfolio to see some of my recent work, and feel free to reach out if you'd like to work together!"
};

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "WordPress",
    "Elementor",
    "jQuery",
    "JSON",
    "NodeJS",
    "PHP",
    "Bootstrap",
];

export const projectsData = [
    {
        id: 1,
        projectName: "Chef Boogs",
        projectDesc:
            "A custom food ordering website designed to showcase the chef, menu offerings, and online ordering experience.",
        tags: ["WordPress", "Elementor"],
        //demo: "https://chef-boogs.com/",
        image: chefBoogs,
        status: "Currently Under Construction"
    },

    {
        id: 2,
        projectName: "Bethel Innovations",
        projectDesc:
            "A professional consulting company website designed to present the company's services, brand, and business information in a clean and modern layout.",
        tags: [
            "ReactJS",
            "Bootstrap",
            "HTML",
            "CSS",
            "React Components"
        ],
        demo: "https://bethelinnovations.com/",
        image: bethelInnovations
    },

    {
        id: 3,
        projectName: "Kadi's Hair Gallery",
        projectDesc:
           "A modern salon website designed to showcase hair services, styles, and the brand's overall aesthetic.",
        tags: ["ReactJS", "HTML", "CSS"],
        demo: "https://blessedbykadi.com/",
        image: kadiHairGallery
    },

    {
        id: 4,
        projectName: "NowThrive Mental Health & Wellness",
        projectDesc:
            "A professional mental health and wellness website designed to provide visitors with information about services and create an approachable online experience.",
        tags: ["ReactJS", "HTML", "CSS"],
        demo: "https://nowthrivementalhealth.com/",
        image: nowThrive
    },

    {
        id: 5,
        projectName: "Traymaya Health Services",
        projectDesc:
            "Designed and developed a responsive healthcare website for Traymaya Health Services, featuring a modern interface, service-focused pages, telehealth information, and convenient patient appointment functionality.",
        tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "Responsive Design"],
        //demo: "https://traymayahealthservices.com/",
        image: trayMaya,
        status: 'In Progress'
    }, 

     {
        id: 6,
        projectName: "ABOF Brand",
        projectDesc:
            "Designed and developed a modern e-commerce website for ABÔF Brand, showcasing African-inspired jewelry, apparel, and cultural accessories through a visually engaging and user-friendly shopping experience.",
        tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "WooCommerce"],
        demo: "https://abofbrand.com/",
        image: abof,
    }
];

export const contactData = {
    contactHeading: "Let's Work Together",

    contactPara:
        "Have a project, website, or design idea in mind? I'd love to hear about it.",
    contactBox: [
        {
            header: "email",
            className: "fas fa-envelope",
            name: "Email",
            url: "eowebdesigns@gmail.com"
        }
    ]
};
