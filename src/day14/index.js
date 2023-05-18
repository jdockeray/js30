var TimeLimitedCache = function () {};

TimeLimitedCache.prototype.isExpired = function (key) {
  return this.cache[key].expiresAt <= new Date().valueOf();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.cache === undefined) {
    this.cache = {};
  }

  let reset = false;

  if (!this.cache[key]) {
    this.cache[key] = {
      expiresAt: new Date().valueOf() + duration,
      value,
    };
  } else if (!this.isExpired(key)) {
    reset = true;
    this.cache[key] = {
      expiresAt: new Date().valueOf() + duration,
      value,
    };
  }

  return reset;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.isExpired(key)) {
    return -1;
  }
  return this.cache[key].value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (let key in this.cache) {
    if (!this.isExpired(key)) {
      count++;
    }
  }
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

module.exports = {
  TimeLimitedCache,
};
