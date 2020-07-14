import React, { Component } from 'react';
// import BackgroundVideo from '../Components/BackgroundVideo';
// import NavBar from '../Components/NavBar';
import { 
    Container, 
    Row,
    Col,
    Image
} from 'react-bootstrap';

const image = require('../Assets/Image/person.png')

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 512 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    return(
      <div style={{
        display: 'flex',
        height:this.state.height,
        width:this.state.width,
        alignItems:'center',
        justifyContent:'center',
      }}>
        <Image src={image} roundedCircle />
      </div>
    )
  }
}


export default Home;
