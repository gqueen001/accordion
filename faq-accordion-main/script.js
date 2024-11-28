const questions = document.getElementsByTagName("section");
let i;

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    OpenAccordion(this);
  });
}

function OpenAccordion(question) {
  const inactiveImg = question.querySelector(".inactive");
  const activeImg = question.querySelector(".active");

  if (!question.classList.contains("open")) {
    question.classList.add("open");
    inactiveImg.style.display = "none";
    activeImg.style.display = "block";
  } else {
    question.classList.remove("open");
    inactiveImg.style.display = "block";
    activeImg.style.display = "none";
  }
}
