import React from "react";
import { Route } from 'react-router-dom';
import Main from './Main.js';
import CsIntro from './cs_intro.js';
import SWIntro from './sw_intro.js';
import PfIntro from "./pf_intro.js";
import './HeaderFooter.css';
import './App.css';

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Main} />
      <Route path="/cs_intro" component={CsIntro} /> 
      <Route path="/sw_intro" component={SWIntro} />
      <Route path="/pf_intro" component={PfIntro} />
    </div>
  );
}

export default App;