function foo() {
  function bar() {
    console.log("BAR");
  }

  bar();
  bar();
}

foo();
bar(); // ReferenceError; bar is not defined
