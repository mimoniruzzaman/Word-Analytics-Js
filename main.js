const textArea = document.querySelector(".text-area");
const wordCounter = document.querySelector(".word-counter");
const charecTers = document.querySelector(".charecters");
const linkeDin = document.querySelector(".linkedin");
const twitter = document.querySelector(".twitter");
const linkedinLimit = document.querySelector(".linkedin-imit");
const twitterLimit = document.querySelector(".twitter-limit");
const invalidWordList = ["script", "@", "payment", "%"];

function count() {
  // Invalid Word Check !
  invalidWordList.forEach((word) => {
    if (textArea.value.includes(word)) {
      textArea.value = textArea.value.replace(word, "");
      alert(`${word} It Is Not Allow !`);
    }
  });

  // Word Count !
  let word = textArea.value.length;
  wordCounter.innerHTML = word;

  // Charecters Count !
  charecTers.innerHTML = textArea.value.split(" ").length;
  if (textArea.value.length === 0) {
    charecTers.innerHTML = 0;
  }

  // Linkedin !
  let linkeDinCount = 350 - word;
  linkeDin.innerHTML = linkeDinCount;

  if (linkeDinCount <= 0) {
    linkedinLimit.style.display = "block";
    linkeDin.innerHTML = 0;
  } else {
    linkedinLimit.style.display = "none";
  }

  // Twitter !
  let twitterCount = 250 - word;
  twitter.innerHTML = twitterCount;

  if (twitterCount <= 0) {
    twitterLimit.style.display = "block";
    twitter.innerHTML = 0;
  } else {
    twitterLimit.style.display = "none";
  }
}

textArea.addEventListener("input", count);
