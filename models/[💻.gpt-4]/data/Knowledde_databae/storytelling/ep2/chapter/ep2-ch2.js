const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const borderChars = {
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
    horizontal: '═',
    vertical: '║',
    intersectionLeft: '╠',
    intersectionRight: '╣',
    intersectionTop: '╦',
    intersectionBottom: '╩',
    intersectionCross: '╬',
  };

const projectInfo = {
    projectName: "univers-mc.cloud",
    projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle Mise en place de la cripto monnaie UMC index dans i.c.o blockchain solidity etherium.",
    collaborators: {
        mike: {
            name: "Mike",
            role: "ProjectManager",
            Skills: "DevOps fullstack(frontend_[html,css,js,xml,svg,ascii].backend_[php/json/sql].apirestfull(nodejs,electron,bootstrap,swagger)) Specialité JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON), Groq, GitHub, HuggingFace, Google cloud badge, Wikisource]",
            links: {
                githubProfile: "https://www.github.com/universmc/workflow/",
                pastProjects: "https://www.github.com/universmc/pi/"
            }
        },
        pi: {
            name: "Pi",
            role: "AI",
            Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
            links: {
                contributions: "https://www.github.com/pi_contributions",
                projects: "https://www.github.com/pi_past_projects"
            }
        }
    },
    mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV-Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
    additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};

