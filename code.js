var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f1780be4-a7d4-4ace-b058-28ef7f118f18","cbaa9e7c-4fac-4a85-8b31-e0aa1eadf2e6","d5ea2331-8b51-4603-acfc-d4f1de68495b","66304d6e-7a8f-4e8b-a059-d6407b5bfdc5","167574d9-32d2-4c39-b141-1a8b6e463745"],"propsByKey":{"f1780be4-a7d4-4ace-b058-28ef7f118f18":{"sourceSize":{"x":225,"y":225},"frameSize":{"x":225,"y":225},"frameCount":1,"frameDelay":12,"name":"goal2","sourceUrl":null,"size":4579,"version":"R8kEhNhlAKnIKqHH3c1Bfbt3WnaCILWM","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/f1780be4-a7d4-4ace-b058-28ef7f118f18.png"},"cbaa9e7c-4fac-4a85-8b31-e0aa1eadf2e6":{"sourceSize":{"x":225,"y":225},"frameSize":{"x":225,"y":225},"frameCount":1,"frameDelay":4,"name":"goal1","sourceUrl":"assets/v3/animations/Zetg6irSILdRl4Wb1aQx9uCOxIRBjWbQABj0636LLvM/cbaa9e7c-4fac-4a85-8b31-e0aa1eadf2e6.png","size":4579,"version":"KaQIu5vbODMn0AU6bvNOfsx2MkxrX76Y","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/Zetg6irSILdRl4Wb1aQx9uCOxIRBjWbQABj0636LLvM/cbaa9e7c-4fac-4a85-8b31-e0aa1eadf2e6.png"},"d5ea2331-8b51-4603-acfc-d4f1de68495b":{"name":"ball","categories":["sports"],"frameCount":4,"frameSize":{"x":393,"y":394},"looping":true,"frameDelay":60,"jsonLastModified":"2021-01-05 19:36:33 UTC","pngLastModified":"2021-01-05 19:36:30 UTC","version":"vReYbFtuQMERems_V1m58pAT7d.vmMJH","sourceUrl":null,"sourceSize":{"x":786,"y":788},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/d5ea2331-8b51-4603-acfc-d4f1de68495b.png"},"66304d6e-7a8f-4e8b-a059-d6407b5bfdc5":{"sourceSize":{"x":231,"y":218},"frameSize":{"x":231,"y":218},"frameCount":1,"frameDelay":12,"name":"player","sourceUrl":null,"size":4593,"version":"iJioTDo_pN5Hdh73dkC7A4vzWuH9nDbh","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/66304d6e-7a8f-4e8b-a059-d6407b5bfdc5.png"},"167574d9-32d2-4c39-b141-1a8b6e463745":{"sourceSize":{"x":231,"y":218},"frameSize":{"x":231,"y":218},"frameCount":1,"frameDelay":12,"name":"player2","sourceUrl":null,"size":4593,"version":"uI3cxH_PmFlpWSrireWIBHLjMWOU9XmZ","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/167574d9-32d2-4c39-b141-1a8b6e463745.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1=createSprite(200,40,100,10);
goal1.setAnimation("goal1");
goal1.scale=0.5;

var goal2 = createSprite(200,370,100,10);
goal2.setAnimation("goal2");
goal2.scale=0.5;

var playerScore = 0;
var compScore = 0;

var computerPaddle=createSprite(200,100,90,30);
computerPaddle.shapeColor="red";
computerPaddle.setAnimation("player2");
computerPaddle.scale=0.2;

var player1=createSprite(200,300,50,30);
player1.setAnimation("player");
player1.scale=0.2;

var ball=createSprite(200,200,10,10);
ball.shapeColor="red";


function draw() {
background("grey");

if(keyDown("RIGHT_ARROW")){
  player1.velocityX=7;
  player1.velocityY=0;
}

if(keyDown("LEFT_ARROW")){
  player1.velocityX=-7;
  player1.velocityY=0;
}

computerPaddle.x = ball.x;

if(ball.isTouching(goal1)||(ball.isTouching(goal2))){
  ball.x=200;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0; 
}





  if(keyDown("ENTER")){  
  ball.velocityX=10;
  ball.velocityY=-5;
  }  
    
    

for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
} 

createEdgeSprites();
ball.bounceOff(edges);
ball.bounceOff(player1);
ball.bounceOff(computerPaddle);
player1.bounceOff(edges);
computerPaddle.bounceOff(edges);
  drawSprites();  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
