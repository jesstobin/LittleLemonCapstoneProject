
import React, { createContext, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import BookingConfirmationPage from './components/BookingConfirmationPage';
import './App.css';
import { fetchAPI } from "./assets/scripts/capstoneAPI";

export const AvailableTimesContext = createContext();
const defaultAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_TIMES":
      const times = fetchAPI(new Date(action.date));
      return times;
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch ] = useReducer(reducer, defaultAvailableTimes);
  return (
    <AvailableTimesContext.Provider value={{availableTimes, dispatch}}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/bookingconfirmationpage" element={<BookingConfirmationPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </AvailableTimesContext.Provider>
  )
}

export default App;
