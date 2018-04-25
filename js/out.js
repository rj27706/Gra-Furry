/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


const game =__webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Furry = __webpack_require__(2);
const Coin = __webpack_require__(3);

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



/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Furry(x, y, direction) {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}
module.exports = Furry;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function Coin(x, y) {
    this.x = Math.floor(Math.random() *10);
    this.y = Math.floor(Math.random() *10);
}

module.exports = Coin;

/***/ })
/******/ ]);