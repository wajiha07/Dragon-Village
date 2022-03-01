var INITIALIZED_4 = false;

var HelloWorldLayer4 = cc.Layer.extend({
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
        this.addChild(man, 1);

        var woman = new cc.Sprite.create(res.woman_png);
        woman.setAnchorPoint(cc.p(-0.8, -.4));
        woman.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(woman, 1);

        var cart = new cc.Sprite.create(res.cart_png);
        cart.setAnchorPoint(cc.p(1.8, -1));
        cart.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(cart, 1);

function coin()
        {
        var coin = new cc.Sprite.create(res.coin_png);
        coin.setAnchorPoint(cc.p(4, 6.6));//9
        coin.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(coin, 1);
        }

        var box = new cc.Sprite.create(res.box_png);
        box.setAnchorPoint(cc.p(4, 4.3));
        box.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(box, 1);
function fire(){
  
        var fire = new cc.Sprite.create(res.fire_png);
       // fire.setAnchorPoint(cc.p(.3, 1.9));
        fire.setAnchorPoint(cc.p(.3, 1.2));
        fire.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(fire, 1);
        var fire_action = cc.ScaleTo.create(2,2,2);
        fire.runAction(fire_action);
        fire.setTag(4);
        this.scheduleOnce(this.remove2,1);


}   
this.scheduleOnce(fire,0) ;  
function dright()
       {
        var dright= new cc.Sprite.create(res.lava2_png);
        dright.setAnchorPoint(cc.p(.3, 2.3));
        dright.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(dright, 1);
        var right_action1 = cc.Repeat.create(cc.MoveBy.create(1, cc.p(58, 0)),2); //29 2
        dright.runAction(right_action1);
        dright.setTag(0); 
        this.scheduleOnce(this.remove, 4);//5
        }

function dleft()
       {
       var dleft= new cc.Sprite.create(res.lava_png);
       dleft.setAnchorPoint(cc.p(-.8, 2.3));
       dleft.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(dleft, 1);
       var left_action1 = cc.Repeat.create(cc.MoveBy.create(1, cc.p(-68, 0)),2);
       var left_action2 = cc.FadeOut.create(100);
       var sequence_left= cc.Sequence.create(left_action1,left_action2); 
       dleft.runAction(sequence_left);
       // dleft.runAction(left_action1);

        }
        this.scheduleOnce(dright,1);
        this.scheduleOnce(dleft,5); //6
        this.scheduleOnce(coin,7);//10
   
    
    var button = new ccui.Button();
    button.loadTextures(res.door_png, res.door_png);
    button.x = size.width / 6;
    button.y = size.height / 1.5;
    button.addTouchEventListener(this.touchEvent, this);
    this.addChild(button,0);

//  function btn(){
//     var hand = new cc.Sprite.create(res.hand_png);
//     hand.setAnchorPoint(cc.p(3.5, 1.2));
//     hand.setPosition(cc.p(size.width / 2, size.height / 2));
//     this.addChild(hand, 1);       
//     var hand_action =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 5 )),20);
//     var hand_action2 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -5 )),20);
//     var hand_action3 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 5 )),20);
//     var hand_action4 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -5 )),20);
//     var hand_action5 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 5 )),20);
//     var hand_action6 =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, -5 )),20);
//     sequence_btn=cc.Sequence.create(hand_action,hand_action2,hand_action3,hand_action4,hand_action5,hand_action6);
//     hand.runAction(sequence_btn);
//     }

//     this.scheduleOnce(btn,8);

function btn(){
    var hand = new cc.Sprite.create(res.hand_png);
    hand.setAnchorPoint(cc.p(3.2, -1));
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

    this.scheduleOnce(btn,8);

    return true;
    },
    remove: function()
    {
    	//this.removeAllChildren(true);
    	this.removeChildByTag(0, true);
      //  this.removeChildByTag(4, true);

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
               play4();
                break;              
        }
        
    }
});
var play4 = function()
{
    var scene = new HelloWorldScene5();
    cc.director.pushScene(scene);
}



var HelloWorldScene4 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_4 == false)
        {
            INITIALIZED_4 = true;

            var layer = new HelloWorldLayer4();
            this.addChild(layer);
        }
    }
});