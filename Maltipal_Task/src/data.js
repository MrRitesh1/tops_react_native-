import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';
import DateRangePicker from 'react-native-daterange-picker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
      minDate: moment().set('date', 17),
      maxDate: moment().set('date', 20),
    };
  }

  setDates = dates => {
    this.setState({
      ...dates,
    });
  };

  render() {
    const {startDate, endDate, displayedDate, minDate, maxDate} = this.state;
    return (
      <View style={styles.container}>
        <DateRangePicker
          onChange={this.setDates}
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          maxDate={maxDate}
          range
          displayedDate={displayedDate}>
          <Text>Click me!</Text>
        </DateRangePicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
