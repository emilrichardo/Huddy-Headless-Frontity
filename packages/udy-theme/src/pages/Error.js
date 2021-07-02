import React from 'react';
import {connect, styled} from 'frontity';
import imageError from '../assets/404-error.svg'

const ErrorPage = () => {
    return ( 
        <>
           <IconError> <img src={imageError} alt="error"></img></IconError>
            <h2>Página no encontrada</h2>
        </>
     );
}
 
export default connect(ErrorPage);

const IconError= styled.figure `
   
    & img{
        max-width:84px;
        margin: 0 auto;
    }
`;

