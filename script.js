const image = document.querySelector('#image');
const text = document.querySelector('#text');
const hands = ['janken_gu.png', 'janken_choki.png', 'janken_pa.png'];

const keyframes = {
  opacity: [0, 1],
  translate: ['0 20px', 0],
};
const options = {
  duration: 1000,
  fill: 'forwards',
};

image.animate(keyframes, options);

const janken = (user) => {
  const random = Math.floor(Math.random() * hands.length);
  const content = `<img src="${hands[random]}" alt="" />`;

  image.innerHTML = ('beforeend', content);
  image.animate(keyframes, options);
  if (user === random) {
    result = 'あいこです';
  } else if (
    (user === 0 && random === 1) ||
    (user === 1 && random === 2) ||
    (user === 2 && random === 0)
  ) {
    result = 'あなたの勝ち！';
  } else {
    result = 'あなたの負け！';
  }
  text.textContent = result;
};
