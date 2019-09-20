// 1. Copy and paste your prototype in here and refactor into class syntax.



class CuboidMaker2 {
    constructor(properties){
        this.length = properties.length,
        this.width = properties.width,
        this.height = properties.height

    }
    volume(){
        return this.length * this.width * this.height;
      }
      
      surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
      
 } //CuboidMaker close
    
 class CubeMaker extends CuboidMaker2{
     constructor(properties){
         super(properties);

     }

     surfaceAreaCube(){
         return this.length**2 *6;
     }
 }

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height:5 

  });
  const cube = new CubeMaker({
      length: 4,
      width: 4,
      height: 4,
  })
  

  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

console.log(cube.surfaceAreaCube());
console.log(cube.volume());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.