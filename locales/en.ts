export const eng = {
    navItems: [
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" }
    ],

    HeroItems: [
        {
            firstText: "Hi there! Let's Build Together!",
            secondText: "I'm Talel Galai",
            thirdText: "I’m a passionate Software Engineering Student based in Tunisia, and I love creating impactful digital experiences.",
            firstButtonText: "Grab my resume",
            secondButtonText: "Check out my work",
        },
    ],
    
    gridItems: [
        {
            id: 1,
            title: "About Me",
            description: "I am a passionate web developer with experience in building scalable web applications using modern technologies like React.js, Next.js, and Node.js.  I love working on both front-end and back-end projects, continuously improving my skills and keeping up with the latest trends in the tech industry. In my free time, I enjoy learning new frameworks and contributing to open-source projects.",
            className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
            imgClassName: "w-full h-full",
            titleClassName: "justify-end",
            img: "/b1.svg",
            spareImg: ""
        },
        {
            id: 2,
            title: "I'm very flexible with time zone communications",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-2",
            imgClassName: "",
            titleClassName: "justify-start",
            img: "",
            spareImg: ""
        },
        {
            id: 3,
            title: "My tech stack",
            description: "I constantly try to improve",
            className: "lg:col-span-2 md:col-span-3 md:row-span-2",
            imgClassName: "",
            titleClassName: "justify-center",
            img: "",
            spareImg: ""
        },
        {
            id: 4,
            title: "Tech enthusiast with a passion for development.",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-1",
            imgClassName: "",
            titleClassName: "justify-start",
            img: "/grid.svg",
            spareImg: "/b4.svg"
        },
        {
            id: 5,
            title: "Developing a reservations system SaaS",
            description: "The Inside Scoop",
            className: "md:col-span-3 md:row-span-2",
            imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
            titleClassName: "justify-center md:justify-start lg:justify-center",
            img: "/b5.svg",
            spareImg: "/grid.svg"
        },
        {
            id: 6,
            title: "Do you want to start a project together?",
            description: "",
            className: "lg:col-span-2 md:col-span-3 md:row-span-1",
            imgClassName: "",
            titleClassName: "justify-center md:max-w-full max-w-60 text-center",
            img: "",
            spareImg: ""
        }
    ],

    WorkExperienceData: [
        {
            title: "MdWeb",
            date: "June 2024",
            position: "Intern",
            logo: "/mdweb.png",
            cards: [
                {
                    id: 1,
                    contentTitle: "First Experience with AI",
                    contentParagraph: "My first experience working on an artificial intelligence project marked a turning point in my career. It was an exciting adventure where I discovered the infinite possibilities that AI can offer to solve complex problems.",
                    className: "md:col-span-2",
                    thumbnail: "/ai.jpg"
                },
                {
                    id: 2,
                    contentTitle: "Interaction with International Clients",
                    contentParagraph: "Working with international companies allowed me to understand cultural nuances and specific requirements, thus enriching my professional experience and communication skills.",
                    className: "col-span-1",
                    thumbnail: "/international.jpg"
                },
                {
                    id: 3,
                    contentTitle: "Development and Deployment with DevOps",
                    contentParagraph: "I integrated DevOps practices to ensure a smooth development lifecycle, allowing for quick and efficient updates and deployments throughout the project.",
                    className: "col-span-1",
                    thumbnail: "/devops.jpg"
                },
                {
                    id: 4,
                    contentTitle: "Improving Chatbot Response Time",
                    contentParagraph: "The significant 63% improvement I achieved in the chatbot's response time reflects my commitment to optimizing performance and providing a smooth user experience.",
                    className: "md:col-span-2",
                    thumbnail: "/63.png"
                }
            ],
            contents: [
                { text: "• I developed a chatbot using the OpenAI assistant, with a response broadcasting feature via WebSocket, based on an uploaded knowledge base." },
                { text: "• I implemented text-to-speech and voice input features to enable more natural interaction with the chatbot, integrating speech synthesis and recognition APIs." },
                { text: "• I enhanced the chatbot's dashboard by implementing an authentication system and optimizing the interface for a better user experience." },
                { text: "• I used Markdown to format the chatbot's responses, allowing for well-structured replies with elements like lists, headings, and clickable links for better readability." },
                { text: "• I containerized the project using Docker, allowing deployment on any machine, and I checked mobile compatibility by testing with Ngrok." }
            ],
        },
        {
            title: "Freelance",
            date: "Winter 2023",
            position: "Freelancer",
            logo: "/home.jpg",
            cards: [
              {
                id: 1,
                contentTitle: "Deadline Management",
                contentParagraph: "Dealing with tight deadlines has been a constant challenge, but it has allowed me to develop time management skills and prioritize tasks to deliver projects on time.",
                className: "md:col-span-2",
                thumbnail: "/deadline.jpg",
              },
              {
                id: 2,
                contentTitle: "Financial Management",
                contentParagraph: "Effective management of my project's finances has been crucial. I learned to create a budget, track expenses, and maximize resources to ensure project profitability.",
                className: "col-span-1",
                thumbnail: "/money.jpg",
              },
              {
                id: 3,
                contentTitle: "Real Projects",
                contentParagraph: "Working on real projects allowed me to interact directly with clients and understand their needs, enriching my experience and teaching me to adapt my solutions.",
                className: "col-span-1",
                thumbnail: "/real-world.jpg",
              },
              {
                id: 4,
                contentTitle: "Time Management",
                contentParagraph: "Balancing projects and my studies required rigorous time management. I learned to plan and organize my tasks to achieve my academic and professional goals.",
                className: "md:col-span-2",
                thumbnail: "/time.jpg",
              },
            ],
            contents: [
              { text: "• I led the development of a showcase website for Fares Confection, a textile company, by creating an attractive and intuitive user interface that highlights the company's products and services." },
              { text: "• I integrated advanced features on the site, including a product management system and a contact form, thereby facilitating interaction with potential customers. I implemented text-to-speech and voice input features to allow more natural interaction with the chatbot by integrating speech synthesis and recognition APIs." },
              { text: "• I closely collaborated with the client to define their needs and expectations, ensuring that the final product met their requirements while adhering to deadlines." },
              { text: "• I established a robust database to manage registrations and payments, thereby ensuring the security and integrity of user data." },
              { text: "• I ensured the deployment and ongoing maintenance of both projects, providing technical support and performing regular updates to improve performance and security." },
            ],
          },
          {
            title: "MdWeb",
            date: "July 2023",
            position: "Intern",
            logo: "/mdweb.png",
            cards: [
              {
                id: 1,
                contentTitle: "Collaboration with Experienced Developers",
                contentParagraph: "Working alongside experienced developers allowed me to acquire valuable skills in collaboration and communication, thus enriching my approach to development.",
                className: "md:col-span-2",
                thumbnail: "/collab.jpg",
              },
              {
                id: 2,
                contentTitle: "Reading Documentation",
                contentParagraph: "My ability to read and understand Appsmith documentation has been essential for developing applications quickly and efficiently, demonstrating my commitment to learning new technologies.",
                className: "col-span-1",
                thumbnail: "/documentation.jpg",
              },
              {
                id: 3,
                contentTitle: "My First Day at Work",
                contentParagraph: "My first day at work was a memorable moment, where I felt a mix of excitement and slight stress, but it marked the beginning of an enriching adventure in application development.",
                className: "col-span-1",
                thumbnail: "/firstday.JPG",
              },
              {
                id: 4,
                contentTitle: "Working in a Team in an Office",
                contentParagraph: "The experience of working in an office with other professionals strengthened my sense of teamwork and allowed me to exchange ideas and solutions in a dynamic environment.",
                className: "md:col-span-2",
                thumbnail: "/office.jpg",
              },
            ],
            contents: [
              { text: "• I developed a dynamic online questionnaire with multiple scenarios and a flexible database using JavaScript and Appsmith." },
              { text: "• I created an interactive dashboard to centralize online survey data, integrating clear visualizations and real-time updates of statistics." },
              { text: "• I explored and read the documentation of the Appsmith tool for creating web and mobile applications, highlighting the speed of development and the flexibility of the platform." },
              { text: "• I collaborated with experienced developers to gain knowledge and skills in teamwork and effective communication." },
            ],
          },
          {
            title: "National Development Center of the Tunisian Post",
            date: "June 2023",
            position: "Intern",
            logo: "/laposte.png",
            cards: [
              {
                id: 1,
                contentTitle: "Management of Large Databases",
                contentParagraph: "Working on large databases allowed me to develop data management skills, ensuring efficient storage and retrieval for a performance notification system.",
                className: "md:col-span-2",
                thumbnail: "/large-dataset.png",
              },
              {
                id: 2,
                contentTitle: "My First Work Experience",
                contentParagraph: "This experience marked the beginning of my professional career, where I was able to apply my development skills in a real and dynamic environment.",
                className: "col-span-1",
                thumbnail: "/1st.jpg",
              },
              {
                id: 3,
                contentTitle: "Ability to Work Remotely",
                contentParagraph: "I developed my remote work skills, allowing me to collaborate effectively with the team while maintaining a balance between work and personal life.",
                className: "col-span-1",
                thumbnail: "/remote.png",
              },
              {
                id: 4,
                contentTitle: "Communication Technologies",
                contentParagraph: "I used modern technologies such as sending alerts via email and SMS to ensure effective communication with clients, thus enhancing the system's responsiveness.",
                className: "md:col-span-2",
                thumbnail: "/email-sms.jpg",
              },
            ],
            contents: [
              { text: "• I had the opportunity to deepen my knowledge in development while participating in creating a notification system capable of sending alerts via email and SMS to clients using Django, a high-end Python web framework." },
              { text: "• I designed a RESTful API with Django REST Framework, facilitating data exchange with other applications." },
              { text: "• I managed the system's databases with PostgreSQL, ensuring efficient storage and retrieval of information." },
            ],
          },
    ],

    projects: [
        {
            id: 1,
            title: "Event Booking System",
            des: "Experience the JCI Metline's Event with this website, featuring a reservation system, and an admin dashboard.",
            img: "/assises.jpg",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
            link: "https://assises-du-printemps-zone-b-2k24.tn"
        },
        {
            id: 2,
            title: "Company showcase Website",
            des: "Discover Fares Confection's website, A market leader in the textile fabrications",
            img: "/fares.jpg",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
            link: "https://faresconfection.com"
        }
    ],

    testimonials: [
        {
            quote: "I've thought that perfect websites don't exist till I visited that Talel has created for our entity 'JCI', I really appreciate such talented and hard worker member. Everyone who had just visited the website was fascinated and we received a lot of positive feedback!",
            name: "Yasmeen Najar",
            title: "JCI Metline President 2024",
            img: "/test2.jfif"
        },
        {
            quote: "Talel is a talented, organized, methodical, and self-reliant individual. As his direct supervisor during his internship, I had the pleasure of observing and appreciating his skills and commitment. His qualities are rare and valuable, and they stand out, especially in a context where these traits are not always common among the younger generation.",
            name: "Hamdi Mrabet",
            title: "Information Systems Manager @ MDWEB",
            img: "/test3.jfif"
        },
        {
            quote: "I highly recommend Talel Galai for his exceptional skills in software and web development. Having worked with him on various projects, he consistently demonstrates professionalism, a strong grasp of development principles, and attention to detail. Talel is also an excellent communicator and team player, with a great ability to adapt to new technologies. He would be a valuable asset to any organization.",
            name: "Anis Tarhouni Trabelsi",
            title: "Computer Science Student @ ISIMA",
            img: "/test1.jfif"
        }
    ],

    footerItems: [
        {
            heading: "Ready to take your digital presence to the next level?",
            description: "Reach out to me today and let's discuss how I can help you achieve your goals.",
            copyright: "Copyright © 2024 Talel Galai"
        }
    ],

    approachItems : [
        {
            firstphaseTitle :"Planning & Strategy",
            firstphaseDescription : "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
            secondphaseTitle :"Development & Progress Update",
            secondphaseDescription : "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to ploished code, I keep you updated every step of the way.",
            thirdphaseTitle :"Development & Launch",
            thirdphaseDescription : "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
        }
    ],

    socialMedia: [
        {
            id: 1,
            img: "/git.svg",
            link: "https://github.com/TalelCS"
        },
        {
            id: 2,
            img: "/twit.svg",
            link: "https://x.com/talel_galai"
        },
        {
            id: 3,
            img: "/link.svg",
            link: "https://www.linkedin.com/in/talel-galai"
        }
    ]
};
