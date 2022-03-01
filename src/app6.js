var INITIALIZED_6 = false;

var HelloWorldLayer6 = cc.Layer.extend({
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
        var man_action =cc.Repeat.create(cc.MoveBy.create(2, cc.p(0, -100)),1);  
        //man.runAction(man_action);
        var man_action2 =cc.Repeat.create(cc.MoveBy.create(2, cc.p(0, 100)),1); 
        //man.runAction(man_action2);

      // var delayAction = new cc.DelayTime(2);
      // var sequence = new cc.Sequence(man_action ,delayAction,man_action2);
       //man.runAction(sequence);   

       var woman = new cc.Sprite.create(res.woman_png);
       woman.setAnchorPoint(cc.p(-0.8, -.4));
       woman.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(woman, 1);

        var cartcoin = new cc.Sprite.create(res.coin_png);
        cartcoin.setAnchorPoint(cc.p(-2.2, -6.3));
        cartcoin.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(cartcoin, 1);
        var cartcoin_action =cc.MoveBy.create(10, cc.p(0, 6.4));  
        //cartcoin.runAction(cartcoin_action);

        var cart = new cc.Sprite.create(res.cart_png);
        cart.setAnchorPoint(cc.p(-.8, -1));
        cart.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(cart, 1);

        var coin = new cc.Sprite.create(res.coin_png);
        coin.setAnchorPoint(cc.p(3.9, 6.9));
        coin.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(coin, 1);
        var coin_action =cc.MoveBy.create(10, cc.p(0, 6));  
        coin.runAction(coin_action);

        var box = new cc.Sprite.create(res.box_png);
        box.setAnchorPoint(cc.p(4, 4.3));
        box.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(box, 1);

        function fire(){
  
            var fire = new cc.Sprite.create(res.fire2_png);
            fire.setAnchorPoint(cc.p(.3, 1.1));
            fire.setPosition(cc.p(size.width / 2, size.height / 2));
            this.addChild(fire, 1);
            var fire_action = cc.ScaleTo.create(2,2,2);
            fire.runAction(fire_action);
            fire.setTag(4);
            this.scheduleOnce(this.remove2,1);
      
    }  
    this.scheduleOnce(fire,0) ;  

       var lavaDragon2 = new cc.Sprite.create(res.lava_png);
       lavaDragon2.setAnchorPoint(cc.p(-1.9, 2.3));
       lavaDragon2.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(lavaDragon2, 1);
       lavaDragon2.setOpacity(1);
       var lavaDagon_action2 = cc.FadeIn.create(.1);
       lavaDragon2.runAction(lavaDagon_action2);

       var lava_action2 = cc.Repeat.create(cc.MoveBy.create(2, cc.p(-50, 0)),2); 
       //lavaDragon2.runAction(lava_action2);

function waterDragon(){
    var waterDragon2 = new cc.Sprite.create(res.waterDrag2_png);
    waterDragon2.setAnchorPoint(cc.p(.3, 2.3));
    waterDragon2.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(waterDragon2, 1);
    var water_Action = cc.Repeat.create(cc.MoveBy.create(1, cc.p(-40, 0)),2); 
    waterDragon2.runAction(water_Action);
}
this.scheduleOnce(waterDragon,1);  

function evolve(){

    var button = new ccui.Button();
    button.loadTextures(res.evolveBtn_png, res.evolveBtn_png);
    button.x = size.width / 1.3;
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
this.scheduleOnce(evolve,3);  

// function handbtn(){
//     var hand = new cc.Sprite.create(res.hand_png);
//     hand.setAnchorPoint(cc.p(-2, 4));
//     hand.setPosition(cc.p(size.width / 2, size.height / 2));
//     this.addChild(hand, 1);       
//     var hand_action =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 5.7)),20);
//     var hand_action2 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -5.7)),20);
//     var hand_action3 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 5.7)),20);
//     var hand_action4 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -5.7)),20);
//     var hand_action5 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 5.7)),20);
//     var hand_action6 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -5.7)),20);
//    // var hand_action2=cc.FadeOut.create(3);  
//     sequence_btn=cc.Sequence.create(hand_action,hand_action2,hand_action3,hand_action4,hand_action5,hand_action6);
//     hand.runAction(sequence_btn);
// }
// this.scheduleOnce(handbtn,3.5);
function handbtn(){
    var hand = new cc.Sprite.create(res.hand_png);
    hand.setAnchorPoint(cc.p(-2, 1.2));
    hand.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(hand, 1);
    var sprite_action = cc.ScaleTo.create(1, 1.1, 1.1);
    var sprite_action2 = cc.ScaleTo.create(1, .9, .95);
    var sprite_action3 = cc.ScaleTo.create(1, 1.1, 1.1);
    var sprite_action4 = cc.ScaleTo.create(1, .9, .95);
    var sprite_action5 = cc.ScaleTo.create(1, 1.1, 1.1);
    var sprite_action6 = cc.ScaleTo.create(1, .9, .95);
    var sprite_action7 = cc.ScaleTo.create(1, 1, 1);
    sequence_btn=cc.Sequence.create(sprite_action,sprite_action2,sprite_action3,sprite_action4,sprite_action5,sprite_action6,sprite_action7);
    hand.runAction(sequence_btn);       
    
}
this.scheduleOnce(handbtn,3.5);
    return true;
    },
    remove: function()
    {
    	this.removeChildByTag(0, true);
    },
    remove2: function()
    {
    	
        this.removeChildByTag(4, true);

    },
    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
                play6();

                break;              
        }
        
    }
});

var play6 = function()
{
    var scene = new HelloWorldScene7();
    cc.director.pushScene(scene);
}



var HelloWorldScene6 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_6 == false)
        {
            INITIALIZED_6 = true;

            var layer = new HelloWorldLayer6();
            this.addChild(layer);
        }
    }
});