// // timing function

// // setTimeout()
// // setInterval()
// // clearTimeout()
// // clearInterval()

// console.log("hello world");
// console.log("123");
  
// setTimeout(() => {
//   console.log("hello world");
// }, 2000);

// setTimeout(() => {
//   function greek() {
//     console.log("javascript Es6");
//   }
//   greek();
// }, 3000);

// function fun1() {
//   let timeoutd1 = setTimeout(() => {
//     console.log("jalile maro ");
//   }, 1500);
// }

// fun1();

// function fun2() {
//   let timeoutd2 = setTimeout(() => {
//     console.log("jalile maro 2!!");
//   }, 2000);
//   if (count > 5) {
//     clearTimeout(timeoutID2);
//   }
// }

// fun2();


setTimeout(() => {
  console.log("1. Cultivation & Harvesting");
  setTimeout(() => {
    console.log("2. Processing");
    setTimeout(() => {
      console.log("3. Drying");
      setTimeout(() => {
        console.log("4. Milling & Sorting");
        setTimeout(() => {
          console.log("5. Roasting");
          setTimeout(() => {
            console.log("6. Grinding");
            setTimeout(() => {
              console.log("7. Measuring");
              setTimeout(() => {
                console.log("8. Heating Water");
                setTimeout(() => {
                  console.log("9. Brewing/Extraction");
                  setTimeout(() => {
                    console.log(
                      "10. Pouring immediately to enjoy fresh Coffee. ",
                    );
                  }, 5000);
                }, 5000);
              }, 2000);
            }, 3000);
          }, 6000);
        }, 1000);
      }, 5000);
    }, 1000);
  }, 3000);
}, 2000);
