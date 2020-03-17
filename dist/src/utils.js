export function flat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, []);
}
