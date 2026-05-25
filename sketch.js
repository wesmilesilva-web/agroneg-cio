let umidade = 100;
let telaAtiva = "MENU"; // Controla qual tela exibir: "MENU" ou "JOGO"

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (telaAtiva === "MENU") {
    exibirMenu();
  } else if (telaAtiva === "JOGO") {
    executarJogo();
  }
}

function exibirMenu() {
  background(240);
  
  // Título
  fill(34, 139, 34);
  textAlign(CENTER);
  textSize(28);
  text("Simulador de Irrigação", width/2, 100);
  
  // Explicação técnica
  fill(50);
  textSize(14);
  textAlign(LEFT);
  text("O que este código faz?", 50, 150);
  
  textSize(12);
  text("1. Variáveis: Controlam a vida da planta.", 50, 180);
  text("2. Loop draw(): Diminui a umidade a cada frame.", 50, 200);
  text("3. Interatividade: O mousePressed aumenta a variável.", 50, 220);
  
  // Botão Iniciar
  fill(100, 200, 100);
  rect(150, 280, 100, 40, 10);
  fill(255);
  textAlign(CENTER);
  text("COMEÇAR", 200, 305);
}

function executarJogo() {
  background(135, 206, 235);
  
  // Solo
  noStroke();
  fill(100, 60, 20);
  rect(0, 300, 400, 100);

  // Plantação
  desenharPlanta(100, 310);
  desenharPlanta(200, 310);
  desenharPlanta(300, 310);

  // Lógica de umidade
  if (umidade > 0) umidade -= 0.2;
  
  // Interface
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("Umidade do Solo: " + floor(umidade) + "%", 20, 30);
  text("Clique para IRRIGAR", 20, 55);

  if (umidade < 30) {
    fill(255, 0, 0);
    text("ALERTA: Solo Seco!", 20, 80);
  }
}

function desenharPlanta(x, y) {
  let r = map(umidade, 0, 100, 150, 34);
  let g = map(umidade, 0, 100, 100, 139);
  let b = map(umidade, 0, 100, 50, 34);
  fill(r, g, b);
  
  let h = map(umidade, 0, 100, 10, 60);
  rect(x, y - h, 10, h); 
  ellipse(x + 5, y - h, 30, 20);
}

function mousePressed() {
  if (telaAtiva === "MENU") {
    // Verifica se clicou na área do botão "COMEÇAR"
    if (mouseX > 150 && mouseX < 250 && mouseY > 280 && mouseY < 320) {
      telaAtiva = "JOGO";
    }
  } else {
    umidade += 20;
    if (umidade > 100) umidade = 100;
  }
}