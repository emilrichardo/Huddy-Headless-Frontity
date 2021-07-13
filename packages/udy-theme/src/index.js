import React from "react";
import Root from "./Root";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";


export default {
  name: "udy-theme",
  roots: {
    theme: Root
  },
  state: {
    urlSite: "http://huddy.ar",
    theme: {
      autoPrefetch: "in-view",      
      menu: [],
      menuUrl : "principal",
      options: {
        colors: {
          primary:"#008E82",
          primaryrgb:"0, 142, 130",
          dark: "#555555",
          dark100: "#333333",
          light: "#EAE7E4",
          light100: "#DBDBDB",
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
      isDarkmodeOn:false,
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true,
      },

      excerpt: {
        showOnList: false,
        showOnPost: false,
      },

      meta: {
        showOnList: true,
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

      toggleDarkmode: ({state})=>{
        state.theme.isDarkmodeOn = !state.theme.isDarkmodeOn;

      }
    },
  },
  libraries: { 
    source: {
      handlers: [menuHandler],
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },



};
