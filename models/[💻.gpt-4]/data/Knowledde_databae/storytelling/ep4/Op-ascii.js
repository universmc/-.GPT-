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


const episodeTemplate = {
        Titre: 'Episode X - Chapitre Y (Développement)',
        VersionPromptNarrative: 'Cette version détaille histoire, les événements clés et les personnages, fournissant une fondation narrative riche. Elle explore le cadre, l intrigue principale, les interactions clés et les moments décisifs du chapitre, offrant une compréhension complète de son déroulement.',
        VersionPromptDeveloppement: 'Ce prompt se concentre sur l approfondissement de l histoire, examinant les thèmes sous-jacents, les motivations des personnages, et comment les événements s entrelacent pour faire avancer l intrigue. Il cherche à enrichir la trame narrative en ajoutant des couches de complexité et en explorant les implications plus larges des actions des personnages.',
        VersionPromptDialogue: 'Cette version met en avant les échanges entre les personnages, mettant en scène leurs conversations, leurs conflits, et leurs révélations. Elle vise à donner vie aux personnages à travers leurs dialogues, révélant leurs personnalités, leurs désirs, et leurs dilemmes internes.',
        VersionPromptImages: 'Ce prompt est spécialement conçu pour générer des images qui captent des moments clés, des scènes ou des éléments visuels importants du chapitre en utilisant des outils d art génératif par IA, tels que DALL-E-3. Il décrit en détail les scènes à visualiser, en fournissant suffisamment de contexte pour permettre la création d images cohérentes avec la narration.',
        VersionPromptVideos: 'Un prompt destiné à la création de séquences vidéo à partir des images générées, en intégrant des mouvements, des transitions, et possiblement des éléments audio pour enrichir l expérience narrative. Cela nécessitera l utilisation d outils adaptés à la génération de contenu vidéo.',
        VersionPromptDeveloppementChapitreSuivant: 'Ce prompt est orienté vers l anticipation et la planification des thèmes, des enjeux, et des événements du chapitre suivant. Il sert de pont entre les chapitres, en suggérant des directions potentielles pour l évolution de l histoire et en posant les bases pour de futurs développements narratifs.'
      };

  // To copy the project information, use the following command:
  // copy(JSON.stringify(projectInfo))
  

async function main(
) {
    let systemContent = "Bienvenue dans notre équipe, [systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire interface retro ascii pour votre histoire ou scenraio episode de role:assistant, /pi_story(episode1, chapitre par chapitre groq(devEpisode{chapter_}) de plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
    let assistantContent = "Salutations, [codex GPT]! Je suis l'assistant virtuel de l'équipe, et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
    let userContent = "Vous êtes Pi`role: assistant,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
    const BorderChars = "borderChars";
    const simulatedChatContent = `Titre du chapitre: ${episodeTemplate.Titre}\n\nNarration: ${episodeTemplate.VersionPromptNarrative}\n\nDéveloppement: ${episodeTemplate.VersionPromptDeveloppement}\n\nDialogues: ${episodeTemplate.VersionPromptDialogue}\n\nImages: ${episodeTemplate.VersionPromptImages}\n\nVidéos: ${episodeTemplate.VersionPromptVideos}\n\nDéveloppement du chapitre suivant: ${episodeTemplate.VersionPromptDeveloppementChapitreSuivant}`;
    groq.chat.completions.create({
        messages: [
            {role: "system",name:"(✨systemDream)", content: systemContent },
            {role: "assistant",name:"(✨pi)", content: assistantContent },
            {role: "user",name:"(✨gpt-codex)", content: userContent },
          //{role: "system", content: simulatedChatContent },
            {role: "system", content: `BorderChars` },
            {role: "system", content: "univers-cloud/ update planification Notion_calandar"},
            {role: "system", content: "Mission programmation d'un interface graphique ascii comme template de response avec les `BorderChars` groq"},
            {role: "system", content: "groq `figlet` pour les titre par exemple"},
            {role: "system", content: "groq DevOps main(windows) avec `BorderChars` comme bordure initale de la fenetre principal de response"},
            {role: "system", content: `BorderChars` },
            {role: "system", content: BorderChars },
            // step1 : Conception et Vision

            // [RUN]: Développement Initial et Tests
             //  : start TEST
            {role: "system", name:"systemDream", content: "Chapitre 1 : Développement de l'insterface graphique ASCII .sh de response."},

        //  {role: "assistant", content: "`episodeTemplate`"},
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.9,
        max_tokens: 1024,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "chapter1/ep4-ch1_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();