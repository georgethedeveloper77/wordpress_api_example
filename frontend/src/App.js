import React, {Component, Fragment} from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./components/Books";
import BookPage from "./components/BookPage";


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path='/' component={Books} />
                    <Route exact path='/book/:id' component={BookPage} />
                </Fragment>
            </Router>

        );
    }
}

export default App;
