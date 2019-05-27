var n = 1000;
var num = 0;

while (true) {
    n = n / 2;
    ++num;
    if (n < 50) {
        console.log(num);
        break;
    }
}
