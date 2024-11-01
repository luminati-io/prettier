// https://brightdata.com/dna/js_code#overview-text_layout
open_msg_box(
  "closing file %s on server...........................\n",
  file_name,
);

// https://brightdata.com/dna/js_code#format-block-if_for_while-block
if (pkt) {
  pkt.close();
  pkt.uninit();
}
if (
  slot.dw_bus == pci_scan.card_slot[ret].dw_bus &&
  slot.dw_slot == pci_scan.card_slot[ret].dw_slot &&
  slot.dw_function == pci_scan.card_slot[ret].dw_function
) {
  x = y;
}
if (x == y) {
  my_func(
    param1,
    param2,
    param3,
    param4,
    param5,
    param6,
    param7,
    param8,
    param9,
  );
}
for (ret = 0; ret < pci_scan.dw_cards; ret++) {
  if (
    slot.dw_bus == pci_scan.card_slot[ret].dw_bus &&
    slot.dw_slot == pci_scan.card_slot[ret].dw_slot &&
    slot.dw_function == pci_scan.card_slot[ret].dw_function
  ) {
    break;
  }
}

// https://brightdata.com/dna/js_code#format-if_for_while-no_statement
while (pop_first(list));
for (i = 0; i < 10; i++);
if (a > b + 10);
else if (a > b + 5) do_x();
else if (a > b + 2);
else do_y();

// https://brightdata.com/dna/js_code#format-block-then
if (close_file) fclose(fp);

// https://brightdata.com/dna/js_code#format-block-else_if
if (argv[1] === "--help") print_usage();
else if (argv[1] === "--run") {
  run_application();
  print_results();
} else print_error();

// https://brightdata.com/dna/js_code#format-block-func
let tiny = function () {
  code;
};
function tiny() {
  code;
}
function long(args) {
  code;
  code;
}
function long_args(
  param1,
  param2,
  param3,
  param4,
  param5,
  param6,
  param7,
  param8,
  param9,
) {
  code;
  code;
}

// https://brightdata.com/dna/js_code#format-block-func-inline
let x = parse_args(...args, function (line) {
  let escaped = E.escape(line);
  // ...
});
let x1 = parse_args(
  param_a,
  param_b,
  param_c,
  param_d,
  param_e,
  function (line, err) {
    let escaped = E.escape(line);
    // ...
  },
);

// https://brightdata.com/dna/js_code#format-block-func-spacing
printf("hello %s\n", "world");

// https://brightdata.com/dna/js_code#format-block-break_line
if (
  line_length > 1000 &&
  (screen.sz.vertical < buffer.sz.vertical || explicit_lines)
) {
  console.log(
    "this is a test section that will show how to handle " +
      "long lines, such as this one which is 2 lines long",
  );
}

// https://brightdata.com/dna/js_code#format-block-switch
switch (key) {
  case KEY_UP:
    key = UP;
    break;
  case KEY_DOWN:
    key = DN;
    break;
  default:
    key = NONE;
}

// https://brightdata.com/dna/js_code#format-block-try_catch
try {
  short_code;
} catch (e) {
  code;
}
try {
  and_even;
  longer_code;
} catch (e) {
  code;
}

//https://brightdata.com/dna/js_code#format-block-operator
if (x > 5);
if (f(x, y) > g(y, z));
if (x.y == 5);
if (x.y >= 5);
if (!a && a.b);
if (a && Array.isArray(a));

// https://brightdata.com/dna/js_code#format-block-operator-assign
a = b;
d += x;
for (i = 0; i < 10; i += 4);

// https://brightdata.com/dna/js_code#format-block-operator-unary
i--;
j++;
if (!i);
let speed_int = +speed_str;

// https://brightdata.com/dna/js_code#format-block-operator-multi
msg = "hello " + name + "!";
msg = "hello " + get_my_name() + "!";

// https://brightdata.com/dna/js_code#format-block-operator-cond
let msg = login_ok ? "Welcome" : "Please login";
let result = a_very_long_condition_expression
  ? "true branch......."
  : "false branch.......";

// https://brightdata.com/dna/js_code#format-minimal-unneeded_parentheses
if (a != b || c != d);

// https://brightdata.com/dna/js_code#format-long_string
msg =
  "this ................................................." +
  "is a long string.";
let object = {
  field:
    "this ................................................." +
    "is a long string",
};

// https://brightdata.com/dna/js_code#format-file_lvl_closure
/*
(function($, chrome, console){

code;
code;

})(jQuery, chrome, console);
*/
(function ($, chrome, console) {
  code;
  code;
})(jQuery, chrome, console);

// https://brightdata.com/dna/js_code#format-loop-do_while
do add_item();
while (have_items);
do add_item();
while (have_items);
do {
  add_item();
  another_action();
} while (have_items);

// https://brightdata.com/dna/js_code#format-object
let node = {
  name: "server",
  port: 42,
  status: "updated",
  setup_time: 10 * 1000,
};
let node1 = { name: "server", port: 42 };

// https://brightdata.com/dna/js_code#format-continuation_method
/*
$('<h1>', $('<div>')
    .append('<span>'));
*/
$("<h1........................>", $("<div>").append("<span>"));
/*
let elm = $('<span>')
.append('<span>');
*/
let elm = $("<span ........................................>").append(
  "<span ........................................>",
);
/*
return $('<div>')
.append('<span>');
*/
return $("<div> ........................................").append(
  "<span ........................................>",
);

// https://brightdata.com/dna/js_code#format-function_classes
function Etask(opt, states) {
  // ...
}

// https://brightdata.com/dna/js_code#format-es6-arrow
docs.forEach((doc) => add(doc));
docs.forEach((doc, index) => {
  if (index) add(doc, index);
});

// https://brightdata.com/dna/js_code#format-es6-generator
etask(function* () {
  // ...
});
etask(function* get_request() {
  //...
});

// https://brightdata.com/dna/js_code#format-es6-class-etask
class A {
  prop() {
    return etask(function* () {
      code;
    });
  }
}
/*
class A {
    prop(){
        let _this = this;
    return etask(function*(){
        code;
    }); }
}
*/
class A {
  prop() {
    let _this = this;
    return etask(function* () {
      code;
    });
  }
}

// https://brightdata.com/dna/js_code#luminati-react-jsx
// https://brightdata.com/dna/js_code#luminati-react-jsx-indentation
return <View></View>;
return (
  <View>
    <Button />
  </View>
);

// https://brightdata.com/dna/js_code#luminati-react-jsx-conditional
return <View>{show_panel && <Panel with="a short" prop />}</View>;
return (
  <View>
    {show_panel && (
      <Panel with="a .......... couple" but="short .......... props" />
    )}
  </View>
);
return (
  <div>
    {show_panel && (
      <Panel
        with="lots .......... and .......... lots"
        of="props .......... that"
        take="multiple .......... lines"
      />
    )}
  </div>
);
return <View>{show ? <Panel_a /> : <Panel_b />}</View>;
return (
  <View>
    {show_panel_a ? (
      <Panel_a enabled={enabled} />
    ) : (
      <Panel_b enabled={enabled} display_controls={!display_login} />
    )}
  </View>
);
return (
  <View>
    {show_panel_a ? (
      <Panel_a
        enabled={enabled}
        display_controls={!display_login_over}
        header_name={customer.name || session.customer}
        echo={echo}
      />
    ) : (
      <Panel_b
        enabled={enabled}
        display_controls={!display_login_over}
        header_name={customer.name || session.customer}
        echo={echo}
      />
    )}
  </View>
);
