import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
