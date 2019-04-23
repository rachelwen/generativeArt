const CRYSTAL_SIZE = 500;
const SIDES = 6;

let PALETTE = [];

const layers = []


function setup(){
  createCanvas(500,500,SVG);
  PALETTE = [
    color(105, 183, 191), //blue
    color(242, 105, 92), //coral
    //color( 2, 83, 115), //darkblue
    //color(191, 177, 105),  //green
  //  color(2, 94, 115), //mediumblue
  ]
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  //createButton("reset");
}

function draw(){
  let picker = random(1)
  if (picker > 0.5){
    layers.push(new OutlineShape())
  }

  picker = random(1)
  if (picker > 0.3){
    layers.push(new SimpleLines())
  }
  picker = random(1)
  if (picker > 0.5){
    layers.push(new Circles())
  }
  picker = random(1)
  if (picker > 0.85){
    layers.push(new DottedLines())
  }

  layers.forEach(layer =>{
    layer.render()
  })

   //////////////////////

   // const dottedLines = new DottedLines()
   // console.log(dottedLines)
   // dottedLines.render()


}
