/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Soft UI Dashboard PRO Material main context
const MaterialUI = createContext();

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

// Material Dashboard 2 PRO React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return {
        ...state,
        miniSidenav: action.value,
      };
    }
    case "TRANSPARENT_SIDENAV": {
      return {
        ...state,
        transparentSidenav: action.value,
      };
    }
    case "WHITE_SIDENAV": {
      return {
        ...state,
        whiteSidenav: action.value,
      };
    }
    case "SIDENAV_COLOR": {
      return {
        ...state,
        sidenavColor: action.value,
      };
    }
    case "TRANSPARENT_NAVBAR": {
      return {
        ...state,
        transparentNavbar: action.value,
      };
    }
    case "FIXED_NAVBAR": {
      return {
        ...state,
        fixedNavbar: action.value,
      };
    }
    case "OPEN_CONFIGURATOR": {
      return {
        ...state,
        openConfigurator: action.value,
      };
    }
    case "DIRECTION": {
      return {
        ...state,
        direction: action.value,
      };
    }
    case "LAYOUT": {
      return {
        ...state,
        layout: action.value,
      };
    }
    case "DARKMODE": {
      return {
        ...state,
        darkMode: action.value,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Dashboard 2 PRO React context provider

// Material Dashboard 2 PRO React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "primary",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  return <MaterialUI.Provider value={[controller, dispatch]}> {children} </MaterialUI.Provider>;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) =>
  dispatch({
    type: "MINI_SIDENAV",
    value,
  });
const setTransparentSidenav = (dispatch, value) =>
  dispatch({
    type: "TRANSPARENT_SIDENAV",
    value,
  });
const setWhiteSidenav = (dispatch, value) =>
  dispatch({
    type: "WHITE_SIDENAV",
    value,
  });
const setSidenavColor = (dispatch, value) =>
  dispatch({
    type: "SIDENAV_COLOR",
    value,
  });
const setTransparentNavbar = (dispatch, value) =>
  dispatch({
    type: "TRANSPARENT_NAVBAR",
    value,
  });
const setFixedNavbar = (dispatch, value) =>
  dispatch({
    type: "FIXED_NAVBAR",
    value,
  });
const setOpenConfigurator = (dispatch, value) =>
  dispatch({
    type: "OPEN_CONFIGURATOR",
    value,
  });
const setDirection = (dispatch, value) =>
  dispatch({
    type: "DIRECTION",
    value,
  });
const setLayout = (dispatch, value) =>
  dispatch({
    type: "LAYOUT",
    value,
  });
const setDarkMode = (dispatch, value) =>
  dispatch({
    type: "DARKMODE",
    value,
  });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
};