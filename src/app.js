var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
const addChocolates = (chocolates, color, count, ) => {
    if (count <= 0) {
        return ("Number cannot be zero/negative")
    } else {
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser

const removeChocolates = (chocolates, number) => {
    let chocoList = [];
    if (number > chocolates.length) {
        return ('Insufficient chocolates in the dispenser');
    } else if (number <= 0) {
        return ("Number cannot be zero/negative");
    } else {
        for (let i = 0; i < number; i++) {
            chocoList.push(chocolates.shift());
        }
        return chocoList;
    }
}


//Progression 3: Dispense ___ chocolates
const dispenseChocolates = (chocolates, number) => {
    let chocoList = [];
    if (number > chocolates.length) {
        return ('Insufficient chocolates in the dispenser');
    } else if (number <= 0) {
        return ("Number cannot be zero/negative");
    } else {
        for (let i = 0; i < number; i++) {
            chocoList.push(chocolates.pop());
        }
        return chocoList;
    }
}


//Progression 4: Dispense ___ chocolates of ____ color
const dispenseChocolatesOfColor = (chocolate, number, color) => {
    let chocoList = [];
    if (number > chocolate.length) {
        return ('Insufficient chocolates in the dispenser');
    } else if (number <= 0) {
        return ("Number cannot be zero/negative");
    } else {
        for (let i = chocolate.length - 1; i >= 0; i--) {
            if (chocolate[i] == color) {
                chocoList.push(chocolate.splice(i, 1).toString())
            }
            if (chocoList.length === number) {
                return chocoList;
            }
        }

    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const noOfChocolates = (chocolates) => {
    let noChoco = [];
    let green = 0;
    let silver = 0;
    let blue = 0;
    let crimson = 0;
    let purple = 0;
    let red = 0;
    let pink = 0;
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] === "green") {
            green += 1;
        } else if (chocolates[i] === "silver") {
            silver += 1;
        } else if (chocolates[i] === "blue") {
            blue += 1;
        } else if (chocolates[i] === "crimson") {
            crimson += 1;
        } else if (chocolates[i] === "purple") {
            purple += 1;
        } else if (chocolates[i] === "red") {
            red += 1;
        } else if (chocolates[i] === "pink") {
            pink += 1;
        }
    }
    noChoco = [green, silver, blue, crimson, purple, red, pink]
    let finalChoco = noChoco.filter((ele) => ele !== 0)
    return finalChoco;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
const sortChocolateBasedOnCount = (chocolate) => {

}


//Progression 7: Change ___ chocolates of ____ color to ____ color
const changeChocolateColor = (chocolates, number, color, finalColor) => {

    if (color == finalColor) {
        return "Can't replace the same chocolates"
    }

    if (number < 1) {
        return "Number cannot be zero/negative";
    }

    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color && number > 0) {
            chocolates[i] = finalColor;
            number--;
        }
    }
    return chocolates;

}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

const changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
    let count = 0;
    if (color == finalColor) {
        return "Can't replace the same chocolates"
    }
    for (let i = 0; i < chocolates.length; i++) {

        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
        }
        if (chocolates[i] == finalColor) {
            count += 1;
        }
    }
    return [count, chocolates]
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed