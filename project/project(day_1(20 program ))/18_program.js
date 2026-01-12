let num = 153, sum = 0, temp = num;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}
console.log(num == sum ? "Armstrong" : "Not Armstrong");