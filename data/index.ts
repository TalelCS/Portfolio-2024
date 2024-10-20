export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

export const HeroItems = [
    { firstText : "Hi there! Let' Build Together!",
      secondText : "I'm Talel Galai",
      thirdText : "I’m a passionate Software Engineering Student based in Tunisia, and I love creating impactful digital experiences.",
      firstButtonText : "Grab my resume",
      secondButtonText : "Check out my work",
    },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Developing a reservations system SaaS",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const WorkExperienceData = [
      {
        title: "MdWeb",
        date: "June 2024",
        position: "Stagiaire",
        logo: "/mdweb.png",
        cards: [
          {
            id: 1,
            contentTitle: "Première expérience avec l&apos;IA",
            contentParagraph: "Ma première expérience de travail sur un projet d&apos;intelligence artificielle a marqué un tournant dans ma carrière. Ce fut une aventure passionnante où j&apos;ai découvert les possibilités infinies que l&apos;IA peut offrir pour résoudre des problèmes complexes.",
            className: "md:col-span-2",
            thumbnail:
              "/ai.jpg",
          },
          {
            id: 2,
            contentTitle: "Interaction avec des clients internationaux",
            contentParagraph: "Travailler avec des entreprises internationales m&apos;a permis de comprendre les nuances culturelles et les exigences spécifiques, enrichissant ainsi mon expérience professionnelle et mes compétences en communication.",
            className: "col-span-1",
            thumbnail:
              "/international.jpg",
          },
          {
            id: 3,
            contentTitle: "Développement et déploiement avec DevOps",
            contentParagraph:"J&apos;ai intégré des pratiques DevOps pour assurer un cycle de vie de développement fluide, permettant ainsi des mises à jour et des déploiements rapides et efficaces tout au long du projet.",
            className: "col-span-1",
            thumbnail:
              "/devops.jpg",
          },
          {
            id: 4,
            contentTitle: "Amélioration de la réponse du chatbot",
            contentParagraph:"L&apos;amélioration significative de 63 % que j&apos;ai réalisée dans le temps de réponse du chatbot témoigne de mon engagement à optimiser les performances et à offrir une expérience utilisateur fluide.",
            className: "md:col-span-2",
            thumbnail:
              "/63.png",
          },
        ],
        contents: [
            {text : "• J&apos;ai développé un chatbot utilisant l&apos;assistant OpenAI, avec une fonctionnalité de diffusion des réponses via WebSocket, basé sur une base de connaissances téléchargée."},
            {text : "• J&apos;ai implémenté des fonctionnalités de lecture en haute voix et de saisie vocale pour permettre une interaction plus naturelle avec le chatbot, en intégrant des API de synthèse vocale et de reconnaissance vocale."},
            {text : "• J&apos;ai amélioré le tableau de bord du chatbot en mettant en place un système d&apos;authentification et en optimisant l&apos;interface pour offrir une meilleure expérience utilisateur."},
            {text : "• J&apos;ai utilisé Markdown pour formater les réponses du chatbot, ce qui a permis d&apos;offrir des réponses bien structurées, avec des éléments tels que des listes, des titres et des liens cliquables pour une meilleure lisibilité."},
            {text : "• J&apos;ai conteneurisé le projet en utilisant Docker, permettant le déploiement sur n&apos;importe quelle machine, et j&apos;ai vérifié la compatibilité mobile en effectuant des tests avec Ngrok."},
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
            contentTitle: "Gestion des délais",
            contentParagraph: "Faire face aux délais serrés a été un défi constant, mais cela m&apos;a permis de développer des compétences en gestion du temps et de prioriser les tâches pour livrer les projets dans les délais impartis.",
            className: "md:col-span-2",
            thumbnail:
              "/deadline.jpg",
          },
          {
            id: 2,
            contentTitle: "Gestion financière",
            contentParagraph: "La gestion efficace des finances de mes projets a été cruciale. J&apos;ai appris à établir un budget, à suivre les dépenses et à maximiser les ressources pour assurer la rentabilité des projets.",
            className: "col-span-1",
            thumbnail:
              "/money.jpg",
          },
          {
            id: 3,
            contentTitle: "Projets réels",
            contentParagraph:"Travailler sur des projets réels m&apos;a permis d&apos;interagir directement avec des clients et de comprendre leurs besoins, ce qui a enrichi mon expérience et m&apos;a appris à adapter mes solutions.",
            className: "col-span-1",
            thumbnail:
              "/real-world.jpg",
          },
          {
            id: 4,
            contentTitle: "Gestion du temps",
            contentParagraph:"L&apos;équilibre entre les projets et mes études a nécessité une gestion du temps rigoureuse. J&apos;ai appris à planifier et à organiser mes tâches pour atteindre mes objectifs académiques et professionnels.",
            className: "md:col-span-2",
            thumbnail:
              "/time.jpg",
          },
        ],
        contents: [
            {text : "• J&apos;ai dirigé le développement d&apos;un site vitrine pour Fares Confection, une entreprise textile, en créant une interface utilisateur attrayante et intuitive qui met en valeur les produits et services de l&apos;entreprise."},
            {text : "• J&apos;ai intégré des fonctionnalités avancées sur le site, y compris un système de gestion des produits et un formulaire de contact, facilitant ainsi l&apos;interaction avec les clients potentiels.• J&apos;ai implémenté des fonctionnalités de lecture en haute voix et de saisie vocale pour permettre une interaction plus naturelle avec le chatbot, en intégrant des API de synthèse vocale et de reconnaissance vocale."},
            {text : "• J&apos;ai collaboré étroitement avec le client pour définir ses besoins et attentes, en veillant à ce que le produit final réponde à ses exigences tout en respectant les délais impartis."},
            {text : "• J&apos;ai mis en place une base de données robuste pour gérer les inscriptions et les paiements, garantissant ainsi la sécurité et l&apos;intégrité des données des utilisateurs."},
            {text : "• J&apos;ai assuré le déploiement et la maintenance continue des deux projets, en fournissant un support technique et en effectuant des mises à jour régulières pour améliorer les performances et la sécurité."},
        ],
      },
      {
        title: "MdWeb",
        date: "July 2023",
        position: "Stagiaire",
        logo: "/mdweb.png",
        cards: [
          {
            id: 1,
            contentTitle: "Collaboration avec des développeurs expérimentés",
            contentParagraph: "Travailler aux côtés de développeurs expérimentés m&apos;a permis d&apos;acquérir des compétences précieuses en matière de collaboration et de communication, enrichissant ainsi mon approche du développement.",
            className: "md:col-span-2",
            thumbnail:
              "/collab.jpg",
          },
          {
            id: 2,
            contentTitle: "Lecture de documentation",
            contentParagraph: "Ma capacité à lire et à comprendre la documentation d&apos;Appsmith a été essentielle pour développer des applications rapidement et efficacement, démontrant mon engagement à apprendre de nouvelles technologies.",
            className: "col-span-1",
            thumbnail:
              "/documentation.jpg",
          },
          {
            id: 3,
            contentTitle: "Mon premier jour au travail",
            contentParagraph:"Mon premier jour au travail a été un moment mémorable, où j&apos;ai ressenti une excitation mêlée à un léger stress, mais cela a été le début d&apos;une aventure enrichissante dans le développement d&apos;applications.Travailler sur des projets réels m&apos;a permis d&apos;interagir directement avec des clients et de comprendre leurs besoins, ce qui a enrichi mon expérience et m&apos;a appris à adapter mes solutions.",
            className: "col-span-1",
            thumbnail:
              "/firstday.JPG",
          },
          {
            id: 4,
            contentTitle: "Travailler en équipe dans un bureau",
            contentParagraph:"L&apos;expérience de travailler dans un bureau avec d&apos;autres professionnels a renforcé mon sens du travail d&apos;équipe et m&apos;a permis d&apos;échanger des idées et des solutions dans un environnement dynamique.",
            className: "md:col-span-2",
            thumbnail:
              "/office.jpg",
          },
        ],
        contents: [
            {text : "• J&apos;ai développé un questionnaire en ligne dynamique avec des scénarios multiples et une base de données flexible, utilisant JavaScript et Appsmith."},
            {text : "• J&apos;ai créé un tableau de bord interactif pour centraliser les données des enquêtes en ligne, intégrant des visualisations claires et une mise à jour en temps réel des statistiques."},
            {text : "• J&apos;ai exploré et lu la documentation de l&apos;outil Appsmith pour la création d&apos;applications web et mobiles, en mettant en avant la rapidité de développement et la flexibilité de la plateforme."},
            {text : "• J&apos;ai collaboré avec des développeurs expérimentés pour acquérir des connaissances et des compétences en matière de travail d&apos;équipe et de communication efficace."},
        ],
      },
      {
        title: "Centre De Développement National de La Poste Tunisienne",
        date: "June 2023",
        position: "Stagiaire",
        logo: "/laposte.png",
        cards: [
          {
            id: 1,
            contentTitle: "Gestion de grandes bases de données",
            contentParagraph: "Travailler sur des bases de données volumineuses m&apos;a permis de développer des compétences en gestion des données, garantissant un stockage et une récupération efficaces pour un système de notifications performant.",
            className: "md:col-span-2",
            thumbnail:
              "/large-dataset.png",
          },
          {
            id: 2,
            contentTitle: "Ma première expérience de travail",
            contentParagraph: "Cette expérience a marqué le début de ma carrière professionnelle, où j&apos;ai pu mettre en pratique mes compétences en développement dans un environnement réel et dynamique.",
            className: "col-span-1",
            thumbnail:
              "/1st.jpg",
          },
          {
            id: 3,
            contentTitle: "Capacité à travailler à distance",
            contentParagraph:"J&apos;ai développé mes compétences en télétravail, me permettant de collaborer efficacement avec l&apos;équipe tout en maintenant un équilibre entre la vie professionnelle et personnelle.",
            className: "col-span-1",
            thumbnail:
              "/remote.png",
          },
          {
            id: 4,
            contentTitle: "Technologies de communication",
            contentParagraph:"J&apos;ai utilisé des technologies modernes telles que l&apos;envoi d&apos;alertes par e-mail et SMS pour garantir une communication efficace avec les clients, renforçant ainsi la réactivité du système.",
            className: "md:col-span-2",
            thumbnail:
              "/email-sms.jpg",
          },
        ],
        contents: [
            {text : "• J&apos;ai eu l&apos;opportunité d&apos;approfondir mes connaissances en développement tout en participant à la création d&apos;un système de notifications capable d&apos;envoyer des alertes par e-mail et SMS aux clients en utilisant Django, un framework web Python haut de gamme."},
            {text : "• J&apos;ai fait la conception d&apos;une API RESTful avec Django REST Framework, facilitant l&apos;échange de données avec d&apos;autres applications."},
            {text : "• J&apos;ai géré des bases de données du système avec PostgreSQL, garantissant un stockage et une récupération des informations efficaces."},
        ],
      },
  ]
  
  export const projects = [
    {
      id: 1,
      title: "Event Booking System",
      des: "Experience the JCI Metline's Event with this website, featuring a reservation system, and an admin dashboard.",
      img: "/assises.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://assises-du-printemps-zone-b-2k24.tn",
    },
    {
      id: 2,
      title: "Company showcase Website",
      des: "Discover Fares Confection's website, A market leader in the textile fabrications",
      img: "/fares.PNG",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://faresconfection.com",
    }
  ];
  
  export const testimonials = [
    {
      quote:
        "I've thought that perfect websites don't exist till I visited that Talel has created for our entity 'JCI', I really appreciate such talented and hard worker member. Everyone who had just visited the website was fascinated and we received a lot of positive feedback !",
      name: "Yasmeen Najar",
      title: "JCI Metline President 2024",
      img: "/test2.jfif",
    },
    {
      quote:
        "Talel is a talented, organized, methodical, and self-reliant individual. As his direct supervisor during his internship, I had the pleasure of observing and appreciating his skills and commitment. His qualities are rare and valuable, and they stand out, especially in a context where these traits are not always common among the younger generation.",
      name: "Hamdi Mrabet",
      title: "Information Systems Manager @ MDWEB",
      img: "/test3.jfif",
    },
    {
      quote:
        "I highly recommend Talel Galai for his exceptional skills in software and web development. Having worked with him on various projects, he consistently demonstrates professionalism, a strong grasp of development principles, and attention to detail. Talel is also an excellent communicator and team player, with a great ability to adapt to new technologies. He would be a valuable asset to any organization.",
      name: "Anis Tarhouni Trabelsi",
      title: "Computer Science Student @ ISIMA",
      img: "/test1.jfif",
    },
  ];

  export const footerItems = [
    {heading: "Ready to take your digital presence to the next level?",
    description: "Reach out to me today and let's discuss how I can help you achieve your goals.",
    copyright: "Copyright © 2024 Talel Galai",},
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/TalelCS",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/talel_galai",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/talel-galai",
    },
  ];