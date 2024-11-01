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

for (;;) break;
for (
  let very_long_for_variable = 22;
  very_long_for_variable < Number.MAX_VALUE;
  very_long_for_variable = very_long_for_variable + 1
) {
  long_module_a(very_long_for_variable);
  break;
}

for (const n of [1, 2]) n();
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

for (const n in { a: 1, b: 2 }) n();
for (const n in { a: 1, b: 2 }) {
  // comment
  n();
}
for (const n in { a: 1, b: 2 }) {
  n(); // comment
}

while (1) a -= 1;
while ((a += 1)) a -= 1;
while (a < 1) {
  a *= 2;
  a += 1;
}

if (0) a();
else b();
if (1) {
  // comment
  a();
} else {
  b();
  c();
}
if (1) {
  // comment
  c();
} else {
  d(); // comment
}
if ((a = b)) a();
if (first_variable > 1 || second_variable > 1) a();
if (
  first_variable > 1 &&
  (second_variable < third_variable || second_variable > forth_variable)
) {
  a();
}
if (
  first_variable >
    very_very_very_very_very_very_very_very_long_second_variable &&
  (second_variable < third_variable || second_variable > forth_variable)
) {
  a();
}
