import React, {useState} from 'react';
import './styles/Input.scss';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function KeyInput() {
    const [keyWords, setKeyWords] = useState("");
    const [heroes, setHeroes] = useState(null);

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
                setHeroes(response.data)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="input-container">
            <input className="c-checkbox" type="checkbox" id="checkbox"/>
            <div className="c-formContainer">
                <form className="c-form" action="">
                    <input className="c-form__input" placeholder="请输入密钥" type="text" onChange={onTextInput}
                           required/>
                    <label className="c-form__buttonLabel">
                        <button className="c-form__button" type="button" onClick={handleClick}>生成英雄</button>
                    </label>
                    <label className="c-form__toggle" htmlFor="checkbox" data-title="点击开始抽取英雄组合"/>
                </form>
            </div>
            {heroes && (
                <div className="hint-container">
                    <div className="backdrop"></div>
                    <p>{heroes}</p>
                </div>
            )}
        </div>
    );
}
