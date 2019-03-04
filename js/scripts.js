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