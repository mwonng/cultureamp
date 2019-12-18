import React from 'react';
import SuveryResult from './components/Survey/SurveyResult'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import './core.scss';
import { getSurveys } from './api/surveys'
import { useFetch } from './hooks/useFetch'
import { configureStore } from './store';
import { initData } from './actions/surveyListAction'
import SurveryListContainer from './components/SurveryListContainer'
function App() {
    const { data, loading, error } = useFetch(getSurveys)

    let body;
    if (loading) body = <p>Loading...</p>
    else if (error) body = <p>Error</p>
    else if (!data) body = <p>No data</p>


    if (body) return body

    const store = configureStore()
    store.dispatch(initData(data))

    return (
        <Provider store={store}>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/surveys/4">About</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <SurveryListContainer />
                    </Route>
                    <Route path="/surveys/:id" children={<SuveryResult />} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App
