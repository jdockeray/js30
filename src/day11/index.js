const _sleep = (m) => new Promise((r) => setTimeout(r, m));

/**
 * @param {number} millis
 */
async function sleep(millis) {
  await _sleep(millis);
  return "hello";
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
module.exports = {
  sleep,
};
