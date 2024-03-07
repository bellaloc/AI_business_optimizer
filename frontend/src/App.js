import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PredictiveAnalytics from './pages/PredictiveAnalytics';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/predictive-analytics" component={PredictiveAnalytics} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
