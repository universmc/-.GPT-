function drawCircle(radius) {
  let circle = '';
  for (let i = 0; i < radius; i++) {
    circle += '*';
    circle += ' '.repeat(radius - i - 1);
    circle += '*';
    circle += ' '.repeat(i);
    circle += '\n';
  }
  for (let i = radius - 2; i >= 0; i--) {
    circle += '*';
    circle += ' '.repeat(i);
    circle += '*';
    circle += ' '.repeat(radius - i - 2);
    circle += '\n';
  }
  return circle;
}

