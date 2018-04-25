const Furry = require('./furry.js');
const Coin = require('./coin.js');

function Game(board, furry, coin, score, index) {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.idSetInterval = null;
    this.index = function(x,y) {
        return x + (y * 10);
    }

    var self = this;

    this.showFurry = function() {
        self.hideVisibleFurry();
        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    }

    this.showCoin = function() {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }

    this.moveFurry = function() {
        console.log('----')
        if(self.furry.direction === "right") {
            self.furry.x = self.furry.x + 1;
        } else if (self.furry.direction === "left") {
            self.furry.x = self.furry.x - 1;
        } else if (self.furry.direction === "up") {
            self.furry.y = self.furry.y - 1;
        } else if (self.furry.direction === "down") {
            self.furry.y = self.furry.y + 1;
        }

        self.checkCoinCollision();
        self.gameOver();
        return self.showFurry();
    }

    this.startGame = function() {
        this.idSetInterval = setInterval(function() {
            self.moveFurry();
        }, 250);

        document.addEventListener('keydown', function(event){
            self.arrowMove(event);

        });


    }

    this.hideVisibleFurry = function() {
        var hide = document.querySelector(".furry");
        console.log(hide);
        if(hide !== null) {
            hide.classList.remove("furry");
        }
    }

    this.arrowMove = function(event) {

        switch (event.which) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 38:
                self.furry.direction = 'up';
                break;
            case 40:
                self.furry.direction = 'down';
                console.log("down");
                break;

        }
    }

    this.checkCoinCollision = function() {
        if (self.furry.x === self.coin.x && self.furry.y === self.coin.y) {
            console.log("siema");
            self.score += 1;
            console.log(self.score);
            var strong = document.querySelector("strong");
            console.log(strong);
            strong.innerText = self.score;
            self.coinRemove = document.querySelector(".coin");
            self.coinRemove.classList.remove("coin");
            this.coin = new Coin();
            self.showCoin();
        }
    }

    this.gameOver = function() {
        if (self.furry.x < 0 || self.furry.x > 9 || self.furry.y < 0 || self.furry.y > 9) {
            clearInterval(idSetInterval);
            hideVisibleFurry();
            var strong = document.querySelector("strong");
            console.log(strong);
            strong.innerText = "game over";

        }
    }
}

var gra = new Game();

gra.showFurry();
gra.showCoin();
gra.startGame();

