import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const Layout = (props) => {
    return (
        <div className='container'>
            <Link to='/'>Home Page</Link>
            <Link to='/pageone'>Page One</Link>
            <Link to='/pagetwo'>Page Two</Link>
            {props.children}
        </div>
    )
}


function App() {
    return <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/pageone' component={PageOne} />
        <Route exact path='/pagetwo' component={PageTwo} />
    </Layout>
}

export default App;