import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SearchTool from './SearchTool.js';
import { Card, Icon, Image } from 'semantic-ui-react'





function Header() {
    // const { items } = props
    return (
        <main role="main" className="header h-100 landing Aligner" style={{
            background: `url("${process.env.PUBLIC_URL + '/imgs/Home.png'}") no-repeat center / cover `
        }}>
            <SearchTool />

        </main>

    )
}



export default Header;
