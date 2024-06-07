import React from "react";
import { useLocation } from 'react-router-dom';
import '../assets/css/BookingConfirmationPage.css';
import Lemongif from '../assets/images/lemongif.gif';

const BookingConfirmationPage=()=>{
    const location = useLocation();
    const {name, email, date, time, noOfGuests, occasion} = location?.state;

    return(
        <main className="confirmpage">
            <h1>Booking Confirmed</h1>
            <p> Thank you <b>{name}</b> for choosing Little Lemon! Your reservation is confirmed.
            We look forward to seeing you! <br />
            A confirmation has been sent to your email: <b>{email}</b>. <br /><br />
             See details below. <br />
            Table for <b>{noOfGuests}</b> for your <b>{occasion}</b>. <br />
            On <b>{date}</b> at <b>{time}</b> </p>

            <h2>Easy Peasy Lemon Squeezy!</h2>
            <img id="lemongif" src={Lemongif} alt="Rotating lemon"/>
        </main>
    )
}

export default BookingConfirmationPage;