var ternary_operator_result_a = 1 ? 10 : 20;
var ternary_operator_result_b =
  ternary_operator_result_a > ternary_operator_result_a + 1 ? (
    <div>true condition</div>
  ) : (
    <div>
      <p>false condition</p>
      <p>false condition</p>
      <p>false condition</p>
    </div>
  );
var ternary_operator_result_c =
  ternary_operator_result_b + ternary_operator_result_a
    ? call_very_long_function_a()
    : call_very_long_function_b(
        call_very_long_function_parameter_a,
        call_very_long_function_parameter_b,
        call_very_long_function_parameter_c,
      ) +
      call_very_long_function_c(
        call_very_long_function_parameter_a,
        call_very_long_function_parameter_b,
        call_very_long_function_parameter_c,
      );
let a = [
  ...(first_variable === "some_none_empty_string"
    ? [1, 2, 3, 4, 5, 6, 7, 8]
    : []),
];
