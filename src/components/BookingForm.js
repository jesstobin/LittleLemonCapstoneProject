import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../assets/css/BookingForm.css";
import { submitAPI } from "../assets/scripts/capstoneAPI";
import { AvailableTimesContext } from "../App";
const BookingForm=()=>{
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [date, setDate] = useState(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10));
   const [time, setTime] = useState("17:00");
   const [noOfGuests, setNoOfGuests] = useState("1");
   const [occasion, setOccasion] = useState("Birthday");
   const {availableTimes, dispatch} = useContext(AvailableTimesContext);

   const navigate = useNavigate();

   function makeAReservationFunction(event) {
      event.preventDefault();
      if (submitAPI({name, email, date, time, noOfGuests, occasion})) {
         navigate('/bookingconfirmationpage', {state: {name, email, date, time, noOfGuests, occasion}});
      } else {
         alert("Couldn't submit the request. Please try again.")
      }
   }

   useEffect(() => {
      dispatch({ type: 'GET_TIMES', date: date })
      // eslint-disable-next-line
   }, [date])

    return (
      <div id="formcontainer">
    <form onSubmit={makeAReservationFunction}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required onChange={e => setName(e.target.value)} autoComplete="name"/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" required onChange={e => setEmail(e.target.value)} name="email"pattern="[^@\s]+@[^@\s]+\.[^@\s]+" autoComplete="email" />
      <label htmlFor="res-date">Choose date</label>
      <input
         type="date" id="res-date"
         required
         min={date}
         name="date"
         onChange={e => setDate(e.target.value)}
         defaultValue={date}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time"onChange={e => {setTime(e.target.value);}}>
         {availableTimes.map(entry =>
            <option key={entry}>{entry}</option>
         )};
      </select>
      <label htmlFor="noOfGuests">Number of guests</label>
      <input id="noOfGuests" type="number" name="noOfGuests" onChange={e => setNoOfGuests(e.target.value)} placeholder="1" min="1" max="100" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" onChange={e => setOccasion(e.target.value)}>
         <option>Birthday</option>
         <option>Anniversary</option>
         <option>Engagement</option>
         <option>Date</option>
         <option>Corporate Events</option>
         <option>Private Functions</option>
      </select>
      <input id="bookingbutton" type="submit" value="Make Your Reservation" />
   </form>
   </div>
   );
}

export default BookingForm;