import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
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
        eachScore =  3;
        break;
      case "Somewhat":
        eachScore = 2;
        break;
      case "Moderately":
        eachScore = 1;
        break;
      case "Quite a bit":
        eachScore =  0;
        break;
      default:
        eachScore =  -1;  
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
          <div className="col-sm-12" style={{textAlign:'left'}}>
            <form onSubmit={this.handleFormSubmit}>
            <h5> 1. Ability to do household chores (cooking, laundry, housecleaning)?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_1"
                    value="Not at all"
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
                    name="baldder_1"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_1"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_1"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_1"
                    value="Not at all"
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
                    name="bowel_1"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_1"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_1"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_1"
                    value="Not at all"
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
                    name="vagina_1"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_1"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_1"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>


            {/* Q2 start here */}

            <h5 style={{marginTop:'15px'}}>  2. Ability to do physical activities such as walking, swimming, or other exiercise?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_2"
                    value="Not at all"
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
                    name="baldder_2"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_2"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_2"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_2"
                    value="Not at all"
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
                    name="bowel_2"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_2"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_2"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_2"
                    value="Not at all"
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
                    name="vagina_2"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_2"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_2"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>

              {/* Q3 start here */}

              <h5 style={{marginTop:'15px'}}>  3. Entertainment activities such as going to a movie or concert?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_3"
                    value="Not at all"
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
                    name="baldder_3"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_3"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_3"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_3"
                    value="Not at all"
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
                    name="bowel_3"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_3"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_3"
                    value="Quite a bit"
                    className="form-check-input"
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_3"
                    value="Not at all"
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
                    name="vagina_3"
                    value="Somewhat"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Somewhat
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_3"
                    value="Moderately"
                    
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />Moderately
                </label>
              </div>


              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_"
                    value="Quite a bit"
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