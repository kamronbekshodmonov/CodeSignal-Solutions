/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(address) {
  const addressSplit = address.split("@");
  return addressSplit[addressSplit.length - 1];
}
