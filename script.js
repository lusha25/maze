const canvas = document.getElementById("labirint_canvas");
const ctx = canvas.getContext("2d");

const maze = document.querySelector(".maze");

const clearButton = document.querySelector("#clearButton");


let difficulty = 2;

const solutions = {
    1: [
        [202, 2], [202, 10], [218, 10], [218, 42], [202, 42], [202, 74], [186, 74], [186, 58],
        [170, 58], [170, 74], [138, 74], [138, 122], [154, 122], [154, 170], [170, 170], [170, 138],
        [202, 138], [202, 154], [218, 154], [218, 218], [250, 218], [250, 234], [266, 234], [266, 170],
        [282, 170], [282, 202], [298, 202], [298, 186], [314, 186], [314, 170], [330, 170], [330, 186],
        [394, 186], [394, 202], [378, 202], [378, 218], [362, 218], [362, 202], [314, 202], [314, 234],
        [298, 234], [298, 218], [282, 218], [282, 266], [266, 266], [266, 250], [250, 250], [250, 282],
        [266, 282], [266, 330], [218, 330], [218, 314], [202, 314], [202, 298], [170, 298], [170, 314],
        [154, 314], [154, 282], [122, 282], [122, 346], [138, 346], [138, 378], [154, 378], [154, 362],
        [170, 362], [170, 394], [202, 394], [202, 402]
    ],
    2: [
        [234, 2], [234, 10], [314, 10], [314, 74], [330, 74], [330, 106], [298, 106],
        [298, 26], [266, 26], [266, 74], [250, 74], [250, 90], [202, 90], [202, 74],
        [218, 74], [218, 58], [170, 58], [170, 74], [154, 74], [154, 58], [138, 58],
        [138, 74], [122, 74], [122, 90], [106, 90], [106, 58], [122, 58], [122, 42],
        [170, 42], [170, 26], [154, 26], [154, 10], [138, 10], [138, 26], [106, 26],
        [106, 10], [74, 10], [74, 42], [90, 42], [90, 122], [106, 122], [106, 154],
        [90, 154], [90, 138], [74, 138], [74, 154], [58, 154], [58, 138], [42, 138],
        [42, 106], [58, 106], [58, 74], [42, 74], [42, 90], [26, 90], [26, 106], [10, 106],
        [10, 138], [26, 138], [26, 154], [10, 154], [10, 170], [58, 170], [58, 186],
        [10, 186], [10, 202], [42, 202], [42, 218], [10, 218], [10, 234], [26, 234],
        [26, 282], [90, 282], [90, 266], [122, 266], [122, 282], [138, 282], [138, 266],
        [154, 266], [154, 250], [138, 250], [138, 234], [170, 234], [170, 266], [186, 266],
        [186, 298], [218, 298], [218, 314], [266, 314], [266, 330], [314, 330], [314, 346],
        [330, 346], [330, 362], [346, 362], [346, 346], [362, 346], [362, 362], [378, 362],
        [378, 378], [394, 378], [394, 410], [362, 410], [362, 426], [394, 426], [394, 442],
        [378, 442], [378, 474], [346, 474], [346, 458], [314, 458], [314, 442], [298, 442],
        [298, 458], [250, 458], [250, 482]
    ],
    3: [
        [282, 2], [282, 26], [218, 26], [218, 10], [170, 10], [170, 26], [154, 26], [154, 10],
        [90, 10], [90, 26], [106, 26], [106, 42], [90, 42], [90, 58], [138, 58], [138, 74],
        [154, 74], [154, 42], [218, 42], [218, 74], [202, 74], [202, 106], [106, 106],
        [106, 90], [90, 90], [90, 106], [74, 106], [74, 122], [90, 122], [90, 138],
        [106, 138], [106, 122], [138, 122], [138, 170], [202, 170], [202, 154], [218, 154],
        [218, 202], [186, 202], [186, 186], [154, 186], [154, 202], [170, 202], [170, 218],
        [186, 218], [186, 234], [202, 234], [202, 250], [234, 250], [234, 266], [266, 266],
        [266, 282], [234, 282], [234, 346], [266, 346], [266, 330], [282, 330], [282, 394],
        [314, 394], [314, 378], [330, 378], [330, 394], [346, 394], [346, 362], [378, 362],
        [378, 314], [394, 314], [394, 298], [410, 298], [410, 330], [442, 330], [442, 314],
        [426, 314], [426, 298], [442, 298], [442, 282], [474, 282], [474, 298], [458, 298],
        [458, 330], [474, 330], [474, 346], [410, 346], [410, 362], [394, 362], [394, 410],
        [426, 410], [426, 394], [458, 394], [458, 410], [474, 410], [474, 394], [522, 394],
        [522, 426], [490, 426], [490, 442], [506, 442], [506, 474], [554, 474], [554, 490],
        [522, 490], [522, 506], [490, 506], [490, 458], [474, 458], [474, 426], [458, 426],
        [458, 458], [442, 458], [442, 490], [426, 490], [426, 506], [410, 506], [410, 490],
        [394, 490], [394, 474], [410, 474], [410, 442], [394, 442], [394, 426], [362, 426],
        [362, 490], [346, 490], [346, 522], [330, 522], [330, 506], [314, 506], [314, 522],
        [298, 522], [298, 506], [282, 506], [282, 522], [266, 522], [266, 506], [250, 506],
        [250, 522], [234, 522], [234, 538], [282, 538], [282, 562]
    ]
};
const scales = {
    1: [1.2376237623762376, 1.2376237623762376],
    2: [1.0330578512396693, 1.0330578512396693],
    3: [0.8865248226950354, 0.8865248226950354]
}
function setIntervalAwaitable(callback, interval) {
    return new Promise(resolve => {
        let intervalId = setInterval(() => {
            let stop = callback();

            if (stop) {
                clearInterval(intervalId);
                resolve();
            }
        }, interval);
    })
}

