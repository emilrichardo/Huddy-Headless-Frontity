import React from "react";
import Root from "./Root";
import menuHandler from "./components/handlers/menu-handler";


export default {
  name: "udy-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrl : "principal",
      options: {
        colors: {
          primary:"#FA2306",
          dark: "#555555",
          dark100: "#333333",
          light: "#EAE7E4",
        },       
        fonts: [
          {
            name:"primary",  
            family:"'Crimson Text', serif", 
            url:"https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" 
          },
          {name:"secondary", 
            family:"'Lato', sans-serif", 
            url:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" 
          }
        ]
      },
      
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
      },
    },
  },
  libraries: { 
    source: {
      handlers: [menuHandler],
    },
  },



};
