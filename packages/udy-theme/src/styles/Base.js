import React from 'react';
import { connect, Global, css } from 'frontity';

const Base = ({state}) => {
    const { isMobileMenuOpen } = state.theme;
    const {colors} = state.theme.options;
    const {fonts} = state.theme.options;

   
    return ( 
        
        <Global
            styles = { css`               
                @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap') 
                url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');  
                         

                  
              

                :root{
                    --primary : ${colors.primary};
                    --primaryrgb : ${colors.primaryrgb};
                    --dark : ${colors.dark};
                    --dark100 : ${colors.dark100};
                    --light : ${colors.light};
                    --light100 : ${colors.light100};
                    --white: #eeee;


                    --serif : 'Crimson Text', serif;
                    --sans : 'Lato', sans-serif;
                    
                }
               
                
                html{
                    font-family: var(--sans);
                    overflow-x:hidden;
                    scroll-behavior: smooth;
                   
                }

                * {box-sizing: border-box;}

                body{
                    background-color: var(--light) ;  
                    color:var(--dark);                 
                    padding:0;
                    margin:0;
                    overflow-x:hidden;
                }

                

                img{
                                     
                }

                .container{
                    padding:0 10vw;
                    box-sizing: border-box;
                    
                    
                }

                .flex{
                    display:flex;
                    align-items:center;
                    justify-content:space-between; 
                }

                a:not(.btn){
                    color: var(--primary);
                    text-decoration:none;
                    &:hover{
                        color: var(--primary)
                    }
                    &:visited{
                        
                    }
                    
                }

                .btn{
                    background-color:var(--primary);
                    color:var(--light);
                    display:inline-block;
                    border-radius:5px;
                    padding:8px 35px;
                    text-decoration:none;
                    &:hover{
                        background-color:rgba(var(--primaryrgb), .9);
                        color:var(--white)
                    }

                    &.btn-tag{
                        padding:2px 5px;
                    }

                }

                .btn-social{
                    margin: 5px 5px;                   
                  
                    & svg{
                        font-size:24px;                        
                        color:var(--dark100); 
                        
                    }
                    &:hover{
                        & svg{                                                    
                            color:var(--primary); 
                            
                        }
                    }
                }


                .mb-0{
                    margin-bottom:0;
                }

                .mt-0{
                    margin-top:0;
                }




                
                .font-sans{
                    font-family:var(--sans);
                } 

                .font-serif{
                    font-serif:var(--serif);
                } 
              

                h1,h2,h3,h4,h5,h6{
                    font-family: var(--serif);
                    font-weight:700;
                    margin-top:0;
                    margin-block-start: 0em;
                    margin-block-end: 1em;
                  
                }

                h6{
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                }

                .text-italic{
                    font-style: italic;
                }


                .text-dark{
                    color: var(--dark)
                }

                .text-primary{
                    color: var(--primary)
                }




                .fs-16{
                    font-size:16px;
                    line-height:22px;
                    word-spacing: 2px;
                }

                .fs-18{
                    font-size:18px;
                    line-height:28px;
                    word-spacing: 2px;
                }

                .fs-20{
                    font-size:20px;
                    line-height:28px;
                    word-spacing: 2px;
                }

                .fs-24{
                    font-size:24px;
                    line-height:26px;
                    word-spacing: 4px;
                }

                .fs-30{
                    font-size:30px;
                }
                .fs-32{
                    font-size:30px;
                    line-height:1em;
                }

                .fs-34{
                    font-size:34px;
                }

                .fs-48{
                    font-size:48px;
                }

                @media (min-width:968px){

                    .fs-md-20{
                        font-size:20px;
                        line-height:28px;
                        word-spacing: 2px;
                    }
                    .fs-md-24{
                        font-size:24px;
                        line-height:38px;
                        word-spacing: 4px;
                    }

                    .fs-md-30{
                        font-size:30px;
                        line-height:38px;
                    }

                    .fs-md-32{
                        font-size:32px;
                        line-height:32px;
                    }
                    .fs-md-48{
                        font-size:48px;
                    }
                }


                .fade-enter{
                    opacity:0
                }
                .fade-enter-active{
                    opacity: 1;
                    transition: opacity 300ms ease-out;
                }
                .fade-leave{opacity: 1;}
                .fade-leave-active{
                    opacity: 0;
                    transition: opacity 300ms ease-out;
                }

                .alert-enter {
                    opacity: 0;
                    transform: scale(0.9);
                  }
                  .alert-enter-active {
                    opacity: 1;
                    transform: translateX(0);
                    transition: opacity 300ms, transform 300ms;
                  }
                  .alert-exit {
                    opacity: 1;
                  }
                  .alert-exit-active {
                    opacity: 0;
                    transform: scale(0.9);
                    transition: opacity 300ms, transform 300ms;
                  }
                  


            ` }

        />
     );
}
 
export default connect(Base);