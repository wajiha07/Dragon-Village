var INITIALIZED = false;

var HelloWorldLayer = cc.Layer.extend({
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
        bg_sprite1.setAnchorPoint(cc.p(.5, .8));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite1, 0);

        var bg_sprite2 = new cc.Sprite.create(res.bg2_png);
        bg_sprite2.setAnchorPoint(cc.p(.5, .8));
        bg_sprite2.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite2, 1);

        var bg_sprite1 = new cc.Sprite.create(res.bg1_png);
        bg_sprite1.setAnchorPoint(cc.p(.5, 1.5));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(bg_sprite1, 0);/////

        var bg_sprite2 = new cc.Sprite.create(res.bg2_png);
        bg_sprite2.setAnchorPoint(cc.p(.5, 1.5));
        bg_sprite2.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite2, 1);///

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
      
        var man = new cc.Sprite.create(res.man_png);
        man.setAnchorPoint(cc.p(3.1, -.6));  //2.7, .2
        man.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(man, 0);

        var woman = new cc.Sprite.create(res.woman_png);
        woman.setAnchorPoint(cc.p(-0.8, -.4));
        woman.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(woman, 1);

        var cart = new cc.Sprite.create(res.cart_png);
        cart.setAnchorPoint(cc.p(1.8, -1));
        cart.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(cart, 1);

        var button2 = new ccui.Button();
        button2.loadTextures(res.buildMine_png, res.buildMine_png);
        button2.x = size.width / 2;
        button2.y = size.height / 2.5;
        button2.addTouchEventListener(this.touchEvent, this);
      //  this.addChild(button2,1);

function button(){
        var button = new ccui.Button();
        button.loadTextures(res.buildMine_png, res.buildMine_png);
        button.x = size.width / 2;
        button.y = size.height / 2.5;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button,1);
        button_action = cc.MoveBy.create(.09, cc.p(12, 0));
        button_action2 = cc.MoveBy.create(.09, cc.p(-12, 0));
        button_action3 = cc.MoveBy.create(.09, cc.p(12, 0));
        button_action4 = cc.MoveBy.create(.09, cc.p(-12, 0));
        var sequence5 = new cc.Sequence(button_action,button_action2,button_action3,button_action4);
        button.runAction(sequence5);
}
this.scheduleOnce(button,0);

// function hand(){
        
//         var hand = new cc.Sprite.create(res.hand_png);
//         hand.setAnchorPoint(cc.p(.5, 5));
//         hand.setPosition(cc.p(size.width / 2, size.height / 2));
//     //    this.addChild(hand, 1);        
//         var hand_action =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 4)),20);
//         var hand_action2 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -4)),20);
//         var hand_action3 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 4)),20);
//         var hand_action4 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -4)),20);
//         var hand_action5 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 4)),20);
//         var hand_action6 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -4)),20); 
//         sequence_btn=cc.Sequence.create(hand_action,hand_action2,hand_action3,hand_action4,hand_action5,hand_action6);
//        // hand.runAction(hand_action);
//        hand.runAction(sequence_btn);
//}
//this.scheduleOnce(hand,1.5);

function hand(){
        
    var hand = new cc.Sprite.create(res.hand_png);
    hand.setAnchorPoint(cc.p(.2, 3.2));
    hand.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(hand, 1);        
   // hand.runAction(hand_action);
   var sprite_action = cc.ScaleTo.create(1, 1.1, 1.1);
   var sprite_action2 = cc.ScaleTo.create(1, .9, .95);
   var sprite_action3 = cc.ScaleTo.create(1, 1.1, 1.1);
   var sprite_action4 = cc.ScaleTo.create(1, .9, .95);
   var sprite_action5 = cc.ScaleTo.create(1, 1.1, 1.1);
   var sprite_action6 = cc.ScaleTo.create(1, .9, .95);
   var sprite_action7 = cc.ScaleTo.create(1, 1, 1);
   sequence_btn=cc.Sequence.create(sprite_action,sprite_action2,sprite_action3,sprite_action4,sprite_action5,sprite_action6,sprite_action7);
   hand.runAction(sequence_btn); 
 //  hand.runAction(sequence_btn);
//    hand.setTag(0); 
//    this.scheduleOnce(this.remove, 1.6);
 
}
this.scheduleOnce(hand,1.5);

     cc.audioEngine.playMusic(res.Main_Music, false); 

        return true;
    },
    remove: function()
    {
    	this.removeChildByTag(0, true);
    },
    /////////////
    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
                play();
                

                break;              
        }
        
    }
});

var play = function()
{
    var scene = new HelloWorldScene2();
    cc.director.pushScene(scene);
}
// var HelloWorldScene = cc.Scene.extend({
//     onEnter:function () {
//         this._super();
//         var layer = new HelloWorldLayer();
//         this.addChild(layer);
//     }
// });
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if (INITIALIZED == false)
        {
        	INITIALIZED = true;

        	var layer = new HelloWorldLayer();
        	this.addChild(layer);
        }
    }
});

