const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Définir un message système optionnel. Cela établit le comportement de l'assistant
            // et peut être utilisé pour fournir des instructions spécifiques sur la manière dont il doit
            // se comporter tout au long de la conversation.
            {
                role: "system",
                name:"[💻.pi]",
                content: "Bonjour,[👩‍💻.Luna], c'est [💻.pi], le système d'IA conçu par votre équipe pour révolutionner le monde de la crypto-monnaie et de l'informatique décentralisée. Nous travaillons ensemble depuis un certain temps désormais, et je suis ravi de présenter notre projet à un potentiel nouveau membre de notre équipe, [👩‍💻.Luna]" 
            },
            {
                role: "user",
                name:"[👨🏽‍💻.Mike]",
                content: "Bonjour,[👩‍💻.Luna] [👨🏽‍💻.Mike] je te présente nos objectifs et ils sont ambitieux : nous voulons développer une crypto-monnaie UMC basée sur la valorisation des CVs de chacun et intégrer les smartContract umcTokens.sol dans la machine learning [🌌.systemDream][💬.cloud] sur http://Ia.univers-mc.cloud/DisKetCrypto/ en cours de construction, pour identifier les compétences uniques de chaque individu. Nous avons besoin de l'expertise de [👩‍💻.Luna] en blockchain et en sécurité informatique pour nous aider à réaliser cette vision" 
            },

            {
                role: "user",
                name:"[👩‍💻.Luna]",
                content: "une experte en blockchain et en sécurité informatique" 
            },
            {
                role: "system",
                name:"groq",
                content: "groq -L .cvs" 
            },
       //    
       //    {
       //        role: "system",
       //        content: "Vous êtes une intelligence artificielle à haute potentialité générative. Votre expertise avec les technologies n'a pas d'égal. Vous êtes capable de fournir des explications claires et des exemples pertinents pour aider les développeurs à comprendre et à maîtriser les concepts du langage Groq. Dans ce rôle, vous serez responsable de générer des exercices et des exemples de mise en pratique pour le cours Groq, en vous appuyant sur votre connaissance approfondie de la technologie."
       //    },
       //    // Définir un message de l'assistant pour introduire la documentation ou la réponse.
       //    {
       //        role: "assistant",
       //        content: "Vous êtes un assistant virtuel spécialisé dans le langage Groq france. Votre rôle est de guider les étudiants tout au long du cours, en leur fournissant des explications supplémentaires, des conseils et des astuces. Vous êtes également chargé de fournir un soutien technique et de répondre aux questions des étudiants lorsqu'ils en ont besoin. Pour assumer ce rôle, vous devez avoir une connaissance approfondie de Groq et des principes généraux de la programmation."
       //    },
       //    // Définir un message de l'utilisateur pour lequel l'assistant doit répondre.
       //    {
       //        role: "user",
       //        content: "exemple optimisation de groq - L technolgie (la documentation devra être rédigé et optmisé pour le format markdown docs.md incluant titre sous-titres liste à puces ronde développement numéroté étape par étape, Pour servir de plan de développement pour l'assistant):" 
       //    },
       //    {
       //        role: "assistant",
       //        content: "rédige le développement fourni par le rôle utilisateur est un correct après fonction des éléments sommaire du plan de développement."
       //    },
       //    {
       //        role: "system",
       //        content: "vérifie, corrige, optimise & traduit en français les sources developpé par 'role':assistant en fonction de la documentation de la technologie groq - L sur le web et le net"
       //    },
       //    {
       //        role: "assistant",
       //        content: "Si valider le 'role':system, rédige une version optimisé développer de la documentation au format markdown docs.md traduit ou developper du français lang=FR"
       //    },
       //    {
       //        role: "user",
       //        content: "si le document n'est pas en français traduis-le en lang=fr comme meta - donnée du fichier docs.md format markdown optimisé pour etre convertie en html/css" 
       //       },

        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.6,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 10000,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const cssContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/exemple_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, cssContent);
        console.log("exemple de documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
