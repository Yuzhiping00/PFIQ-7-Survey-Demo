
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

  // it is a method here
  handleOptionChange = changeEvent => {
    this.setState({displayScore: null});
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
      let newArr = [...this.state.scores];
      newArr[index].score = eachScore;
      newArr[index].value = changeEvent.target.value;
      this.setState({scores: newArr});
    }else{
      this.state.scores.push(element);
    }
    console.log(this.state.scores);
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let sumScores = 0;
    // for(let i = 0; i<= this.state.scores.length-1; i++){
    //   sumScores = sumScores + (this.state.scores[i].score);
    // }
    let q1 =[], q2 =[], q3 =[], q4 =[], q5=[], q6=[], q7=[];
    if(this.state.scores.length === 21){
      this.setState({displayScore: true});
      for(let i=0; i<this.state.scores.length; i++){
        if(this.state.scores[i].id.includes("_1")){
          q1.push(this.state.scores[i].score);
        }else if(this.state.scores[i].id.includes("_2")){
          q2.push(this.state.scores[i].score);
        }else if(this.state.scores[i].id.includes("_3")){
          q3.push(this.state.scores[i].score);
        }else if(this.state.scores[i].id.includes("_4")){
          q4.push(this.state.scores[i].score);
        }else if(this.state.scores[i].id.includes("_5")){
          q5.push(this.state.scores[i].score);
        }else if(this.state.scores[i].id.includes("_6")){
          q6.push(this.state.scores[i].score);
        }else if(this.state.scores[i].id.includes("_7")){
          q7.push(this.state.scores[i].score);
        }
      }
      console.log("q1 = "+ q1);
      console.log("q2 = "+ q2);
      console.log("q3 = "+ q3);
      console.log("q4 = "+ q4);
      console.log("q5 = "+ q5);
      console.log("q6 = "+ q6);
      console.log("q7 = "+ q7);

      let q1_score= 0; 
      let q2_score= 0; 
      let q3_score= 0; 
      let q4_score= 0; 
      let q5_score= 0; 
      let q6_score= 0; 
      let q7_score= 0; 

      // for(let i =0; i<q1.length; i++){
      //   q1_score += q1[i];
      // }
      q1_score = this.addForEachQuestion(q1);
      console.log("q1 score = "+ q1_score);
      q2_score = this.addForEachQuestion(q2);
      console.log("q2 score = "+ q2_score);
      q3_score = this.addForEachQuestion(q3);
      console.log("q3 score = "+ q3_score);
      q4_score = this.addForEachQuestion(q4);
      console.log("q4 score = "+ q4_score);
      q5_score = this.addForEachQuestion(q5);
      console.log("q5 score = "+ q5_score);
      q6_score = this.addForEachQuestion(q6);
      console.log("q6 score = "+ q6_score);
      q7_score = this.addForEachQuestion(q7);
      console.log("q7 score = "+ q7_score);

      // add all 7 scores
      sumScores = (q1_score + q2_score + q3_score + q4_score + q5_score + q6_score + q7_score).toFixed(2);
      this.setState({totalScore: sumScores});
      alert("Total score is: "+ sumScores);
      console.log("Total score is: "+ sumScores);
    }else{
      this.setState({displayScore: false});
      alert("Please Complete Every Question in Survey");
    }
  };

  // calculate each question score
   addForEachQuestion= (question) =>{
     let value = 0;
     for(let i= 0; i< question.length; i++){
        value += question[i];
     }
     let finalResult = value / 3 * 100 / 3;
     return finalResult; 
   }


  render() {

    let show;
    if(this.state.displayScore){
      show = <p style={{color: 'green', fontSize:'20px',paddingTop:'25px', float:'right',marginRight:'10px'}}>Total scores: {this.state.totalScore} </p>
    }else if(this.state.displayScore === false){
      show = <p style={{color: 'red', fontSize:'20px',paddingTop:'25px', float:'right',marginRight:'10px'}}> ***Please complete whole survey***</p>
    }
    return (
      <div className="container">
        <div id="heading">
            <h1>PELVIC FLOOR IMPACT QUESTIONNAIRE</h1>
            <h2>
                How do the following symptoms or conditions usually affect each of the three areas below?
            </h2>
        </div>
          <div className="col-sm-12 col-md-10 col-lg-10" style={{textAlign:'center', margin:'auto auto', width:'90%'}} >
            <form onSubmit={this.handleFormSubmit} style={{boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.5)", backgroundColor: '#fff',
                                                    width:'100%',
                                                    margin: '10px auto',
                                                    padding: '15px 15px',}}>
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px',fontSize:'18px'}}><strong>1. Ability to do household chores (cooking, laundry, housecleaning)?</strong> </p>
              <table className="table table-bordered border-dark">
              <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                              name="baldder_1" 
                              value="Not at all" 
                              onChange={this.handleOptionChange} 
                              className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="baldder_1"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_1"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_1"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_1" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_1"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_1"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_1"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_1" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_1"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_1"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_1"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>


{/* question 2 table here */}

<p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}> <strong>2. Ability to do physical activities such as walking, swimming, or other exiercise?</strong></p>
              <table className="table table-bordered border-dark">
              <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> <input type="radio" name="baldder_2" value="Not at all" onChange={this.handleOptionChange} className="form-check-input" /></td>
                      <td><input
                            type="radio"
                            name="baldder_2"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_2"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_2"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_2" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_2"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_2"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_2"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_2" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_2"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_2"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_2"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

