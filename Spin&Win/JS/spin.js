
let config ={
    type:Phaser.CANVAS,
    width:1000,
    height:1000,
    backgroundColor:0xffcc00,
    
    scene:{
        preload: preload,
        create:create,
        update:update,
        
    }

}

let game =new Phaser.Game(config);

function preload(){
    console.log("Inside Preload")
   // console.log(this)
   this.load.image("background","../Images/back.jpg")
   this.load.image("wheel","../Images/wheel.png")
   this.load.image("stand","../Images/stand.png")
   this.load.image("pin","../Images/pin.png")
}



function create(){
    console.log("Inside Create")
    
    let W=game.config.width;
    let H=game.config.height;
    // this.add.sprite(W/2,H/2,"background")
    let background=this.add.sprite(0,0,"background")
    background.setPosition(W/2,H/2)
   // background.setSize(5)

    let pin= this.add.sprite(W/2,H/2-250,"pin")
    pin.setScale(0.25)
    pin.depth=1

    let stand=this.add.sprite(W/2,H/2+250,"stand")
    stand.setScale(0.25)
    
    
    this.wheel=this.add.sprite(W/2,H/2,"wheel")
    this.wheel.setScale(0.25)
    console.log(this.wheel)



}

function update(){

    

    console.log("Inside Update")
}
