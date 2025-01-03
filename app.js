
let number = prompt("Enter a number to print its multiplication table:");


number = parseInt(number);


if (!isNaN(number)) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
} else {
    console.log("Please enter a valid number.");
}
