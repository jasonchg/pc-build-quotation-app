import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeScreen } from './screens/HomeScreen'
import DoneScreen from './screens/DoneScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductSelectScreen from './screens/ProductSelectScreen'

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route path='/product' component={ProductSelectScreen} />
          <Route path='/done' component={DoneScreen} />
          <Route path='/' component={HomeScreen} />
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
