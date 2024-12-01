import { incrementCounter } from './counter';

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', () => {
    incrementCounter();
});
