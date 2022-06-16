
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "", // initially do not select any radio button
      answers:[], // an array of answer objects
      displayScore: null,
      totalScore:0
    };
  }

  // handle radio button selection chnages
  handleOptionChange = changeEvent => {
    // every time if clicking a radio button, total score message will disappear.
    this.setState({displayScore: null});
    // set selectedOption to the event value
    this.setState({
      selectedOption: changeEvent.target.value
    });

    // get score for each question based on the event target
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

    // create an object based on the event name, event value and obtained score
  
    //if an object does not exists in the answers array
    let flag = false;

    let index;

    for (let obj of this.state.answers) {
         // if current object exist in the answers array based on name
      if (obj.name === changeEvent.target.name) {
        flag = true;
        // find the index of the oject with the same name
        index = this.state.answers.indexOf(obj);
        break;
      }
    }

    if(flag){ // change the existing object score and value in the answers array
      let newArr = [...this.state.answers];
      newArr[index].score = eachScore;
      newArr[index].value = changeEvent.target.value;
      this.setState({answers: newArr});
    }else{ // if the current object does not exist, then add it to the answers array
      let answer = {};
      answer.name = changeEvent.target.name;
      answer.score = eachScore;
      answer.value = changeEvent.target.value;

      this.state.answers.push(answer);
    }
    console.log(this.state.answers);
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    let sumScores = 0;
    
    // create 3 arrays and each of them holds 7 scores based on filter bladder, bowel, vagina
    let bladder_scores=[], bowel_scores=[], vagina_scores = [];

    // when a patient complete 21 questions

    if(this.state.answers.length === 21){
      this.setState({displayScore: true});

      // add scores to 3 different array
      for(let i=0; i<this.state.answers.length; i++){
        if(this.state.answers[i].name.includes("bladder")){
          bladder_scores.push(this.state.answers[i].score);
        }else if(this.state.answers[i].name.includes("bowel")){
          bowel_scores.push(this.state.answers[i].score);
        }else if(this.state.answers[i].name.includes("vagina")){
          vagina_scores.push(this.state.answers[i].score);
        }
      }
      console.log("bladder_scores = "+ bladder_scores);
      console.log("bowel_scores = "+ bowel_scores);
      console.log("vagina_scores = "+ vagina_scores);
      
      let subScore_bladder= 0; 
      let subScore_bowel= 0; 
      let subScore_vagina= 0; 

      // calculate 3 differnt types score
   
      subScore_bladder = this.calculateEachCategory( bladder_scores);
      console.log("subScore_bladder score = "+  subScore_bladder);

      subScore_bowel = this.calculateEachCategory(bowel_scores);
      console.log("subScore_bowel score = "+  subScore_bowel);

      subScore_vagina = this.calculateEachCategory(vagina_scores);
      console.log("subScore_vagina = "+  subScore_vagina);
     

      // add all 3 category final result to come up with the total score
      sumScores = (subScore_bladder + subScore_bowel + subScore_vagina).toFixed(2);
      this.setState({totalScore: sumScores});
      alert("Total Score is: "+ sumScores);
      console.log("Total Score is: "+ sumScores);
    }else{ // if a patient forgot to fill any raido buttons
      // this.setState({displayScore: false});
      alert("Please Answer Every Question in Survey");
    }
  };

  // calculate each category score
   calculateEachCategory= (category) =>{
     let value = 0;
     // get total score for specific catogory
     for(let i= 0; i< category.length; i++){
        value += category[i];
     }

     // use formula to get final value for each category
     let finalResult = value / 7 * (100 / 3);
     return finalResult; 
   }


  render() {

    let show;
    if(this.state.displayScore){
      show = <p style={{color: 'hotpink', fontSize:'30px',paddingTop:'10px', textAlign:'center'}}>Total Score: {this.state.totalScore} </p>
    }//else if(this.state.displayScore === false){
    //   show = <p style={{color: 'red', fontSize:'25px',paddingTop:'15px', textAlign:'center'}}> ***Please complete whole survey***</p>
    // }
    return (
      <div className="container">
        <div id="heading" className="col-xs-12 col-md-12 col-lg-10">
            <h1>Pelvic Floor Impact Questionnaire - PFIQ-7</h1>
            <h2>
                How do the following symptoms or conditions usually affect each of the three areas below?
            </h2>
            <div className="row">
              <div class="col-md-2">
                <label for="inputEmail4" class="form-label">First Name</label>
                <input type="text" class="form-control" id="inputEmail4"/>
              </div>
              <div class="col-md-2">
                <label for="inputPassword4" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="inputPassword4"/>
              </div>
           
             <div class="col-md-4">
                <label for="inputEmail4" class="form-label">Date</label>
                <input type="datetime-local" class="form-control" id="inputEmail4"/>
              </div>
              <div class="col-md-4">
                <label for="inputPassword4" class="form-label">Date of Birth</label>
                <input type="date" class="form-control" id="inputPassword4"/>
              </div>
            </div>
            {show}
        </div>
        
       
          <div  className="col-xs-12 col-md-12 col-lg-10" style={{textAlign:'center', margin:'auto auto', width:'90%'}} >
            <form onSubmit={this.handleFormSubmit} style={{boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.5)", backgroundColor: '#fff',
                                                    width:'100%',
                                                    margin: '0px auto',
                                                    padding: '15px 15px',
                                                    marginBottom:'15px',
                                                    borderRadius:'10px'}}>
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'5px',fontSize:'18px'}}><strong>1. Ability to do household chores (cooking, laundry, housecleaning)?</strong> </p>
                                
              <div className="table-responsive">                                      
              <table className="table table-bordered border-dark table-hover">
              <thead className="table-success">
                    <tr>
                      <th scope="col" className="text-nowrap"></th>
                      <th scope="col" className="text-nowrap">Not at all</th>
                      <th scope="col" className="text-nowrap">Somewhat</th>
                      <th scope="col" className="text-nowrap">Moderately</th>
                      <th scope="col" className="text-nowrap">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                              name="bladder_1" 
                              value="Not at all" 
                              onChange={this.handleOptionChange} 
                              className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bladder_1"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_1"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_1"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
              </div>


