const fn1 = () => 1;
const fn2 = (v) => v + 1;
const fn3 = (a, b) => a + b;
const fn4 = (a) => (b) => a + b;
const fn5 = (
  long_param_a,
  long_param_b,
  long_param_c,
  long_param_d,
  long_param_e,
  long_param_f,
) => {
  return (
    long_param_a +
    long_param_b +
    long_param_c +
    long_param_d +
    long_param_e +
    long_param_f
  );
};
const a = React.lazy(
  () =>
    import(
      /* webpackChunkName: "web" */
      "./router.js"
    ),
);
const b = (p) => (p.condition ? "true" : "false");
b(
  { p: 1 },
  () => (c = null),
  () => (e) => {
    b(e);
  },
);
useEffect(() => {
  // do something
}, [a, b]);
useCallback((b, c) => {
  // do something
}, []);
