function etask() {
  return 1;
}

etask(function* (a) {
  yield a();
});
etask(function* _fn(a) {
  yield a();
});

function define(a, b) {
  return b(a);
}

define(["a", "b", "c"], function (a, b, c) {
  return a + b + c;
});

define(["long_param_a", "long_param_b", "long_param_c"], function (
  long_param_a,
  long_param_b,
  long_param_c,
) {
  long_param_a();
  long_param_b();
  long_param_c();
});
