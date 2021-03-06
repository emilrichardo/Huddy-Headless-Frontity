import React from 'react';
import { styled} from 'frontity';
const Loading = () => {
    return ( 
        <>
        <Spinner className="lds-dual-ring"></Spinner>
        <h5>Cargando ...</h5>
        </>
     );
}
 
export default Loading;

const Spinner= styled.div `
   
    display: inline-block;
    width: 80px;
    height: 80px;
    margin:0 auto;

    &:after {
        content: " ";
        display: block;
        width: 24px;
        height: 24px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid var(--primary);
        border-color: var(--primary) transparent var(--primary) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }

      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
`;