// Write Your Code Below
function compareValues(value1,value2)
{
    if (value1 === value2) {
        console.log ("They are equal in type and value")
    }  
    else if (value1 == value2){
        console.log("They are equal in value")
    }
    else {
        console.log("The values are not equal")
    }
}

compareValues (10,10)
compareValues (10, "10")
compareValues (10,11)

function pushinp (value1,value2)
{
    if (value1>value2) {
        console.log("Pushin P")
    }
    else {
        console.log("Not pushin P")
    }
}

pushinp (10,1)
pushinp (1, 10)
pushinp (1,1)