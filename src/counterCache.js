
export const countCache = {}
export function updateCache(currentCount, previousCount) {
    countCache.currentCount = currentCount;
    countCache.previousCount = previousCount;
    countCache.totalCount = (countCache.totalCount || 0) + currentCount;
}