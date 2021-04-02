import Header from './Components/header'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
     
     <Header />
     <Container>
     <Route path='/' component={HomeScreen} exact />
      <Route path='/product/:id' component={ProductScreen} />
     </Container>
     
    </Router>
  );
}

export default App;
