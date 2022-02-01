/*
  O(1) time | O(1) space
*/

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const myMin = Math.min(yourLeft, yourRight);
  const myMax = Math.max(yourLeft, yourRight);
  const friendsMin = Math.min(friendsLeft, friendsRight);
  const friendsMax = Math.max(friendsLeft, friendsRight);
  return myMin === friendsMin && myMax === friendsMax;
}
