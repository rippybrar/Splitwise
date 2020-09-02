
function init(){
    canvas=document.getElementById("mycanvas");
    W=canvas.width=1000;
    H=canvas.height=1000;
    pen=canvas.getContext('2d');
    cellSize=66;
    food=getRandomFood();
    gameOver=false;
    score=6;

    food_img=new Image();
    food_img.src="Images/apple.png";

    trophy_img=new Image();
    trophy_img.src="Images/trophy.png";
    


    snake={
        init_len:6,
        color:"aqua",
        cells:[],
        direction:"right",

        createSnake:function(){
            for(var i=this.init_len;i>0;i--){
                this.cells.push({x:i,y:0});
            }  
        },

        drawSnake:function(){
            pen.fillStyle=this.color;
            for(var i=0;i<this.cells.length;i++){
            pen.fillRect(this.cells[i].x*cellSize,this.cells[i].y*cellSize,cellSize-2,cellSize-2)
            }
        },

        updateSnake:function(){

            var headX=this.cells[0].x;
            var headY=this.cells[0].y;

            if(headX==food.x && headY==food.y)
            {
                console.log("food eaten")
                food=getRandomFood();
                score++;
            }
            else{
                this.cells.pop()
            }

            

            var nextX,nextY;

            if(this.direction=="right"){
                nextX=headX+1;
                nextY=headY;
    
            }

            else if(this.direction=="left"){
                nextX=headX-1;
                nextY=headY;
            }

            else if(this.direction=="down"){
                nextX=headX;
                nextY=headY+1;

            }

            else if(this.direction=="up"){
                nextX=headX;
                nextY=headY-1;
            }
         
            this.cells.unshift({x:nextX,y:nextY});

            var last_X=Math.round(W/cellSize);
            var last_Y=Math.round(H/cellSize);

            if(this.cells[0].y<0 || this.cells[0].x<0 || this.cells[0].y>last_Y || this.cells[0].x>last_X){
                gameOver=true
            }

        },
    };

    snake.createSnake();
    function keyPressed(e){
       // console.log('key Pressed',e.key)

       if(e.key=="ArrowRight"){
           snake.direction="right"
       }
       else if(e.key=="ArrowLeft"){
        snake.direction="left"
       }
       else if(e.key=="ArrowDown"){
        snake.direction="down"
       }
       else if(e.key=="ArrowUp"){
        snake.direction="up"
       }

    };

    document.addEventListener('keydown',keyPressed)

}

function draw(){
    //erase the old frame
    //Ths erases the entire canvas and the snake is then drawn again with the next command
    pen.clearRect(0,0,W,H)
    snake.drawSnake();

    pen.fillStyle=food.color;
    pen.drawImage(food_img,food.x*cellSize,food.y*cellSize,cellSize,cellSize);

    pen.drawImage(trophy_img,20,20,cellSize,cellSize)
    pen.font="30px Roboto"
    pen.fillStyle="blue";
    pen.fillText(score,50,50)

}

function update(){
    snake.updateSnake();
}

function getRandomFood(){
    var foodX=Math.round(Math.random()*(W-cellSize)/cellSize);
    var foodY=Math.round(Math.random()*(H-cellSize)/cellSize);
    var food={
        x:foodX,
        y:foodY,
        color:"red",
    }
    return food;
}

function gameLoop(){

    if(gameOver==true)
    {
        alert("game over")
        clearInterval(f) 
        
        init();
        gameOver=false
        startGame();
        

    }
    draw();
    update();

}

init();
gameOver=false
startGame();
function startGame(){
     f=setInterval(gameLoop,100);
}


