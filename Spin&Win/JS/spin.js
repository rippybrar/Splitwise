
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

    //event listener
    this.input.on("pointerdown",spinwheel,this);

    font_text={
        font:"bold 50px Roboto",
        align:"center",
        color:"red",

    }

    this.game_text=this.add.text(10,10,"Welcome to Spin and Win",font_text)



}

function update(){

   
       
 //Alpha is used to make object invisible    
  //this.wheel.alpha -=.01
    console.log("Inside Update")
}

function spinwheel(){

    
   // this.wheel.angle +=4  

    let rounds=Phaser.Math.Between(2,4);
     degrees=Phaser.Math.Between(0,11)*30;
    let total_angle=rounds*360 + degrees;

    let prize=["CB Book"," CB TShirt","2 Extra Spins","Amazon Voucher","50% Off",
                "NetFlix","100% Off","SwagPack","70% Off","Hard Luck",
                "35% Off", "3000 Credits"
                ];

    tween=this.tweens.add({
        
        targets:this.wheel,
        angle:total_angle,
        ease:"Cubic.easeOut",
        // scaleX:0.3,
        // scaleY:0.3,
        duration:5000,
        callbackScope:this,
        onComplete:function(){
            this.game_text.setText("You Won "+prize[(degrees/30)])

        }
      
    
    });
  

}
