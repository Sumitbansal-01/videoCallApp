import './App.css';
import { Register } from './component/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './component/Login';
import { Home } from './component/Home';
import { Room } from './component/Room';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route path='/room'>
            <Room/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
