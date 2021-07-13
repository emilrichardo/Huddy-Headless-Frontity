import React, {useState, useEffect} from 'react';
import {connect, Global} from 'frontity';
import Post from './components/Post';
import Layout from './components/Layout';
import ErrorPage from './components/Error';
import Loading from './components/Loading';
import List from './components/list/List';




const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link);

    useEffect(() => {
        actions.source.fetch("/category")
        actions.source.fetch("/category/")
        actions.source.fetch("/category/poesias")
        actions.source.fetch("/category/poesias/")
        actions.source.fetch("/category/poesias/")
        actions.source.fetch("/category/cartas/")
        actions.source.fetch("/category/canciones/")
     }, [])
     
   
    return (                
        <Layout>            
            {data.isFetching && <Loading/>}
            {data.isError && <ErrorPage/> } 
            {data.isPostType && <Post/>} 
            {data.isArchive && <List/> }
        </Layout>
     );
}
 
export default connect(Root);