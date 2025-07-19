import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchTool from './SearchTool.js';





function Header() {

    return (
        <main role="main" className="header h-100 landing Aligner">
            <SearchTool />
        </main>

    )
}



export default Header;
