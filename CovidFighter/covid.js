function load(){
    hero=new Image();
    hero.src="Images/superhero.png";

    gem_img=new Image();
    gem_img.src="Images/gem.png";
    enemy=new Image();
    enemy.src="Images/v1.png";

}

function init(){
    canvas= document.getElementById("mycanvas");
    gameOver=false
    W=canvas.width=700;
    H=canvas.height=400;
    pen=canvas.getContext('2d');
    iconSize=50;
    console.log(hero)
   

    player={
        x:50,
        y:200,
        height:50,
        width:50,
        speed:20,
        moving:false,
    }

    gem={
        x:W-100,
        y:200,
        height:50,
        width:50,
    }

    e1={
        x:200,
        y:50,
        height:50,
        width:50,
        speed:20,
    }

    e2={
        x:350,
        y:100,
        height:50,
        width:50,
        speed:20,
    }

    e3={
        x:500,
        y:200,
        height:50,
        width:50,
        speed:30,
    }
   
    e=[e1,e2,e3]

     canvas.addEventListener("mousedown",function(){
        console.log("mouse pressed")
        player.moving=true  
    })

    canvas.addEventListener("mouseup",function(){
        console.log("mouse not pressed")
        player.moving=false 
    })

}

function collisionDetected(rect1,rect2){
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
         // collision detected!
         return true
     }
     return false
}

function draw(){

    pen.clearRect(0,0,W,H);

    pen.drawImage(hero,player.x,player.y,player.height,player.width);
    pen.drawImage(gem_img,gem.x-20,gem.y,gem.height,gem.width);
    
    for(var i=0;i<e.length;i++){
        pen.drawImage(enemy,e[i].x,e[i].y,e[i].height,e[i].width);
    }
      
}

function update(){


    if(collisionDetected(player,gem)==true){
        //console.log("you won")
        gameOver=true
        alert("You WON")
    }

    for(var i=0;i<e.length;i++){
        if(collisionDetected(player,e[i])==true){
            //console.log("you loose")
            gameOver=true
            alert("You LOST")
        }
    }


    if(player.moving==true)
    {
        player.x+=player.speed;
    }

    for(var i=0;i<e.length;i++){

        if(((e[i].y+e[i].height)>H) || (e[i].y<0) )
    {
        e[i].speed=-e[i].speed;
    }
    e[i].y+=e[i].speed
   // pen.drawImage(enemy,e[i].x,e[i].y,e[i].height,e[i].width);
    }

    

}

function gameLoop(){
    
    if(gameOver==true){
        clearInterval(f)
    }
    draw();
    update();
    //console.log("in game loop")
}

load();
init();

var f= setInterval(gameLoop,100)