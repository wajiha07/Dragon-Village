var INITIALIZED_3 = false;

var HelloWorldLayer3 = cc.Layer.extend({
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
        buyDrag0.setAnchorPoint(cc.p(-.9, .5));
        buyDrag0.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(buyDrag0, 1);   
        var buyDrag0_action1 = cc.Repeat.create(cc.MoveBy.create(.05, cc.p(0, 0)),15);
        var buyDrag0_action2 = cc.Repeat.create(cc.MoveBy.create(.05, cc.p(-5, 0)),15);
        var sequence_dragon0= cc.Sequence.create(buyDrag0_action1,buyDrag0_action2);
       // buyDrag0.runAction(sequence_dragon0); 

        var buyDrag1 = new cc.Sprite.create(res.buyDrag1_png);
        buyDrag1.setAnchorPoint(cc.p(.5, .5));
        buyDrag1.setPosition(cc.p(size.width / 2, size.height / 2));
       // this.addChild(buyDrag1, 1);
        buyDrag1.setScale(1.18);
       //var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),63);
      // var buyDrag1_action3 = cc.ScaleBy.create(0.5,1.15,1.15);
        var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.03, cc.p(0, 0)),25);
        var buyDrag1_action4 = cc.ScaleBy.create(0.3,1.15,1.15);
        var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.03, cc.p(-5, 0)),57);
        var sequence_dragon1= cc.Sequence.create(buyDrag1_action2,buyDrag1_action4,buyDrag1_action5);
        buyDrag1.runAction(sequence_dragon1); 
function work2()
{        var buyDrag1 = new cc.Sprite.create(res.buyDrag1_png);
        buyDrag1.setAnchorPoint(cc.p(-.8, .5));
        buyDrag1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(buyDrag1, 1);
        buyDrag1.setScale(1.18);
       var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
       var buyDrag1_action3 = cc.ScaleBy.create(0.5,1.15,1.15);
        var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
      //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
        var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
        var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
        buyDrag1.runAction(sequence_dragon1);
}
this.scheduleOnce(work2,0);

function work3()
{        var buyDrag1 = new cc.Sprite.create(res.buyDrag3_png);
        buyDrag1.setAnchorPoint(cc.p(-.8, .5));
        buyDrag1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(buyDrag1, 1);
        buyDrag1.setScale(1.18);
       var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
       var buyDrag1_action3 = cc.ScaleBy.create(0.5,1.15,1.15);
        var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
      //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
        var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
        var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
        buyDrag1.runAction(sequence_dragon1);
}
//this.scheduleOnce(work3,3);

       var buyDrag2 = new cc.Sprite.create(res.buyDrag2_png);
       buyDrag2.setAnchorPoint(cc.p(-.75, .5));
       buyDrag2.setPosition(cc.p(size.width / 2, size.height / 2));
     //  this.addChild(buyDrag2, 1);
       var buyDrag2_action1 = cc.Repeat.create(cc.MoveBy.create(.04, cc.p(0, 0)),25);
      // var buyDrag2_action3 = cc.ScaleBy.create(0.2,1.15,1.15); //
       var buyDrag2_action2 = cc.Repeat.create(cc.MoveBy.create(.04, cc.p(-5, 0)),70);
       var buyDrag2_action4 = cc.ScaleBy.create(0.9,1.45,1.45); //
       var buyDrag2_action5 = cc.Repeat.create(cc.MoveBy.create(.05, cc.p(-5, 0)),46);
       var sequence_dragon2= cc.Sequence.create(buyDrag2_action1,buyDrag2_action2,buyDrag2_action4,buyDrag2_action5);
       buyDrag2.runAction(sequence_dragon2); 


       var buyDrag3 = new cc.Sprite.create(res.buyDrag3_png);
       buyDrag3.setAnchorPoint(cc.p(-4, .5));
       buyDrag3.setPosition(cc.p(size.width / 2, size.height / 2));
      // this.addChild(buyDrag3, 1);
       var buyDrag3_action1 = cc.Repeat.create(cc.MoveBy.create(.013, cc.p(-5, 0)),111);
      // var buyDrag3_action2 = cc.Repeat.create(cc.MoveBy.create(.04, cc.p(0, 0)),25); //
      // var buyDrag3_action4 = cc.ScaleBy.create(1.5,1.35,1.35);//
       //var buyDrag3_action3 = cc.Repeat.create(cc.MoveBy.create(.01, cc.p(-5, 0)),71);//
       var sequence_dragon3= cc.Sequence.create(buyDrag3_action1);
      buyDrag3.runAction(sequence_dragon3);

       
        // var button = new ccui.Button();
        // button.loadTextures(res.buyDrag1_png, res.buyDrag1_png);
        // button.x = size.width / 2;
        // button.y = size.height / 2;
        // button.addTouchEventListener(this.touchEvent, this);
        // this.addChild(button,1);

        function btn(){

        
            var button = new ccui.Button();
            button.loadTextures(res.buyDrag2_png, res.buyDrag2_png);
            button.setAnchorPoint(cc.p(.5,.5));
            button.x = size.width / 2;
            button.y = size.height / 2;
            button.addTouchEventListener(this.touchEvent, this);
            this.addChild(button);
            }
           // this.scheduleOnce(btn,0); //6


        function btn(){

        
        var button = new ccui.Button();
        button.loadTextures(res.buyDrag2_png, res.buyDrag2_png);
        button.setAnchorPoint(cc.p(-.8,.5));
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);
        button.setScale(1.18);
        var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
        var buyDrag1_action3 = cc.ScaleBy.create(0.5,1.15,1.15);
         var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
       //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
         var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
         var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
         button.runAction(sequence_dragon1);
 }
 this.scheduleOnce(btn,3);
        
       // this.scheduleOnce(btn,0); //6


        var button2 = new ccui.Button();
        button2.loadTextures(res.next_png, res.next_png);
        button2.setAnchorPoint(cc.p(-1.3,4));
        button2.x = size.width / 2;
        button2.y = size.height / 2;
        button2.addTouchEventListener(this.touchEventnext, this);
      //  this.addChild(button2);


        // var hand = new cc.Sprite.create(res.hand_png);
        // hand.setAnchorPoint(cc.p(.1, 5.5));
        // hand.setPosition(cc.p(size.width / 2, size.height / 2));
        // this.addChild(hand, 1);        
        // var hand_action =cc.Repeat.create(cc.MoveBy.create(0.04, cc.p(0, 3)),20);
        // var hand_action2=cc.FadeOut.create(3);  
        // sequence_btn=cc.Sequence.create(hand_action,hand_action2);
        //hand.runAction(sequence_btn);

        return true;
    },
    touchEventnext: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:        ///NEXT
                cc.log("Touch Down next");
                next();
                

                break;              
        }
        
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

var next = function()
{
    var scene = new HelloWorldScene3next();
    cc.director.pushScene(scene);
}



var HelloWorldScene3 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_3 == false)
        {
            INITIALIZED_3 = true;

            var layer = new HelloWorldLayer3();
            this.addChild(layer);
        }
    }
});