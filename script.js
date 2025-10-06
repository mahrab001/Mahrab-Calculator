const questionsData = [
    "Does your brain work on a single core?",
    "Do you think by shutting down your brain?",
    "Do you make easy things difficult?",
    "Do you think abnormally?",
    "Do you always do CHODNAMI?",
    "Do you often forget small tasks?",
    "Do you love CHODNAMI?",
    "Do you listen to GALI daily?",
    "Do you want to murder someone?",
    "Do you like deep thoughts on easy things?"
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
