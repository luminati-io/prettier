try {
  a();
} catch (e) {
  c(e);
}

switch (a) {
  case 1:
    break;
  default:
    break;
}

for (;;) {
  // XXX single line not supported yet
  break;
}
for (
  let very_long_for_variable = 22;
  very_long_for_variable < Number.MAX_VALUE;
  very_long_for_variable = very_long_for_variable + 1
) {
  long_module_a(very_long_for_variable);
  break;
}

for (const n of [1, 2]) {
  // comment
  n();
}
for (const [k, v] of [
  [1, 2],
  [3, 4],
]) {
  const r = v(k);
  r();
}

for (const n in { a: 1, b: 2 }) {
  // comment
  n();
}
for (const n in { a: 1, b: 2 }) {
  n(); // comment
}

let p = 1;
while (p) {
  // XXX single line not supported yet
  p -= 1;
}
while (p < 1) {
  p *= 2;
  p += 1;
}

if (1) {
  // comment
  a();
} else {
  b();
  c();
}
if (0) a();
else b();
if (1) {
  // comment
  c();
} else {
  d(); // comment
}
if (a) c();
else if (b) b();
