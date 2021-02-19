export const getTimeDifference = (previousTime: number): string => {
  const presentTime = Date.now();
  const msPerMin = 1000 * 60;
  const msPerHour = msPerMin * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const timeElapsed = presentTime - previousTime;

  let timeDifference = "";
  if (timeElapsed < msPerMin)
    timeDifference += Math.round(timeElapsed / 1000) + " second";
  else if (timeElapsed < msPerHour)
    timeDifference += Math.round(timeElapsed / msPerMin) + " minute";
  else if (timeElapsed < msPerDay)
    timeDifference += Math.round(timeElapsed / msPerHour) + " hour";
  else if (timeElapsed < msPerMonth)
    timeDifference += Math.round(timeElapsed / msPerDay) + " day";
  else if (timeElapsed < msPerYear)
    timeDifference += Math.round(timeElapsed / msPerMonth) + " month";

  timeDifference += parseInt(timeDifference.charAt(0)) === 1 ? " ago" : "s ago";

  return timeDifference;
};
