import List from './componet/List';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/" component={List} />
  </Switch>
  </Router>
  </>
  );
}
export default App;
