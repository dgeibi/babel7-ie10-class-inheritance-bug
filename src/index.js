const test = () => {
  class Super {
    constructor() {
      this.value = 123;
    }

    static staticMethod() {
      return true;
    }

    instanceMethod() {
      return true;
    }
  }

  class Sub extends Super {}

  const a = new Sub();

  let result;

  try {
    result =
      Sub.staticMethod() && a.instanceMethod() && a.value === 123
        ? "ok"
        : "failed";
  } catch (e) {
    console.log(e);
    result = e.stack;
  }

  return result;
};

document.querySelector("#root").innerText = test();
