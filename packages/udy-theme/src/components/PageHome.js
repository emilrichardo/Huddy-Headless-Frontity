import React from 'react';
import {connect,styled} from "frontity";
import imgpage from "../assets/udy02.jpg";
import Link from './list/Link';
import { TiArrowRightOutline } from "react-icons/ti";
import ListItem from './list/ListItem';

const PageHome = ({state}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id];
    return ( 
    <PageHomeContent>        
        <div className="container">
            <StickyPost>  
                <h2>Publicación destacada</h2>     
                    {data.items.map( ({id,type,sticky}) => {            
                        const item = state.source[type][id];             
                            return(                      
                                <div key={item.id} featured="show"> {item.sticky && <ListItem key={item.id} item={item}/>} </div>
                            )
                    })}
            </StickyPost>
            
        </div>
        <StickyPage>
                <img src={imgpage}/>
                <div className="container">
                <h3 className="fs-32 mb-0">Me presento: </h3>
                <h5 className="font-sans fs-16">Soy Francisco Rodolfo Lescano, nací en Santiago del Estero, el 21 de Marzo de 1948, estoy casado con Miriam, la mujer a la que amé desde el momento que la conocí, mi compañera y madre de mis cuatro hermosos hijos: Leandro, Romina, Natalia y Melisa. Y soy abuelo del bello Francisco que llena mis días de alegría y dulces ocurrencias.
    Desde muy joven encontré en la música y la poesía la forma más auténtica de expresar mi mundo interior. Te invito a recorrer estos textos  que elaboré en distintos momentos con mucha dedicación y amor.
    Espero que disfrutes este recorrido!</h5>
                <Link className="fs-24 " link="/autobiografia/">Ver biografía autobiografia <TiArrowRightOutline/></Link>
                </div>
                
            </StickyPage>
    </PageHomeContent> );
}


const PageHomeContent = styled.div`
padding-top:25px;
max-width:600px;
margin-top:50px;
& img {
    width:100%;
    margin-top:25px;
    margin-bottom:25px;
}
@media (min-width:800px){
    & .container{
        padding-right:0;
    }
}


`;

const StickyPost = styled.div`
margin-bottom:25px;

`;

const StickyPage = styled.div`
margin-bottom:25px;

`;
 
 
export default connect(PageHome);