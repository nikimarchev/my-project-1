import React, { useEffect } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { authCheckState } from './store/actions/auth'
import { getProducts } from './store/actions/products'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import Layout from './Layout/Layout'
import MainPage from './components/MainPage/MainPage'
import Category from './components/Shop/Category/Category'
import TurbosCatalog from './components/Shop/Catalog/TurbosCatalog'
import HeadersCatalog from './components/Shop/Catalog/HeadersCatalog'
import SuspensionCatalog from './components/Shop/Catalog/SuspensionCatalog'
import RimsCatalog from './components/Shop/Catalog/RimsCatalog'
import Service from './components/Servicee/Service'
import Cart from './components/Cart/Cart'
import Login from './components/User/Login/Login'
import Register from './components/User/Register/Register'

const App = () => {
  const dispatch = useDispatch();
  const authCheck = () => dispatch(authCheckState());
  const getProd = () => dispatch(getProducts());
  useEffect(() => {
    authCheck()
    getProd()
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/category" component={Category} />
            <Route path="/turbos" component={TurbosCatalog} />
            <Route path="/headers" component={HeadersCatalog} />
            <Route path="/suspension" component={SuspensionCatalog} />
            <Route path="/rims" component={RimsCatalog} />
            <Route path="/service" component={Service} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={MainPage} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App