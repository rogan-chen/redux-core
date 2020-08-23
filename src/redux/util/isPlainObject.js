// 判断是否纯对象
export default function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    return Object.getPrototypeOf(obj) === Object.prototype;
}