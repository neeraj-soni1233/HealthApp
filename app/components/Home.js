import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";
import { connect } from 'react-redux'
import { Timer } from "react-native-stopwatch-timer";

import { addTimer, getTimers } from "app/state/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getTimers: () => dispatch(getTimers()),
    addTimer: (payload) => dispatch(addTimer(payload)),
  };
};

class Home extends Component {
  state = {
    timerStart: false,
    stopwatchStart: false,
    totalDuration: 5000,
    timerReset: false,
    stopwatchReset: false,
  };

  componentDidMount() {
    const { getTimers } = this.props
    getTimers()
  }

  toggleTimer = () => {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  };

  resetTimer = () => {
    this.setState({ timerStart: false, timerReset: true });
  };

  toggleStopwatch = () => {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
  };

  resetStopwatch = () => {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  };

  getFormattedTime = (time) => {
    this.currentTime = time;
  };

  storeData = () => {


    var gsDayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    
   
    this.resetTimer()
    Alert.alert('Greate! Yoy have sanitized your hand ,Your data will be saved into history' )
    const { addTimer } = this.props
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hr = new Date().getHours();
    var min = new Date().getMinutes();
    let current = new Date();

    let dayName = current.toLocaleDateString('en-US',{weekday: 'long'});

    var finalDateString =
    dayName + "  " + hr + ":" + min + " " + date + "/" + month + "/" + year;

    addTimer(finalDateString)
  };

  render() {
    return (
      <View style={styles.screen}>
        <TouchableHighlight
          style={styles.topContainer}
          onPress={this.toggleTimer}
        >
          <Text style={styles.topText}>
            {!this.state.timerStart
              ? "Wash "
              : " Welldone!!,doing good job"}
          </Text>
        </TouchableHighlight>
        <View>
          <Timer
            totalDuration={this.state.totalDuration}
            msecs
            start={this.state.timerStart}
            reset={this.state.timerReset}
            options={options}
            handleFinish={this.storeData}
            getTime={this.getFormattedTime}
          />
        </View>
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: "#00d2ff",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  topContainer: {
    backgroundColor: "#00d2ff",
    padding: 5,
    borderRadius: 5,
    height: 150,
    width:150,
    borderRadius: 150/2
  },
  topText: {
    fontSize: 15,
    color: "#FFF",
    textAlign:'center',
    margin:30,
    fontWeight:"bold"
  },
});

export default connect(null, mapDispatchToProps)(Home)