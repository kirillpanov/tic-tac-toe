class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.lastPlayerSymbol = null;
        this.grid = [   [null,null,null],
                        [null,null,null],
                        [null,null,null],   ];
        this.winner;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.grid[rowIndex][columnIndex]) {
            this.grid[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.lastPlayerSymbol = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            };
        };
        this.getWinner();
    }

    isFinished() {
        this.getWinner();
        if (this.winner || this.isDraw()) return true; else return false ;
    }

    getWinner() {
        let matches = {},
        arrOfRow = [],
        arrOfCol = [];
        for (let i = 0; i<this.grid.length; i++) {
            for (let j = 0; j<this.grid[i].length; j++) {
                if (this.grid[i][j] == this.lastPlayerSymbol) {
                    let row = 'row: '+i;
                    let col = 'col: '+j;
                    matches[row] ? ++matches[row] : matches[row] = 1;
                    matches[col] ? ++matches[col] : matches[col] = 1;
                    for (let key in matches) {
                        if (matches[key] == 3) return this.winner = this.lastPlayerSymbol;
                        
                    };
                    if ( (this.lastPlayerSymbol == this.grid[0][0] && this.lastPlayerSymbol == this.grid[1][1] && this.lastPlayerSymbol == this.grid[2][2])  ||
                         (this.lastPlayerSymbol == this.grid[2][0] && this.lastPlayerSymbol == this.grid[1][1] && this.lastPlayerSymbol == this.grid[0][2]) ) {
                        return this.winner = this.lastPlayerSymbol;
                    };
                };
            };
        };
        for (let key in matches) {
            matches[key] = 0;
        };
        arrOfRow = [];
        arrOfCol = [];
        return this.winner = null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (!this.grid[i][j]) return false;
            };
        };
        return true;
    }

    isDraw() {
        if ( this.noMoreTurns() && !this.winner ) {
            return true;
        } else {
            return false;
        };
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex] || null;
    }
};

module.exports = TicTacToe;
