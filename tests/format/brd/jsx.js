function Component() {
  const comp = (
    <div>
      <p>some content</p>
      <p>some content</p>
      <p>some content</p>
    </div>
  );
  return (
    // comment
    <section>{comp}</section>
  );
}

<Component param_1="param1" param_2={2} param_3={``} param_4={{}} />;
<Component
  long_param_1="param1"
  long_param_2={2}
  long_param_3={``}
  long_param_4={{}}
/>;
