import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Test from '../pages/test';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/test" component={Test} />
    </Switch>
  )
}