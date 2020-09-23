import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/app';

import Hello from './components/public/Hello';
import Navbar from './components/public/Navbar';
import About from './components/public/About';
import Contact from './components/public/Contact';
import Work from './components/public/Work';
import AppCards from './components/public/AppCards';

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container bg-mySoftblue">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Hello} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/work' component={Work} />
                    <Route exact path='/appCards' component={AppCards} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }
