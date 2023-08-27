console.log('Welcome to Tic Tac Toe');
let turn = "X";
let gameover = false;

const changeTurn = () => {
    if (turn === 'X') {
        return '0';
    } else {
        return 'X';
    }
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [1, 4, 7],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '100px';
        }
    })
}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})


reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})