var INITIALIZED_3next = false;

var HelloWorldLayer3next = cc.Layer.extend({
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

        var bg_sprite1 = new cc.Sprite.create(res.blar_png);
        bg_sprite1.setAnchorPoint(cc.p(.5, .5));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite1, 0);

        var buyDrag0 = new cc.Sprite.create(res.buyDrag1_png);
        buyDrag0.setAnchorPoint(cc.p(1.77, .5));
        buyDrag0.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(buyDrag0, 1);   
        var buyDrag0_action1 = cc.Repeat.create(cc.MoveBy.create(.05, cc.p(0, 0)),15);
        var buyDrag0_action2 = cc.Repeat.create(cc.MoveBy.create(.05, cc.p(-5, 0)),15);
        var sequence_dragon0= cc.Sequence.create(buyDrag0_action1,buyDrag0_action2);
        buyDrag0.runAction(sequence_dragon0); 

        var buyDrag1 = new cc.Sprite.create(res.buyDrag2_png);
        buyDrag1.setAnchorPoint(cc.p(.5, .5));
        buyDrag1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(buyDrag1, 1);
        buyDrag1.setScale(1.18);
      //  var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),63);
       // var buyDrag1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
        var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.03, cc.p(0, 0)),25);
        var buyDrag1_action4 = cc.ScaleBy.create(0.3,1.15,1.15);
        var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),57);
        var sequence_dragon1= cc.Sequence.create(buyDrag1_action2,buyDrag1_action4,buyDrag1_action5);
        buyDrag1.runAction(sequence_dragon1); 

       var buyDrag2 = new cc.Sprite.create(res.buyDrag2_png);
       buyDrag2.setAnchorPoint(cc.p(-.75, .5));
       buyDrag2.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(buyDrag2, 1);
       var buyDrag2_action1 = cc.Repeat.create(cc.MoveBy.create(.04, cc.p(0, 0)),25);
     //  var buyDrag2_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
       var buyDrag2_action2 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),65);
       var buyDrag2_action4 = cc.ScaleBy.create(0.2,1.45,1.45);
    //    var buyDrag2_action5 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),46);
       var sequence_dragon2= cc.Sequence.create(buyDrag2_action1,buyDrag2_action2,buyDrag2_action4);
       buyDrag2.runAction(sequence_dragon2); 


       var buyDrag3 = new cc.Sprite.create(res.buyDrag3_png);
       buyDrag3.setAnchorPoint(cc.p(-4, .5));
       buyDrag3.setPosition(cc.p(size.width / 2, size.height / 2));
       this.addChild(buyDrag3, 1);
       var buyDrag3_action1 = cc.Repeat.create(cc.MoveBy.create(.013, cc.p(-5, 0)),112);
    //    var buyDrag3_action2 = cc.Repeat.create(cc.MoveBy.create(.04, cc.p(0, 0)),25);
    //    var buyDrag3_action4 = cc.ScaleBy.create(0.2,1.15,1.15);
    //    var buyDrag3_action3 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),71);
       var sequence_dragon3= cc.Sequence.create(buyDrag3_action1);
        buyDrag3.runAction(sequence_dragon3);

       
        // var button = new ccui.Button();
        // button.loadTextures(res.buyDrag1_png, res.buyDrag1_png);
        // button.x = size.width / 2;
        // button.y = size.height / 2;
        // button.addTouchEventListener(this.touchEvent, this);
        // this.addChild(button,1);

        var button = new ccui.Button();
        button.loadTextures(res.buyDrag1_png, res.buyDrag1_png);
        button.setAnchorPoint(cc.p(.5,.5));
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        //this.addChild(button);

        var button2 = new ccui.Button();
        button2.loadTextures(res.buyDrag1_png, res.buyDrag1_png);
        button2.setAnchorPoint(cc.p(-1.3,4));
        button2.x = size.width / 2;
        button2.y = size.height / 2;
        button2.addTouchEventListener(this.touchEvent, this);
      //  this.addChild(button2);


        var hand = new cc.Sprite.create(res.hand_png);
        hand.setAnchorPoint(cc.p(.1, 5.5));
        hand.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(hand, 1);        
        var hand_action =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 3)),20);
        var hand_action2=cc.FadeOut.create(3);  
        sequence_btn=cc.Sequence.create(hand_action,hand_action2);
        //hand.runAction(sequence_btn);

        return true;
    },
    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
                play3();
                

                break;              
        }
        
    }
});

var play3 = function()
{
    var scene = new HelloWorldScene4();
    cc.director.pushScene(scene);
}



var HelloWorldScene3next = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_3next == false)
        {
            INITIALIZED_3next = true;

            var layer = new HelloWorldLayer3next();
            this.addChild(layer);
        }
    }
});