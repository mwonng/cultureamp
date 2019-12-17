import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import SurveyList from './components/SurveyList'
import SuveryResult from './components/Survey/SurveyResult'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { fetchSurveyListPending, fetchSurveyListSuccess, fetchSurveyListError } from './actions/surveyListAction'
// import { simpleAction } from './actions/simpleAction'
import './core.scss';
import simpleReducer from './reducers/simpleReducer';
import { simpleAction } from './actions/simpleAction';


function fetchProducts() {
    console.log("loading?")

    return dispatch => {
        dispatch(fetchSurveyListPending());
        axios.get(`${process.env.REACT_APP_ENDPOINT}/surveys/`)
            .then(response => {
                console.log(response);
                dispatch(fetchSurveyListSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchSurveyListError(error));
            })
    }
}

function App({ simple, init }) {
    console.log("simple", simple);
    init()
    useEffect(() => {
        console.log("run app");
        // fetchProducts()
    }, [])
    const SurveyProvider = () => {
        return (
            <>
                <h1>The title one</h1>
            </>
        )
    }

    return (
        <div className="App">
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/surveys/4">About</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <SurveyProvider />
                    </Route>
                    <Route path="/surveys/:id" children={<SuveryResult />} />
                </Switch>
            </Router>
        </div >
    );
}

const mapToProps = state => {
    return {
        simple: state.simpleReducer
    }
}

const mapActionToProps = dispatch => {
    return {
        init: () => dispatch(simpleAction)
    }
}

export default connect(mapToProps, mapActionToProps)(App);
