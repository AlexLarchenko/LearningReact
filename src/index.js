import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {Fragment} from "react";

const App = () => (
    <Fragment>
        <Header/>
        <Main/>
        <Footer/>
    </Fragment>
);

const Header = () => (
    <div className="header">Header</div>
);
const Main = () => (
    <div className="main">Main
        <Sidebar/>
        <Content/>
    </div>
);
const Sidebar = () => (
    <div className="sidebar">Sidebar</div>
);
const Content = () => (
    <div className="content">Content</div>
);
const Footer = () => (
    <div className="footer">Footer</div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
