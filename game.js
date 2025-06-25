const elements = {
  image: document.getElementById("game-image"),
  optionsContainer: document.getElementById("options-container"),
  scoreEl: document.getElementById("score"),
  nextBtn: document.getElementById("next-btn"),
  feedback: document.getElementById("feedback"),
  feedbackText: document.getElementById("feedback-text"),
  continueBtn: document.getElementById("continue-btn"),
  loader: document.getElementById("loader")
};

let score = 0;
let currentWordIndex = 0;
let correctOptionIndex = 0;

startNewRound();

function startNewRound() {
  elements.nextBtn.classList.add("hidden");
  elements.feedback.classList.add("hidden");
  
  currentWordIndex = Math.floor(Math.random() * WORDS.length);
  const currentWord = WORDS[currentWordIndex];
  
  elements.loader.classList.remove("hidden");
  elements.image.classList.add("hidden");
  
  const img = new Image();
  img.onload = () => {
    elements.image.src = currentWord.image;
    elements.image.alt = currentWord.word;
    elements.image.classList.remove("hidden");
    elements.loader.classList.add("hidden");
  };
  img.src = currentWord.image;
  
  const options = [currentWord.word];
  
  while (options.length < 3) {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[randomIndex].word;
    if (!options.includes(randomWord)) {
      options.push(randomWord);
    }
  }
  
  shuffleArray(options);
  correctOptionIndex = options.indexOf(currentWord.word);
  
  elements.optionsContainer.innerHTML = '';
  options.forEach((word, index) => {
    const button = document.createElement("div");
    button.className = "option";
    button.textContent = word;
    button.dataset.index = index;
    button.addEventListener("click", () => checkAnswer(index));
    elements.optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const options = elements.optionsContainer.querySelectorAll(".option");
  
  options.forEach(option => {
    option.style.pointerEvents = "none";
  });
  
  elements.feedback.classList.remove("hidden");
  
  if (selectedIndex === correctOptionIndex) {
    options[selectedIndex].classList.add("correct");
    elements.feedbackText.textContent = "Correct! Great job!";
    elements.feedback.style.background = "rgba(76, 175, 80, 0.1)";
    score++;
    elements.scoreEl.textContent = score;
  } else {
    options[selectedIndex].classList.add("wrong");
    options[correctOptionIndex].classList.add("correct");
    elements.feedbackText.textContent = `Almost! It's "${WORDS[currentWordIndex].word}"`;
    elements.feedback.style.background = "rgba(255, 82, 82, 0.1)";
  }
  
  setTimeout(() => {
    elements.nextBtn.classList.remove("hidden");
  }, 1500);
}

elements.continueBtn.addEventListener("click", () => {
  startNewRound();
});

elements.nextBtn.addEventListener("click", startNewRound);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

elements.image.onerror = () => {
  elements.image.alt = "Image not available";
  elements.loader.classList.add("hidden");
};