const test = (name, fn) => {
  class Super {
    constructor(value) {
      this.value = value;
    }

    static staticMethod() {
      return true;
    }

    instanceMethod() {
      return true;
    }
  }

  class Sub extends Super {}

  const instance = new Sub(123);

  let result;

  try {
    result = fn({ Super, Sub, instance });
  } catch (e) {
    console.log(e);
    result = e.stack;
  }

  return name + ": " + result;
};

document.querySelector("#root").innerText = [
  {
    name: "Sub.staticMethod()",
    fn: ({ Sub }) => Sub.staticMethod()
  },
  {
    name: "instance.instanceMethod()",
    fn: ({ instance }) => instance.instanceMethod()
  },
  {
    name: "instance.value === 123",
    fn: ({ instance }) => instance.value === 123
  }
]
  .map(({ name, fn }) => test(name, fn))
  .join("\n\n");
