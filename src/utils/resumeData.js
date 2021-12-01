import { GitHub, LinkedIn } from "@mui/icons-material";

export default {
    name: 'Adnan Ahmed',
    title: 'full stack developer',
    email: 'adnan.ahmed0061@gmail.com',

    socials: {
        github: {
            link: 'https://github.com/Adnan0061',
            text: 'Adnan0061',
            icon: <GitHub />
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/adnan-ahmed-679074164/',
            text: 'Adnan Ahmed',
            icon: <LinkedIn />
        }
    },

    about: "I'm a full stack developer. I can develop full stack web projects with MERN stack. I have developed some projects you can find bellow. Now I want to work with a team grow as a developer. Work on big projecrs are my next goal",

    skills: [
        {
            title: 'Stack skills',
            description: [
                'React.js',
                'Node Js',
                'Express',
                'Mongo DB',
                'REST API',]
        },
        {
            title: 'Front-End Library',
            description: [
                'Bootstrap5',
                'React - Bootstrap',
                'TailWind',
                'Material UI',]
        },
        {
            title: 'Hosting Tools',
            description: [
                'GitHub',
                'Firebase',
                'Netlify',
                'Heroku',
            ]
        },
        {
            title: 'Other',
            description: [
                'React Router Dom',
                'Chrome Dev tool',
                'Firebase authentication',
                'React Hook Form',
                'Stripe payment Gateway',]
        },
    ],

    resumeProjects: [
        {
            title: 'Hrlmetrix  (full stack)',
            duration: 'November 2021',
            company: 'Personal Projecr',
            info: [
                "A niche helmet selling site that has a dashboard", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ], 
        },
        {
            title: 'Happy Tours (full stack - Tour Package Booking Site)',
            duration: 'November 2021',
            company: 'Personal Projecr',
            info: [
                "A niche helmet selling site that has a dashboard.", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ], 
        },
        {
            title: 'Color Guessing Game (raw JavaScribe project)',
            duration: 'october 2021',
            company: 'Personal Projecr',
            info: [
                "It's a game created with simple raw HTML, CSS, JavaScript", 
                "The game is, with every refresh a color RGB code is generated randomly and a few color box is generated randomly.",
                "You have to choose the right color and UI changes",
            ], 
        },
    ],


    education: [
        {
            title: 'Full stack web development',
            duration: 'jusy 2021 - November 2021',
            company: 'Programing Hero',
            info: [
                "A niche helmet selling site that has a dashboard", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ], 
        },
        {
            title: 'Web application development',
            duration: 'July 2019 - November 2019',
            company: 'BITM',
            info: [
                "A niche helmet selling site that has a dashboard.", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ], 
        },
        {
            title: 'Web Design',
            duration: 'April 2019 - June 2019',
            company: 'CodersTrust',
            info: [
                "It's a game created with simple raw HTML, CSS, JavaScript", 
                "The game is, with every refresh a color RGB code is generated randomly and a few color box is generated randomly.",
                "You have to choose the right color and UI changes",
            ], 
        },
        {
            title: 'M.Sc',
            duration: '2016 - June 2016',
            company: 'Jahangirnagar University',
            info: [
                "It's a game created with simple raw HTML, CSS, JavaScript", 
                "The game is, with every refresh a color RGB code is generated randomly and a few color box is generated randomly.",
                "You have to choose the right color and UI changes",
            ], 
        },
        {
            title: 'B.Sc',
            duration: '2011 - June 2016',
            company: 'Jahangirnagar University',
            info: [
                "It's a game created with simple raw HTML, CSS, JavaScript", 
                "The game is, with every refresh a color RGB code is generated randomly and a few color box is generated randomly.",
                "You have to choose the right color and UI changes",
            ], 
        },
    ],



    projects: [
        {
            tag: 'Full Stack (MERN)',
            image: 'https://raw.githubusercontent.com/Adnan0061/portfolio-full-stack/main/src/assests/images/projects/helmetrix/screencapture-helmetrix-netlify-app-2021-12-02-00_45_43.png',
            title: 'Hrlmetrix  (full stack)',
            shortdesc: [
                "A niche helmet selling site that has a dashboard", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ],
            githubdesc: [
                'It has some private routes which needs login to access',
                'You have Login to view product details and order',
                'This site has a dashboard which also has different feature for admin and non admin',
                'In dashboard non-admin can see all his orders and delete, post a review',
                'Admin has extra option to see all the orders and delete or update them',
                'An Admin can also make another admin',
                'An Admin can add new products',
                'A demo admin is created with email: admin@admin.com, pass:123456',
            ],
            links: [
                {link: '', icon: ''},
                {link: '', icon: ''},
                {link: '', icon: ''},
            ]
        },
        {
            tag: 'Full Stack (MERN)',
            image: '../assests/images/projects/helmetrix/screencapture-helmetrix-netlify-app-2021-12-02-00_45_43.png',
            title: 'project 3',
            desc: 'desc 3',
            links: [
                {link: '', icon: ''},
                {link: '', icon: ''},
                {link: '', icon: ''},
            ]
        },
        {
            tag: 'Full Stack (MERN)',
            image: '',
            title: 'project 4',
            desc: 'desc 4',
            links: [
                {link: '', icon: ''},
                {link: '', icon: ''},
                {link: '', icon: ''},
            ]
        },
        {
            tag: 'Valila Js',
            image: '',
            title: 'project 5',
            desc: 'desc 5',
            links: [
                {link: '', icon: ''},
                {link: '', icon: ''},
                {link: '', icon: ''},
            ]
        },
    ]
}