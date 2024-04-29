const cards = document.querySelectorAll(".card");
const turn = document.querySelector("#turn")
const score_player = document.querySelector("#score_player")
const score_cpu = document.querySelector("#score_cpu")
const score_ties = document.querySelector("#score_ties")
const msgResult = document.querySelector("#msg")
const winner = document.querySelector("#winner")
const result = document.querySelector("#result")
const quit = document.querySelector("#quit")
const next = document.querySelector("#next")
const restart = document.querySelector("#restart")

let playerPoints = 0;
let cpuPoints = 0;
let ties = 0;
let playerTurn = true;
let Jogadas = [];
let gameover = false;

let arrayTurn = ["X", "O"]

let randomTurn = Math.floor(Math.random() * 2)

//número aleatório para decidir quem começa o game
if (randomTurn === 1) {
    //setando playerTurn como false para o usuário não jogar na vez do bot
    playerTurn = false;
    turn.innerHTML = "O Turn"
    JogadaCpu();
}

function JogadaCpu() {
    playerTurn = false;
     if(!gameover) {
        turn.innerHTML = "O Turn"
        //loop para o bot encontrar uma opção de jogada válida
        while(1 < 10) {
            let random = Math.floor(Math.random() * 9)
            if (cards[random].innerHTML === "") {
               cards[random].innerHTML = "O";
               cards[random].style.color = "#F1B237";
               Jogadas.push("O")
               Victory("O", "You lost :(", "#F2B236", "#1E3640", score_cpu)
                Draw()
               setTimeout(() => {
                playerTurn = true;
               turn.innerHTML = "X Turn";
               }, 1000)
               break;
            }
           //se não tiver jogadas disponíveis, o loop será encerrado
            if (Jogadas.length === 9) {
                break;
            }
        }
     }
    

    }
    


function JogadaPlayer() {
cards.forEach((card, index) => {
    if(!gameover) {
        card.addEventListener("click", () => {
            if(playerTurn && card.innerHTML === "") {
                playerTurn = false;
                card.innerHTML = "X";
                card.style.color = "#31C6BD";
                Jogadas.push("X")
                Victory("X", "You won!", "#31C4BE", "#1E3640", score_player)
                Draw()
                //timeout para o bot não jogar instantâneamente
                setTimeout(() => {
                JogadaCpu();
                }, 500)
            
            }
            
        })
    }
    
})
}

JogadaPlayer();

//verficando empate, se o jogo não estiver acabado e não estiver mais opções disponíveis(9 é o máximo) é declarado empate, sendo assim incrementamos a variável ties e mostramos o resultado de todos os empates na série do game
function Draw() {
    if (gameover === false && Jogadas.length === 9) {
        result.style.display = "flex"
        ties++;
        score_ties.innerHTML = ties;
        msgResult.innerHTML = "Nobody Winned";
        msgResult.style.color = "white";
        winner.innerHTML = "Tie";
        winner.style.color = "white";
    }
}

//verificando se houve vitória, por isso estou passando os parâmetros e chamando essa função, (a) seria a identificação do player (x ou o), msgWinner receberá o innerHTML do paramêtro

function Victory(a, msg, background, color, score) {
   if (cards[0].innerHTML === a && cards[1].innerHTML === a && cards[2].innerHTML === a) {
    for (let i = 0; i < 3; i++) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
      msgResult.innerHTML = msg
      winner.innerHTML = `${a} Takes the Round`
      winner.style.color = background;
      result.style.display = "flex";
      Jogadas = [];
      gameover = true;
      if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }
   else if (cards[3].innerHTML === a && cards[4].innerHTML === a && cards[5].innerHTML === a) {
    for (let i = 3; i < 6; i++) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
    msgResult.innerHTML = msg
    winner.innerHTML = `${a} Takes the Round`
    winner.style.color = background;
    result.style.display = "flex";
    Jogadas = [];
    gameover = true;
    if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }

   else if (cards[6].innerHTML === a && cards[7].innerHTML === a && cards[8].innerHTML === a) {
    for (let i = 6; i < 9; i++) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
    msgResult.innerHTML = msg
    winner.innerHTML = `${a} Takes the Round`
    winner.style.color = background
    result.style.display = "flex";
    Jogadas = [];
    gameover = true;
    if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }

   else if (cards[0].innerHTML === a && cards[3].innerHTML === a && cards[6].innerHTML === a) {
    for (let i = 0; i < 7; i = i + 3) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
    msgResult.innerHTML = msg
    winner.innerHTML = `${a} Takes the Round`
    winner.style.color = background
    result.style.display = "flex";
    Jogadas = [];
    gameover = true;
    if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }

   else if (cards[1].innerHTML === a && cards[4].innerHTML === a && cards[7].innerHTML === a) {
    for (let i = 1; i < 8; i = i + 3) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
      msgResult.innerHTML = msg
      winner.innerHTML = `${a} Takes the Round`
      winner.style.color = background


      result.style.display = "flex";
      Jogadas = [];
      gameover = true;
      if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }
   
   else if (cards[2].innerHTML === a && cards[5].innerHTML === a && cards[8].innerHTML === a) {
    for (let i = 2; i < 9; i = i + 3) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
    msgResult.innerHTML = msg
    winner.innerHTML = `${a} Takes the Round`
    winner.style.color = background
    result.style.display = "flex";
    Jogadas = [];
    gameover = true;
    if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }

   else if (cards[0].innerHTML === a && cards[4].innerHTML === a && cards[8].innerHTML === a) {
    for (let i = 0; i < 9; i = i + 4) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
    msgResult.innerHTML = msg
    winner.innerHTML = `${a} Takes the Round`
    winner.style.color = background
    result.style.display = "flex";
    Jogadas = [];
    gameover = true;
    if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }

   else if (cards[2].innerHTML === a && cards[4].innerHTML === a && cards[6].innerHTML === a) {
    for (let i = 2; i < 7; i = i + 2) {
        cards[i].style.backgroundColor = background;
        cards[i].style.color = color;
    }
    msgResult.innerHTML = msg
    winner.innerHTML = `${a} Takes the Round`
    winner.style.color = background
    result.style.display = "flex";
    Jogadas = [];
    gameover = true;
    if (a === "X") {
        playerPoints++
        score.innerHTML = playerPoints
    }
    else {
        cpuPoints++
        score.innerHTML = cpuPoints
    }
   }
}
//Saindo da página e fechando a janela
quit.addEventListener("click", () => {
    window.close();
})

//próximo game, colocando a variável gameover como false novamente, tirando a section resultado, zerando o vetor de jogadas, utilizado para verificar se todas as posicoes estão preenchidas, setando vazio para todos os cards e 
next.addEventListener("click", () => {
    gameover = false;
    result.style.display = "none"
    Jogadas = [];
    cards.forEach(card => {
        card.innerHTML = ""
        card.style.backgroundColor = "#1E3640"
    })
   
    randomTurn = Math.floor(Math.random() * 2)
    console.log(randomTurn)
    if (randomTurn === 1) {
        playerTurn = false
        turn.innerHTML = "O Turn"
        JogadaCpu()
    }
    else {
        playerTurn = true;
        turn.innerHTML = "X Turn"
    }

})

restart.addEventListener("click", () => {
    window.location.reload();
})





