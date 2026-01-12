for (let i = 2; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) { flag = 1; break; }
    }
    if (flag == 0) console.log(i);
}