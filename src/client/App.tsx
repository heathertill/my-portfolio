import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/app';

import Hello from './components/public/Hello';
import Navbar from './components/public/Navbar';
import About from './components/public/About';

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container bg-mySoftblue">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Hello} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }
