import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../src/pages/Home';
import Services from '../src/pages/Services';
import News from '../src/pages/News';
import Media from '../src/pages/Media';
import Links from '../src/pages/Links';
import Contact from '../src/pages/Contact';
import About from '../src/pages/About';
import FAQ from '../src/pages/FAQ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />/>
      </Route>

          <Route path="/home" render={(...props) => (
            <Home {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/about" render={(...props) => (
            <About {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/services" render={(...props) => (
            <Services {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/news-podcasts" render={(...props) => (
            <News {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/media" render={(...props) => (
            <Media {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/links" render={(...props) => (
            <Links {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/contact" render={(...props) => (
            <Contact {...this.props} />
          )} />
        </Switch>

        <Switch>
          <Route path="/FAQ" render={(...props) => (
            <FAQ {...this.props} />
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;