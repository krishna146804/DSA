const pattern = function (){
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            process.stdout.write("* "   );
        }
        console.log();

    }
}

pattern();
