const React = require('react')
const ReactDOM = require('react-dom')
const Details = require('./Details')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
