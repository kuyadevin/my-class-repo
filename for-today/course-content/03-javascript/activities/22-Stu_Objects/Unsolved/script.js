//WRITE YOUR CODE BELOW
var customerOrder = {
    "Drink Name" :"CustomerName",
    "Number of Sugar" : "0",
    "Order Ready" : true
}

console.log(customerOrder["Drink Name"]+" "+customerOrder["Number of Sugar"]); 

if(customerOrder["Order Ready"]){
    console.log("Ready for pickup.") 
} else {
    console.log("Still in order queue")
}

