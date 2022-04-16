// Allows you to add properties and methods to an Array object
// Add a new method
Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };
  
  // Use the method on any array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

console.log(fruits)
