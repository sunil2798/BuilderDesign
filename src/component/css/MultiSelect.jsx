import { Button, Grid } from '@material-ui/core'
import React, { Component } from 'react'

export default class MultiSelect extends Component {
  constructor() {
    super()
    this.state = {
      selectedButton: [],
    }
  }

  handleButtonClick = (selectedText) => {
    if (this.state.selectedButton.includes(selectedText)) {
      this.setState((prevState) => ({
        selectedButton: prevState.selectedButton.filter((button) => button !== selectedText),
      }))
      console.log(" Removed button.........", selectedText);

    } else {
      this.setState((prevState) => ({
        selectedButton: [...prevState.selectedButton, selectedText]
      }))
    }
  }

  isButtonSelected = (selectedText) => {
    return this.state.selectedButton.includes(selectedText)
  }

  render() {
    console.log("Added selected buttons............", this.state.selectedButton);

    return (
      <div style={{ marginTop: '20px' }}>
        <Grid container spacing={2} direction="row" justifyContent="space-around" style={{ marginBottom: '20px', textAlign: 'center', display: "flex", flexWrap: "nowrap" }}>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                background: this.isButtonSelected('Eduction') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Eduction') ? '#FFFFFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Eduction')}>
              Eduction
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                background: this.isButtonSelected('Medical') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Medical') ? '#FFFFFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Medical')}>
              Medical
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                background: this.isButtonSelected('Arts') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Arts') ? '#FFFFFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Arts')}>
              Arts
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} direction="row" justifyContent="space-around" style={{ marginBottom: '20px', textAlign: 'center', display: "flex", flexWrap: "nowrap" }}>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                background: this.isButtonSelected('Travel') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Travel') ? '#FFFFFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Travel')}>
              Travel
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                background: this.isButtonSelected('Fitness') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Fitness') ? '#FFFFFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Fitness')}>
              Fitness
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              style={{
                ...webStyle.buttonDefault,
                background: this.isButtonSelected('Technology') ? '#B50B8F' : '#383838',
                color: this.isButtonSelected('Technology') ? '#FFFFFF' : '#B2B2B4',
              }}
              onClick={() => this.handleButtonClick('Technology')}>
              Technology
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const webStyle = {
  buttonDefault: {
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
