import React, {useState} from 'react';
import {connect, Global} from 'frontity';
import List from './components/List';
import Post from './components/Post';
import Layout from './components/Layout';
import ErrorPage from './components/Error';
import Loading from './components/Loading';




const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link);
   
    return (                
        <Layout>
            
            {data.isFetching && <Loading/>}
            {data.isError && <ErrorPage/> }          
            {data.isTaxonomy && <List /> }
            {data.isPostType && <Post/>} 
            
        </Layout>
     );
}
 
export default connect(Root);