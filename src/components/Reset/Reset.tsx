import React from 'react';

interface IProps {
    resetCells: () => void
}

const Reset:React.FC <IProps> = (props) => {
    return (<button className="btnReset" type="button" onClick={props.resetCells}>Reset</button>);
};

export default Reset;