{/* question 3 table here */}
        <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>3. Entertainment activities such as going to a movie or concert?</strong> </p>
        <table className="table table-bordered border-dark">
        <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> <input type="radio" name="baldder_3" value="Not at all" onChange={this.handleOptionChange} className="form-check-input" /></td>
                      <td><input
                            type="radio"
                            name="baldder_3"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_3"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_3"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_3" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_3"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_3"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_3"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_3" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_3"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_3"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_3"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* question 4 table here */}
                <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>4. Ability to travel by car or bus for a distance greater than 30 minutes away from home?</strong> </p>
                <table className="table table-bordered border-dark">
                <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="baldder_4" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="baldder_4"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_4"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_4"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_4" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_4"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_4"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_4"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_4" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_4"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_4"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_4"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

              {/* question 5 table here */}
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>5. Participating in social activities outside your home?</strong></p>
              <table className="table table-bordered border-dark">
              <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="baldder_5" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="baldder_5"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_5"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_5"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_5" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_5"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_5"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_5"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_5" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_5"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_5"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_5"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* question 6 table here */}
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}> <strong>6. Emotional health(nervousness, depression, etc)</strong></p>
              <table className="table table-bordered border-dark">
              <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="baldder_6" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="baldder_6"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_6"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_6"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_6" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_6"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_6"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_6"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_6" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_6"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_6"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_6"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* question 7 table here */}
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>7. Feeling frustrated?</strong></p>
              <table className="table table-bordered border-dark">
              <thead className="table-success">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Not at all</th>
                      <th scope="col">Somewhat</th>
                      <th scope="col">Moderately</th>
                      <th scope="col">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"  style={{textAlign:'left', marginLeft:'10px'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="baldder_7" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="baldder_7"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="baldder_7"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="baldder_7"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Bowel or Rectum</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="bowel_7" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bowel_7"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bowel_7"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bowel_7"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>

                    </tr>

                    <tr>
                      <th scope="row" style={{textAlign:'left', marginLeft:'10px'}}>Vagina</th>
                      <td> 
                        <input 
                          type="radio" 
                          name="vagina_7" 
                          value="Not at all"
                           onChange={this.handleOptionChange} 
                           className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="vagina_6"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="vagina_7"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="vagina_7"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* save button here */}
              <div className="form-group" style={{textAlign:'left', marginBottom:'15px', marginLeft:'10px'}}>
                <button className="btn btn-success" style={{width:'100px', marginTop:'25px'}} type="submit">
                  Save
                </button>
                {show}
              </div>
              
            </form>
          </div>
      </div>
    );
  }
}

export default App;