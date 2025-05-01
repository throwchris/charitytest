// Highlight text between quotes and colon
function highlightPhrase(text) {
    return text.replace(/\"(.*?)\":/, (_, match) => {
      return `" <span class='highlight'>${match}</span>":`;
    });
  }

  // Define 16 generic questions and correct answers
  const questions = [
    {
      question: "\"Suffereth Long\": To be ____________, to endure, to persevere, without retaliation, slow to anger.",
      options: { a: "patient", b: "pleasant", c: "pleasing", d: "pondering" },
      correct: "a"
    },
    {
      question: "\"Is Kind\": To show oneself __________, pleasant, and good; to act virtuously, benevolently.",
      options: { a: "honest", b: "useful", c: "humble", d: "outgoing" },
      correct: "b"
    },
    {
      question: "\"Envieth Not\": Is content, ___________; does not covet. Is not consumed by one's desire or lust, leading to hate and murder.",
      options: { a: "not fearing", b: "honoring", c: "loving", d: "satisfied" },
      correct: "d"
    },
    {
      question: "\"Vaunteth Not Itself\": Humble, meek, is not boastful or a ___________. Does not speak of oneself in pride.",
      options: { a: "bragging", b: "bragger", c: "braggart", d: "braggin" },
      correct: "c"
    },
    {
      question: "\"Not Puffed Up\": Abased, lowly. Is not ____________ or made proud, not haughty or puffed up. Does not have a false sense of one's own authority.",
      options: { a: "inflated", b: "boasting", c: "evil", d: "lazy" },
      correct: "a"
    },
    {
      question: "\"Doth Not Behave Itself Unseemly\": To act courteously, with wisdom; ________________, appropriate, refined.",
      options: { a: "learning", b: "respectable", c: "hopeful", d: "defined" },
      correct: "b"
    },
    {
      question: "\"Seeketh Not Her Own\": _______________, devotion, empathy. Sacrifice for the sake of others. Giving without expectation.",
      options: { a: "Fellowship", b: "Truthful", c: "Guiding", d: "Selflessness" },
      correct: "d"
    },
    {
      question: "\"Not Easily Provoked\": Slow to anger, _____________ peaceably.",
      options: { a: "showing", b: "living", c: "enduring", d: "walking" },
      correct: "c"
    },
    {
      question: "\"Thinketh No Evil\": Only ______________, clean, honorable thoughts, with pure intentions.",
      options: { a: "holy", b: "pure", c: "fair", d: "purposeful" },
      correct: "a"
    },
    {
      question: "\"Rejoiceth Not In Iniquity\": Does not ______________ unrighteousness.",
      options: { a: "laugh at", b: "celebrate", c: "consider", d: "cherish" },
      correct: "b"
    },
    {
      question: "\"Rejoiceth In Truth\": To openly ______________, take great joy in and celebrate the Truth of God.",
      options: { a: "sing", b: "pronounce", c: "cheer", d: "delight" },
      correct: "d"
    },
    {
      question: "\"Beareth All Things\": Covers (as in a roof) _______________, supports, carries, wears, keeps, sustains.",
      options: { a: "severs", b: "builds", c: "suffers", d: "moves" },
      correct: "c"
    },
    {
      question: "\"Believeth All Things\": Faith, trust, true & honest, _____________. God's existence as a fact, willing to commit your life to Him.",
      options: { a: "strength", b: "strong", c: "willing", d: "sanctified" },
      correct: "a"
    },
    {
      question: "\"Hopeth All Things\": The sure expectation of all the ____________ of God.",
      options: { a: "lands", b: "promises", c: "existence", d: "goodness" },
      correct: "b"
    },
    {
      question: "\"Endureth All Things\": _____________, bear trials, have fortitude, persevere, patient, still.",
      options: { a: "Seek", b: "repent", c: "retain", d: "remain" },
      correct: "d"
    },
    {
      question: "\"Charity Never Faileth\":THE FATHER holds unerringly. JESUS's BLOOD never loses its power. The HOLY GHOST ___________ into all truth.",
      options: { a: "walks", b: "lights", c: "guides", d: "shews" },
      correct: "c"
    }
  ];
  

  const form = document.getElementById("quiz-form");

  questions.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `
      <p><strong>${i + 1}. ${highlightPhrase(q.question)}</strong></p>
      <label><input type="radio" name="q${i}" value="a"> a. ${q.options.a}</label><br>
      <label><input type="radio" name="q${i}" value="b"> b. ${q.options.b}</label><br>
      <label><input type="radio" name="q${i}" value="c"> c. ${q.options.c}</label><br>
      <label><input type="radio" name="q${i}" value="d"> d. ${q.options.d}</label><br>
    `;
    form.appendChild(block);
   
const successSound = new Audio("success.mp3");
    const wrongSound = new Audio("wrong.mp3");
  
    form.addEventListener("change", function (e) {
      if (e.target.name === `q${i}`) {
        const selectedValue = e.target.value;
        const labels = block.querySelectorAll("label");
        labels.forEach(label => label.classList.remove("correct"));
  
        if (selectedValue === q.correct) {
          successSound.play();
          alert("Good Job Buck-a-roo");
          const correctLabel = e.target.closest("label");
          correctLabel.classList.add("correct");
  
          // Disable other options
          const inputs = block.querySelectorAll(`input[name="q${i}"]`);
          inputs.forEach(input => input.disabled = true);
        } else {
          wrongSound.play();
          alert("Try again");
          e.target.checked = false;
        }
      }
    });
  });
