import React from 'react';
import {connect} from 'frontity';

import List from './components/List';
import Post from './components/Post';

import Layout from './components/Layout';
import ErrorPage from './pages/Error';
import Loading from './pages/Loading';






const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    return ( 
        <Layout>
            
                {data.isFetching && <Loading/>}
                {data.isError && <ErrorPage/> }
                {data.isCategory && <List/>}
                {data.isPost&& <Post/>}         
        </Layout>
     );
}
 
export default connect(Root);