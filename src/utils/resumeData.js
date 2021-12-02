import { GitHub, LinkedIn, Map } from "@mui/icons-material";

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
            image: ['https://raw.githubusercontent.com/Adnan0061/portfolio-full-stack/main/src/assests/images/projects/helmetrix/1.png', 'https://github.com/Adnan0061/portfolio-full-stack/blob/main/src/assests/images/projects/helmetrix/2.png?raw=true'],
            title: 'Hrlmetrix  (full stack)',
            caption: '',
            shortdesc: [
                "A niche helmet selling site that has a dashboard", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
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
                {link: 'https://helmetrix.netlify.app/', text: 'Live Site',},
                {link: 'https://github.com/Adnan0061/Helmetrix-client-side', text: 'Client Side',},
                {link: 'https://github.com/Adnan0061/Helmetrix-client-side', text: 'Server Side',},
            ]
        },
        {
            tag: 'Full Stack (MERN)',
            image: ['https://raw.githubusercontent.com/Adnan0061/portfolio-full-stack/main/src/assests/images/projects/Happy%20Tours/1.png', 'https://raw.githubusercontent.com/Adnan0061/portfolio-full-stack/main/src/assests/images/projects/Happy%20Tours/2.png'],
            title: 'Happy Tours',
            caption: 'Tour package site',
            shortdesc: [
                "A niche helmet selling site that has a dashboard. Admin and user has different options", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
            ],
            githubdesc: [
                'This projects frontend is created with React and Bootstrap',
                'Backend is created with Node and express with MongoDb as database. Also used firebase for authentication',
                'Here 6 ready made tours are but you can add more tours and that will be added in the home page',
                'From tour details page you can book your tour with default status pending and from my order you will get your bookings',
                'in manage all order page you will see all orders. you can delete orders as well as update orders. from update orders you can update status also.',
            ],
            links: [
                {link: 'https://tour-site-mern.netlify.app/', text: 'Live Site',},
                {link: 'https://github.com/Adnan0061/tour-site-mern-frontend', text: 'Client Side',},
                {link: 'https://github.com/Adnan0061/tour-site-server-new', text: 'Server Side',},
            ]
        },
        {
            tag: 'React',
            image: ['https://raw.githubusercontent.com/Adnan0061/portfolio-full-stack/main/src/assests/images/projects/eHospital/1.png', 'https://raw.githubusercontent.com/Adnan0061/portfolio-full-stack/main/src/assests/images/projects/eHospital/2.png'],
            title: 'eHealth',
            caption: 'online healthcare site',
            shortdesc: [
                "A online healthcare website where people can book appointment to doctor for both online and physical", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
            ],
            githubdesc: [
                'A healthcare website that merges doctors ans patients.',
                'Patient and doctors can have their session both online and offline',
                'It also has medicine home delivery option',
                '24/7 support',
                'Insurance option for under privileged# eHealth',
            ],
            links: [
                {link: 'https://ehealth-online-healthcare.netlify.app/', text: 'Live Site',},
                {link: 'https://github.com/Adnan0061/eHealth', text: 'Client Side',},
                
            ]
        },
    ]
}