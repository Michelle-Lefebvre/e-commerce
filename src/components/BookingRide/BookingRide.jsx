import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import DateMomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import map from "../../assets/MapToTestRide.png";
import useStyles from "./styles-booking";

const BookingRide = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <div className={classes.alert}>
        <Typography
          variant="h5"
          //   component = 'h3'
        >
          Mike's Bikes
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          5 Milton Road, <br />
          Montreal QC H3X15X <br />
          514-293-8627
        </Typography>
        <Typography gutterBottom variant="h6" color="secondary">
          Please select a day and time to give your new bike a test ride.
        </Typography>
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DateTimePicker
            clearable
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            color="secondary"
            placeholder="Select date &amp; time"
          />
        </MuiPickersUtilsProvider>
      </div>
      <Typography>
        <img
          src={map}
          alt="location shown on map"
          height="400px"
          className={classes.image}
        />
      </Typography>
    </>
  );
};

export default BookingRide;
