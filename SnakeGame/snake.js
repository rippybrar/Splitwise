
function init(){
    canvas=document.getElementById("mycanvas");
    W=canvas.width=1000;
    H=canvas.height=1000;
    pen=canvas.getContext('2d');
    cs=66;
    food=getRandomFood();
    gameOver=false
    


    snake={
        init_len:6,
        color:"blue",
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
            pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2)
            }
        },

        updateSnake:function(){

            var headX=this.cells[0].x;
            var headY=this.cells[0].y;

            if(headX==food.x && headY==food.y)
            {
                console.log("food eaten")
                food=getRandomFood();
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

            var last_X=Math.round(W/cs);
            var last_Y=Math.round(H/cs);

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
    pen.fillRect(food.x*cs,food.y*cs,cs,cs)

}

function update(){
    snake.updateSnake();
}

function getRandomFood(){
    var foodX=Math.round(Math.random()*(W-cs)/cs);
    var foodY=Math.round(Math.random()*(H-cs)/cs);
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
        clearInterval(f) 
        alert("game over")
    }
    draw();
    update();

}

init();
var f=setInterval(gameLoop,100);

