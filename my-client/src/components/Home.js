import Container from 'react-bootstrap/Container';
import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import logo from '../images/hi.jpg';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


class Home extends Component {
    state = {
        value:"SAIRAJ GOUD",
        Body:"Hi Hello Iam SAIRAJ from UAAlbany"}
/*         isEdit : false }
    ChangeEdit = () => { this.setState({isEdit: !this.state.isEdit})} */
    render() {
    return(
        <>
        <div class="border">
        <Container>
            <Row>
                <Col xs={4}>
                <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo} />
    </Card></Col>
                <Col>
                <Form className="form">
                {/* <form>
                <div style={{ height: '300px'}}>
                    <input type="text" defaultValue={this.state.value}/>
                </div> 
                </form> */}
               {/*  <div onClick={this.ChangeEdit}><b>{this.state.value}</b></div> */}
                   <FloatingLabel controlId="floatingTextarea" className='form'>
                  {/*  <div>
                    <input type="text" defaultValue={this.state.value}/>
                    </div> */}
         <Form.Control as="textarea" className="form mb-1" 
          rows = {1}
          defaultValue={this.state.value}
          style={{borderColor:'white'}}
        />
      </FloatingLabel>  
      <FloatingLabel controlId="floatingTextarea2">
      <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '300px',borderColor:'white'}}
          defaultValue={this.state.Body}
        />
      </FloatingLabel>
      </Form>
                </Col>
            </Row>
            </Container>
            </div>
        </>
    );
}
}
export default Home;