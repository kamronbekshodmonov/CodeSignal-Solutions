/*
  O(1) time | O(1) space
*/

function solution(white, black, toMove) {
  let whitePosition = Number(white[1]);
  let blackPosition = Number(black[1]);
  if (white[0] === black[0] && whitePosition < blackPosition) return "draw";

  const equalPosition = { 2: 7, 3: 6, 4: 5, 5: 4, 6: 3, 7: 2 };
  const canCapture = Math.abs(white.charCodeAt(0) - black.charCodeAt(0)) === 1;

  if (canCapture) {
    if (whitePosition + 1 === blackPosition)
      return toMove === "w" ? "white" : "black";
    if (whitePosition === 2 && blackPosition === 7)
      return toMove === "w" ? "black" : "white";

    if (whitePosition === 2) {
      if (toMove === "b") blackPosition--;
      if (whitePosition + 1 === blackPosition) return "white";
      const winner1 = mockGame(whitePosition + 1, blackPosition, toMove);
      const winner2 = mockGame(whitePosition + 2, blackPosition, toMove);
      if (winner1 === "white" || winner2 === "white") return "white";
      return "black";
    }

    if (blackPosition === 7) {
      if (toMove === "w") whitePosition++;
      if (whitePosition + 1 === blackPosition) return "black";
      const winner1 = mockGame(whitePosition, blackPosition - 1, toMove);
      const winner2 = mockGame(whitePosition, blackPosition - 2, toMove);
      console.log("here");
      if (winner1 === "black" || winner2 === "black") return "black";
      return "white";
    }

    return mockGame(whitePosition, blackPosition, toMove);
  } else {
    blackPosition = equalPosition[blackPosition];
    whitePosition === 2 ? (whitePosition += 2) : whitePosition++;
    blackPosition === 2 ? (blackPosition += 2) : blackPosition++;

    if (whitePosition === blackPosition) {
      return toMove === "w" ? "white" : "black";
    }

    return whitePosition > blackPosition ? "white" : "black";
  }
}

function mockGame(whitePosition, blackPosition, toMove) {
  while (whitePosition !== 8 && blackPosition !== 1) {
    toMove === "w" ? whitePosition++ : blackPosition--;
    if (whitePosition + 1 === blackPosition) {
      return toMove === "w" ? "black" : "white";
    }

    if (whitePosition === 8) return "white";
    if (blackPosition === 1) return "black";

    toMove === "w" ? blackPosition-- : whitePosition++;
    if (whitePosition + 1 === blackPosition) {
      return toMove === "w" ? "white" : "black";
    }
  }

  if (whitePosition === 8) return "white";
  if (blackPosition === 1) return "black";
}
