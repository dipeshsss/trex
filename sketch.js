var trex,trex1,edges,ground,ground1,ground_inv,cloud,cloud_1;
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacles6;
var obstacle_grp,cloud_grp;
var score=0;
var play=2;
var end=1;
var gamestate=play;

function preload(){
  trex1=loadAnimation('trex1.png','trex3.png','trex4.png');
  ground1=loadImage('ground2.png');
  cloud_1=loadImage('cloud.png');
obstacle1=loadImage('obstacle1.png');
obstacle2=loadImage('obstacle2.png');
obstacle3=loadImage('obstacle3.png');
obstacle4=loadImage('obstacle4.png');
obstacle5=loadImage('obstacle5.png');
obstacle6=loadImage('obstacle6.png');

}

function setup(){
 createCanvas(700,300);
 ground=createSprite(350,290,700,10);
 ground_inv=createSprite(50,300,700,10);
 trex=createSprite(50,270,5,5);
 trex.addAnimation('running_trex',trex1);
 ground.addImage('ground_moving',ground1);
 //cloud.addImage('cloud_moving',cloud_1);
 trex.scale=0.5;
 ground_inv.visible=false;
 edges=createEdgeSprites();
 obstacle_grp=new Group()
 cloud_grp=new Group()
}

function draw(){
 background('blue');
  if(gamestate==play){  
  if(keyDown('space') && trex.y>250){
  trex.velocityY=-10;
  }
   if(ground.x<0){
      ground.x=50;
     }
     score=round(score+frameCount/50);
    
   
   trex.velocityY=trex.velocityY+0.5;
   
   ground.velocityX=-2;
   spawing_cloud()
    spawing_obstacles()
    if(obstacle_grp.isTouching(trex)){
  gamestate=end;
    }
 }
 else if (gamestate==end){
   ground.velocityX=0;
obstacle_grp.setVelocityXEach(0);
cloud_grp.setVelocityXEach(0);

 }
 trex.collide(ground_inv);
 
 
 fill('black');
text('Score : ' + score,350,50);


 
 drawSprites();
}

 function spawing_cloud(){
  if(frameCount %50==0){  
  cloud=createSprite(600,40,10,10);
  cloud.velocityX=-4;
  cloud.addImage(cloud_1);
  cloud.y=round(random(20,150));
  cloud.depth=trex.depth;
  trex.depth+=1; 
  cloud.lifetime=170;
  cloud_grp.add(cloud);
 // console.log( 'trex'+trex.depth);
 // console.log('cloud'+cloud.depth);
  }
}
function spawing_obstacles(){
  if(frameCount %60==0){
obstacle=createSprite(650,275,50,100);

var rand=Math.round(random(1,6));
switch (rand){
  case 1 :
    obstacle.addImage(obstacle1);
    break;
  case 2:
    obstacle.addImage(obstacle2);
    break;
  case 3:
    obstacle.addImage(obstacle3);
    break;
  case 4:
    obstacle.addImage(obstacle4);
    break;
  case 5:
    obstacle.addImage(obstacle5);
    break;
  case 6:
    obstacle.addImage(obstacle6);
    break;

}
obstacle.scale=0.5;
obstacle.velocityX=-3;
obstacle.lifetime=300;
obstacle_grp.add(obstacle);
  }


}


