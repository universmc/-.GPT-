const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
    let systemContent = "Bienvenue dans notre équipe, [Nom du constructeur]! Nous sommes ravis de vous avoir à bord pour aider à construire notre site Web et développer notre plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et de l'intelligence artificielle?";
    let assistantContent = "Salutations, [Nom du constructeur]! Je suis l'assistant virtuel de l'équipe, et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
    let userContent = `""`;

    groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemContent
            },
            {
                role: "user",
                content: userContent
            },
            {
                role: "assistant",
                content: assistantContent
            },
            {
                role: "system",
                content: "initilalisation du role:assistant pi@univers-mc.cloud"
            },
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/CV-contructor_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();