let drawinterval;
function drawSolution() {
    clearInterval(drawinterval);

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 6;
    ctx.lineCap = "square";

    let currentIndex = 0; // začnemo z animacijo risanja poti
    clearButton.disabled = true;
    drawinterval = setInterval(() => {
        if (currentIndex > 0) {
            const previousCoordinates = solutions[difficulty][currentIndex - 1];
            const currentCoordinates = solutions[difficulty][currentIndex];

            let scaleX = scales[difficulty][0];
            let scaleY = scales[difficulty][1];

            ctx.beginPath();
            ctx.moveTo(previousCoordinates[0] * scaleX, previousCoordinates[1] * scaleY);
            ctx.lineTo(currentCoordinates[0] * scaleX, currentCoordinates[1] * scaleY);
            ctx.stroke();
        }
        currentIndex++; // gremo naprej

        if (currentIndex == solutions[difficulty].length) {
            return true;
            clearButton.disabled = false;
        } else {
            return false;
        }
    }, 100) // narišemo vsakih 200 milisekund
}


document.getElementById("easyButton").addEventListener("click", function () {
    maze.style.backgroundImage = "url('./imgs/25maze.svg')";
    startGame(90);
    difficulty = 1;
    clearSolution();

});

document.getElementById("mediumButton").addEventListener("click", function () {
    maze.style.backgroundImage = "url('./imgs/30maze.svg')";
    startGame(60);
    difficulty = 2;
    clearSolution();

});

document.getElementById("hardButton").addEventListener("click", function () {
    maze.style.backgroundImage = "url('./imgs/35maze.svg')";
    startGame(30);
    difficulty = 3;
    clearSolution();
});

let intervalId
function startGame(duration) {

    time = duration;
    clearInterval(intervalId);

    //document.getElementById('timer').innerText = `Time: ${time}s`;
    intervalId = setInterval(() => {

        time--;
        document.getElementById('timer').innerText = `Time: ${time}s`;

        if (time <= 0)
            clearInterval(intervalId);
    }, 1000)
}

function clearSolution() {
    clearInterval(intervalId);
    clearInterval(drawinterval);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
}


function triggerInstructions() {
    Swal.fire({
        title: 'Instructions',
        text: 'Choose difficulty ranging from easy, medium and hard',
        confirmButtonText: 'Exit'
    });
}

function triggerCredentials() {
    Swal.fire({
        title: 'Credentials',
        text: 'Made by Luka Dragan',
        confirmButtonText: 'Exit'
    });
}