import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from './Loader'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework movies
    </div>
  );
};
