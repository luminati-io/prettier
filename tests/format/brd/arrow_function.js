const fn1 = () => 1;
const fn2 = (v) => v + 1;
const fn3 = (a, b) => a + b;
const fn4 = (
  long_param_a,
  long_param_b,
  long_param_c,
  long_param_d,
  long_param_e,
) => {
  return (
    long_param_a + long_param_b + long_param_c + long_param_d + long_param_e
  );
};
const a = React.lazy(
  () =>
    import(
      /* webpackChunkName: "web" */
      "./router.js"
    ),
);
