/* Template Method D.P. (Hook Method) */
function race(running) {
    function ready() {
        console.log('준비');
    }

    function finish() {
        console.log('결승선');
    }

    function run() {
        ready();
        running();
        finish();
    }

    run();
}

race(() => console.log('100M 달리기'));
race(() => console.log('1000M 달리기'));
