import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Move } from '../../main/ts/movements';
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import * as positions from './predefined-positions';
import { position } from "../../main/ts/position";

let chessboard: Chessboard;

export class TestKnightMoves {
    @Setup
    beforeEach() {
        chessboard = createEmptyChessboard();
    }

    @Test('A Knight can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical1() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.G3 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).toBeTruthy();
    }
    
    @Test('A Knight can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical2() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.G5 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).toBeTruthy();
    }

    @Test('A Knight can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical3() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.C3 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).toBeTruthy();
                  
    }

    @Test('A Knight can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical4() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.C5 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).toBeTruthy();
       
    }

    @Test('A Knight can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal1() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.F2 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).toBeTruthy();
    }

    @Test('A Knight can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal2() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition2 : Move = {from : positions.E4, to: positions.F6 };
        Expect(isPossible.knightMove(chessboard, changeofposition2)).toBeTruthy();
    }

    @Test('A Knight can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal3() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition3 : Move = {from : positions.E4, to: positions.D2 };
        Expect(isPossible.knightMove(chessboard, changeofposition3)).toBeTruthy();
    }

    @Test('A Knight can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal4() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition4 : Move = {from : positions.E4, to: positions.D6 };
        Expect(isPossible.knightMove(chessboard, changeofposition4)).toBeTruthy();
    }


    @Test('A Knight can leap other pieces') 
    testCanLeapOtherPieces() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        putPiece(chessboard, positions.E5, pieces.whitePawn);
        putPiece(chessboard, positions.F5, pieces.blackBishop);
        const leapOverPawn: Move = {from: positions.E4, to: positions.F6};
        Expect(isPossible.knightMove(chessboard, leapOverPawn)).toBeTruthy();
    }
    
    @Test('A Knight cannot move diagonally') 
    testCannotMoveDiagonally1() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const moveD3: Move = { from: positions.E4, to: positions.D3 };
        Expect(isPossible.knightMove(chessboard, moveD3)).not.toBeTruthy();
    }

    @Test('A Knight cannot move diagonally') 
    testCannotMoveDiagonally2() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const moveF5: Move = { from: positions.E4, to: positions.F5 };
        Expect(isPossible.knightMove(chessboard, moveF5)).not.toBeTruthy();
    }

    @Test('A Knight cannot move diagonally') 
    testCannotMoveDiagonally3() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const moveF3: Move = { from: positions.E4, to: positions.F3 };
        Expect(isPossible.knightMove(chessboard, moveF3)).not.toBeTruthy();
    }

    @Test('A Knight cannot move diagonally') 
    testCannotMoveDiagonally4() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const moveD5: Move = { from: positions.E4, to: positions.D5 };
        Expect(isPossible.knightMove(chessboard, moveD5)).not.toBeTruthy();
    }

    @Test('A Knight cannot move horizontally')
    testCannotMoveHorizontally() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const moveE2: Move = { from: positions.E4, to: positions.E2 };
        Expect(isPossible.knightMove(chessboard, moveE2)).not.toBeTruthy();
    }

    @Test('A Knight cannot move horizontally')
    testCannotMoveHorizontally2() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const moveE6: Move = { from: positions.E4, to: positions.E6 };
        Expect(isPossible.knightMove(chessboard, moveE6)).not.toBeTruthy();
    }

    @Test('A Knight cannot move vertically')  
    testCannotMoveVertically() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.E6 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).not.toBeTruthy();
    }

    @Test('A Knight cannot move vertically')  
    testCannotMoveVertically2() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.E2 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).not.toBeTruthy();
    }

    @Test('A Knight can capture a piece from another color')
    testCanCaptureAnotherColor() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        putPiece(chessboard, positions.F6, pieces.whiteKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.F6 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).toBeTruthy();
    }

    @Test('A Knight cannot capture a piece from the same color')
    testCannotCaptureSameColor() {
        putPiece(chessboard, positions.E4, pieces.blackKnight);
        putPiece(chessboard, positions.F6, pieces.blackKnight);
        const changeofposition : Move = {from : positions.E4, to: positions.F6 };
        Expect(isPossible.knightMove(chessboard, changeofposition)).not.toBeTruthy();
    }
}
