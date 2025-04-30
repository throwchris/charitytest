// Define 16 generic questions and correct answers
const questions = [
    {
      question: "Suffereth Long: To be ____________, to endure, to persevere, without retailiation, slow to anger.",
      options: {
        a: "patient",
        b: "pleasant",
        c: "pleasing",
        d: "pondering"
      },
      correct: "a"
    },
    {
      question: "Is Kind: To show oneself __________, pleasant, and good; to act virtuously, benevolently.",
      options: {
        a: "honest",
        b: "useful",
        c: "humble",
        d: "outgoing"
      },
      correct: "b"
    },
    {
        question: "Envieth Not: Is content, ___________; does not covet. Is not consumed by one's desire or lust, leading to hate and murder.",
        options: {
          a: "not fearing",
          b: "honoring",
          c: "loving",
          d: "satiisfied"
        },
        correct: "d"
      },
      {
        question: "Vaunteth Not Itself: Humble, meek, is not boastful or a ___________. Does not speak of oneself in pride.",
        options: {
          a: "bragging",
          b: "bragger",
          c: "braggart",
          d: "braggin"
        },
        correct: "c"
      },
    // Add more questions...
  ];
  
  
  const form = document.getElementById("quiz-form");
  
  questions.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `
      <p><strong>${i + 1}. ${q.question}</strong></p>
      <label><input type="radio" name="q${i}" value="a"> a. ${q.options.a}</label>
      <label><input type="radio" name="q${i}" value="b"> b. ${q.options.b}</label>
      <label><input type="radio" name="q${i}" value="c"> c. ${q.options.c}</label>
      <label><input type="radio" name="q${i}" value="d"> d. ${q.options.d}</label>
      
    `;
    form.appendChild(block);
  
    form.addEventListener("change", function (e) {
        if (e.target.name === `q${i}`) {
          if (e.target.value === q.correct) {
            alert("GREAT GOING BUCK-A-ROO");
          } else {
            alert("PLEASE TRY AGAIN");
            e.target.checked = false;
        }
      }
    });
  });
  