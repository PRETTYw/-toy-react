import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>my component</p>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="b">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </MyComponent>,
  document.body
);
