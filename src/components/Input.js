import React, {useEffect, useState} from 'react';
import '../styles/Input.scss';
import ResultTable from "./ResultTable";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function KeyInput() {
    const [keyWords, setKeyWords] = useState("");
    const [currentPick, setCurrentPick] = useState(null);
    const [pickHistories, setPickHistories] = useState([]);
    const inputRef = React.createRef()

    const onTextInput = (event) => {
        setKeyWords(event.target.value);
    }

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({encryptCode: keyWords})
    };

    const handleClick = () => {
        fetch(BASE_URL, options)
            .then(response => response.json())
            .then(response => {
                setCurrentPick(response.data)
                setPickHistories(response.logs)
            })
            .catch(err => console.error(err));
    }

    const onKeyUp = (event) => {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <div className="selector-container">
            <div className="input-container">
                <div className="keyword-container">
                    <input className="keyword-input" onChange={onTextInput} defaultValue={keyWords} ref={inputRef}
                           onKeyUp={onKeyUp}/>
                    <button className="confirm-button" onClick={handleClick}>生成英雄</button>
                </div>
                {currentPick && (
                    <div className="hint-container">
                        <div className="backdrop"></div>
                        <p>{currentPick}</p>
                    </div>
                )}
                <ResultTable data={pickHistories}/>
            </div>
        </div>
    );
}
