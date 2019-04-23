class Layer{
  constructor(){
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / this.stepsOut)
    this.thinStroke = 1
    this.thickStroke = 3
    this.strokeColor = getRandomFromPallette()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }
}

class Circles extends Layer {
  constructor() {
    super()
    this.shapeSize = (CRYSTAL_SIZE/2) * 0.93
    this.position = (CRYSTAL_SIZE/2) - (this.shapeSize /2)
  }
  render(){
    noFill();
    stroke(this.strokeColor)
    strokeWeight(1)
    push()
    translate(width/2, height/2);
    for(let i = 0; i<this.numShapes; i++){
      ellipse(this.position,0, this.shapeSize, this.shapeSize)
      rotate (this.angle);
    }
    pop()
  }
}

class SimpleLines extends Layer{
  constructor(){
    super()
    this.stepsOut = 8
    this.numSteps = randomSelectTwo ? this.stepsOut : int(this.stepsOut * 1.25)
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps
    this.start = floor(random(0,this.numSteps))
    this.stop = floor(random(this.start,this.numSteps + 1))
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
    this.angle = 360 / this.numShapes
  }
  render(){
    noFill();
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
    translate(width/2, height/2);

    for(let i = 0; i<this.numShapes; i++){
      line(this.start * this.step, 0, this.stop * this.step ,0);
      rotate (this.angle);
    }
    pop()
  }
}

class OutlineShape extends Layer{
  constructor(){
    super()
    this.weight = randomSelectTwo() ? 1 : 3
    this.hexagonTrue = randomSelectTwo()

  }
  render(){
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
    translate(width/2,height/2)

    if(this.hexagonTrue){
      hexagon(0,0, CRYSTAL_SIZE/2)
    }else{
    ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE)
  }
    pop()
  }
}

class TestLines extends Layer{
  constructor(){
    super()
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2

  }
  render(){
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.weight)
    push()
    translate(width/2, height/2);
    ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);

    stroke(this.strokeColor);
    //const angle = 360/numShapes;
    for(let i = 0; i<this.numShapes; i++){
      line(0,0,0,CRYSTAL_SIZE/2);
      rotate (this.angle);
    }
    pop()
  }
}

class DottedLines extends Layer {
  constructor() {
    super()
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
    this.angle = 360 / this.numShapes
    this.shapeSize = 3
    this.centerOffset = this.singleStep
  }
  render(){
    fill(this.strokeColor)
    noStroke()
    push()
    translate(width / 2, height / 2)
    for (let i = 0; i <=this.numShapes; i++){
      for(let x = this.centerOffset; x < CRYSTAL_SIZE; x += this.singleStep){
        rect(x, 0, this.shapeSize, this.shapeSize)
      }
      rotate(this.angle)
    }
    pop()
  }
}
