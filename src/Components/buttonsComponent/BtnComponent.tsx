import React from 'react';

function BtnComponent(props: any) {
    return (
        <div  className="btngroup">
            <button
                onClick={props.startTimer}
                className="btn btn-green">  Start            </button>
            <button
                onClick={props.pauseTimer}
                className="btn btn-red"> Stop
            </button>
            <button
                onClick={props.resetTimer}
                className="btn btn-yellow"> Reset
            </button>
        </div>
    );
}

export default BtnComponent;
