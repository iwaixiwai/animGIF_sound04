// Variables to store the GIFs
let anim1;
let anim2;
let anim3;
let anim4;
let anim5;
let anim6;
let anim7;
let anim8;

let ww;
let wh;

function preload() 
{
  /*
  anim1 = loadImage("tile320.jpg");
  anim2 = loadImage("tile320.jpg");
  anim3 = loadImage("tile320.jpg");
  anim4 = loadImage("tile320.jpg");
  anim5 = loadImage("tile320.jpg");
  anim6 = loadImage("tile320.jpg");
  anim7 = loadImage("tile320.jpg");
  anim8 = loadImage("tile320.jpg");
*/
  anim1 = loadImage("アニメstar02.gif");
  anim2 = loadImage("アニメstar02.gif");
  anim3 = loadImage("アニメstar02.gif");
  anim4 = loadImage("アニメstar02.gif");
  anim5 = loadImage("アニメstar02.gif");
  anim6 = loadImage("アニメstar02.gif");
  anim7 = loadImage("アニメstar02.gif");
  anim8 = loadImage("アニメstar02.gif");
  
  sound01 = loadSound('001.WAV');
  sound03 = loadSound('003.WAV');
  sound05 = loadSound('005.WAV');
  sound06 = loadSound('006.WAV');
  sound08 = loadSound('008.WAV');
  sound10 = loadSound('010.WAV');
  sound12 = loadSound('012.WAV');
  sound13 = loadSound('013.WAV');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  ww = windowWidth;
  wh = windowHeight;
}

function draw() 
{
  background(255);
  
  stroke(200,200,200);
  line(ww/2, 0, ww/2, wh);
  line(0, wh/4, ww, wh/4);
  line(0, wh/2, ww, wh/2);
  line(0, wh/4*3, ww, wh/4*3);
  
  push();
  translate(ww/8,wh/8);
  rotate(radians(-90));
  scale(0.5);
  imageMode(CENTER);//アンカーポイントをセンターに
  image(anim1, 0, 0);
  pop();
  
  push();
  translate(ww/8,wh/8*3);
  rotate(radians(-90));
  scale(0.5);
  imageMode(CENTER);
  image(anim2, 0, 0);
  pop();

  push();
  translate(ww/8,wh/8*5);
  rotate(radians(-90));
  scale(0.5);
  imageMode(CENTER);
  image(anim3, 0, 0);
  pop();

  push();
  translate(ww/8,wh/8*7);
  rotate(radians(-90));
  scale(0.5);
  imageMode(CENTER);
  image(anim4, 0, 0);
  pop();
  push();
  
  translate(ww/8*7,wh/8);
  rotate(radians(180));
  scale(0.5);
  imageMode(CENTER);//アンカーポイントをセンターに
  image(anim5, 0, 0);
  pop();
  
  push();
  translate(ww/8*7,wh/8*3);
  rotate(radians(180));
  scale(0.5);
  imageMode(CENTER);
  image(anim6, 0, 0);
  pop();

  push();
  translate(ww/8*7,wh/8*5);
  rotate(radians(180));
  scale(0.5);
  imageMode(CENTER);
  image(anim7, 0, 0);
  pop();

  push();
  translate(ww/8*7,wh/8*7);
  rotate(radians(180));
  scale(0.5);
  imageMode(CENTER);
  image(anim8, 0, 0);
  pop();
}

// On mouse click
function mousePressed() 
{
  if(mouseX>0 && mouseX<ww/2)
  {
    if(mouseY>0 && mouseY<wh/4)
    {
      anim1.setFrame(0); //Set frame to 0
      anim1.play(); // Play
      sound12.play();
    }

    if(mouseY>wh/4 && mouseY<wh/4*2)
    {
      anim2.setFrame(0);
      anim2.play();
      sound08.play();
    }

    if(mouseY>wh/4*2 && mouseY<wh/4*3)
    {
      anim3.setFrame(0);
      anim3.play();
      sound05.play();
    }

    if(mouseY>wh/4*3 && mouseY<wh/4*4)
    {
      anim4.setFrame(0);
      anim4.play();
      sound01.play();
    }
  }

  if(mouseX>ww/2 && mouseX<ww)
  {
    if(mouseY>0 && mouseY<wh/4)
    {
      anim5.setFrame(0); //Set frame to 0
      anim5.play(); // Play
      sound13.play();
    }

    if(mouseY>wh/4 && mouseY<wh/4*2)
    {
      anim6.setFrame(0);
      anim6.play();
      sound10.play();
    }

    if(mouseY>wh/4*2 && mouseY<wh/4*3)
    {
      anim7.setFrame(0);
      anim7.play();
      sound06.play();
    }

    if(mouseY>wh/4*3 && mouseY<wh/4*4)
    {
      anim8.setFrame(0);
      anim8.play();
      sound03.play();
    }
  }
}