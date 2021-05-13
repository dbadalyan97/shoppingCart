import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Carts from './Components/Products/Products';
import SingleCart from './Components/SingleCart/SingleCart';
import NotFound from './Components/NotFound/NotFound';
import Context from './Context/Context';
import reducer from './Reducer/Reducer';
import Header from './Components/Header/Header';
import { useReducer } from 'react';
import './App.scss';
import SelectedCarts from './Components/SelectedCarts/SelectedCarts';

function App() {
  const [state, dispatch] = useReducer(reducer);

  return (
    <BrowserRouter>
      <Context.Provider value={{ state: state, dispatch: dispatch }}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/products' />
            </Route>
            <Route path='/products'>
              <Carts />
            </Route>
            <Route path='/product/:id'>
              <SingleCart />
            </Route>
            <Route path='/cart'>
              <SelectedCarts />
            </Route>
            <Route component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Context.Provider >
    </BrowserRouter>
  );
}

export default App;
