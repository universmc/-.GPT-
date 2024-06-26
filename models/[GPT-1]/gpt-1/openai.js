const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await openai.chat.completions.create({

    messages: [
        {role: "system",content: "j'aimerais en savoir plus sur les MATRICE vectoriel de relation de Challes ('ouvrage:Meditation&Metaphisique'author:'Réné Decrart') donc sur les métadonnées dans un Model de prompt type citation «comment fonctionne les embedding en async js/json?»?"},
        {
        role: "user",
        content: "Quelle est ton potionnelle en tant que IA role:assistant?"
        },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.6,
    max_tokens: 2048,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "docs-openai" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();