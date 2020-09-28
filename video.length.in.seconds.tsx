/**
 * @function
 * @return number
 * You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.
 */

const minutesToSeconds = (time: string): number | boolean => {
  let [minutes, seconds] = time.split(":").map(Number);

  return seconds > 59 ? false : minutes * 60 + seconds;
};

console.log(minutesToSeconds("10:60")); //false
console.log(minutesToSeconds("13:56")); //836
console.log(minutesToSeconds("01:00")); //60
