import React from 'react';
import {connect, Global, css} from "frontity";
const StyleTheme = () => {
    return ( 
        <>

            <Global styles={{ body: { background:red } }} />
        </>
     );
}
 
export default connect(StyleTheme);