import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selectedYear={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
                {/* 
                THESE ARE THE ALTERNATIVES TO THE SINGLE LINE ABOVE. The line above simply removes the logic from this JSX part
                {filteredExpenses.length === 0 && <p>No expenses found</p>} This is a JS trick where the && acts as such: checks first condition, if it's met, it runs what's after the '&&' *
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => 
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}/>
                )} */}
                {/* This is the alternative to the above using a ternary operator
                {filteredExpenses.length === 0 ? <p>No expenses found</p> : filteredExpenses.map((expense) => 
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}/>
                )} */}
            </Card>
        </div>
    )
}

export default Expenses;