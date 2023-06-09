import React, {useState} from 'react';
import DatePicker from 'react-native-datepicker';

const DatePickers = () => {
  const [date, setData] = useState(new Date());

  return (
    <DatePicker
      style={{width: 200}}
      date={date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2016-05-01"
      maxDate="2016-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          marginLeft: 36,
        },
      }}
      onDateChange={date => setData(date)}
    />
  );
};

export default DatePickers;
