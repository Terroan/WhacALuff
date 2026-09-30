let square;
let hitSum;
let squareObj = document.getElementById('feld1');
let id, id2;
let hardMode = false;
let time = 500;

function startGame()
{
    hitSum = 0;
    id = setInterval(randomSquare, time);
    id2 = setInterval(countDown, 1000);
    setInterval(() => {
        document.body.style.cursor = "url('Pictures/nami.png') 2 2, pointer";
    }, 1000);
}

function randomSquare()
{  
    if(hardMode == false)
    {
        squareObj.removeEventListener('mousedown', myHandler);
    squareObj.style.background = "rgba(255, 255, 255, 0.35)";

    square = Math.floor(Math.random() * (10-1)) + 1;
    squareObj = document.getElementById('feld' + square);
    squareObj.addEventListener('mousedown', myHandler);
    //squareObj.style.background = "red";
    squareObj.style.backgroundImage = "url('Pictures/small_luffy.png')";
    }
    else
    {
    squareObj.removeEventListener('mousedown', myHandler);
    squareObj.style.background = "rgba(255, 255, 255, 0.35)";

    square = Math.floor(Math.random() * (10-1)) + 1;
    squareObj = document.getElementById('feld' + square);
    squareObj.addEventListener('mousedown', myHandler);
    //squareObj.style.background = "red";
    squareObj.style.backgroundImage = "url('Pictures/small_luffy.png')";

    clearInterval(id);
    id = setInterval(randomSquare, time);
    }
}

function myHandler()
{
    squareObj.removeEventListener('mousedown', myHandler);
    hitSum++;
    document.getElementById('hitCounter').innerHTML = "Hits: " + hitSum;

    time = time - 10;
}

function countDown()
{
    let tmp = document.getElementById('timeLeft').innerHTML.split(':')[1].split(' ')[1];
    let tmpNum = Number(tmp);
    if(tmpNum == 0)
    {
        clearInterval(id);
        clearInterval(id2);
        
        squareObj.removeEventListener('mousedown', myHandler);
        squareObj.style.background = "rgba(255, 255, 255, 0.35)";

        if(hitSum > 30)
            alert('Wow! You really are worth to find the One Piece. Total hits on Luff: ' + hitSum);
        else
            alert('Congrats! Times you hit Luffy: ' + hitSum)
        
        let hits = document.getElementById('hitcounter');
        hits.innerHTML = "Hits: 0";
    }
    else
        document.getElementById('timeLeft').innerHTML = "Time Left: " + (tmpNum - 1);     
}

function changeCursor()
{
    document.body.style.cursor = "url('Pictures/nami2.png') 2 2, pointer";
}

function changeMode()
{
    if(hardMode)
        hardMode = false;
    else
        hardMode = true;
}