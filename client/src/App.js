import './App.css';
import { Register } from './component/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './component/Login';
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
