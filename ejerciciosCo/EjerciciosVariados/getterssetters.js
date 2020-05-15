class Rectangle {
    width;
    heigth;
    #area;
    constructor(width, heigth) {
      this.width = width;
      this.heigth = heigth;
      this.#area = width * heigth;
    }
  
    get area() {
      return this.#area;
    }
  
    set area(area) {
      const side = Math.sqrt(area);
      this.width = this.heigth = side;
      this.#area = area;
    }
  }
  
  const myRectangle = new Rectangle(4, 5);
  console.log(myRectangle.area);
  myRectangle.area = 9;
  console.log(myRectangle);
  
