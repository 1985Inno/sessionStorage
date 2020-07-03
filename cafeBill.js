 console.log('this console is working')

function drinks(name, price, size){
	this.name = name;
	this.price = price;
     this.size = size;
}

let Juice = new  drinks("Juice", 25, "1L");
let Coke = new drinks("Coke", 20, "2L");
let Appletiser = new drinks("Appletiser", 30, "500ml");
let Reds = new drinks("Reds", 15, "2L");
let Peach = new drinks("Peach", 22, "2L ");


let arrayOfDrinks = [Juice , Coke , Appletiser , Reds , Peach];

let total = 0;

for (var i = 0; i < arrayOfDrinks; i++){
     
}

// prompt to get the user input of the drink

let drinkOption = Number(prompt(" Please enter the number of the drink that you want to order:  list:  1. juice, 2: Coke, 3: Appletiser, 4: Reds, 5: Peach"));
console.log(drinkOption)
// creating a variblae that will  store the value of the user's drink choice amount
// initialising it as 0
let drinkAmount = 0;

// if-else statements that are going to allow the user to choose their drink options.
// if - else should have opptions from 1 to 5 and depending on the user option, we aare going to take the prompt value and get the relevant drink item and get the price of that and add it to our drinkOption variable
// afterwards, we are going to append our drinkOption amount to the total amount of our BILL. 

if(drinkOption === 1){
     // now we are going to append the price of the drink that the user has chosen to our 'drinkAmount' value that we have created
     drinkAmount = arrayOfDrinks[0].price
}else{
     prompt('PLease enter a drink')
}
 total += drinkAmount
// now we are going to increment our total amount with the amount that their drink option costs.
    
// now we are going to just create an alert that tells the user the total amount of their bill
alert('The total amount of your drink is: ' + 'R'+ total); 




function food(name, price, size){
     this.name = name;
     this.price = price;
     this.size = size;
}

let Rice = new food("Rice", 35);
let Pizza =  new food("Pizza", 50);
let Meat = new food("Meat", 55);
let Gusi =  new food("Gusi", 40);
let Spaghetti = new food("Spaghetti", 38);


let arrayOfFood = [Rice, Pizza, Meat, Gusi, Spaghetti];

let foodTotal = 0;

for (var i = 0; i < arrayOfFood; i++){
     
}


let foodOption = Number(prompt(" Enter the number of your choicd of food: list: 1. Rice, 2. Pizza, 3. Meat, 4.Gusi, 5.Spaghetti" ));


let foodAmount = 0;


if (foodOption == 1) {
     foodAmount = arrayOfFood[0].price;
}else{
     prompt("Please enter a food")
}

foodTotal += foodAmount

alert(" Your foodTotal is " + "R" + foodTotal);

let tipAmount = Number(prompt(" How much would like to Tip "));


let totalBill = total + foodTotal + tipAmount

alert(" The totalBill is  R" + totalBill + " Thank you for Choosing Us ");

























































