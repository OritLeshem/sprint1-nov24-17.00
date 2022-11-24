let timmy
let seconds = 0;
var elTimer = document.querySelector('.time')
// elTimer.innerText = timmy

function showTime() {
  /**
 * Converting seconds into proper time values like a digital clock
 * 00:01:03
 */
  //update the time as hours, minutes, and seconds 00:00:00
  seconds++;
  // let hours = Math.floor(seconds / 3600);
  let mins = Math.floor(seconds / 60)
  // - (hours * 60);
  let secs = Math.floor(seconds % 60);
  let output =
    // hours.toString().padStart(2, '0') + ':' +
    mins.toString().padStart(2, '0') + ':' +
    secs.toString().padStart(2, '0');
  // var elH2 = document.querySelector('h2')
  var elH2 = document.querySelector('.time')
  elH2.innerText = `TIME : ${output}`
  // console.log(output);
}

