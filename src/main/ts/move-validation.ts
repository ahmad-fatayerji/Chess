import { Chessboard, isEmpty, Square, squareAtPosition } from './chessboard';
import { Move } from './movements';
import { Position } from './position';
import { equals, left, right, top, bottom } from './position';

/**
 * Checks whether a Black Pawn can perform a given move.
 * A pawn can move forward to the unoccupied square immediately in front of
 * it on the same file, or on its first move it can advance two squares along
 * the same file, provided both squares are unoccupied (black dots in the
 * diagram); or the pawn can capture an opponent's piece on a square diagonally
 * in front of it on an adjacent file, by moving to that square (black "x"s).
 *
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function blackPawnMove(board: Chessboard, move: Move): boolean {
    if (equals(move.to, bottom(move.from))) {
        //console.log("Single forward");
        return isEmpty(board, move.to);
    }

    if (move.from.rank == 6 && equals(move.to, bottom(bottom(move.from)))) {
        //console.log("Double forward");
        return isEmpty(board, bottom(move.from)) && isEmpty(board, move.to);
    }

    if (equals(move.to, left(bottom(move.from))) || equals(move.to, right(bottom(move.from)))) {
        const destination: Square = squareAtPosition(board, move.to);
        return !(destination.isEmpty || !destination.piece.isWhite);
    }

    return false;
}

/**
 * A pawn can move forward to the unoccupied square immediately in front of
 * it on the same file, or on its first move it can advance two squares along
 * the same file, provided both squares are unoccupied or the pawn can capture an opponent's piece on a square diagonally
 * in front of it on an adjacent file, by moving to that square.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function whitePawnMove(board: Chessboard, move: Move): boolean {
    if (equals(move.to, top(move.from))) {
        return isEmpty(board, move.to);
    }

    if (move.from.rank == 1 && equals(move.to, top(top(move.from)))) {
        return isEmpty(board, top(move.from)) && isEmpty(board, move.to);
    }

    if (equals(move.to, left(top(move.from))) || equals(move.to, right(top(move.from)))) {
        const destination: Square = squareAtPosition(board, move.to);
        return !(destination.isEmpty || destination.piece.isWhite);
    }

    return false;
}

/**
 * Checks whether a King can perform a given move.
 * The king moves one square in any direction.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function kingMove(board: Chessboard, move: Move): boolean {
    const fromSquare = squareAtPosition(board, move.from);
    const toSquare = squareAtPosition(board, move.to);

    // Check if the destination square is empty or occupied by an opponent's piece
    if (toSquare.isEmpty || toSquare.piece.isWhite !== fromSquare.piece.isWhite) {
        // Check if the move is a legal king move (moving one square horizontally, vertically, or diagonally)
        const rankDiff = Math.abs(move.to.rank - move.from.rank);
        const fileDiff = Math.abs(move.to.file - move.from.file);

        if ((rankDiff === 1 && fileDiff === 0) || (rankDiff === 0 && fileDiff === 1) || (rankDiff === 1 && fileDiff === 1)) {
            return true; // The move is legal for a king
        }
    }

    return false;
}

/**
 * Checks whether a Queen can perform a given move.
 * The queen combines the power of a rook and bishop and can move any
 * number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */

export function queenMove(board: Chessboard, move: Move): boolean {
    const fromSquare = squareAtPosition(board, move.from);
    const toSquare = squareAtPosition(board, move.to);

    // Check if the destination square is empty or occupied by an opponent's piece
    if (toSquare.isEmpty || toSquare.piece.isWhite !== fromSquare.piece.isWhite) {
        // Check if the move is a legal queen move (moving horizontally, vertically, or diagonally)
        const rankDiff = Math.abs(move.to.rank - move.from.rank);
        const fileDiff = Math.abs(move.to.file - move.from.file);

        if (rankDiff === 0 || fileDiff === 0 || rankDiff === fileDiff) {
            const rankStep = Math.sign(move.to.rank - move.from.rank);
            const fileStep = Math.sign(move.to.file - move.from.file);

            let rank = move.from.rank + rankStep;
            let file = move.from.file + fileStep;

            while (rank !== move.to.rank || file !== move.to.file) {
                const square = squareAtPosition(board, { rank, file });

                if (!square.isEmpty) {
                    return false; // There's a piece blocking the path of the queen
                }

                rank += rankStep;
                file += fileStep;
            }

            return true; // The move is legal for a queen
        }
    }

    return false;
}

/**
 * Checks whether a Rook can perform a given move.
 * An Rook can move any number of squares along a rank or file,
 * but cannot leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move
 */

