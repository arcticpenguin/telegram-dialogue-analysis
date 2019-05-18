import React, { Component } from 'react';
import { connect } from "react-redux";
import { uniqueId } from 'lodash';
import { nest } from 'd3';

import * as actions from './actions';
import TimelineVis from './components/TimelineVis';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.loadDialogueData();
  }

  render() {
    const { dialogueData } = this.props;
    console.log(dialogueData);
    if (dialogueData.length === undefined) {
      return (
        <div />
      );
    }

    // Process data
    const timelineData = nest()
      .key(d => d.dateStr)
      .entries(dialogueData);
    console.log(timelineData)
    return (
      <div>
        <TimelineVis
          data={[5, 4, 1, 3]}
          width={800}
          height={300}
        ></TimelineVis>
        {dialogueData.map(dial => {
          return <div key={uniqueId('dialogue-text-')}>{dial.text}</div>
        })}
      </div >
    );
  }
}

const mapStateToProps = ({ dialogueData }) => {
  return {
    dialogueData,
  };
};

export default connect(mapStateToProps, actions)(App);
