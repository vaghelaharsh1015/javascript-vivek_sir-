//  Program to Convert Celsius to Fahrenheit

let celsius = prompt("Enter temperature in Celsius:");


let fahrenheit = (parseFloat(celsius) * 9/5) + 32;


if (!isNaN(fahrenheit)) {
    alert(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
} else {
    alert("Please enter a valid number.");
}