{/* question 2 table here */}

<p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}> <strong>2. Ability to do physical activities such as walking, swimming, or other exiercise?</strong></p>
<div className="table-responsive">   
              <table className="table table-bordered border-dark table-hover">
              <thead className="table-success">
                   <tr>
                      <th scope="col" className="text-nowrap"></th>
                      <th scope="col" className="text-nowrap">Not at all</th>
                      <th scope="col" className="text-nowrap">Somewhat</th>
                      <th scope="col" className="text-nowrap">Moderately</th>
                      <th scope="col" className="text-nowrap">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> <input type="radio" name="bladder_2" value="Not at all" onChange={this.handleOptionChange} className="form-check-input" /></td>
                      <td><input
                            type="radio"
                            name="bladder_2"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_2"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_2"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
              </div>

{/* question 3 table here */}
        <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>3. Entertainment activities such as going to a movie or concert?</strong> </p>
        <div className="table-responsive">                                      
        <table className="table table-bordered border-dark table-hover ">
        <thead className="table-success">
                <tr>
                  <th scope="col" className="text-nowrap"></th>
                  <th scope="col" className="text-nowrap">Not at all</th>
                  <th scope="col" className="text-nowrap">Somewhat</th>
                  <th scope="col" className="text-nowrap">Moderately</th>
                  <th scope="col" className="text-nowrap">Quite a bit</th>
                </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> <input type="radio" name="bladder_3" value="Not at all" onChange={this.handleOptionChange} className="form-check-input" /></td>
                      <td><input
                            type="radio"
                            name="bladder_3"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_3"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_3"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
              </div>

                {/* question 4 table here */}
                <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>4. Ability to travel by car or bus for a distance greater than 30 minutes away from home?</strong> </p>
                <div className="table-responsive">                                      
                  <table className="table table-bordered border-dark table-hover ">
                <thead className="table-success">
                    <tr>
                      <th scope="col" className="text-nowrap"></th>
                      <th scope="col" className="text-nowrap">Not at all</th>
                      <th scope="col" className="text-nowrap">Somewhat</th>
                      <th scope="col" className="text-nowrap">Moderately</th>
                      <th scope="col" className="text-nowrap">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="bladder_4" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bladder_4"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_4"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_4"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
              </div>

              {/* question 5 table here */}
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>5. Participating in social activities outside your home?</strong></p>
              <div className="table-responsive">
              <table className="table table-bordered border-dark table-hover">
              <thead className="table-success">
                   <tr>
                      <th scope="col" className="text-nowrap"></th>
                      <th scope="col" className="text-nowrap">Not at all</th>
                      <th scope="col" className="text-nowrap">Somewhat</th>
                      <th scope="col" className="text-nowrap">Moderately</th>
                      <th scope="col" className="text-nowrap">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="bladder_5" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bladder_5"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_5"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_5"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
                </div>

                {/* question 6 table here */}
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}> <strong>6. Emotional health(nervousness, depression, etc)</strong></p>
              <div className="table-responsive">   
              <table className="table table-bordered border-dark table-hover">
              <thead className="table-success">
                    <tr>
                      <th scope="col" className="text-nowrap"></th>
                      <th scope="col" className="text-nowrap">Not at all</th>
                      <th scope="col" className="text-nowrap">Somewhat</th>
                      <th scope="col" className="text-nowrap">Moderately</th>
                      <th scope="col" className="text-nowrap">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="bladder_6" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bladder_6"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_6"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_6"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
              </div>

                {/* question 7 table here */}
              <p style={{textAlign:'left', marginBottom:'15px', marginTop:'20px', fontSize:'18px'}}><strong>7. Feeling frustrated?</strong></p>
              <div className="table-responsive">   
              <table className="table table-bordered border-dark table-hover">
              <thead className="table-success">
                    <tr>
                      <th scope="col" className="text-nowrap"></th>
                      <th scope="col" className="text-nowrap">Not at all</th>
                      <th scope="col" className="text-nowrap">Somewhat</th>
                      <th scope="col" className="text-nowrap">Moderately</th>
                      <th scope="col" className="text-nowrap">Quite a bit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bladder or Urine</th>
                      <td> 
                        <input type="radio" 
                          name="bladder_7" 
                          value="Not at all" 
                          onChange={this.handleOptionChange} 
                          className="form-check-input" />
                      </td>
                      <td><input
                            type="radio"
                            name="bladder_7"
                            value="Somewhat"
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          /></td>
                      <td> 
                        <input
                            type="radio"
                            name="bladder_7"
                            value="Moderately"
                            
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                           />
                      </td>
                      <td>
                          <input
                            type="radio"
                            name="bladder_7"
                            value="Quite a bit"
                            className="form-check-input"
                            onChange={this.handleOptionChange}
                          />
                      </td>
                    </tr>

                    <tr>

                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Bowel or Rectum</th>
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
                      <th scope="row" className="text-nowrap" style={{textAlign:'left', marginLeft:'10px', width:'15%'}}>Vagina</th>
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
                            name="vagina_7"
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
              </div>

                {/* save button here */}
              <div className="form-group" style={{textAlign:'center', marginBottom:'10px', marginLeft:'10px'}}>
                <button className="btn" style={{width:'100px', marginTop:'10px',backgroundColor:'#d1e7dd'}} type="submit">
                 <strong>Save</strong> 
                </button>
                
              </div>
              
            </form>
          </div>
      </div>
    );
  }
}

export default App;