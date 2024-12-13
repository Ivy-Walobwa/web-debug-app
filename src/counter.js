
let count = 0;
export function incrementCounter() {
    const countCache = {}
    countCache.total = () => count;
    const totalCache = countCache.total();
    count += 1;
    console.log(`Counter: ${count} ${totalCache}`);
}