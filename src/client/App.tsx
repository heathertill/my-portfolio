import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/app';

import Hello from './components/public/Hello';
import Navbar from './components/public/Navbar';

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Hello} />
                    
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }
