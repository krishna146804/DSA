const pattern = function (n){
    for (let i=1; i<=n; i++){
        for (let j=1; j<=n-i+1; j++){
            process.stdout.write("*")
        }
        console.log();
    }

}

pattern(5);
