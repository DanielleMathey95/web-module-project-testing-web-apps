import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

//Inputs
const firstnameInput = () => screen.getByLabelText(/first name/i)
const lastnameInput = () => screen.getByLabelText(/last name/i)
const emailInput = () => screen.getByLabelText(/email/i)
const messageInput = () => screen.getByLabelText(/message/i)
const submit = () => screen.getByRole('button')

//Displays
const firstnameDisplay = () => screen.queryByTestId('firstnameDisplay')
const lastnameDisplay = () => screen.queryByTestId('lastnameDisplay')
const emailDisplay = () => screen.queryByTestId('emailDisplay')
const messageDisplay = () => screen.queryByTestId('messageDisplay')

//Errors
const errors = () => screen.queryAllByTestId('error')

test('renders without errors', ()=>{
    render(<ContactForm />)
});

test('renders the contact form header', ()=> {
    
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});