const computerChoice = ['Rock', 'Paper', 'Scissors'];
let random_move; 
let clicked;
let user_score = 0;
let computer_score = 0;

const rock = document.getElementById('button_rock').addEventListener('click', function() {
buttonClick('Rock');
    game();
});

const paper = document.getElementById('button_paper').addEventListener('click', function() {
    buttonClick('Paper');
    game();
});

const scissors = document.getElementById('button_scissors').addEventListener('click', function() {
    buttonClick('Scissors');
    game();
});

const reset = document.getElementById('button_reset').addEventListener('click', function() {
    user_score = 0;
    computer_score = 0;
    document.getElementById('p_result').innerHTML = "";
    document.getElementById('user_img').src='';
    document.getElementById('computer_img').src='';
    document.getElementById('userScore').innerHTML = `${user_score}`;
    document.getElementById('computerScore').innerHTML = `${computer_score}`;
});

function game() {
    random_move = computerChoice[Math.floor(Math.random() * 3)];
    if(clicked === random_move) { 
        
        tie();

        if(clicked === computerChoice[0]) {
            document.getElementById('user_img').src='rock.png';
            document.getElementById('computer_img').src='rock.png';
        } else if(clicked === computerChoice[1]) {
            document.getElementById('user_img').src='paper.png';
            document.getElementById('computer_img').src='paper.png';
        } else if(clicked === computerChoice[2]) {
            document.getElementById('user_img').src='scissor.png';
            document.getElementById('computer_img').src='scissor.png';
        }

    } else if(clicked === computerChoice[1] && random_move === computerChoice[0]) {    
        
        user_won();

        document.getElementById('user_img').src='paper.png';
        document.getElementById('computer_img').src='rock.png';

    } else if(clicked === computerChoice[0] && random_move === computerChoice[2]) {
       
        user_won();

        document.getElementById('user_img').src='rock.png';
        document.getElementById('computer_img').src='scissor.png';

    } else if(clicked === computerChoice[2] && random_move === computerChoice[1]) {
        
        user_won();

        document.getElementById('user_img').src='scissor.png';
        document.getElementById('computer_img').src='paper.png';

    } else if(clicked === computerChoice[0] && random_move === computerChoice[1]){
        
        user_lose();

        document.getElementById('user_img').src='rock.png';
        document.getElementById('computer_img').src='paper.png';
    } else if(clicked === computerChoice[2] && random_move === computerChoice[0]) {
        
        user_lose();

        document.getElementById('user_img').src='scissor.png';
        document.getElementById('computer_img').src='rock.png';
    } else if(clicked === computerChoice[1] && random_move === computerChoice[2]) {
       
        user_lose();
        
        document.getElementById('user_img').src='paper.png';
        document.getElementById('computer_img').src='scissor.png';
    
}
}

function buttonClick(clickedButton) {
    switch(clickedButton) {
        case 'Rock':   
        clicked = 'Rock'
            break;
        case 'Paper':   
        clicked = 'Paper' 
            break;
        case 'Scissors':
        clicked = 'Scissors'
            break;
    }
}

function user_won() {
    user_score +=1;
    document.getElementById('userScore').innerHTML = `${user_score}`;
    document.getElementById('p_result').innerHTML = "You Win!";
}

function user_lose() {
    computer_score += 1;

    document.getElementById('computerScore').innerHTML = `${computer_score}`;
    document.getElementById('p_result').innerHTML = "You Lose!";
}

function tie() {
    document.getElementById('p_result').innerHTML = "Its a Tie";
}
