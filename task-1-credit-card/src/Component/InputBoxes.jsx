import React from "react"


export default class InputBoxes extends React.Component{
    constructor(props){
        super(props)
        this.values = new Array(this.props.length).fill("")
        this.element = []
    }

    handleChange=(e,i)=>{        
        this.values[i]=e.target.value
        this.props.handleChange(this.values.join(""))
        if(this.element[i].value.length===4 && this.element[i+1]){
            this.element[i+1].focus()
        }
        if(this.element[i].value.length===0 && this.element[i-1]){
            this.element[i-1].focus()
        }
    }

    componentDidMount(){
        this.element[0].focus()
    }

    render(){
        const InputLength = new Array(this.props.length).fill("")
        return(
            <>
                {InputLength.map((item,i)=>
                <input key={i} 
                onPaste={this.handlePaste}
                onChange={(e)=>this.handleChange(e,i)}
                ref={(element)=>this.element[i]=element} 
                maxLength="4"
                className="inputBox" 
                type="text" />)}
            </>
           
        )
    }
}