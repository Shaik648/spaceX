import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HistoryData from '../Componentes/HistoryData';
import PayLoads from '../Componentes/PayLoads';
import Main from '../Componentes/Main'
import App from '../App'
import Contact from '../Componentes/Contact';
// import HistoryFullDetails from '../Componentes/HistoryFullDetails';

class Routing extends React.Component {
    render() {
        return (
            <div>
                     <Router>
                           <Route exact path="/" component={Main} refresh={true} exact={true} />
                <Route exact path="/history" component={HistoryData} refresh={true} exact={true} />
                <Route exact path="/payload" component={PayLoads} refresh={true} exact={true} />
                {/* <Route exact path='/historydetails' component={HistoryFullDetails} refresh={true} exact={true} /> */}
                 <Route exact path="/contactus" component={Contact} refresh={true} exact={true} />
            </Router>
            </div>
        )
    }
}
export default Routing