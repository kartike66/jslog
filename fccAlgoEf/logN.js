function logN(n){
    if (n===0) return console.log("Done!");
    n= Math.floor(n/2);
    return logN(n);
}

logN(4);

