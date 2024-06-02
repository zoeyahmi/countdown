//Countdown Functionality
var countdown = () => {
  const releaseDate = new Date("June 7, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  document.getElementById("days").innerText = (days < 10 ? "0" : "") + days;
  document.getElementById("hours").innerText = (hours < 10 ? "0" : "") + hours;
  document.getElementById("minutes").innerText =
    (minutes < 10 ? "0" : "") + minutes;
  document.getElementById("seconds").innerText =
    (seconds < 10 ? "0" : "") + seconds;

    if(distance<0){
        clearInterval()
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00"
    }
};

setInterval(countdown, 1000);

//Share button functionality
const share = document.getElementById("shareBtn");
const title = window.document.title;
const url = window.document.location.href;
const text =
  "Check out the release date for Falz's Forthcoming EP - Before The Feast";

share.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: `${title}`,
        url: `${url}`,
        text: `${text}`,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    navigator.clipboard.writeText(url)
  }
  share.style.animation = "none";
});

//Redirecting to pre-save page
const preSave = document.getElementById("preSaveBtn");
preSave.addEventListener("click", () => {
 window.location.href = 'https://t.co/DGDW31QkLj';
});
