var INITIALIZED_7 = false;

var HelloWorldLayer7 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var bg_sprite1 = new cc.Sprite.create(res.bg1_png);
        bg_sprite1.setAnchorPoint(cc.p(.5, 2.4));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite1, 0);

        var bg_sprite2 = new cc.Sprite.create(res.bg2_png);
        bg_sprite2.setAnchorPoint(cc.p(.5, 2.4));
        bg_sprite2.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite2, 1);
        //
        var bg_sprite1 = new cc.Sprite.create(res.bg1_png);
        bg_sprite1.setAnchorPoint(cc.p(.5, 1.7));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite1, 0);

        var bg_sprite2 = new cc.Sprite.create(res.bg2_png);
        bg_sprite2.setAnchorPoint(cc.p(.5, 1.7));
        bg_sprite2.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite2, 1);

      var bg_sprite3 = new cc.Sprite.create(res.bg3_png);
      bg_sprite3.setAnchorPoint(cc.p(.5, .8));
      bg_sprite3.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(bg_sprite3, 1);

        var bg_sprite4 = new cc.Sprite.create(res.bg4_png);
        bg_sprite4.setAnchorPoint(cc.p(.5, -0.12));
        bg_sprite4.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite4, 0);

        var bg_sprite5 = new cc.Sprite.create(res.bg5_png);
        bg_sprite5.setAnchorPoint(cc.p(.5, -1.3));
        bg_sprite5.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite5, 1);

        var warehouse = new cc.Sprite.create(res.ware_png);
        warehouse.setAnchorPoint(cc.p(-.34, -0.2));
        warehouse.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(warehouse, 0);

        var door = new cc.Sprite.create(res.door_png);
        door.setAnchorPoint(cc.p(1.9, -.18));
        door.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(door, 0);

        var storage = new cc.Sprite.create(res.storage_png);
        storage.setAnchorPoint(cc.p(1.5, -.1));
        storage.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(storage, 1);
        

        var elevator = new cc.Sprite.create(res.elevator_png);
        elevator.setAnchorPoint(cc.p(2.5, .85));
        elevator.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(elevator, 1);
        
        var elevatorEnd = new cc.Sprite.create(res.elevatorEnd_png);
        elevatorEnd.setAnchorPoint(cc.p(2.5, 4));
        elevatorEnd.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(elevatorEnd, 1);

        var man = new cc.Sprite.create(res.man_png);
        man.setAnchorPoint(cc.p(3.1, -.6));  //2.7, .2
        man.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(man, 0);
      
        var woman = new cc.Sprite.create(res.woman_png);
        woman.setAnchorPoint(cc.p(-0.8, -.4));
        woman.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(woman, 1);
 

        var cart = new cc.Sprite.create(res.cart_png);
        cart.setAnchorPoint(cc.p(-.8, -1));
        cart.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(cart, 1);


        // var coin = new cc.Sprite.create(res.coin_png);
        // coin.setAnchorPoint(cc.p(2.5, 6.9));
        // coin.setPosition(cc.p(size.width / 2, size.height / 2));
        // this.addChild(coin, 1);

        var box = new cc.Sprite.create(res.box_png);
        box.setAnchorPoint(cc.p(4, 4.3));
        box.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(box, 1);

     var oldDragon = new cc.Sprite.create(res.olddrag1_png);
     oldDragon.setAnchorPoint(cc.p(-.4, 1.5));
     oldDragon.setPosition(cc.p(size.width / 2, size.height / 2));
     this.addChild(oldDragon, 1);

    var oldDragon2 = new cc.Sprite.create(res.olddrag2_png);
    oldDragon2.setAnchorPoint(cc.p(.8, 1.5));
    oldDragon2.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(oldDragon2, 1);

    // var heart = new cc.Sprite.create(res.L1_png);
    // heart.setAnchorPoint(cc.p(.5, .5));
    // heart.setPosition(cc.p(size.width / 2, size.height / 2));
    // this.addChild(heart, 1);

    // var heart2 = new cc.Sprite.create(res.L2_png);
    // heart2.setAnchorPoint(cc.p(.5, .9));
    // heart2.setPosition(cc.p(size.width / 2, size.height / 2));
    // this.addChild(heart2, 1);

    // var heart3 = new cc.Sprite.create(res.L3_png);
    // heart3.setAnchorPoint(cc.p(.8, .5));
    // heart3.setPosition(cc.p(size.width / 2, size.height / 2));
    // this.addChild(heart3, 1);
 
