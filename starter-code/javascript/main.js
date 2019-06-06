var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  return setInterval(() => {
    printMinutes(), printSeconds();
    printMilliseconds();
  }, 1);
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let arr = minutes.split("");
  return (minDec.innerHTML = arr[0]), (minUni.innerHTML = arr[1]);
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let arr = seconds.split("");
  return (secDec.innerHTML = arr[0]), (secUni.innerHTML = arr[1]);
}

function printMilliseconds() {
  var milSec = chronometer.twoDigitsNumber(chronometer.getMilSeconds());
  let arr = milSec.split("");
  return (milDec.innerHTML = arr[0]), (milUni.innerHTML = arr[1]);
}

function printSplit() {
  var newLi = document.createElement("li");
  var newContent = document.createTextNode(
    chronometer.twoDigitsNumber(
      chronometer.getMinutes() +
        ":" +
        chronometer.twoDigitsNumber(chronometer.getSeconds()) +
        ":" +
        chronometer.twoDigitsNumber(chronometer.getMilSeconds())
    )
  );
  newLi.appendChild(newContent);
  var currentOl = document.getElementById("splits");
  currentOl.appendChild(newLi);
  //   document.body.insertBefore(newLi, currentLi.nextSibling);
}

function clearSplits() {
  let split = document.getElementById("splits");
  return (split.innerHTML = "");
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start")
    return chronometer.startClick(), setStopBtn(), printTime(), setSplitBtn();
  else return chronometer.stopClick(), setStartBtn(), setResetBtn();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className === "btn split") return printSplit();
  else return chronometer.resetClick(), clearSplits();
});

//functionality button
