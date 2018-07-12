import { Component } from 'preact';
import { Router } from 'preact-router';

/* Import components */

/* Import Routes */

/** */
export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = (event) => {
    this.currentUrl = event.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          {/* <RouteName path="/browser/path" prop1={...} /> */}
        </Router>
      </div>
    );
  }
}
