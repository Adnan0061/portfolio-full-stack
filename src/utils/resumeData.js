import { GitHub, Language, LinkedIn } from "@mui/icons-material";


const resumeData = {
    name: 'Adnan Ahmed',
    title: 'Full Stack Developer',
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
                'React-Bootstrap',
                'TailWind',
                'Material UI',]
        },
        {
            title: 'Hosting & Version Control Tools',
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
            company: 'Personal Project',
            info: [
                "A niche helmet selling site that has a dashboard", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ], 
        },
        {
            title: 'Happy Tours (full stack - Tour Package Booking Site)',
            duration: 'November 2021',
            company: 'Personal Project',
            info: [
                "A niche helmet selling site that has a dashboard.", 
                "Admin and user has different options access on dashboard",
                "Can place manage order, review, and user in the from the dashboard",
            ], 
        },
        {
            title: 'Color Guessing Game (raw JavaScribe project)',
            duration: 'october 2021',
            company: 'Personal Project',
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
            image: ['https://i.ibb.co/w0tBPzZ/1.png','https://i.ibb.co/jVWNNCW/2.png'],
            title: 'Hrlmetrix  (full stack)',
            caption: '',
            shortdesc: [
                "A niche helmet selling site that has a dashboard", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
            ],
            longdesc: [
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
                {link: 'https://helmetrix.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},
                {link: 'https://github.com/Adnan0061/Helmetrix-client-side', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },
                {link: 'https://github.com/Adnan0061/Helmetrix-server-side', text: 'Server Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },
            ]
        },
        {
            tag: 'Full Stack (MERN)',
            image: ['https://i.ibb.co/qyLF5tD/1.png','https://i.ibb.co/J5dnHwX/2.png'],
            title: 'Happy Tours',
            caption: 'Tour package site',
            shortdesc: [
                "A tour package service provider site. Book your tour package online", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
            ],
            longdesc: [
                'This projects frontend is created with React and Bootstrap',
                'Backend is created with Node and express with MongoDb as database. Also used firebase for authentication',
                'Here 6 ready made tours are but you can add more tours and that will be added in the home page',
                'From tour details page you can book your tour with default status pending and from my order you will get your bookings',
                'in "manage all order" page you will see all orders. you can delete orders as well as update orders.',
            ],
            links: [
                {link: 'https://tour-site-mern.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />, },
                {link: 'https://github.com/Adnan0061/tour-site-mern-frontend', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />,},
                {link: 'https://github.com/Adnan0061/tour-site-server-new', text: 'Server Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />,},
            ]
        },
        {
            tag: 'React',
            image: ['https://i.ibb.co/XWsQYQx/1.png','https://i.ibb.co/GcNzfr1/2.png',],
            title: 'eHealth',
            caption: 'online healthcare site',
            shortdesc: [
                "A online healthcare website where people can book appointment to doctor for both online and physical", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
            ],
            longdesc: [
                'A healthcare website that merges doctors ans patients.',
                'Patient and doctors can have their session both online and offline',
                'It also has medicine home delivery option',
                'Insurance option for under privileged# eHealth',
            ],
            links: [
                {link: 'https://ehealth-online-healthcare.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},
                {link: 'https://github.com/Adnan0061/eHealth', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },
                
            ]
        },
        {
            tag: 'React',
            image: ['https://i.ibb.co/g9pV2RC/1.png','https://i.ibb.co/f902Cbx/2.png',],
            title: 'Future Leaders',
            caption: 'online courses site',
            shortdesc: [
                "A online site. React based site", 
                // "Admin and user has different options access on dashboard",
                // "Can place manage order, review, and user in the from the dashboard",
            ],
            longdesc: [
                'A Online course completing site.',
                'Has search option',
                'Used react bootstrap',
                'react hook form',
                'firebase authentication',
            ],
            links: [
                {link: 'https://online-course-site-assignment-9.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},
                {link: 'https://github.com/Adnan0061/future-leaders-react', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },
                
            ]
        },
        {
            tag: 'Vanila Js',
            image: ['https://i.ibb.co/4WTVtRY/1.png', 'https://i.ibb.co/4WTVtRY/1.png'],
            title: 'Color Guessing Game',
            caption: 'A fun game guessing color developed with raw Js',
            shortdesc: [
                "A simple fun game guessing color developed with raw Js", 
            ],
            longdesc: [
                'A simple fun game guessing color developed with raw Js',
                'Every time generates new color',
                'It uses  random number to generate RGB code and color',
            ],
            links: [
                {link: 'https://adnan0061.github.io/Color-game-project/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},
                {link: 'https://github.com/Adnan0061/Color-game-project', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },               
            ]
        },
        {
            tag: 'Vanila Js',
            image: ['https://i.ibb.co/c8NqzQz/1.png','https://i.ibb.co/7NR9Yyw/2.png'],
            title: 'Authors to cart',
            caption: 'A simple website to add authors to cart list',
            shortdesc: [
                "simple website to add authors to cart list", 
            ],
            longdesc: [
                'you will know top-selling authors details',
                'you can choose from them to add to your reading list',
                'your choosen authors and their combine total books will be displayed',
                'currently no API is used, a custom JSON is used.',
            ],
            links: [
                {link: 'https://top-selling-authors-to-read.netlify.app', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},  
                {link: 'https://github.com/Adnan0061/top-authors', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },             
            ]
        },
        {
            tag: 'Vanila Js',
            image: ['https://i.ibb.co/Pzkyt72/Document.png', 'https://i.ibb.co/Pzkyt72/Document.png'],
            title: 'Country Details',
            caption: '',
            shortdesc: [
                "Simple Api project of rest countries api", 
            ],
            longdesc: [
                'A simple fun game guessing color developed with raw Js',
                'A API practice project',
                'Rest Countries API used',
            ],
            links: [
                {link: 'https://adnan0061.github.io/Country-details-with-API/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},     
                {link: 'https://github.com/Adnan0061/Country-details-with-API', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },          
            ]
        },
        {
            tag: 'Vanila Js',
            image: ['https://i.ibb.co/tPyFnNT/1.png', 'https://i.ibb.co/tPyFnNT/1.png'],
            title: 'Mak purchase page',
            caption: 'A parchase page with raw javascript ',
            shortdesc: [
                "A parchase page with raw javascript", 
            ],
            longdesc: [
                'A parchase page with raw javascript with all the functions',
            ],
            links: [
                {link: 'https://mak-purchase.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},    
                {link: 'https://github.com/Adnan0061/mak-purchase-page', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },           
            ]
        },
        {
            tag: 'Vanila Js',
            image: ['https://i.ibb.co/W3rkTYw/Books.png', 'https://i.ibb.co/W3rkTYw/Books.png'],
            title: 'Search book',
            caption: 'A API search page',
            shortdesc: [
                "A API search page", 
            ],
            longdesc: [
                'A API search page',
            ],
            links: [
                {link: 'https://book-search-api-assignment.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},    
                {link: 'https://github.com/Adnan0061/book-search', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },           
            ]
        },
        {
            tag: 'Vanila Js',
            image: ['https://i.ibb.co/jD5vYWc/1.png','https://i.ibb.co/f18TpVN/2.png'],
            title: 'popstick Store',
            caption: 'A API search store page',
            shortdesc: [
                "A API search store page", 
            ],
            longdesc: [
                'A API search store page',
            ],
            links: [
                {link: 'https://popstick-store.netlify.app/', text: 'Live Site', icon: <Language sx={{fontSize: '1rem', pt: '0px'}} />,},    
                {link: 'https://github.com/Adnan0061/popstick-store', text: 'Client Side', icon: <GitHub sx={{fontSize: '1rem', pt: '0px'}} />, },           
            ]
        },
    ]
}

export default resumeData;