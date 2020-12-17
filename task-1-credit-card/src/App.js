import './App.css';
import React from "react"
import InputBoxes from "./Component/InputBoxes"
import {v4 as uuid} from "uuid"
import Card from './Component/Card';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:"",
      cardData:[]
    }
  }

  handleChange =(e)=>{
    this.setState({
      value:e
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    const {value,cardData} = this.state
    let currentValue = {
      id:uuid(),
      value:value
    }
    this.setState({
      cardData:[...cardData,currentValue]
    })
  }

  handleDelete=(id)=>{
    const {cardData} = this.state
    console.log(id)
  }

  render(){
    const {value,cardData} = this.state

    return (
      <div className="App">
      <h1>Credit Card Input Box</h1>
      <form onSubmit={this.handleSubmit}>
      <InputBoxes length={4} handleChange={this.handleChange}/> 
      <input type="submit" value="submit" />
      </form>    
      <div><Card cardData={cardData} handleDelete={this.handleDelete}/></div> 
    </div>
  )
}
}

export default App;
