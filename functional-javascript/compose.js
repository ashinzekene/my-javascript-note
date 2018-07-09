module.exports = (...funcs) =>
  val => {
    var fnList = [...funcs];
    while (fnList.length) {
      val = fnList.pop()(val)
    }
    return val
  }
