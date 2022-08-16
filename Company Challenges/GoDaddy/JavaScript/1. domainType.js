/*
  O(n * m) time | O(n * m) space - where n is the length of the input array and m is the max word length in the input array
*/

function solution(domains) {
  return domains.map((domain) => {
    const domainSplit = domain.split(".");
    return getDomainType(domainSplit[domainSplit.length - 1]);
  });
}

function getDomainType(domain) {
  switch (domain) {
    case "com":
      return "commercial";
    case "org":
      return "organization";
    case "net":
      return "network";
    case "info":
      return "information";
  }
}
