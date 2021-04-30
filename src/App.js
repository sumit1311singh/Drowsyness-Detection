import './App.css';
import HomePage from './components/HomePage';
import DetectionPage from './components/DetectionPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detect" exact component={DetectionPage} />
      </Switch>
    </Router>
  );
}

export default App;
