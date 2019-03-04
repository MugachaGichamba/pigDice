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