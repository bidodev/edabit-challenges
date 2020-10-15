/**
 * Write a function that takes an array of hours and returns the total weekly salary.
 *
 *
 * The first element of the array is the number of hours spent at work on Monday.
 * The second element of the array is the number of hours spent at work on Tuesday, etc.
 * A worker earns $10 an hour for the first 8 hours.
 * For every overtime hour, he's earning $15.
 * On Saturday and Sunday, the employer pays twice for each hour and overtime.
 */

const weeklySalary = (days: number[]) => {
  let total = 0;

  return days
    .map((hours, day) => {
      let extraHours = hours > 8 ? hours - 8 : 0;

      return day < 5
        ? (hours - extraHours) * 10 + extraHours * 15
        : (hours - extraHours) * 20 + extraHours * 30;
    })
    .reduce((acc, cur) => (acc + cur), 0);
};

console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])); //➞ 280
