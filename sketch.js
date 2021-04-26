var police ;
var terrorist;
var police_image;
var terrorist_image;
var bg;
var bullet;
var bullet_image;
var terroristsGroup;
var bulletsGroup;
var helicopter, helicopter_Img;
var Missiontime;
var gameState = "Play";
var text1;
var click;
var indhira;
var gandhi;
var bhagat;
var ambedkar;
var img1,img2,img3,img4;
function preload(){
  police_image = loadImage("police.png");
  terrorist_image = loadImage("terrorist.png");
  bg= loadImage("Flag-India.jpg");
  bullet_image = loadImage("bullet image.png");
  helicopter_Img = loadImage("pic1 .png");
  img1 = loadImage("indira gandhi.jpg");
  img2 = loadImage("gandhi.jpg");
  img3 = loadImage("bhagat.jpg");
  img4 = loadImage("download (1).jpg");
}

function setup(){
   createCanvas(900,600);

   police=createSprite(60,180,10,40);
   police.addImage("police",police_image);
   police.scale=0.4;

   terrorist=createSprite(900,180,10,40);
   terrorist.addImage("terrorist",terrorist_image);
   terrorist.scale=0.6;

   terroristsGroup = new Group();

   helicopter = createSprite(400,100);
   helicopter.addImage("helicopter",helicopter_Img);
   helicopter.visible = false;
   text1 = createElement("h2");
   click = createButton("click me");

   gandhi = createSprite(200,100,30,30);
   gandhi.addImage("gandhi",img2);
   gandhi.visible =false;
   indhira = createSprite(600,100,30,30);
   indhira.addImage("indhira gandhi",img1);
   indhira.visible =false;
   bhagat = createSprite(200,450,30,30);
   bhagat.addImage("bhagat",img3);
   bhagat.visible =false;
   ambedkar = createSprite(600,450,30,30);
   ambedkar.addImage("download (1)",img4);0
   ambedkar.visible =false;

}
function draw(){
  background(bg);
  police.y=mouseY;

  Missiontime = frameCount/100;

  text("MissionTime: "+Missiontime, 200,100);

  if(gameState === "Play"){

    spawnterrorist();
    spawnbullet();

    if(terroristsGroup.isTouching(bullet)){
      terroristsGroup.destroyEach();
      bullet.destroy();
    }

    if(frameCount>=500){
      gameState = "end";
      //terroristsGroup.setVelocityXEach(0);
     
    }

  }

  else if (gameState === "end"){

    
      console.log("heloo");
      bullet.visible = false;
      bullet.velocityX = 0;
      terroristsGroup.visible = false;
      police.visible = false;
      helicopter.visible = true;
      textSize(35);
      text1.html("mission successfull")
      text1.position(350,450);
      click.mousePressed();
  }

  drawSprites();
  
}

function displayimg(){

}



function spawnterrorist(){
  if(frameCount%70===0){
    terrorist=createSprite(720,180,10,40);
    terrorist.addImage("terrorist",terrorist_image);
    terrorist.y=Math.round(random(100,600));
    terrorist.scale=1;
    terrorist.velocityX=-5;
    terroristsGroup.add(terrorist);
    
  }
}

function spawnbullet(){
  if(frameCount%50===0){
    bullet=createSprite(140,police.y-40,20,10);
    bullet.addImage("bullet",bullet_image);
    bullet.velocityX=+5;
    bullet.scale=0.1
  }
  
}

