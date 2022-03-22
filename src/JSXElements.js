const htmlInsideJSVar = <p>Hello</p>;

const expression1 = "abc";
const expression2 = "true" === true;
const expression3 = null ?? "default";
const someFunction = (name) => `Hello, ${name}`;

const ExpressionInsideJSX = () => (
  <div>
    {htmlInsideJSVar}
    <p>Expression 1: {expression1}</p>
    <p>Expression 2: {expression2.toString()}</p>
    <p>Expression 3: {expression3}</p>
    <p>With function: {someFunction("World")}</p>
    <p>Expression on the fly {[] === 0 ? "yes" : "no"}</p>
  </div>
);

const JSXElements = () => <ExpressionInsideJSX />;

export default JSXElements;
