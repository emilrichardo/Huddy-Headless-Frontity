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
