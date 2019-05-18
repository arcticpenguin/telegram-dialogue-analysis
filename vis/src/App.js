import React, { Component } from 'react';
import { connect } from "react-redux";
import { uniqId } from 'lodash';

import * as actions from "./actions";

class App extends Component {

  constructor(props) {
    super(props);
    this.props.loadDialogueData();
  }

  render() {
    const { dialogueData } = this.props;
    console.log(dialogueData);
    if(dialogueData.length === undefined) {
      return (
        <div/>
      );
    }

    return (
      <div>
        {dialogueData.map(dial => {
          return <div>{dial.text}</div>
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
