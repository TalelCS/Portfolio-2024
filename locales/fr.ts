export const fr = {
 navItems: [
    { name: "À propos", link: "#about" },
    { name: "Projets", link: "#projects" },
    { name: "Témoignages", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ],

 HeroItems: [
    {
        firstText: "Salut! Construisons ensemble!",
        secondText: "Je suis Talel Galai",
        thirdText: "Je suis un étudiant passionné en génie logiciel basé en Tunisie, et j'adore créer des expériences numériques impactantes.",
        firstButtonText: "Télécharger mon CV",
        secondButtonText: "Voir mes projets",
    }
 ],

 gridItems: [
    {
      id: 1,
      title : "À propos de moi",
      description : "Je suis un développeur web passionné, avec de l'expérience dans la création d'applications web évolutives en utilisant des technologies modernes comme React.js, Next.js et Node.js. J'aime travailler sur des projets à la fois front-end et back-end, en améliorant continuellement mes compétences et en me tenant au courant des dernières tendances dans l'industrie technologique. Pendant mon temps libre, j'aime apprendre de nouveaux frameworks et contribuer à des projets open source.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Je suis très flexible avec les communications entre les fuseaux horaires",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Ma pile technologique",
      description: "J'essaie constamment de m'améliorer",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Passionné de technologie avec un engouement pour le développement.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Développement d'un système de réservation SaaS",
      description: "À la loupe",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Voulez-vous commencer un projet ensemble ?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ],

  WorkExperienceData: [
    {
      title: "MdWeb",
      date: "June 2024",
      position: "Stagiaire",
      logo: "/mdweb.png",
      cards: [
        {
          id: 1,
          contentTitle: "Première expérience avec l'IA",
          contentParagraph: "Ma première expérience de travail sur un projet d'intelligence artificielle a marqué un tournant dans ma carrière. Ce fut une aventure passionnante où j'ai découvert les possibilités infinies que l'IA peut offrir pour résoudre des problèmes complexes.",
          className: "md:col-span-2",
          thumbnail:
            "/ai.jpg",
        },
        {
          id: 2,
          contentTitle: "Interaction avec des clients internationaux",
          contentParagraph: "Travailler avec des entreprises internationales m'a permis de comprendre les nuances culturelles et les exigences spécifiques, enrichissant ainsi mon expérience professionnelle et mes compétences en communication.",
          className: "col-span-1",
          thumbnail:
            "/international.jpg",
        },
        {
          id: 3,
          contentTitle: "Développement et déploiement avec DevOps",
          contentParagraph:"J'ai intégré des pratiques DevOps pour assurer un cycle de vie de développement fluide, permettant ainsi des mises à jour et des déploiements rapides et efficaces tout au long du projet.",
          className: "col-span-1",
          thumbnail:
            "/devops.jpg",
        },
        {
          id: 4,
          contentTitle: "Amélioration de la réponse du chatbot",
          contentParagraph:"L'amélioration significative de 63 % que j'ai réalisée dans le temps de réponse du chatbot témoigne de mon engagement à optimiser les performances et à offrir une expérience utilisateur fluide.",
          className: "md:col-span-2",
          thumbnail:
            "/63.png",
        },
      ],
      contents: [
          {text : "• J'ai développé un chatbot utilisant l'assistant OpenAI, avec une fonctionnalité de diffusion des réponses via WebSocket, basé sur une base de connaissances téléchargée."},
          {text : "• J'ai implémenté des fonctionnalités de lecture en haute voix et de saisie vocale pour permettre une interaction plus naturelle avec le chatbot, en intégrant des API de synthèse vocale et de reconnaissance vocale."},
          {text : "• J'ai amélioré le tableau de bord du chatbot en mettant en place un système d'authentification et en optimisant l'interface pour offrir une meilleure expérience utilisateur."},
          {text : "• J'ai utilisé Markdown pour formater les réponses du chatbot, ce qui a permis d'offrir des réponses bien structurées, avec des éléments tels que des listes, des titres et des liens cliquables pour une meilleure lisibilité."},
          {text : "• J'ai conteneurisé le projet en utilisant Docker, permettant le déploiement sur n'importe quelle machine, et j'ai vérifié la compatibilité mobile en effectuant des tests avec Ngrok."},
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
          contentParagraph: "Faire face aux délais serrés a été un défi constant, mais cela m'a permis de développer des compétences en gestion du temps et de prioriser les tâches pour livrer les projets dans les délais impartis.",
          className: "md:col-span-2",
          thumbnail:
            "/deadline.jpg",
        },
        {
          id: 2,
          contentTitle: "Gestion financière",
          contentParagraph: "La gestion efficace des finances de mes projets a été cruciale. J'ai appris à établir un budget, à suivre les dépenses et à maximiser les ressources pour assurer la rentabilité des projets.",
          className: "col-span-1",
          thumbnail:
            "/money.jpg",
        },
        {
          id: 3,
          contentTitle: "Projets réels",
          contentParagraph:"Travailler sur des projets réels m'a permis d'interagir directement avec des clients et de comprendre leurs besoins, ce qui a enrichi mon expérience et m'a appris à adapter mes solutions.",
          className: "col-span-1",
          thumbnail:
            "/real-world.jpg",
        },
        {
          id: 4,
          contentTitle: "Gestion du temps",
          contentParagraph:"L'équilibre entre les projets et mes études a nécessité une gestion du temps rigoureuse. J'ai appris à planifier et à organiser mes tâches pour atteindre mes objectifs académiques et professionnels.",
          className: "md:col-span-2",
          thumbnail:
            "/time.jpg",
        },
      ],
      contents: [
          {text : "• J'ai dirigé le développement d'un site vitrine pour Fares Confection, une entreprise textile, en créant une interface utilisateur attrayante et intuitive qui met en valeur les produits et services de l'entreprise."},
          {text : "• J'ai intégré des fonctionnalités avancées sur le site, y compris un système de gestion des produits et un formulaire de contact, facilitant ainsi l'interaction avec les clients potentiels.• J'ai implémenté des fonctionnalités de lecture en haute voix et de saisie vocale pour permettre une interaction plus naturelle avec le chatbot, en intégrant des API de synthèse vocale et de reconnaissance vocale."},
          {text : "• J'ai collaboré étroitement avec le client pour définir ses besoins et attentes, en veillant à ce que le produit final réponde à ses exigences tout en respectant les délais impartis."},
          {text : "• J'ai mis en place une base de données robuste pour gérer les inscriptions et les paiements, garantissant ainsi la sécurité et l'intégrité des données des utilisateurs."},
          {text : "• J'ai assuré le déploiement et la maintenance continue des deux projets, en fournissant un support technique et en effectuant des mises à jour régulières pour améliorer les performances et la sécurité."},
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
          contentParagraph: "Travailler aux côtés de développeurs expérimentés m'a permis d'acquérir des compétences précieuses en matière de collaboration et de communication, enrichissant ainsi mon approche du développement.",
          className: "md:col-span-2",
          thumbnail:
            "/collab.jpg",
        },
        {
          id: 2,
          contentTitle: "Lecture de documentation",
          contentParagraph: "Ma capacité à lire et à comprendre la documentation d'Appsmith a été essentielle pour développer des applications rapidement et efficacement, démontrant mon engagement à apprendre de nouvelles technologies.",
          className: "col-span-1",
          thumbnail:
            "/documentation.jpg",
        },
        {
          id: 3,
          contentTitle: "Mon premier jour au travail",
          contentParagraph:"Mon premier jour au travail a été un moment mémorable, où j'ai ressenti une excitation mêlée à un léger stress, mais cela a été le début d'une aventure enrichissante dans le développement d'applications.",
          className: "col-span-1",
          thumbnail:
            "/firstday.JPG",
        },
        {
          id: 4,
          contentTitle: "Travailler en équipe dans un bureau",
          contentParagraph:"L'expérience de travailler dans un bureau avec d'autres professionnels a renforcé mon sens du travail d'équipe et m'a permis d'échanger des idées et des solutions dans un environnement dynamique.",
          className: "md:col-span-2",
          thumbnail:
            "/office.jpg",
        },
      ],
      contents: [
          {text : "• J'ai développé un questionnaire en ligne dynamique avec des scénarios multiples et une base de données flexible, utilisant JavaScript et Appsmith."},
          {text : "• J'ai créé un tableau de bord interactif pour centraliser les données des enquêtes en ligne, intégrant des visualisations claires et une mise à jour en temps réel des statistiques."},
          {text : "• J'ai exploré et lu la documentation de l'outil Appsmith pour la création d'applications web et mobiles, en mettant en avant la rapidité de développement et la flexibilité de la plateforme."},
          {text : "• J'ai collaboré avec des développeurs expérimentés pour acquérir des connaissances et des compétences en matière de travail d'équipe et de communication efficace."},
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
          contentParagraph: "Travailler sur des bases de données volumineuses m'a permis de développer des compétences en gestion des données, garantissant un stockage et une récupération efficaces pour un système de notifications performant.",
          className: "md:col-span-2",
          thumbnail:
            "/large-dataset.png",
        },
        {
          id: 2,
          contentTitle: "Ma première expérience de travail",
          contentParagraph: "Cette expérience a marqué le début de ma carrière professionnelle, où j'ai pu mettre en pratique mes compétences en développement dans un environnement réel et dynamique.",
          className: "col-span-1",
          thumbnail:
            "/1st.jpg",
        },
        {
          id: 3,
          contentTitle: "Capacité à travailler à distance",
          contentParagraph:"J'ai développé mes compétences en télétravail, me permettant de collaborer efficacement avec l'équipe tout en maintenant un équilibre entre la vie professionnelle et personnelle.",
          className: "col-span-1",
          thumbnail:
            "/remote.png",
        },
        {
          id: 4,
          contentTitle: "Technologies de communication",
          contentParagraph:"J'ai utilisé des technologies modernes telles que l'envoi d'alertes par e-mail et SMS pour garantir une communication efficace avec les clients, renforçant ainsi la réactivité du système.",
          className: "md:col-span-2",
          thumbnail:
            "/email-sms.jpg",
        },
      ],
      contents: [
          {text : "• J'ai eu l'opportunité d'approfondir mes connaissances en développement tout en participant à la création d'un système de notifications capable d'envoyer des alertes par e-mail et SMS aux clients en utilisant Django, un framework web Python haut de gamme."},
          {text : "• J'ai fait la conception d'une API RESTful avec Django REST Framework, facilitant l'échange de données avec d'autres applications."},
          {text : "• J'ai géré des bases de données du système avec PostgreSQL, garantissant un stockage et une récupération des informations efficaces."},
      ],
    },
  ],

 projects: [
    {
      id: 1,
      title: "Système de réservation d'événements",
      des: "Découvrez l'événement de JCI Metline avec ce site web, comprenant un système de réservation et un tableau de bord administrateur.",
      img: "/assises.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://assises-du-printemps-zone-b-2k24.tn",
    },
    {
      id: 2,
      title: "Site vitrine d'entreprise",
      des: "Découvrez le site de Fares Confection, un leader du marché dans la fabrication de textiles.",
      img: "/fares.PNG",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://faresconfection.com",
    }
  ],

 testimonials: [
    {
      quote:
        "Je pensais que les sites web parfaits n'existaient pas jusqu'à ce que je visite celui que Talel a créé pour notre entité 'JCI'. J'apprécie vraiment un membre aussi talentueux et travailleur. Tous ceux qui ont visité le site étaient fascinés et nous avons reçu beaucoup de retours positifs !",
      name: "Yasmeen Najar",
      title: "Présidente de JCI Metline 2024",
      img: "/test2.jfif",
    },
    {
      quote:
        "Talel est un individu talentueux, organisé, méthodique et autonome. En tant que son superviseur direct pendant son stage, j'ai eu le plaisir d'observer et d'apprécier ses compétences et son engagement. Ses qualités sont rares et précieuses, et elles se démarquent, surtout dans un contexte où ces traits ne sont pas toujours courants parmi la jeune génération.",
      name: "Hamdi Mrabet",
      title: "Responsable des systèmes d'information @ MDWEB",
      img: "/test3.jfif",
    },
    {
      quote:
        "Je recommande vivement Talel Galai pour ses compétences exceptionnelles en développement logiciel et web. Ayant travaillé avec lui sur divers projets, il démontre constamment du professionnalisme, une solide maîtrise des principes de développement et une attention aux détails. Talel est également un excellent communicateur et un bon joueur d'équipe, avec une grande capacité à s'adapter à de nouvelles technologies. Il serait un atout précieux pour toute organisation.",
      name: "Anis Tarhouni Trabelsi",
      title: "Étudiant en informatique @ ISIMA",
      img: "/test1.jfif",
    },
  ],
  
 footerItems: [
    {
      heading: "Prêt à donner à votre présence numérique un coup de pouce ?",
      description: "Contactez-moi dès aujourd'hui et discutons de la manière dont je peux vous aider à atteindre vos objectifs.",
      copyright: "Droits d'auteur © 2024 Talel Galai",
    },
  ],

  approachItems: [
    {
        firstphaseTitle: "Planification & Stratégie",
        firstphaseDescription: "Nous collaborerons pour définir les objectifs de votre site web, le public cible et les fonctionnalités clés. Nous discuterons de la structure du site, de la navigation et des exigences en matière de contenu.",
        secondphaseTitle: "Développement & Mise à jour du Progrès",
        secondphaseDescription: "Une fois le plan convenu, je lance ma playlist lofi et me plonge dans le codage. Des esquisses initiales au code poli, je vous tiens informé à chaque étape.",
        thirdphaseTitle: "Développement & Lancement",
        thirdphaseDescription: "C'est ici que la magie opère ! Sur la base du design approuvé, je traduirai tout en code fonctionnel, construisant votre site web de A à Z.",
    }
],

 socialMedia: [
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
  ],
};