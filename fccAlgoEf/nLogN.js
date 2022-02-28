function nLogN(n) {
    let y = n;
    while(n>1){
        n = Math.floor(n/2);
        for (i =0; i<y; i++){
            console.log(i);
        }
    }
}

nLogN(4);