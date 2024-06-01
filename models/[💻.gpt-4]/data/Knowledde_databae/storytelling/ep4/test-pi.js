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

function drawWindow(title, content, width) {
  let window = '';

  // Draw the top border
window += borderChars.topLeft;
  for (let i = 0; i < width - 2; i++) {
    window += borderChars.horizontal;
  }
  window += borderChars.topRight;

  // Draw the title
window += '\n';
  window += borderChars.vertical + ' ' + title + ' ' + borderChars.vertical;

  // Draw the content
window += '\n';
  const contentLines = content.split('\n');
  for (const line of contentLines) {
    window += ' ' + line.padEnd(width - 2, ' ') + ' ';
    window += '\n';
  }

  // Draw the bottom border
window += borderChars.bottomLeft;
  for (let i = 0; i < width - 2; i++) {
    window += borderChars.horizontal;
  }
  window += borderChars.bottomRight;

  return window;
}

const mainWindowContent = `Bienvenue dans l'interface graphique ASCII!`;
const mainWindowWidth = 50;
const mainWindow = drawWindow("Titre de la fenêtre principale", mainWindowContent, mainWindowWidth);

console.log(mainWindow);

