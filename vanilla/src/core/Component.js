
// Component Class
export default class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.element = null;
  }

  // Update the component's state value and re-render
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // Render the component
  render() {
    // Default template - override in subclass
    return '<div></div>';
  }

  // Lifecycle Method: Mount the component
  mount() {
    // Called after the component is rendered
  }

  // Lifecycle Method: Unmount the component
  unmount() {
    // Called after the component is unmounted - perform component cleanup
  }

  // Add an event listener to an component
  addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
  }
}
