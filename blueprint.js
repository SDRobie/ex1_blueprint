var car = {
  wheels: 'wheels',
  speed: 'speed',
  color: 'color',
  quarter: function () {
    return this.speed / 25;
  }
}
var ferrari = Object.create(car);
ferrari.wheels = '4';
ferrari.speed = 200;
ferrari.color = 'red';
console.log(ferrari.quarter());

var volvo = Object.create(car);
volvo.wheels = '4';
volvo.speed = 99;
volvo.color = 'gray';
console.log(volvo.quarter());


console.log(ferrari.hasOwnProperty('wheels'));
console.log(ferrari.hasOwnProperty('speed'));
console.log(ferrari.hasOwnProperty('color'));
console.log(volvo.hasOwnProperty('wheels'));
console.log(volvo.hasOwnProperty('speed'));
console.log(volvo.hasOwnProperty('color'));
