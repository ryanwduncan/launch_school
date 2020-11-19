let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

function printAndRemove(list) {
  list.forEach(function(index) {
    index = list.splice(index);
    console.log(index);
  })
  console.log(list);
}

printAndRemove(groceryList);