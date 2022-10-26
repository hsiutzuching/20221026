var mic
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  mic= new p5.AudioIn()
  mic.start()
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  var micLevel=mic.getLevel()
  console.log(micLevel)
  push()
    translate(width/2,height/2)
    ellipse(0,0,400)
    ellipse(0,0,100,50)
    ellipse(-25,0,20)//左鼻孔
    ellipse(25,0,20)//右鼻孔
    
    ellipse(-75,-100,60)
    ellipse(75,-100,60)
    
    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    // if(mouseIsPressed)//如果按下滑鼠會
    // {
    //   fill(255)
    //   arc(0,75,200,150,0,180)
    // }
    // else//否則
    // {
    //   fill(255,0,0)
    //   arc(0,75,200,75,0,180)//嘴巴弧度 上 arc弧度，全嘴唇，pi角度
    // }
    arc(0,75,200,75+micLevel*1000,0,180)
    fill(255)
    arc(0,74,200,50,0,180)//下弧度
  pop()
  



  // ellipse(width/2, height/2, 400)
  // ellipse(width/2,height/2,100,50)
  // ellipse(width/2-25,height/2,20)//左鼻孔
  // ellipse(width/2+25,height/2,20)//右鼻孔

  // ellipse(width/2-75,height/2-100,60)//左眼
  // ellipse(width/2+75,height/2-100,60)//右眼
  // fill(0)
  // ellipse(width/2-75+map(mouseX,0,width,-20,20),height/2-100+map(mouseY,0,height,-20,20),20)//左眼珠，map代表0到螢幕寬度之位置
  // ellipse(width/2+75+map(mouseX,0,width,-20,20),height/2-100+map(mouseY,0,height,-20,20),20)//右眼珠
  // fill(255)


}