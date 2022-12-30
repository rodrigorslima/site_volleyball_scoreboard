const projectName = "Placar Voleibol"
const projectDescription = "Tenha mais segurança e não se perca ao acompanhar o placar de suas peladas de voleibol."
const storeLink = "https://play.google.com/store/apps/details?id=com.rslima.volleyball_scoreboard"
function appName() {
    document.write(projectName)
};
function appDescription() {
    document.write(projectDescription)
};

function openStore() {
    document.write("<a href=\"" + storeLink + "\">" +
        "<img src=\"assets/images/playstore.png\"  />" +
        "<div><span>Baixe Agora</span><strong>Google Play</strong></div></a > ")
};
