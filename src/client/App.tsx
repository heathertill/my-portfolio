import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hello from './components/public/Hello';

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container">
            <Switch>
                <Route exact path='/' component={Hello} />
            </Switch>
           </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }
