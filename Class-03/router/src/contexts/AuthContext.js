import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

let initialState = {
  isAuthentication: false,
  user: {
    email: "",
    password: "",
    fullName: ""  // Add fullName to the initial state
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOG_IN":
      return { ...state, isAuthentication: true, user: action.payload };
    case "SET_LOG_OUT":
      return initialState;
    case "SET_PROFILE":
      const updatedUser = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(updatedUser)); // Persist updated user information
      return { ...state, user: updatedUser };
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthentication");
    dispatch({ type: "SET_LOG_OUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
