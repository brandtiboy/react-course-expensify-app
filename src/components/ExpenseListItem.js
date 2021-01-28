import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, note}) => (
    <div>
    <Link to={`edit/${id}`}>
        <h3>{description}</h3>
    </Link>
        <p>Amount: {numeral(amount).format('$0,0.00')}</p>
        <p>Created at: {moment(createdAt).format('Do MMMM, YYYY')}</p>
        { note && <p>Note: {note}</p> } 
    </div>
);

export default ExpenseListItem;