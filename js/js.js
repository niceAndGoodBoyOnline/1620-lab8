//////////////////////////////////////////////////////
// PART A ////////////////////////////////////////////
//////////////////////////////////////////////////////


//pass user input with GO button
function passInput(){
	let inputNumber = document.getElementById("userInputId").value;
	makeButton(inputNumber);
}


//loop to make user specified amount of buttons
function makeButton(userNumber){
	let letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	for (let i = 0; i < userNumber && i < 26; i++){
		defineButton(letters[i]);
	}
}


// button constructor to make n buttons where n is 0-26 (0 makes actual 0 buttons).
function defineButton(buttonLabel){
	let buttonDiv = document.getElementById("buttonDiv");
	let input = document.createElement('input');
	input.ID = this.name;
	input.value = buttonLabel;
	input.type = 'button';
	input.addEventListener("click", function() {console.log("Button " + buttonLabel + " was clicked")});
	buttonDiv.appendChild(input);
}


//////////////////////////////////////////////////////
// PART B ////////////////////////////////////////////
//////////////////////////////////////////////////////


// start of add recipe functionality, no time. 3 projects this week.
function passRecipe(thing){
	thing.print();
}

// recipe constructor
function newRecipe(newTitle, newServings, ingredientsList){
	this.Id = newTitle;
	this.title = newTitle;
	this.serving = newServings;
	this.ingredients = ingredientsList;
	this.print = function () {printRecipe(this.title,this.serving,this.ingredients)}
}

// print function
function printRecipe(title, serving, theList){
	let recipeDisplay = document.getElementById("recipeDisplay");
	recipeDisplay.innerHTML = "Title: " + title + '<br> Servings: ' + serving + '<br>' + "Ingredients: ";
	
	for (i = 0; i < theList.length ; i++){
		if (i%2==1){
		}
		else{
		recipeDisplay.innerHTML += '<br>'+theList[i] + ":" + theList[i+1];
		}
	}
}


// some built in recipe objects, I don't have time to make out of  
// spec "addRecipe()" functionality this week. darn.
Kats_Pizza = new newRecipe("Katherine's Pizza", 2, ['Caulliflower dough', '1 pound', 'Marinara', "400ml", "Vegan Cheese", "400g", "Mushrooms", "500g"]);

Felix_Smoothie = new newRecipe("Felix's Smoothie", 2, ['Mango', '500g', 'Peanut Butter', "100g", "Espresso", "1 shot", "Almond or Oat Milk", "500ml"]);

Anmol_Lunch = new newRecipe("Anmol's Lunch", 2, ['Indian Curry', '800ml', 'Potato', "500g", "Mushroom", "200g", "Tofu", "500g", "Snow Pea", "200g", "Steamed Rice", "1 Cup"]);

