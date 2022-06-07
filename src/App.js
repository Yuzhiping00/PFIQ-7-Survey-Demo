
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      scores:[],
      displayScore: null,
      totalScore:0
    };
  }

  handleOptionChange = changeEvent => {

    this.setState({
      selectedOption: changeEvent.target.value
    });


    let eachScore;

    switch (changeEvent.target.value) {
      case "Not at all":
        eachScore =  0;
        break;
      case "Somewhat":
        eachScore = 1;
        break;
      case "Moderately":
        eachScore = 2;
        break;
      case "Quite a bit":
        eachScore =  3;
        break;
      default:
        eachScore =  -1;  
    }

    let element = {};
    element.id = changeEvent.target.name;
    element.score = eachScore;
    element.value = changeEvent.target.value;
    
    let flag = false;
    let index;
    for (let obj of this.state.scores) {
      if (obj.id === changeEvent.target.name) {
        flag = true;
        index = this.state.scores.indexOf(obj);
        break;
      }
    }

    if(flag){
      this.state.scores[index].score = eachScore;
    }else{
      this.state.scores.push(element);
    }
    console.log(this.state.scores);
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let sumScores = 0;
    for(let i = 0; i<= this.state.scores.length-1; i++){
      sumScores = sumScores + (this.state.scores[i].score);
    }

    if(this.state.scores.length === 21){
      this.setState({displayScore: true});
      this.setState({totalScore: sumScores});
      console.log("Total score is: "+ sumScores);
    }else{
      this.setState({displayScore: false});
    }
  };

  render() {

    let show;
    if(this.state.displayScore){
      show = <p>You have got Scores:{this.state.totalScore} </p>
    }else if(this.state.displayScore === false){
      show = <p>Please complete whole survey</p>
    }
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    onChange={this.handleOptionChange}
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
                    name="vagina_3"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

               {/* Q4 start here */}
               <h5 style={{marginTop:'15px'}}>  4. Ability to travel by car or bus for a distance greater than 30 minutes away from home?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_4"
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
                    name="baldder_4"
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
                    name="baldder_4"
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
                    name="baldder_4"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_4"
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
                    name="bowel_4"
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
                    name="bowel_4"
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
                    name="bowel_4"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_4"
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
                    name="vagina_4"
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
                    name="vagina_4"
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
                    name="vagina_4"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

               {/* Q5 start here */}
               <h5 style={{marginTop:'15px'}}>   5. Participating in social activities outside your home?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_5"
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
                    name="baldder_5"
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
                    name="baldder_5"
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
                    name="baldder_5"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_5"
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
                    name="bowel_5"
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
                    name="bowel_5"
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
                    name="bowel_5"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_5"
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
                    name="vagina_5"
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
                    name="vagina_5"
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
                    name="vagina_5"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

              {/* Q6 start here */}

              <h5 style={{marginTop:'15px'}}> 6. Emotional health(nervousness, depression, etc)?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_6"
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
                    name="baldder_6"
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
                    name="baldder_6"
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
                    name="baldder_6"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_6"
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
                    name="bowel_6"
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
                    name="bowel_6"
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
                    name="bowel_6"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_6"
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
                    name="vagina_6"
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
                    name="vagina_6"
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
                    name="vagina_6"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>


         {/* Q7 start here */}

         <h5 style={{marginTop:'15px'}}>  7. Feeling frustrated?</h5>
              <p><strong>Bladder or Urine</strong></p>
            
              <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="baldder_7"
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
                    name="baldder_7"
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
                    name="baldder_7"
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
                    name="baldder_7"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>
             
            <p style={{marginTop:'10px'}}><strong>Bowel or rectum</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="bowel_7"
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
                    name="bowel_7"
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
                    name="bowel_7"
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
                    name="bowel_7"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

              <p style={{marginTop:'10px'}}><strong>Vagina</strong></p>
            <div className="form-check form-check-inline">
                <label>
                  <input
                    type="radio"
                    name="vagina_7"
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
                    name="vagina_7"
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
                    name="vagina_7"
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
                    name="vagina_7"
                    value="Quite a bit"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                 Quite a bit
                </label>
              </div>

              {/* save button here */}
              <div className="form-group" style={{textAlign:'center', marginBottom:'20px'}}>
                <button className="btn btn-success" style={{width:'100px', marginTop:'25px'}}type="submit">
                  Save
                </button>
              </div>
              <div>
                {show}
              </div>
              
            </form>
          </div>
      </div>
    );
  }
}

export default App;