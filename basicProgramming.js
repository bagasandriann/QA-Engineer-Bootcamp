let i = 1
let j = 0
const heightInput = 4

function triangleGenerator(heightTriangle) {
    for(i; i <= heightTriangle; i++) {
        // console.log('i = ' + i);
        let star = '';
        for(j; j < i ; j++){
            star += '*';
            // console.log('j = ' + j);
        }
        console.log(star);
        j = 0;
    }
};

triangleGenerator(heightInput);