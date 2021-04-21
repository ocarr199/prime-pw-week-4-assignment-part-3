console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



var basket = []

function addItem(item){
basket.push(item)
return true
}

console.log(addItem("food"))

function listItems(){
  for(i = 0; i < basket.length; i++)
  console.log(basket[i])
}

listItems()


function empty(){
  basket=[];
}

console.log(empty())
