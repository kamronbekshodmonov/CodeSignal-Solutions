/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  let fare = [];

  for (let i = 0; i < cost_per_mile.length; i++) {
    fare.push(
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance
    );
  }

  return fare;
}
