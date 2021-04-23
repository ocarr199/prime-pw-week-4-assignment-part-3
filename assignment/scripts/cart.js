console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



//  stretch goal 1 create maxItems
const maxItems = 5;
 // number 1 create basket variable
var basket = []

// stretch goal 2 create isFull
function isFull(){
  if(basket.length>= maxItems){
    return true
  }else{
    return false
  }
}
console.log(isFull())


// number 2 create addItem
function addItem(item){
  if(isFull()){
    return false
}else{basket.push(item)
return true

}
}
console.log(addItem("banana"))
console.log(basket);
addItem("apple");
console.log(basket);
addItem("Mango");
console.log(basket);
addItem("grapes");
console.log(basket);
addItem("coconut");
console.log(basket);
// wont log strawberry because
// maxitems is set to 5
addItem("strawberry");
console.log("won't add strawberry because maxItems has been reached ",basket);

// stretch goal 4 removeItem

function removeItem(){
basket.pop()
}
removeItem();

console.log("should remove coconut", basket);

//  3 create listItems
function listItems(){
  for(i = 0; i < basket.length; i++)
  console.log(basket[i])
}

listItems();

//  4 create empty
function empty(){

  return basket = [];
}

console.log("The array should be empty", empty())