export function rookMove(board: Chessboard, move: Move): boolean {
    const fromSquare = squareAtPosition(board, move.from);
    const toSquare = squareAtPosition(board, move.to);

    // Check if the destination square is empty or occupied by an opponent's piece
    if (toSquare.isEmpty || toSquare.piece.isWhite !== fromSquare.piece.isWhite) {
        // Check if the move is a legal rook move (moving horizontally or vertically)
        const rankDiff = Math.abs(move.to.rank - move.from.rank);
        const fileDiff = Math.abs(move.to.file - move.from.file);

        // Check if there are any pieces blocking the path of the rook
        if ((rankDiff === 0 && fileDiff > 0) || (rankDiff > 0 && fileDiff === 0)) {
            const rankStep = Math.sign(move.to.rank - move.from.rank);
            const fileStep = Math.sign(move.to.file - move.from.file);

            let rank = move.from.rank + rankStep;
            let file = move.from.file + fileStep;

            while (rank !== move.to.rank || file !== move.to.file) {
                const square = squareAtPosition(board, { rank, file });

                if (!square.isEmpty) {
                    return false; // There's a piece blocking the path of the rook
                }

                rank += rankStep;
                file += fileStep;
            }

            return true; // The move is legal for a rook
        }
    }

    return false;
}

/**
 * Checks whether a Bishop can perform a given move.
 * A Bishop can move any number of squares diagonally,
 * but cannot leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function bishopMove(board: Chessboard, move: Move): boolean {
    const fromSquare = squareAtPosition(board, move.from);
    const toSquare = squareAtPosition(board, move.to);

    // Check if the destination square is empty or occupied by an opponent's piece
    if (toSquare.isEmpty || toSquare.piece.isWhite !== fromSquare.piece.isWhite) {
        // Check if the move is a legal bishop move (moving diagonally)
        const rankDiff = Math.abs(move.to.rank - move.from.rank);
        const fileDiff = Math.abs(move.to.file - move.from.file);

        if (rankDiff === fileDiff) {
            const rankStep = Math.sign(move.to.rank - move.from.rank);
            const fileStep = Math.sign(move.to.file - move.from.file);

            let rank = move.from.rank + rankStep;
            let file = move.from.file + fileStep;

            while (rank !== move.to.rank || file !== move.to.file) {
                const square = squareAtPosition(board, { rank, file });

                if (!square.isEmpty) {
                    return false; // There's a piece blocking the path of the bishop
                }

                rank += rankStep;
                file += fileStep;
            }

            return true; // The move is legal for a bishop
        }
    }

    return false;
}

/**
 * Checks whether a Knight can perform a given move.
 * The Knight move forms an "L"-shape:
 * two squares vertically and one square horizontally, or two
 * squares horizontally and one square vertically.)
 *
 * The Knight can leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function knightMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to, top(top(left(move.from)))) || equals(move.to, top(top(right(move.from))))) { //The knight moves forward (left/right)
        const departure: Square = squareAtPosition(board, move.from);
        const destination: Square = squareAtPosition(board, move.to);

        if(destination.isEmpty == true){ //if the case is not empty the movement is performed
            return true;
        }
        else{ //if not it checks if the piece is not the same color
            return !(departure.piece.isWhite == destination.piece.isWhite);
        }
    }

    if (equals(move.to, left(left(top(move.from)))) || equals(move.to, left(left(bottom(move.from))))) { //The knight moves to the left (up/down)
        const departure: Square = squareAtPosition(board, move.from);
        const destination: Square = squareAtPosition(board, move.to);

        if(destination.isEmpty == true){ //if the case is empty it does the movement
            return true;
        }
        else{ //if not it checks if the piece is not the same color
            return !(departure.piece.isWhite == destination.piece.isWhite);
        }   
    }

    if (equals(move.to, right(right(top(move.from)))) || equals(move.to, right(right(bottom(move.from))))) { //The knight moves to the right (up/down)
        const departure: Square = squareAtPosition(board, move.from);
        const destination: Square = squareAtPosition(board, move.to);

        if(destination.isEmpty == true){ //if the case is empty it does the movement
            return true;
        }
        else{ //if not it checks if the piece is not the same color
            return !(departure.piece.isWhite == destination.piece.isWhite);
        }
    }

    if (equals(move.to, bottom(bottom(left(move.from)))) || equals(move.to, bottom(bottom(right(move.from))))) { //The knight moves backwards (left/right)
        const departure: Square = squareAtPosition(board, move.from);
        const destination: Square = squareAtPosition(board, move.to);

        if(destination.isEmpty == true){ //if the case is empty it does the movement
            return true;
        }
        else{ //if not it checks if the piece is not the same color
            return !(departure.piece.isWhite == destination.piece.isWhite);
        }
    }

    return false;
}