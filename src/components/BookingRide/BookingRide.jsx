import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import DateMomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import useStyles from "./styles-booking";

const BookingRide = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className={classes.alert}>
      <Typography>
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
  );
};

export default BookingRide;
