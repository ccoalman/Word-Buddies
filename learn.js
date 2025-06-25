const elements = {
  word: document.getElementById("word"),
  phonetic: document.getElementById("phonetic"),
  definition: document.getElementById("definition"),
  example: document.getElementById("example"),
  audioBtn: document.getElementById("play-audio"),
  image: document.getElementById("word-image"),
  prevBtn: document.getElementById("prev-word"),
  nextBtn: document.getElementById("next-word"),
  currentEl: document.getElementById("current"),
  totalEl: document.getElementById("total"),
  loader: document.getElementById("loader")
};

let currentWordIndex = 0;
elements.totalEl.textContent = WORDS.length;

loadWord(currentWordIndex);

function loadWord(index) {
  const wordData = WORDS[index];
  
  elements.word.textContent = wordData.word;
  elements.phonetic.textContent = wordData.phonetic;
  elements.definition.textContent = wordData.definition;
  elements.example.textContent = `"${wordData.example}"`;
  elements.currentEl.textContent = index + 1;
  
  elements.loader.classList.remove("hidden");
  elements.image.classList.add("hidden");
  
  const img = new Image();
  img.onload = () => {
    elements.image.src = wordData.image;
    elements.image.classList.remove("hidden");
    elements.loader.classList.add("hidden");
  };
  img.src = wordData.image;
  
  if ('speechSynthesis' in window) {
    elements.audioBtn.onclick = () => speakWord(wordData.word);
    elements.audioBtn.disabled = false;
  } else {
    elements.audioBtn.disabled = true;
  }
  
  elements.prevBtn.disabled = index === 0;
}

function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.pitch = 1.3;
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

elements.prevBtn.addEventListener("click", () => {
  if (currentWordIndex > 0) {
    currentWordIndex--;
    loadWord(currentWordIndex);
  }
});

elements.nextBtn.addEventListener("click", () => {
  if (currentWordIndex < WORDS.length - 1) {
    currentWordIndex++;
    loadWord(currentWordIndex);
  }
});

elements.image.onerror = () => {
  elements.image.alt = "Image not available";
  elements.loader.classList.add("hidden");
};