function button(){
    var button = new ccui.Button();
    button.loadTextures(res.breedBtn_png, res.breedBtn_png);
    button.x = size.width / 1.7;
    button.y = size.height / 2;
    button.addTouchEventListener(this.touchEvent, this);
    this.addChild(button,1);
    var btn_action = cc.ScaleTo.create(1, 1.1, 1.1);
    var btn_action2 = cc.ScaleTo.create(1, .9, .95);
    var btn_action3 = cc.ScaleTo.create(1, 1.1, 1.1);
    var btn_action4 = cc.ScaleTo.create(1, .9, .95);
    var btn_action5 = cc.ScaleTo.create(1, 1.1, 1.1);
    var btn_action6 = cc.ScaleTo.create(1, .9, .95);
    sequence_btn2=cc.Sequence.create(btn_action,btn_action2,btn_action3,btn_action4,btn_action5,btn_action6);
    button.runAction(sequence_btn2);
}
this.scheduleOnce(button,1);

// function handbtn(){
//     var hand = new cc.Sprite.create(res.hand_png);
//     hand.setAnchorPoint(cc.p(-.3, 4));
//     hand.setPosition(cc.p(size.width / 2, size.height / 2));
//     this.addChild(hand, 1);        
//     var hand_action =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 6)),20);
//     var hand_action2 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -6)),20);
//     var hand_action3 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 6)),20);
//     var hand_action4 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -6)),20);
//     var hand_action5 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 6)),20);
//     var hand_action6 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -6)),20);
//     //var hand_action2=cc.FadeOut.create(3);  
//     sequence_btn=cc.Sequence.create(hand_action,hand_action2,hand_action3,hand_action4,hand_action5,hand_action6);
//     hand.runAction(sequence_btn);
// }
// this.scheduleOnce(handbtn,1.5);

function handbtn(){
    var hand = new cc.Sprite.create(res.hand_png);
    hand.setAnchorPoint(cc.p(-.4, 1.2));
    hand.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(hand, 1); 
    var sprite_action = cc.ScaleTo.create(1, 1.1, 1.1);
    var sprite_action2 = cc.ScaleTo.create(1, .9, .95);
    var sprite_action3 = cc.ScaleTo.create(1, 1.1, 1.1);
    var sprite_action4 = cc.ScaleTo.create(1, .9, .95);
    var sprite_action5 = cc.ScaleTo.create(1, 1.1, 1.1);
    var sprite_action6 = cc.ScaleTo.create(1, .9, .95);
    var sprite_action7 = cc.ScaleTo.create(1, 1.1, 1.1);
   sequence_btn=cc.Sequence.create(sprite_action,sprite_action2,sprite_action3,sprite_action4,sprite_action5,sprite_action6,sprite_action7);
    hand.runAction(sequence_btn);       
   
 
}
this.scheduleOnce(handbtn,1.5);

    return true;
    },
    remove: function()
    {
    	this.removeChildByTag(0, true);
    },
    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
               play7();

                break;              
        }    
        
    }
});

var play7 = function()
{
    var scene = new HelloWorldScene8();
    cc.director.pushScene(scene);
}


var HelloWorldScene7 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_7 == false)
        {
            INITIALIZED_7 = true;

            var layer = new HelloWorldLayer7();
            this.addChild(layer);
        }
    }
});