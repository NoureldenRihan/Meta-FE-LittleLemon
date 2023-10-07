import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <fieldset>
              <div>
                <label htmlFor="book-date">Date</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="book-time">Time</label>
                <select
                  id="book-time"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                  required
                >
                  <option value="">Select Time</option>
                  {props.availableTimes.availableTimes.map((availableTimes) => {
                    return (
                      <option key={availableTimes}>{availableTimes}</option>
                    );
                  })}
                </select>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="book-guests">Number of Guests</label>
                <input
                  id="book-guests"
                  min="1"
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                  }}
                  type={"number"}
                  placeholder={1}
                  max={20}
                  required
                ></input>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="book-occasion">Occasion</label>
                <select
                  id="book-occasion"
                  key={occasion}
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  required
                >
                  <option value="">Select an Option</option>
                  <option>Professional</option>
                  <option>Birthday</option>
                  <option>Family</option>
                </select>
              </div>
            </fieldset>
            <div>
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Check Reservation"}
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
