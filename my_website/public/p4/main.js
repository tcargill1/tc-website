/*
 * A complete tic-tac-toe widget, using JQuery.  Just include this 
 * script in a browser page and play.  A tic-tac-toe game will be 
 * included as a child element of the element with id "tictactoe".  
 * If the page has no such element, it will just be added at the end 
 * of the body.
 */
$(function () {

    var squares = [], 
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X";
        var gameIsOver = false;

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */
    wins = [7, 56, 448, 73, 146, 292, 273, 84];

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    startNewGame = function () {
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        squares.forEach(function (square) {square.html(EMPTY);});

        /* Remove Alert and turn gameIsOver flag off every time a new game is started*/
        $("#game-alert").remove();
        gameIsOver = false;
    },

    /*
     * Returns whether the given score is a winning score.
     */
    win = function (score) {
        for (var i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    set = function () {
        
        if ($(this).html() !== EMPTY || gameIsOver) {
            return;
        }
        $(this).html(turn);
        console.log($(this));
        moves += 1;
        score[turn] += $(this)[0].indicator;
        console.log(score[turn]);
        if (win(score[turn])) {
            /* Checks whose turn won to increase score on scoreboard */
            if (turn === "X") {
                XScore++;
            }
            else {
                OScore++;
            }
            /* Update scoreboard*/
            updateScoreBoard()
            /* Display custom alert using bootstrap theme and jquery function*/
            CustomAlert(turn + " wins!");
            /*Turn gameIsOver flag on in order to stop player from continuing to play after game is over*/
            gameIsOver = true;
            /* Let player click both buttons when game is over*/
            readyButton()
            resetButton()
        } else if (moves === SIZE * SIZE) {
            /* If no one wins, then alert displays that it is a tie*/
            CustomAlert("It's a tie!");
            gameIsOver = true;
            readyButton()
            resetButton()
        } else {
            turn = turn === "X" ? "O" : "X";
        }
        
    },

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    play = function () {
        var board = $("<table border=1 cellspacing=0>"), indicator = 1;
        for (var i = 0; i < SIZE; i += 1) {
            var row = $("<tr>");
            board.append(row);
            for (var j = 0; j < SIZE; j += 1) {
                var cell = $("<td height=50 width=50 align=center valign=center></td>");
                cell[0].indicator = indicator;
                cell.click(set);
                row.append(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        $(document.getElementById("tictactoe") || document.body).append(board);
        startNewGame();
    };

    play();
});

/* Function that starts a new game when the button is clicked*/
const readyButton = function () {
    $(document).ready(function () {
        $("#play_again").click(function() {
            startNewGame()
        });
    });
}

/* Function that resets the scores when the button is clicked*/
const resetButton = function () {
    $(document).ready(function () {
        $("#reset").click(function() {
            resetBoard()
        });
    });
}

/* Function that creates a custom alert from bootstrap theme*/
function CustomAlert(message) {
    /* Gets the code for the button and puts in an variable*/
    var alertHTML = `
        <div class="alert alert-dismissible alert-success fixed-top" id="game-alert">
            <strong>${message}</strong>
        </div>
    `;
    // Append the new alert to the body html
    $("body").append(alertHTML);
}

/* Global variables to keep track of scores*/
var XScore = 0;
var OScore = 0;

/* Function that updates scores using their IDs*/
function updateScoreBoard() {
    $("#XScore").text(XScore);
    $("#OScore").text(OScore);
}

/* Function that resets the scores and updates the scoreboard*/
function resetBoard() {
    XScore = 0;
    OScore = 0;
    updateScoreBoard()
}