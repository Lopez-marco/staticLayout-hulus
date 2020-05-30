const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('nav');
const myText = document.querySelector('text');

let scrolled = () => {
  let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
  myNav.style.setProperty('background', scrolled() > 5 ? "var(--color2)" : "var(--color1)");
})

addEventListener('scroll', () => {
  myText.style.setProperty('color', scrolled() > 5 ? "var(--text2)" : "var(--text1)");
})


