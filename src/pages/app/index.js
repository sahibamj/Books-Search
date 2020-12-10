/* eslint-disable jsx-a11y/alt-text */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from '../../components/navbar';
import Home from '../home';
import SavedBooks from '../saved';
import Footer from '../../components/footer';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="container-fluid px-0 main-container">
        <Navbar />

        <div className="router-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/saved-books">
              <SavedBooks />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
