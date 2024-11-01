// https://brightdata.com/dna/js_code#format-var_declaration
let a = (b = 1);
let al = "test",
  bl = fn("another", "test"),
  cl = {
    long_property_1: 1,
    long_property_2: "2",
    long_property_3: false,
  },
  dl = "yet another";
let as = "test",
  bs = f("another", "test"),
  cs = "yet another";
const variable =
  optional_variable &&
  {
    default: "default",
    success: "success",
    alert: "alert",
    warning: "warning",
    info: "info",
  }[optional_variable];
