let count = 0;

export function incrementCounter() {
    count += 1;
    const countCache = {}
    console.log(`Counter: ${count} ${countCache.total()}`);
}
