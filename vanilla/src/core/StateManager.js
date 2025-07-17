
// StateManager class
export default class StateManager {
  constructor() {
    this.state = {};
    this.subscribers = [];
  }

  // Retrieve the current state
  getState() {
    return { ...this.state };
  }

  // Update the component's current state and notify any subscribers
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  }

  // Add a subscriber
  subscribe(callback) {
    this.subscribers.push(callback);
  }

  // Remove a subscriber
  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(sub => sub !== callback);
  }

  // Notify all subscribers of state changes
  notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.state));
  }

}
