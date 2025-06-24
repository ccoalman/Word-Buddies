const wordList = [
  "dog", "cat", "apple", "ball", "sun",
  "fish", "car", "bird", "tree", "shoe",
  "book", "milk", "duck", "frog", "cup",
  "hat", "chair", "house", "star", "moon"
];
let currentIndex = 0;
const PIXABAY_KEY = "34240200-d9a50f55e450d288bef51928a";

async function loadWord(word) {
  const wordElement = document.getElementById("word");
  const defElement = document.getElementById("definition");
  const exElement = document.getElementById("example");
  const audioBtn = document.getElementById("play-audio");
  const image = document.getElementById("word-image");

  // Fade out
  document.body.classList.remove("show");

  // Delay for smooth fade
  setTimeout(async () => {
    wordElement.textContent = word;
    defElement.textContent = "Loading definition...";
    exElement.textContent = "";
    audioBtn.style.display = "none";
    image.src = "";
    image.alt = "";

    try {
      // Dictionary API
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      const meaning = data[0].meanings[0].definitions[0].definition;
      const example = data[0].meanings[0].definitions[0].example || "No example available.";
      const audio = data[0].phonetics.find(p => p.audio);

      defElement.textContent = `Meaning: ${meaning}`;
      exElement.textContent = `Example: ${example}`;

      if (audio && audio.audio) {
        audioBtn.style.display = "inline-block";
        audioBtn.onclick = () => new Audio(audio.audio).play();
      }

      // Pixabay Image
      const imageRes = await fetch(`https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${word}&image_type=photo&safesearch=true`);
      const imageData = await imageRes.json();
      if (imageData.hits && imageData.hits.length > 0) {
        image.src = imageData.hits[0].webformatURL;
        image.alt = word;
      } else {
        image.alt = "No image found";
      }

    } catch (error) {
      defElement.textContent = "Sorry, we couldn't find that word.";
      exElement.textContent = "";
      audioBtn.style.display = "none";
      image.alt = "";
    }

    // Fade back in
    document.body.classList.add("show");
  }, 200); // short delay for smooth effect
}

document.getElementById("next-word").onclick = () => {
  currentIndex = (currentIndex + 1) % wordList.length;
  loadWord(wordList[currentIndex]);
};

loadWord(wordList[currentIndex]);
