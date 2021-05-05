import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// STATELESS COMPONENT
const ExpenseItem = (props) => {
    //const [x, setX] = useState(props.x); -> Array destructuring 
    //1st value is a pointer to the props.x, the value itself 
    //2nd value is a function which we can later call to set a new 'x'

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
             <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} €</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;