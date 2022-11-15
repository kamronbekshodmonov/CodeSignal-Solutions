/*
  O(n * m) time | O(n * m) space - where n is the length of the input array and m is the max word length in the input array
*/

function solution(lrcLyrics, songLength) {
  const result = [];

  lrcLyrics.forEach((lrcLyric, index) => {
    const isNextLast = index + 1 >= lrcLyrics.length;
    const curTime = formatTime(lrcLyric);
    const nextTime = isNextLast
      ? `${songLength},000`
      : formatTime(lrcLyrics[index + 1]);

    result.push(String(index + 1));

    result.push(`${curTime} --> ${nextTime}`);

    result.push(lrcLyric.split("] ")[1] || "");

    if (!isNextLast) result.push("");
  });

  return result;
}

function formatTime(lrcLyric) {
  const time = lrcLyric.split("]")[0].slice(1);
  const minutes = time.split(":")[0];
  const [seconds, milliseconds] = time.split(":")[1].split(".");

  const convertedHours = String(Math.floor(minutes / 60)).padStart(2, "0");
  const convertedMinutes = String(minutes % 60).padStart(2, "0");
  const convertedMilliseconds = String(milliseconds).padEnd(3, "0");

  return `${convertedHours}:${convertedMinutes}:${seconds},${convertedMilliseconds}`;
}
