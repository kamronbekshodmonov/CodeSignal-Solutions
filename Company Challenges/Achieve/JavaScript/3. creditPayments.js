/*
  O(n) time | O(n) space - where n is the number of months between startDate and endDate
*/

function solution(a, b, startDate, endDate, history) {
  const res = [`Leave as it is, ${b}.`, `Leave as it is, ${b}.`];
  const formattedHistory = formatPaymentHistory(history, startDate, endDate);

  let pointer = 2;
  startDate = new Date(formatDate(startDate));
  startDate.setMonth(startDate.getMonth() + 2);
  endDate = new Date(formatDate(endDate));

  while (startDate <= endDate) {
    const [shouldAdd, shouldRemove] = calculateInformation(
      formattedHistory,
      pointer,
      b
    );

    if (shouldAdd) {
      b += Math.round(a / 100);
      res.push(`Add one year, ${b}.`);
    } else if (shouldRemove) {
      b -= Math.round(a / 100);
      res.push(`Remove one year, ${b}.`);
    } else {
      res.push(`Leave as it is, ${b}.`);
    }

    pointer++;
    startDate.setMonth(startDate.getMonth() + 1);
  }

  return res;
}

function formatPaymentHistory(history, startDate, endDate) {
  const res = [];
  startDate = new Date(formatDate(startDate));
  endDate = new Date(formatDate(endDate));

  for (const payment of history) {
    const data = payment.split(" payment received on ");
    const amount = Number(data[0].substring(1));
    const paymentDate = new Date(data[1]);

    while (
      startDate.getYear() !== paymentDate.getYear() ||
      startDate.getMonth() !== paymentDate.getMonth()
    ) {
      res.push(0);
      startDate.setMonth(startDate.getMonth() + 1);
    }

    startDate < paymentDate ? res.push(amount * -1) : res.push(amount);
    startDate.setMonth(startDate.getMonth() + 1);
  }

  while (startDate <= endDate) {
    res.push(0);
    startDate.setMonth(startDate.getMonth + 1);
  }

  return res;
}

function formatDate(date) {
  const formattedDate = date.split("/");
  formattedDate.splice(1, 0, "15");
  return formattedDate.join("/");
}

function calculateInformation(formattedHistory, pointer, b) {
  const [firstMonthPayment, isFirstMonthLatePayment] = getPaymentInfo(
    formattedHistory,
    pointer - 2
  );
  const [secondMonthPayment, isSecondMonthLatePayment] = getPaymentInfo(
    formattedHistory,
    pointer - 1
  );
  const [thirdMonthPayment, isThirdMonthLatePayment] = getPaymentInfo(
    formattedHistory,
    pointer
  );

  const userPaidLessThan3TimesB =
    b * 3 > firstMonthPayment + secondMonthPayment + thirdMonthPayment;
  const userDidNotPayLast2Months = !secondMonthPayment && !thirdMonthPayment;
  const userPaidLateLast3Months =
    isFirstMonthLatePayment &&
    isSecondMonthLatePayment &&
    isThirdMonthLatePayment;
  const userPaidTwoTimesMoreInLastThreeMonths =
    firstMonthPayment >= 2 * b &&
    secondMonthPayment >= 2 * b &&
    thirdMonthPayment >= 2 * b;
  const shouldAdd =
    userPaidLessThan3TimesB ||
    userDidNotPayLast2Months ||
    userPaidLateLast3Months;
  const shouldRemove = userPaidTwoTimesMoreInLastThreeMonths;

  return [shouldAdd, shouldRemove];
}

function getPaymentInfo(formattedHistory, pointer) {
  const value = formattedHistory[pointer];
  if (value <= 0) return [value * -1, true];
  return [value, false];
}
