const pattern = function (n) {
    for (let i=1; i<=n; i++){
        for (let j=1; j<=i; j++){
            process.stdout.write (i + " ");
        }
        console.log();
    }
}

pattern(5);
