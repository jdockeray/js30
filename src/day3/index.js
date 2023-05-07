class Counter {
  constructor(inital) {
    this.inital = inital;
    this.current = inital;
  }
  increment() {
    return ++this.current;
  }
  decrement() {
    return --this.current;
  }
  reset() {
    this.current = this.inital;
    return this.inital;
  }
}

/**
 * @param {integer} init
 * @return {Counter}
 */
var createCounter = function (init) {
  return new Counter(init);
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
module.exports = { createCounter };