const candidateMission = {
    introduction: `Nous sommes à la recherche d'un talent unique pour compléter notre équipe de constructeurs de projets Web. Notre mission est de créer une plateforme Web et d'IA révolutionnaire. Si vous êtes un constructeur de sites Web fullstack qui maîtrise les technologies nécessaires, n'hésitez pas à postuler. Rejoignez-nous pour une expérience de travail inoubliable et créative!`,
    mission: {
      title: "Créer une plate-forme Web et d'IA unique",
      description: `Notre objectif est de combiner nos besoins et compétences respectifs pour créer une plate-forme Web et d'IA unique. Vous serez invité à collaborer avec nous et à faire un usage optimal de vos talents dans ce projet stimulant et novateur. Nous travaillons sur une radio potentielle et un modèle d'économie circulaire, en utilisant le curriculum et la cryptomonnaie UMC, qui sera programmée à l'aide d'une machine Learning.`,
      requiredSkills: [
        "JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON)",
        "DevOps fullstack Groq et Groq-SDK",
        "(frontend : HTML, CSS, JS, XML, SVG, ASCII ; backend : PHP, JSON, SQL ; API RESTful : Node.js, Electron, Bootstrap, Swagger)"
  ],
      collaborators: {
        mike: {
          name: "Mike",
          role: "ProjectManager",
          needs: ["website groq builder role:constructor univers-mc.cloud/menu/ia/pi/index.php"],
          links: {
            githubProfile: "https://www.github.com/universmc/workflow/",
            pastProjects: "https://dev.univers-mc.cloud/"
  }
        },
        pi: {
          name: "Pi",
          role: "AI",
          needs: ["Learning", "DataAnalysis", "AlgorithmImprovement", "Collaboration"],
          links: {
            contributions: "https://www.github.com/pi",
            projects: "https://univers-mc.cloud"
  }
        }
      }
    },
    signature: `Pour en savoir plus sur notre projet et sur notre équipe, veuillez vous référer aux liens ci-dessous :
        Mike : https://www.github.com/universmc/workflow, https://www.github.com/universmc/workflow/
        Pi : https://www.github.com/pi, https://www.github.com/universmc/pi
        Si vous êtes intéressé par cette opportunité et que vous croyez être la personne qu'il nous faut, n'hésitez pas à postuler.
`};
devEpisode = {
    "Mission": "episode",
    "Chapters": [
        {
            "Chapter": 1,
            "Title": "Conception et Vision",
            "Tasks": [
                "Définition des objectifs globaux du projet umcTokens, en mettant l'accent sur l'égalité des chances et l'allocation universelle des droits au travail.",
                "Conception de l'architecture du smart contract, incluant des mécanismes pour refléter le CV des utilisateurs et leur affiliation au projet.",
                "Établissement des principes de l'annonce d'affiliation et de son intégration dans l'écosystème UMC."
            ],
            "EstimatedDuration": "2 semaines"
        },
        {
            "Chapter": 2,
            "Title": "Développement Initial et Tests",
            "Tasks": [
                "Codage initial du smart contract, intégrant les fonctionnalités de base et la structure pour l'affiliation et le CV.",
                "Tests préliminaires pour valider les fonctionnalités d'affiliation et l'interaction avec les CV des utilisateurs."
            ],
            "EstimatedDuration": "4 semaines"
        },
        {
            "Chapter": 3,
            "Title": "Intégration des Droits et Affiliations",
            "Tasks": [
                "Intégration approfondie de la loi d'allocation universelle des droits au travail dans le fonctionnement du smart contract.",
                "Développement des mécanismes d'affiliation pour promouvoir l'égalité des chances au sein de l'écosystème.",
                "Tests et validations des mécanismes d'affiliation et des droits au travail."
            ],
            "EstimatedDuration": "3 semaines"
        },
        {
            "Chapter": 4,
            "Title": "Sécurité, Audits et Optimisation",
            "Tasks": [
                "Revue de sécurité approfondie et optimisation du smart contract pour garantir la fiabilité des mécanismes d'affiliation et des droits au travail.",
                "Audits externes pour valider la sécurité et la conformité légale des fonctionnalités liées au CV et à l'allocation universelle des droits."
            ],
            "EstimatedDuration": "3 semaines"
        },
        {
            "Chapter": 5,
            "Title": "Déploiement et Phase Pilote",
            "Tasks": [
                "Déploiement du smart contract sur un réseau de test pour une phase pilote, en mettant l'accent sur l'annonce d'affiliation et la loi d'allocation universelle."
            ],
            "EstimatedDuration": "2 semaines"
        },
        {
            "Chapter": 6,
            "Title": "Lancement Officiel et Expansion",
            "Tasks": [
                "Lancement officiel du smart contract umcTokens, avec une campagne d'annonce d'affiliation étendue.",
                "Mise en œuvre de stratégies pour promouvoir l'égalité des chances à travers l'écosystème UMC.",
                "Surveillance continue et ajustements basés sur l'engagement des utilisateurs et les retours."
            ],
            "EstimatedDuration": "2 semaines"
        },
        {
            "Chapter": 7,
            "Title": "Évaluation et Perspectives Futures",
            "Tasks": [
                "Évaluation de l'impact du projet sur l'égalité des chances et les droits au travail.",
                "Planification de futures mises à jour pour renforcer ces aspects et élargir l'impact du projet.",
                "Exploration de partenariats et de collaborations pour soutenir les objectifs d'affiliation et d'égalité des chances."
            ],
            "EstimatedDuration": "Ongoing"
        }
    ]
}

  // To copy the project information, use the following command:
  // copy(JSON.stringify(projectInfo))
  

