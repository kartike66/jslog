function logn(n) {
    while (n>1) {
        console.log(n)
        n = Math.floor(n/2)
    }
}

logn(4)
