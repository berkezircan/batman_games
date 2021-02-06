import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GameDetail from './components/GameDetail';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Router>
      <Container className="App">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/game/:id" component={GameDetail} />
      </Container>
    </Router>
  );
}

export default App;