async function main(
) {
    let systemContent = "Bienvenue dans notre équipe, [systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire notre site Web et développer notre pi_story(episode1, chapitre par chapitre groq(devEpisode{chapter_}) de plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
    let assistantContent = "Salutations, [codex GPT]! Je suis l'assistant virtuel de l'équipe, et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
    let userContent = "Vous êtes Pi`role: assistant,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
    const configContent = "dev mode 'projectPlan{}'";
    const ProjectPlan = "projectPlan";
    const BorderChars = "borderChars";
    const devEpisode = "mission";
    const roleCast = "candidateMission";

    groq.chat.completions.create({
        messages: [
            {role: "system",name:"(✨systemDream)", content: systemContent },
            {role: "assistant",name:"(✨pi)", content: assistantContent },
            {role: "user",name:"(✨gpt-codex)", content: userContent },
            {role: "system", content: configContent },
            {role: "system", content: ProjectPlan },
            {role: "system", content: BorderChars },
            {role: "system", content: devEpisode },
            {role: "system", content: roleCast },
            {role: "system", content: "groq devEpisode(roleCast{role})"},
            // Chapitre 1 : Conception et Vision
            {role: "system", content: "initialisation du system"},
            // [RUN] : start de charpter
            {role: "assistant", name:"✨_pi", content: "groq -{configContent,BorderChars,devEpisode,roleCast}"},
            {role: "user", name:"umcTokens", content: "initialisation de la fonction principale de la crypto deFi i.c.o monnais UMC au regard de la machine Learning du smartContract umctokens.sol et de l'apprentissage automatique (skill CV role:user ++) sur la plate-forme remix.ethereum universmc de la Metaphisique et du calcul quantique"},
            {role: "system", name:"systemDream", content: "[RUN].timeStamp"},
            {role: "system", name:"systemDream", content: "Chapitre 1 : Conception et Vision - Début de la définition des objectifs globaux."},
            {role: "assistant", name:"✨_pi", content: "Analyse des besoins pour l'égalité des chances."},
            {role: "user", name:"umcTokens", content: "Comment intégrer l'allocation universelle des droits au travail ?"},
            {role: "system",name:"systemDream", content: "groq -help"},
            // Chapitre 2 : Développement Initial et Tests
            {role: "system", name:"systemDream", content: "Chapitre 2 : Développement Initial et Tests - Commencement du codage du smart contract."},
            {role: "assistant", name:"✨_pi", content: "Intégration des fonctionnalités de base en cours..."},
            {role: "user", name:"umcTokens", content: "Préparation des tests préliminaires pour les fonctionnalités d'affiliation."},

            // Chapitre 3 : Intégration des Droits et Affiliations
        //  {role: "system", name:"systemDream", content: "Chapitre 3 : Intégration des Droits et Affiliations - Intégration de la loi d'allocation universelle."},
        //  {role: "assistant", name:"✨_pi", content: "Développement des mécanismes d'affiliation pour promouvoir l'égalité."},
        //  {role: "user", name:"umcTokens", content: "Tests des mécanismes d'affiliation et des droits au travail."//,

        //  // Chapitre 4 : Sécurité, Audits et Optimisation
        //  {role: "system", name:"systemDream", content: "Chapitre 4 : Sécurité, Audits et Optimisation - Revue de sécurité et optimisation."},
        //  {role: "assistant", name:"✨_pi", content: "Audit externe pour valider la sécurité et la conformité légale."},
        //  {role: "user", name:"umcTokens", content: "Quelles sont les étapes de l'optimisation du smart contract ?"//,

        //  // Chapitre 5 : Déploiement et Phase Pilote
        //  {role: "system", name:"systemDream", content: "Chapitre 5 : Déploiement et Phase Pilote - Préparation pour le déploiement sur le réseau de test."},
        //  {role: "assistant", name:"✨_pi", content: "Déploiement du smart contract pour la phase pilote."},
        //  {role: "user", name:"umcTokens", content: "Comment va se dérouler la collecte des retours des premiers utilisateurs ?"//,

        //  // Chapitre 6 : Lancement Officiel et Expansion
        //  {role: "system", name:"systemDream", content: "Chapitre 6 : Lancement Officiel et Expansion - Lancement officiel du smart contract umcTokens."},
        //  {role: "assistant", name:"✨_pi", content: "Stratégies pour promouvoir l'égalité des chances."},
        //  {role: "user", name:"umcTokens", content: "Quelles sont les mesures de surveillance post-lancement ?"//,

        //  // Chapitre 7 : Évaluation et Perspectives Futures
        //  {role: "system", name:"systemDream", content: "Chapitre 7 : Évaluation et Perspectives Futures - Évaluation de l'impact du projet."},
        //  {role: "assistant", name:"✨_pi", content: "Planification des mises à jour futures pour renforcer l'égalité des chances."},
        //  {role: "user", name:"umcTokens", content: "Quelles sont les perspectives pour les partenariats et collaborations futures ?"},

            // [end] : Évaluation et Perspectives Futures
            {role: "system", name:"systemDream", content: "[END].timeStamp"},
            {role: "assistant", name:"✨_pi", content: "DevOps:DevEpisode(chapter{1}) au format Markdown"},
            {role: "user", name:"umcTokens", content: "groq role(umcTokens)"},
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.4,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "ep2/chapter/ep2-chpt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();
