import { incrementCounter } from './counter';
import { countCache } from './counterCache';

const button = document.createElement('button');
const previousElement = document.getElementById('previous');
const currentElement = document.getElementById('current');
const totalElement = document.getElementById('total');

button.innerText = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', () => {
    incrementCounter();
    previousElement.innerText = countCache.previousCount;
    currentElement.innerText = countCache.currentCount;
    totalElement.innerText = countCache.totalCount;
});
