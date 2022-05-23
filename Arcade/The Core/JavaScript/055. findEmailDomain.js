/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(address) {
  const emailAddress = address.split("@");
  return emailAddress[emailAddress.length - 1];
}
