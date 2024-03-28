let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); 

fruits.push("grape"); console.log(fruits);   

fruits.unshift('Pineapple'); console.log(fruits); 
        
fruits.pop(); console.log(fruits); 

fruits.shift(); console.log(fruits); 

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


fruits.forEach(function(fruit) {
    console.log(fruit);
});
let vegetables = ['Carrot', 'Potato', 'Tomato'];

let combinedArray = fruits.concat(vegetables);

console.log(combinedArray); 
