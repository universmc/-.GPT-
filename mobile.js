const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //
  promptmodel = "systemContent";
  roleSystem = "gen -DevOps";
  roleAssistant = "Professor";
  roleUser = "Generator";


const PS1 = "user-Telegram"

const hudTensor= "`╔╗╚╝═║╠╣╦╩╬`"         // Caractères spéciaux utilisés pour le design du menu
const include_DIR="./*"  // Répertoire contenant les scripts à exécuter


const phone = [
    console.log(""),
    console.log(" ╔═══════════════════════════════════════╗"),
    console.log(" ╠════════════ ✨ Pi Console ════════════╣"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ║                                       ║"),
    console.log(" ╠═══════════════════════════════════════╣"),
    console.log(" ║($PS1)<                             /%>║"),
    console.log(" ╚═══════════════════════════════════════╝"),
    console.log(""),
]
console.log(phone)
    //
    promptmodel = "systemContent";
    roleSystem = "gen -DevOps";
    roleAssistant = "Professor";
    roleUser = "Generator";
    const Phone = `${phone}`
  
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
          
        {role: "system",name:"[🌌_system", content:Phone},
        {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[brainstorming[.Generator.]]"},
        {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.6,
      max_tokens: 2048,
      top_p: 1,
      stop: null,
      stream: false
  }).then((chatCompletion)=>{
      const gqlContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath = "Phone_📱-lvl-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
      fs.writeFileSync(outputFilePath, gqlContent);
      console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
  });
  }
  main();

const hudTensor="╔╗╚╝═║╠╣╦╩╬"
const SCRIPT_DIR="./Users/universmc/.module_zsh" 


