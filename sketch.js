//Projeto do Jake
//Autor: Matheus Henrique
//Data: 14 e 15/01/22

// tamanho do ambiente
const CANVASX = 400;
const CANVASY = 400;

//Definição de variáveis
var jake, edges, piso, bomba, moeda, energia, cor;
// imagens
var bomba_img, moeda_img, energia_img, jake_andando;
var pistaImage;


// executa antes do draw
function preload(){
  //imagens pré-carregadas
  jake_Andando = loadAnimation("Jake2.png","jake3.png","jake4.PNG");
  pistaImage = loadImage("path.png");
  bomba_img = loadImage("bomb.png");
  moeda_img = loadImage("coin.png");
  energia_img = loadImage("energyDrink.png");
}

// configurações
function setup(){
  // cria ambiente
  createCanvas(CANVASX,CANVASY);
  // define cor inicial
  cor = "gray";
  
  //crie os sprites aqui

  // PISTA
  piso=createSprite(200,200);
  piso.addImage ("piso",pistaImage);
  
  //JAKE
  jake = createSprite(300,350,20,50);
  jake.addAnimation("andando", jake_Andando);

  // bomba em posição aleatória
  bomba=createSprite(Math.floor(Math.random() * 400),200);
  bomba.addImage ("bomba",bomba_img);
  bomba.scale = 0.1;
  
  // moeda em posição aleatória
  moeda=createSprite(Math.floor(Math.random() * 400),150);
  moeda.addImage ("moeda",moeda_img);
  moeda.scale = 0.4;

  // energia == lata em posição aleatória
  energia=createSprite(Math.floor(Math.random() * 400),100);
  energia.addImage ("energia",energia_img);
  energia.scale = 0.1;

  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao jake
  jake.scale = 0.5;
  //em posição aleatória
  jake.x = Math.floor(Math.random() * 400);
}

// função principal
function draw() {
  
  background(cor);  
    
  //movimento do piso;
  piso.setVelocity(0,-4); 
  if(piso.y<0){
    piso.y =300 
  }
 
  // movimentos do Jake
  if(keyDown("space")){
    jake.velocityY = -10;
  }

  if(keyDown("left")){
    jake.x = jake.x - 5;
  }

  if(keyDown("right")){
    jake.x = jake.x + 5;
  }
  
  if(keyDown("down")){
    jake.y = jake.y + 5;
  }

  // jake não foge do cenario
  jake.collide(edges);

  // se jake colide com o bomba
  if(jake.collide(bomba)){
    cor = "red";
  }

  // se jake colide com a moeda
  if(jake.collide(moeda)){
    cor="yellow";
  }

  // se jake colide com a lata
  if(jake.collide(energia)){
    cor="green";
  }
  
  drawSprites();
}