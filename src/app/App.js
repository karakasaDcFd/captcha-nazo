import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home.js';
import Main from '../pages/Main.js';
import Clear from '../pages/Clear.js';

function App() {
  return (
    <Router basename="/captcha-nazo">
      <div>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/clear">
            <Clear />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
