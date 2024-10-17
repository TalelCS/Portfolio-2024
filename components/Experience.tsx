import React from "react";
import Timeline from "./ui/Timeline";

export function TimelineDemo() {

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };
  
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
        </p>
      </div>
    );
  };
  
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Greens all over
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };

  const data = [
    {
      title: "MdWeb",
      date: "June 2024",
      position: "Stagiaire",
      logo: "/mdweb.png",
      cards: [
        {
          id: 1,
          content: <SkeletonOne />,
          className: "md:col-span-2",
          thumbnail:
            "/ai.jpg",
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
            "/international.jpg",
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
            "/63.png",
        },
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai développé un chatbot utilisant l&apos;assistant OpenAI, avec une fonctionnalité de diffusion des réponses via WebSocket, basé sur une base de connaissances téléchargée.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai implémenté des fonctionnalités de lecture en haute voix et de saisie vocale pour permettre une interaction plus naturelle avec le chatbot, en intégrant des API de synthèse vocale et de reconnaissance vocale.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai amélioré le tableau de bord du chatbot en mettant en place un système d&apos;authentification et en optimisant l&apos;interface pour offrir une meilleure expérience utilisateur.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai utilisé Markdown pour formater les réponses du chatbot, ce qui a permis d&apos;offrir des réponses bien structurées, avec des éléments tels que des listes, des titres et des liens cliquables pour une meilleure lisibilité.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai conteneurisé le projet en utilisant Docker, permettant le déploiement sur n&apos;importe quelle machine, et j&apos;ai vérifié la compatibilité mobile en effectuant des tests avec Ngrok.
          </p>
        </div>
      ),
    },
    {
      title: "Freelance",
      date: "Winter 2023",
      position: "Freelancer",
      logo: "/home.jpg",
      cards: [
        {
          id: 1,
          content: <SkeletonOne />,
          className: "md:col-span-2",
          thumbnail:
            "/deadline.jpg",
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
            "/money.jpg",
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
            "/real-world.jpg",
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
            "/time.jpg",
        },
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai dirigé le développement d&apos;un site vitrine pour Fares Confection, une entreprise textile, en créant une interface utilisateur attrayante et intuitive qui met en valeur les produits et services de l&apos;entreprise.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai intégré des fonctionnalités avancées sur le site, y compris un système de gestion des produits et un formulaire de contact, facilitant ainsi l&apos;interaction avec les clients potentiels.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai collaboré étroitement avec le client pour définir ses besoins et attentes, en veillant à ce que le produit final réponde à ses exigences tout en respectant les délais impartis.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • Pour l&apos;événement de JCI, j&apos;ai conçu et développé un système de réservation en ligne, permettant aux participants de s&apos;inscrire facilement à l&apos;événement et d&apos;effectuer des paiements sécurisés.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai mis en place une base de données robuste pour gérer les inscriptions et les paiements, garantissant ainsi la sécurité et l&apos;intégrité des données des utilisateurs.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai assuré le déploiement et la maintenance continue des deux projets, en fournissant un support technique et en effectuant des mises à jour régulières pour améliorer les performances et la sécurité.
          </p>
        </div>
      ),
    },
    {
      title: "MdWeb",
      date: "July 2023",
      position: "Stagiaire",
      logo: "/mdweb.png",
      cards: [
        {
          id: 1,
          content: <SkeletonOne />,
          className: "md:col-span-2",
          thumbnail:
            "/collab.jpg",
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
            "/documentation.jpg",
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
            "/firstday.JPG",
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
            "office.jpg",
        },
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai développé un questionnaire en ligne dynamique avec des scénarios multiples et une base de données flexible, utilisant JavaScript et Appsmit.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai créé un tableau de bord interactif pour centraliser les données des enquêtes en ligne, intégrant des visualisations claires et une mise à jour en temps réel des statistiques.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai exploré et lu la documentation de l&apos;outil Appsmith pour la création d&apos;applications web et mobiles, en mettant en avant la rapidité de développement et la flexibilité de la plateforme.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            • J&apos;ai collaboré avec des développeurs expérimentés pour acquérir des connaissances et des compétences en matière de travail d&apos;équipe et de communication efficace.
          </p>
        </div>
      ),
    },
    {
      title: "Centre De Développement National de La Poste Tunisienne",
      date: "June 2023",
      position: "Stagiaire",
      logo: "laposte.png",
      cards: [
        {
          id: 1,
          content: <SkeletonOne />,
          className: "md:col-span-2",
          thumbnail:
            "/large-dataset.png",
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
            "/1st.jpg",
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
            "/remote.png",
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
            "email-sms.jpg",
        },
      ],
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai eu l&apos;opportunité d&apos;approfondir mes connaissances en développement tout en participant à la création d&apos;un système de notifications capable d&apos;envoyer des alertes par e-mail et SMS aux clients en utilisant Django, un framework web Python haut de gamme.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            • J&apos;ai fait la conception d&apos;une API RESTful avec Django REST Framework, facilitant l&apos;échange de données avec d&apos;autres applications.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            • J&apos;ai géré des bases de données du système avec PostgreSQL, garantissant un stockage et une récupération des informations efficaces.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
