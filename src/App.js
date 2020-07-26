import React from 'react';
import Counter from 'components/Counter';
import {
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import Home from 'routes/Home';
import About from 'routes/About';

const App = () => {
  const location = useLocation();
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>Current path name: {location.pathname}</p>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        
        <Counter />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
