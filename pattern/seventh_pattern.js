const pattern = function (n){
    for (let i=0; i<n; i++){
        for (let j=0; j<n-i-1; j++){
            process.stdout.write(" ");}
        for (let j=0; j<2*i+1; j++){
            process.stdout.write("*");
        }
        for (let j=0; j<n-i-1; j++){
            process.stdout.write(" ");

        }
        console.log();
    }
}

pattern(4);