import React from 'react';
import 'reset-css';
import {Header} from "../molecules/Header";
import {Footer} from "../molecules/Footer";
import { Table } from '../molecules/Table';


export const DefaultTable = ({ children }) => {
    return (
        <>
        <Header/>
        <Table/>
        <Footer/>
        </>
        
    );
};

