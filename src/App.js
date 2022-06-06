import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Not at all",
      totalScore : 0,
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });

    let eachScore;

    switch (this.state.selectedOption) {
      case "Not at all":
        eachScore =  4;
        break;
      case "Somewhat":
        eachScore = 3;
        break;
      case "Moderately":
        eachScore = 2;
        break;
      case "Quite a bit":
        eachScore =  1;
        break;
      default:
        eachScore =  0;  
    }

    let sumScore = eachScore + this.state.totalScore;
    this.setState({totalScore: sumScore });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log("You have got Scores:", this.state.totalScore);
    this.setState({totalScore:0});
  };

  render() {
    return (
      <div className="container">
        <div id="heading">
            <h1>PELVIC FLOOR IMPACT QUESTIONNAIRE</h1>
            <h2>
                How do the following symptoms or conditions usually affect each of the three areas below?
            </h2>
          </div>
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="Not at all"
                    checked={this.state.selectedOption === "Not at all"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Not at all
                </label>
              </div>

              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="Somewhat"
                    checked={this.state.selectedOption === "Somewhat"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="Moderately"
                    checked={this.state.selectedOption === "Moderately"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="Quite a bit"
                    checked={this.state.selectedOption === "Quite a bit"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default App;