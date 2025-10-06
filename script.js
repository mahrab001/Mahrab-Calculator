const questionsData = [
  "Do you like to stay up late at night?",
  "Do you prefer working alone?",
  "Do you overthink small things?",
  "Are you calm under pressure?",
  "Do you enjoy long conversations?",
  "Do you often forget small tasks?",
  "Do you love adventures or spontaneous plans?",
  "Do you listen to music daily?",
  "Do you get emotionally attached easily?",
  "Do you like deep thoughts or random jokes?"
];

const questionsContainer = document.getElementById("questions");

questionsData.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `
    <p><strong>Q${index + 1}.</strong> ${q}</p>
    <label><input type="radio" name="q${index}" value="10"> Yes</label>
    <label><input type="radio" name="q${index}" value="5"> Sometimes</label>
    <label><input type="radio" name="q${index}" value="0"> No</label>
  `;
  questionsContainer.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let total = 0;
  let answered = 0;

  questionsData.forEach((_, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected) {
      total += parseInt(selected.value);
      answered++;
    }
  });

  if (answered < 10) {
    alert("Please answer all 10 questions before submitting!");
    return;
  }

  const percent = (total / 100) * 100; // Total 100 points possible
  document.getElementById("scoreText").textContent = `You are ${percent}% Mahrab 🔥`;
  document.getElementById("result").classList.remove("hidden");
});
