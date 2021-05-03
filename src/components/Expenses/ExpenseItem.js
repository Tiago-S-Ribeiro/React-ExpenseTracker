import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); //Array destructuring
    //1st value is a pointer to the props.title, the value itself
    //2nd value is a function which we can later call to set a new title

    const clickHandler = () => {
        console.log('Clicked');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
             <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} €</div>
            </div>
            <button onClick={clickHandler}>Whatevs</button>
        </Card>
    );
}

export default ExpenseItem;