import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Move } from '../../main/ts/movements';
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import * as positions from './predefined-positions';

let chessboard: Chessboard;

export class TestKingMoves {
    @Setup
    beforeEach() {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positions.E4, pieces.blackKing);
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare1() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.D3 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }
    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare2() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.D4 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare3() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.D5 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare4() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.E3 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare5() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.E5 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare6() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.F3 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare7() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.F4 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare8() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.F5 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare1() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.C2 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare2() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.C3 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare3() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.C4 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare4() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.C6 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare5() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.E2 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare6() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.E6 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare7() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.G2 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare8() {
        const moreThanOneSquareMove: Move = { from: positions.E4, to: positions.G4 };
        Expect(isPossible.kingMove(chessboard, moreThanOneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare9() {
        const oneSquareMove: Move = { from: positions.E4, to: positions.G6 };
        Expect(isPossible.kingMove(chessboard, oneSquareMove)).not.toBeTruthy();
    }

    @Test('A King cannot capure pieces from the same color')
    testCannotCaptureSameColor() {
        putPiece(chessboard, positions.E5, pieces.blackPawn);
        const sameColorCapture: Move = { from: positions.E4, to: positions.E5 };
        Expect(isPossible.kingMove(chessboard, sameColorCapture)).not.toBeTruthy();
    }

    @Test('A King can capure pieces from a different color')
    testCanCaptureSameColor() {
        putPiece(chessboard, positions.E5, pieces.whitePawn);
        const capture: Move = { from: positions.E4, to: positions.E5 };
        Expect(isPossible.kingMove(chessboard, capture)).toBeTruthy();
    }
}
