setInterval(function () {
  let d = new Date();
  let t = d.toString();
  // console.log(t);
  let time = t.split(" ")[4].split(":");
  let ampm = time[0] >= 12 ? "PM" : "AM";
  if (time[0] > 12) {
    time[0] = time[0] - 12;
  }
  let actualtime = `Time: ${time[0]}:${time[1]}:${time[2]} ${ampm}`;
  // console.log(actualtime);
  document.getElementById("current-time").innerHTML = actualtime;
  let current = t.split(" ");
  let day = `Day: ${current[0]}day`;
  let actualdate = `Date: ${current[2]}-${current[1]}-${current[3]}`;
  document.getElementById("current-day").innerHTML = day;
  document.getElementById("current-date").innerHTML = actualdate;
}, 1000);
