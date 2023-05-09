const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
const results = document.querySelector("#results");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = document.querySelector("#text").value;
  if (text.trim().length === 0) {
    alert("Please enter some text to check for plagiarism.");
    return;
  }
  submitBtn.disabled = true;
  submitBtn.textContent = "Checking...";
  checkPlagiarism(text).then(function (result) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Check Plagiarism";
    showResults(result);
  }).catch(function (error) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Check Plagiarism";
    console.log(error);
  });
});

function checkPlagiarism(text) {
  return new Promise(function (resolve, reject) {
    // Call API or compare text with other sources to check for plagiarism
    // Replace the below code with your own plagiarism checking method
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve({ plagiarism: true, score: randomNum });
    } else {
      resolve({ plagiarism: false, score: randomNum });
    }
  });
}

function showResults(result) {
  let message = "";
  if (result.plagiarism) {
    message = `Plagiarism detected with a score of ${result.score.toFixed(2)}.`;
  } else {
    message = `No plagiarism detected with a score of ${result.score.toFixed(2)}.`;
  }
  results.innerHTML = message;
}
