import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Move } from '../../main/ts/movements';
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import * as positions from './predefined-positions';

let chessboard: Chessboard;

export class TestBishopMoves {
    @Setup
    beforeEach() {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positions.E4, pieces.blackBishop);
    }

    @Test('A Bishop can move diagonally')
    testCanMoveDiagonally1() {
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.A8 })).toBeTruthy();        
    }

    @Test('A Bishop can move diagonally')
    testCanMoveDiagonally2() {        
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.B1 })).toBeTruthy();        
    }

    @Test('A Bishop can move diagonally')
    testCanMoveDiagonally3() {
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.H7 })).toBeTruthy();   
    }

    @Test('A Bishop can move diagonally')
    testCanMoveDiagonally4() {
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.H1 })).toBeTruthy();
    }

    @Test('A Bishop cannot move horizontally')
    testCannotMoveHorizontally1() {
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.A4 })).not.toBeTruthy();
    }

    @Test('A Bishop cannot move horizontally')
    testCannotMoveHorizontally2() {
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.H4 })).not.toBeTruthy();
    }

    @Test('A Bishop cannot move vertically')
    testCannotMoveVertically1() {
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.E1 })).not.toBeTruthy();        
    }

    @Test('A Bishop cannot move vertically')
    testCannotMoveVertically2() {       
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.E8 })).not.toBeTruthy();
    }

    @Test('A Bishop can capture a piece from another color')
    testCanCaptureDifferentColor() {
        putPiece(chessboard, positions.A8, pieces.whitePawn);
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.A8 })).toBeTruthy();
    }

    @Test('A Bishop cannot capture a piece from the same color')
    testCannotCaptureSameColor() {
        putPiece(chessboard, positions.A8, pieces.blackPawn);
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.A8 })).not.toBeTruthy();
    }

    @Test('A Bishop cannot leap other pieces')
    testCannotLeapDiagonally() {
        putPiece(chessboard, positions.C6, pieces.whitePawn);
        Expect(isPossible.bishopMove(chessboard, { from: positions.E4, to: positions.A8 })).not.toBeTruthy();
    }
}
