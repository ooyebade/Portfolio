import chefBoogs from '../assets/images/Chef-Boogs.png'
import bethelInnovations from '../assets/images/bethel-logo.jpg'
// import { FaMapMarker, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
//import chefBoogs from '../assets/images/svg/chefBoogs.svg'

export const greetings = {
    name: "Elizabeth Oyebade",
    professionals: "Front End/WordPress Designer",
    copyright: "Designed and Developed by Elizabeth Oyebade",
    copyrightyear: "2023",
    linkedin: "https://www.linkedin.com/in/oyebadeoe/",
    github: "https://github.com/ooyebade",
    resumePdf: "https://www.dropbox.com/s/boze08mb2w6hptf/Oyindamola%20Oyebade%20Resume.pdf?e=1&st=02aegznn&dl=0"
};

export const aboutSection = {
    abouttitle: "ABOUT ME",
    aboutname: "I'm Elizabeth",
    aboutrole: "Front End Developer/Designer",
    description: "I am Front End Designer based in Virginia, I am deeply passionate about creating engaging online experiences.",
    description2: "My journey in web development and design began during my high school years, where I challenged myself to build a mini to-do list page. Through watching numerous tutorial videos, I successfully crafted the page and gained a solid foundation in web development and design (HTML & CSS). Since then, I have been dedicated to designing and developing responsive websites and web applications from scratch. In my projects, I leverage various technologies, tools, and languages such as HTML, CSS, JavaScript, REACT JS, Bootstrap, Figma, and VS Code to bring my designs to life.",
    description3: "I am always eager to expand my skill set and stay up-to-date with the latest trends in web development. Browse my portfolio to see my latest creations and get in touch if you're interested in working together!"
}

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    /* 'Angular', */
    'WordPress',
    'jQuery',
    'JSON',
    'NodeJS',
    'PHP',
    'Bootstrap'
]

export const projectsData = [
    {
        id: 1,
        projectName: 'Chef Boogs',
        projectDesc: "This project is an oline food ordering website, Customer can learn more about the chef, view the menu, and place an order.", 
        tags: ['WordPress, Elementor'], 
        demo: 'https://chef-boogs.com/',
        image: chefBoogs   
    }, 

    {
        id: 2,
        projectName: 'Bethel Innovations',
        projectDesc: 'This project is about a consulting service company',
        tags: ['ReactJS', 'Bootstrap', 'HTML', 'CSS', 'React Components'],
        demo: 'http://bethelinnovations.oyebadeoe.com/',
        image: bethelInnovations
        
    }
]

export const contactData = {
    contactHeading: "GET IN TOUCH",
    contactPara: "I'd love to hear from you. Feel free to contact me!",
    mapAddress: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.284272476079!2d-77.55238152499844!3d38.75718345496673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65ded4e6002a5%3A0xf38a9cf03b991c8d!2sDawkins%20Crest%20Cir%2C%20Bristow%2C%20VA%2020136!5e0!3m2!1sen!2sus!4v1683685579980!5m2!1sen!2sus",
    contactBox: [
        {
            "header": "email",
            "className": "fas fa-envelope",
            "name": "Email",
            "url": "eoyebadeo24@gmail.com"
        },
        {
            "header": "address",
            "className": "fas fa-map-marker-alt",
            "name": "Address",
            "url": "Bristow, VA"
        },
        {
            "header": "phone",
            "className": "fas fa-phone-alt",
            "name": "Phone",
            "url": "(571) 398-8321"
        }
    ]
}