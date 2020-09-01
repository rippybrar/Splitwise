
function init(){
    canvas=document.getElementById("mycanvas");
    W=canvas.width=700;
    H=canvas.height=700;
    pen=canvas.getContext('2d');
    cs=50;

    snake={
        init_len:4,
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
        }
    };

    snake.createSnake();

}

function draw(){
    snake.drawSnake();
}

function update(){

}

function gameLoop(){
    draw();

}

init();
var f=setInterval(gameLoop,100);

