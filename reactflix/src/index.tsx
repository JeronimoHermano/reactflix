import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
