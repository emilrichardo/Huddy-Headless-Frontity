import React from 'react';
import {connect} from "frontity";
const themeOptions = () => {
    const {colors} = state.theme.options;
    const {fonts} = state.theme.options;
    return ( 
        <>
        <h1>hola</h1>
         
        </>
     );
}
 
export default connect(themeOptions);