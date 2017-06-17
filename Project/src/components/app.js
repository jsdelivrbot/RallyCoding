import React, { Component } from 'react';

import Denominaciones from './denominaciones';
import Configuracion from './configuracion';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <Denominaciones />
        <Configuracion />
      </div>
    );
  }
}
