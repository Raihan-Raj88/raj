const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const loader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const gifResult = document.querySelector(".gif-result");

// No button moves randomly
noBtn.addEventListener("mouseover", () => {
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;

  const randomX = Math.floor(Math.random() * containerWidth);
  const randomY = Math.floor(Math.random() * containerHeight);

  noBtn.style.position = "absolute";   // 🔥 important
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

// Yes button = show loader → then video
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});  