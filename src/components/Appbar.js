import React from "react";

export const Appbar = () => {
    return (
        <header>
        <nav
            className="navbar navbar-light"
            style={appbarStyle}
        >
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Roulette Game </h1>
        </nav>
        </header>
    );
};
const appbarStyle = {
    backgroundColor: '#e3f2fd',
    padding: '10px 0',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
  };
