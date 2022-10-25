import React, {createContext, useState} from 'react';
import { Line } from 'rc-progress';
import MapPage from './MapPage';


const ProgressBar = () => {
    return (
        <div>
            <Line percent={20} strokeWidth='4' strokeColor={'green'}></Line>
        </div>
    ) 
}

export default ProgressBar;