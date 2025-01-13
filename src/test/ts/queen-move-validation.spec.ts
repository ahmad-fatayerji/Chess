import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Move } from '../../main/ts/movements';
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import * as positions from './predefined-positions';

let chessboard: Chessboard;

export class TestQueenMoves {
    @Setup
    beforeEach() {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positions.E4, pieces.whiteQueen);
    }

    @Test('A Queen can move diagonally')
    testCanMoveDiagonally1() { 
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.A8 })).toBeTruthy();
    }

    @Test('A Queen can move diagonally')
    testCanMoveDiagonally2() { 
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.B1 })).toBeTruthy();
    }

    @Test('A Queen can move diagonally')
    testCanMoveDiagonally3() { 
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.H7 })).toBeTruthy();
    }

    @Test('A Queen can move diagonally')
    testCanMoveDiagonally4() { 
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.H1 })).toBeTruthy();
    }

    @Test('A Queen can move horizontally') 
    testCanMoveHorizontally1() {
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.H4 })).toBeTruthy();
    }

    @Test('A Queen can move horizontally') 
    testCanMoveHorizontally2() {
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.A4 })).toBeTruthy();
    }

    @Test('A Queen can move vertically') 
    testCanMoveVertically1() {
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.E1 })).toBeTruthy();
    }

    @Test('A Queen can move vertically') 
    testCanMoveVertically2() {
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.E8 })).toBeTruthy();
    }

    @Test('A Queen can only move horizontally, vertically, and diagonally') 
    testForbiddenMoves1() {
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.C7 })).not.toBeTruthy();
    }

    @Test('A Queen can only move horizontally, vertically, and diagonally') 
    testForbiddenMoves2() {
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.B2 })).not.toBeTruthy();
    }

    @Test('A Queen cannot leap other pieces') 
    testCannotLeap1() {
        putPiece(chessboard, positions.C6, pieces.whitePawn);
        putPiece(chessboard, positions.F4, pieces.blackPawn);
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.A8 })).not.toBeTruthy();
    }

    @Test('A Queen cannot leap other pieces') 
    testCannotLeap2() {
        putPiece(chessboard, positions.C6, pieces.whitePawn);
        putPiece(chessboard, positions.F4, pieces.blackPawn);
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.H4 })).not.toBeTruthy();
    }

    @Test('A Queen cannot capure pieces from the same color')
    testCannotCaptureSameColor() {
        putPiece(chessboard, positions.H4, pieces.whitePawn);
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.H4 })).not.toBeTruthy(); 
    }

    @Test('A Queen can capure pieces from a different color')
    testCanCaptureDifferentColor() {
        putPiece(chessboard, positions.H4, pieces.blackPawn);
        Expect(isPossible.queenMove(chessboard, { from: positions.E4, to: positions.H4 })).toBeTruthy(); 
    }
}
