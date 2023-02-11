import Container from 'react-bootstrap/Container';
import React from 'react';
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: 0
        };
    }
        mySubmitHandler = () =>{
            Axios.get(`http://localhost:9000/add/${this.state.firstNumber}/and/${this.state.secondNumber}`).then((response)=>{
               this.setState({result: response.data.Addition}); 
               console.log(response.data.Addition);
        });
    }
    render() {
        return (
            <div>
                <div className="border">
                    <form >
                    <Container>
                        <div className="form-group ">
                        <Row>
                            <Col xs={3}>
                         <label className='form-group'>Enter First Number</label> </Col>
                         <Col>
                            <input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={(e)=>this.setState({firstNumber:e.target.value})}
                                style={{ width: '20rem' }} />
                                </Col>
                               
                           </Row>  
                           
                        </div>
                        <div className="form-group mt-3 mb-3">
                            <Row>
                            <Col xs={3}>
                            <label className='form-group'>{'  '}Enter Second Number</label>
                            </Col>
                            <Col>
                            <input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={(e)=>this.setState({secondNumber:e.target.value})}
                                style={{ width: '20rem' }} />
                               </Col>
                               </Row>
                        </div>
                        </Container>
                    </form>
                    <div className='Submit' >
                        <button type="submit"
                         className="btn btn-primary mb-3" onClick={this.mySubmitHandler}>Submit</button>

                        </div>
                </div>
               <div className="rows-1 mt-3 mb-1">
                    <div className="col"><h5>Your Addition Result (from server) is : {this.state.result} </h5>
                    </div>
                </div>
                <div className="rows-2">
                    <div className="col">
                        {/*Not the best way to do it, but works for small compute operations*/}
                        <h5>Your Addition Result (from ReactJS) is : {parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)} </h5>
                    </div>
                </div>
            </div>
        );
    }
}



export default Add