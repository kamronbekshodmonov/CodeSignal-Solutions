/*
  O(w * n + l) time | O(w * m + l) space - where w is the length of the input array and n is the max word length in the input array
*/

function solution(words, l) {
  const res = [];
  let pointer = 0;

  while (pointer < words.length) {
    let wordsCount = 1;
    let wordsLength = words[pointer].length + 1;

    const innerRes = [words[pointer]];
    pointer++;

    let pointerTwo = pointer;
    while (
      pointerTwo < words.length &&
      words[pointerTwo].length + wordsLength <= l
    ) {
      wordsLength += words[pointerTwo].length + 1;
      wordsCount++;
      pointerTwo++;
    }

    const remainingSpace = l - (wordsLength - wordsCount);
    const singleSpaceLength = Math.floor(remainingSpace / (wordsCount - 1));

    if (wordsCount === 1) {
      innerRes.push(new Array(remainingSpace).fill(" ").join(""));
    } else {
      let curSingleSpaceLength = singleSpaceLength;
      let extraSpace = remainingSpace - singleSpaceLength * (wordsCount - 1);

      if (pointerTwo === words.length) {
        extraSpace = 0;
        curSingleSpaceLength = 1;
      }

      for (let i = 1; i < wordsCount; i++) {
        let spaceLength = curSingleSpaceLength;
        if (extraSpace > 0) {
          extraSpace--;
          spaceLength += 1;
        }

        innerRes.push(new Array(spaceLength).fill(" ").join(""));
        innerRes.push(words[pointer]);
        pointer++;
      }

      if (pointerTwo === words.length) {
        const lastLineLength = remainingSpace - (wordsCount - 1);
        innerRes.push(new Array(lastLineLength).fill(" ").join(""));
      }
    }

    res.push(innerRes.join(""));
  }

  return res;
}
