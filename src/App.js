import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import './core.scss';
import { useFetch } from './hooks/useFetch'
import { configureStore } from './store';
import { initData } from './actions/surveyListAction'
import SurveryListContainer from './components/SurveyList/SurveryListContainer'
import SurveryResultContainer from './components/SurveyResult/SurveryResultContainer';
import NoMatch from './components/ErrorPage/NotFound'
import Loading from './components/ErrorPage/Loading'

function App() {
    const survey_url = '/surveys';
    const { data, loading, error } = useFetch(survey_url)

    let body;
    if (loading) body = <Loading />
    else if (error) body = <NoMatch />
    else if (!data) body = <p>No data</p>


    if (body) return body

    const store = configureStore()
    store.dispatch(initData(data))

    return (
        <Provider store={store}>
            <Router>
                <Link to="/" className="btn btn-primary">Home</Link>
                <hr />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <SurveryListContainer />
                        </Route>
                        <Route path="/surveys/:id" children={<SurveryResultContainer />} />
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App
