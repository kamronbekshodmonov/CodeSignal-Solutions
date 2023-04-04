/*
  O(n) time | O(n + m) space - where n is the total number of elements in the array and m is the max size of the stack
*/

function solution(program) {
  return new bufunge93Interpreter(program).run();
}

class bufunge93Interpreter {
  constructor(bytecode) {
    this.bytecode = bytecode;
    this.stack = [];

    this.x = 0;
    this.y = 0;
    this.direction = [1, 0];

    this.output = "";
    this.stringMode = false;
    this.done = false;
  }

  pop() {
    return this.stack.length ? this.stack.pop() : 0;
  }

  push(v) {
    this.stack.push(v);
  }

  interpret(str) {
    str.split("").forEach((char) => {
      if (this.done) return;
      if (this.stringMode && char != '"') return this.push(char.charCodeAt());

      if (char == ">") this.direction = [1, 0];
      if (char == "<") this.direction = [-1, 0];
      if (char == "^") this.direction = [0, -1];
      if (char == "v") this.direction = [0, 1];
      if (char == "#") {
        this.x += this.direction[0];
        this.y += this.direction[1];
      }

      if (char == "+") this.push(this.pop() + this.pop());
      if (char == "-") this.push(this.pop() * -1 + this.pop());
      if (char == "*") this.push(this.pop() * this.pop());
      if (char == "/") {
        this.push(Math.floor(Math.pow(this.pop(), -1) * this.pop()));
      }
      if (char == "%") {
        let a = this.pop();
        this.push(this.pop() % a);
      }

      if (char == "!") this.push(this.pop() ? 0 : 1);
      if (char == "`") this.push(this.pop() < this.pop() ? 1 : 0);
      if (char == "_") this.direction = [this.pop() ? -1 : 1, 0];
      if (char == "|") this.direction = [0, this.pop() ? -1 : 1];

      if (char == ":") {
        let a = this.pop();
        this.push(a);
        this.push(a);
      }

      if (char == "\\") {
        let a = this.pop(),
          b = this.pop();
        this.push(a);
        this.push(b);
      }

      if (char == "$") this.pop();

      if (char == ".") this.output += this.pop().toString() + " ";
      if (char == ",") this.output += String.fromCharCode(this.pop());
      if (!isNaN(parseInt(char))) this.push(parseInt(char));
      if (char == '"') this.stringMode = !this.stringMode;
      if (char == "@") this.done = true;
    });
  }

  run() {
    let runs = 0;
    while (++runs <= 10000 && !this.done && this.output.length < 100) {
      this.interpret(this.bytecode[this.y][this.x]);
      this.x =
        (this.x + this.bytecode[0].length + this.direction[0]) %
        this.bytecode[0].length;

      this.y =
        (this.y + this.bytecode.length + this.direction[1]) %
        this.bytecode.length;

      this.shouldmove = true;
    }

    return this.output;
  }
}
