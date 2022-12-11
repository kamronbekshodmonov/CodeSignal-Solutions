/*
  O(1) time | O(1) space
*/

function solution(king, amazon) {
  const [x, y] = [
    (position) => position[0].charCodeAt(0) - 96,
    (position) => parseInt(position[1]),
  ];

  const [kx, ky, ax, ay] = [x(king), y(king), x(amazon), y(amazon)];
  const a = [0, 0, 0, 0];

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if (!oneAway(kx, ky, i, j) && !(ax == i && ay == j)) {
        const threatened = isThreatened(i, j, kx, ky, ax, ay);
        let mate =
          oneAway(ax, ay, i, j) && !oneAway(ax, ay, kx, ky) ? false : true;

        if (mate) {
          for (let k = i - 1; k <= i + 1; k++) {
            for (let l = j - 1; l <= j + 1; l++) {
              if (
                spaceOpen(i, j, k, l, kx, ky) &&
                !isThreatened(k, l, kx, ky, ax, ay)
              ) {
                mate = false;
                break;
              }
            }
          }
        }

        threatened ? (mate ? a[0]++ : a[1]++) : mate ? a[2]++ : a[3]++;
      }
    }
  }

  return a;
}

function isThreatened(x, y, kx, ky, ax, ay) {
  return (
    (ax == x && !(kx == ax && (ky - ay) * (ky - y) < 0)) ||
    (ay == y && !(ky == ay && (kx - ax) * (kx - x) < 0)) ||
    (Math.abs(ax - x) == Math.abs(ay - y) &&
      !(Math.abs(kx - x) == Math.abs(ky - y) && (kx - ax) * (kx - x) < 0)) ||
    (ax !== x && ay !== y && Math.abs(ax - x) + Math.abs(ay - y) == 3)
  );
}

function oneAway(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) <= 1 && Math.abs(y2 - y1) <= 1;
}

function spaceOpen(i, j, x, y, kx, ky) {
  return (
    !(x == i && y == j) &&
    x >= 1 &&
    x <= 8 &&
    y >= 1 &&
    y <= 8 &&
    !oneAway(x, y, kx, ky)
  );
}
