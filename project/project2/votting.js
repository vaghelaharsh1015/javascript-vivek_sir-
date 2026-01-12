let ages = [15, 22, 12, 18, 30, 17];
let index = 0;

while (index < ages.length) {
  if (ages[index] >= 18) {
    console.log("Age " + ages[index] + ": Eligible to Vote");
  } else {
    console.log("Age " + ages[index] + ": Not Eligible");
  }
  index++;
}
