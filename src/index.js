import React from 'react';
import ReactDom from 'react-dom';
import './App.css';


let arrDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
let arrMonths = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
let zodiacSigns = ['Овен', 'Телець', 'Близнюки', 'Рак', 'Лев', 'Діва', 'Терези', 'Скорпіон', 'Стрілець', 'Козоріг', 'Водолій', 'Риби'];

const App = () => {
    return (
        <div>
            <h2>Днi недiлi</h2>
                <ol>
                    {arrDays.map(day => (
                        <li key={day} className='days'>{day}</li>
                    ))}
                </ol>
            <h2>Мiсяцi</h2>
                <ol>
                    {arrMonths.map(month => (
                        <li key={month} className='months'>{month}</li>
                    ))}
                </ol>
            <h2>Знаки Зодіаку</h2>
                <ol>
                    {zodiacSigns.map(zodiac_signs => (
                        <li key={zodiac_signs} className='zodiac__signs'>{zodiac_signs}</li>
                    ))}
                </ol>
        </div>    
    )
}


ReactDom.render(<App></App>, document.querySelector('#root'));