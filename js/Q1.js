class Square {
  //set side of square
  constructor(side){
  this.side = side;
  }
  
  //return perimeter
  perimeter(){
  return 4 * this.side;
  }
  
  //return area
  area(){
  return this.side * this.side;
  }
  
  //return diagonal
  diagonal(){
  return Math.sqrt(2 * this.side * this.side).toFixed(3);
  }
  
  //return description
  describe(){
  return "Square with side "+this.side+" has perimeter of "+this.perimeter()+", area of "+this.area()+", and diagonal of "+this.diagonal();
  }
  }
  
  //side 2
  square1 = new Square(2);
  console.log(square1.describe());
  
  //side 3
  square2 = new Square(3);
  console.log(square2.describe());
  
  //side 4
  square3 = new Square(4);
  console.log(square3.describe());