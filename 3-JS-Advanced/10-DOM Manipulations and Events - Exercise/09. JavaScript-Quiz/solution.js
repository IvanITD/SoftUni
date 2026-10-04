function solve() {
  const sections = document.querySelectorAll('#quizzie section');
  const answers = document.querySelectorAll('.quiz-answer');
  const correct = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  let index = 0;
  let score = 0;

  for (const answer of answers) {
    answer.addEventListener('click', onAnswer);
  }

  function onAnswer(event) {
    const selected = event.currentTarget.querySelector('.answer-text').textContent;

    if (selected === correct[index]) {
      score++;
    }

    sections[index].style.display = 'none';
    index++;

    if (index < 3) {
      sections[index].style.display = 'block';
    } else {
      const results = document.getElementById('results');
      const title = results.querySelector('h1');
      results.style.display = 'block';

      if (score === 3) {
        title.textContent = 'You are recognized as top JavaScript fan!';
      } else {
        title.textContent = `You have ${score} right answers`;
      }
    }
  }
}