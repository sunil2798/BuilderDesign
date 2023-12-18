import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';

export default class MultiButtonSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedButtons: [],
    };
  }

  handleButtonClick = (selectedText) => {
    if (this.state.selectedButtons.includes(selectedText)) {
      this.setState((prevState) => ({
        selectedButtons: prevState.selectedButtons.filter((button) => button !== selectedText),
      }));
    } else {
      this.setState((prevState) => ({
        selectedButtons: [...prevState.selectedButtons, selectedText],
      }));
    }
  };

  isButtonSelected = (selectedText) => {
    return this.state.selectedButtons.includes(selectedText);
  };

  render() {
    return (
      <div style={{ marginTop: '20px', width: '50%' }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          style={{ marginBottom: '20px', textAlign: 'center' }}
        >
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                backgroundColor: this.isButtonSelected('Education') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Education') ? '#FFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Education')}
            >
              Education
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                backgroundColor: this.isButtonSelected('Medical') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Medical') ? '#FFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Medical')}
            >
              Medical
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                backgroundColor: this.isButtonSelected('Arts') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Arts') ? '#FFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Arts')}
            >
              Arts
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          style={{ textAlign: 'center' }}
        >
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                backgroundColor: this.isButtonSelected('Travel') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Travel') ? '#FFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Travel')}
            >
              Travel
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                backgroundColor: this.isButtonSelected('Fitness') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Fitness') ? '#FFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Fitness')}
            >
              Fitness
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                backgroundColor: this.isButtonSelected('Technology') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Technology') ? '#FFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Technology')}
            >
              Technology
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const webStyle = {
  buttonDefault: {
    background: '#383838',
    color: '#B2B2B4',
    borderRadius: '40px',
    padding: '10px 20px',
    gap: '10px',
    height: '46px',
    width: '156px',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '19.36px',
    letterSpacing: '8%',
    fontSize: '16px',
  },
};
