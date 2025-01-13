import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Move } from '../../main/ts/movements';
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import * as positions from './predefined-positions';

let chessboard: Chessboard;

export class TestRookMoves {
    @Setup
    beforeEach() {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positions.E4, pieces.whiteRook);
    }

    @Test('An Rook can move horizontally')
    testCanMoveHorizontally1() {
        const horizontallyRight: Move = { from: positions.E4, to: positions.H4 };
        Expect(isPossible.rookMove(chessboard, horizontallyRight)).toBeTruthy();
    }

    @Test('An Rook can move horizontally')
    testCanMoveHorizontally2() {
        const horizontallyLeft: Move = { from: positions.E4, to: positions.A4 };
        Expect(isPossible.rookMove(chessboard, horizontallyLeft)).toBeTruthy();
    }

    @Test('A Rook can move vertically')
    testCanMoveVertically1() {
        const verticallyDown: Move = { from: positions.E4, to: positions.E1 };
        Expect(isPossible.rookMove(chessboard, verticallyDown)).toBeTruthy();
    }

    @Test('A Rook can move vertically')
    testCanMoveVertically2() {
        const verticallyUp: Move = { from: positions.E4, to: positions.E8 };
        Expect(isPossible.rookMove(chessboard, verticallyUp)).toBeTruthy();
    }

    @Test('A Rook cannot move diagonally')
    testCannotMoveDiagonally1() {
        const diagonallyUpLeft: Move = { from: positions.E4, to: positions.A8 };
        Expect(isPossible.rookMove(chessboard, diagonallyUpLeft)).not.toBeTruthy();
    }

    @Test('A Rook cannot move diagonally')
    testCannotMoveDiagonally2() {
        const diagonallyUpRight: Move = { from: positions.E4, to: positions.H7 };
        Expect(isPossible.rookMove(chessboard, diagonallyUpRight)).not.toBeTruthy();
    }

    @Test('A Rook cannot move diagonally')
    testCannotMoveDiagonally3() {
        const diagonallyDownRight: Move = { from: positions.E4, to: positions.H1 };
        Expect(isPossible.rookMove(chessboard, diagonallyDownRight)).not.toBeTruthy();
    }

    @Test('A Rook cannot move diagonally')
    testCannotMoveDiagonally4() {
        const diagonallyDownLeft: Move = { from: positions.E4, to: positions.B1 };
        Expect(isPossible.rookMove(chessboard, diagonallyDownLeft)).not.toBeTruthy();
    }

    @Test('A Rook can capture a piece from different color')
    testCanCaptureDifferentColor() {
        putPiece(chessboard, positions.H4, pieces.blackPawn);
        const differentColorCapture: Move = { from: positions.E4, to: positions.H4 };
        Expect(isPossible.rookMove(chessboard, differentColorCapture)).toBeTruthy();
    }

    @Test('A Rook cannot capture a piece from the same color')
    testCannotCaptureSameColor() {
        putPiece(chessboard, positions.H4, pieces.whitePawn);
        const sameColorCapture: Move = { from: positions.E4, to: positions.H4 };
        Expect(isPossible.rookMove(chessboard, sameColorCapture)).not.toBeTruthy();
    }

    @Test('A Rook cannot leap other pieces, when moving horizontally')
    testCannotLeapHorizontally() {
        putPiece(chessboard, positions.F4, pieces.blackPawn);
        const horizontalObstacle: Move = { from: positions.E4, to: positions.H4 };
        Expect(isPossible.rookMove(chessboard, horizontalObstacle)).not.toBeTruthy();
    }

    @Test('A Rook cannot leap other pieces, when moving vertically')
    testCannotLeapvertically() {
        putPiece(chessboard, positions.E3, pieces.blackPawn);
        const verticalObstacle: Move = { from: positions.E4, to: positions.E1 };
        Expect(isPossible.rookMove(chessboard, verticalObstacle)).not.toBeTruthy();
    }
}
