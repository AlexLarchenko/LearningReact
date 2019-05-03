import React from 'react';
import './style.css';
import {Sidebar} from "../sidebar";
import {Content} from "../content";

const Main = () => (
    <div className="main">
        <Sidebar/>
        <Content/>
    </div>
);
export {Main}