import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import './core.scss';
// import { getSurveys } from './api/surveys'
import { useFetch } from './hooks/useFetch'
import { configureStore } from './store';
import { initData } from './actions/surveyListAction'
import SurveryListContainer from './components/SurveryListContainer'
import SurveryResultContainer from './components/Survey/SurveryResultContainer';

function App() {
    const survey_url = '/surveys';
    const { data, loading, error } = useFetch(survey_url)

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
                        <Link to="/survey">About</Link>
                    </li>
                </ul>
                <hr />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <SurveryListContainer />
                        </Route>
                        <Route path="/survey" children={<SurveryResultContainer />} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App
