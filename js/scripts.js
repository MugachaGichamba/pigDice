function player(name, turn, total) {
    this.name = name;
    this.turn = turn;
    this.total = total;
}

var player1, player2;

$(document).ready(function() {
    $("form#new-players").submit(function(event) {
        event.preventDefault();
        player1 = new player($("input#new-player1-name").val(), true, 0);
        player2 = new player($("input#new-player2-name").val(), false, 0);
        $("div#player_names").hide();
        $("#column_1 h1#player1 ").text(player1.name);
        $("#column_3 h1#player2 ").text(player2.name);
        $("div.col-md-4").show();
        $("h1#whose_turn ").text("its " + player1.name + "'s turn");
        $("button#roll").click(rollDice);
        $("button#hold").click(hold);
        $("button#newgame").click(newGame);

    })
});

var current = 0;

function rollDice() {

    rolledValue = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(rolledValue);
    if (rolledValue === 1) {
        $('h3#rolled').text("you rolled " + rolledValue.toString()).fadeIn('fast', function() {
            $('h3#rolled').delay(500).fadeOut();
        });
        current = 0;
        $("h2#Current ").text(current);
        change_player(current);
    } else {
        current += rolledValue;
        $('h3#rolled').text("you rolled " + rolledValue.toString()).fadeIn('fast', function() {
            $('h3#rolled').delay(500).fadeOut();
        });
        $("h2#Current ").text(current);

    }

}

function change_player(currentScore) {

    player1.turn = !player1.turn;
    player2.turn = !player2.turn;

    if (player1.turn) {

        player2.total += currentScore;
        $("h2#player2 ").text(player2.total);
        console.log(player2.total)
        if (player2.total >= 100) {
            displayWinner(player2.name);

        } else {
            displayTurns(player1.name);

        }

    } else {
        player1.total += currentScore;
        $("h2#player1 ").text(player1.total);
        if (player1.total >= 100) {
            displayWinner(player1.name);
        } else {
            displayTurns(player2.name);

        }

    }

}

function hold() {
    change_player(current);
}

function displayWinner(playerName) {
    $("h2#current_heading ").text("");
    $("h2#Current ").text("");
    $("#roll").hide();
    $("#hold").hide();
    $("h1#whose_turn ").text(playerName + " has won!!!!");


}

function displayTurns(playerName) {
    current = 0;
    $("h2#Current ").text(current);
    $("h1#whose_turn ").text("its " + playerName + "'s turn");

}

function newGame() {
    current = 0;
    player1.total = 0;
    player2.total = 0;
    $("h2#player1 ").text(0);
    $("h2#player2 ").text(0);
    $("h2#current_heading ").text("Current Score");
    $("h1#whose_turn ").text("its " + player1.name + "'s turn");
    $("#roll").show();
    $("#hold").show();
}