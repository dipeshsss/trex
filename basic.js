 var ball_properties={x:200,y:150,radius:100,colour:['red','blue'],
xspeed:2,yspeed:2};
function setup(){
    createCanvas(400,400);

}


function draw(){
background('black');
fill(ball_properties.colour[1]);
circle(ball_properties.x,ball_properties.y,ball_properties.radius);
ball_properties.x+=ball_properties.xspeed;

}