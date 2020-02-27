var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

var isArrayLike = function(collection) {
    var length = collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};
function each(obj, callback) {
    var length, i = 0;

    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    }

    return obj;
}
