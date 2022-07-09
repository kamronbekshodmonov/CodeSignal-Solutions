/*
  O(ns + bsk) time | O(ns) space - where n is the length of the parts string, s is the length of longest parts string, b is the length of the words string, and k is the length of longest words string
*/

function solution(words, parts) {
  const MyTrie = new Trie();
  const root = MyTrie.root;
  parts.forEach((part, idx) => MyTrie.populateString(part, idx));

  return words.map((word) => {
    let info = [0, null];

    for (let i = 0; i < word.length; i++) {
      if (root.hasOwnProperty(word[i])) {
        const curInfo = MyTrie.findSubstring(word, i);
        if (curInfo[1] !== null) {
          const isInfoEmpty = info[1] === null;
          const isCurInfoLonger =
            !isInfoEmpty && curInfo[1].length > info[1].length;
          if (isInfoEmpty || isCurInfoLonger) info = curInfo;
        }
      }
    }

    if (info[1] !== null) {
      const curWord = word.split("");
      curWord.splice(info[0], info[1].length, `[${info[1]}]`);
      return curWord.join("");
    }
    return word;
  });
}

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  populateString(string, idx) {
    let node = this.root;

    for (const char of string) {
      if (!node.hasOwnProperty(char)) node[char] = {};
      node = node[char];
    }

    node[this.endSymbol] = string;
  }

  findSubstring(word, wordStartIdx) {
    let node = this.root;
    const res = [wordStartIdx, null];

    while (
      wordStartIdx < word.length &&
      node.hasOwnProperty(word[wordStartIdx])
    ) {
      node = node[word[wordStartIdx]];
      wordStartIdx++;
      if (node.hasOwnProperty(this.endSymbol)) {
        res[1] = node[this.endSymbol];
      }
    }

    return res;
  }
}
