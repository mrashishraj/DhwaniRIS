import React from "react"


export default class InputBoxes extends React.Component{
    constructor(props){
        super(props)
        this.values = new Array(this.props.length).fill("")
        this.element = []
    }

    handleChange=(e,i)=>{        
        if(this.element[i].value.length===4 && this.element[i+1]){
            this.element[i+1].focus()
        }
        else if(this.element[i].value.length===0 && this.element[i-1]){
            this.element[i-1].focus()
        }
        else if(i>0 && this.element[i-1].value.length!==4){
            this.element[i-1].focus()
        }
        this.values[i]=e.target.value
        this.props.handleChange(this.values.join(""))
    }

    componentDidMount(){
        this.element[0].focus()
    }

    handleKey=(e,i)=>{
        if(e.keyCode==8 && this.element[i].value.length===0 && this.element[i-1]){
            this.element[i-1].focus()
        }
        // console.log(e.keyCode,this.element[i].value.length)
    }

    handlePaste=(e,i)=>{
        var num = e.clipboardData.getData("text").split('')        
        var n = 4
        var splitedValue = []
        var count =0
        for(var k=0;k<n;k++){
            var arr = ""
        for(var j=0;j<n;j++){
            if(num[count] && count<17){
                arr+=(num[count])
            }
            count++
        }
        splitedValue.push(arr)
        arr = []
        }
        console.log(splitedValue)
        this.element.forEach((item,i)=>{
            if(splitedValue[i]){
                item.value = splitedValue[i]
                this.values[i]=splitedValue[i]
                this.element[i].focus()
            }

        })
        this.props.handleChange(this.values.join(""))
        console.log(num,n,i)
    }

    render(){
        const InputLength = new Array(this.props.length).fill("")
        return(
            <>
                {InputLength.map((item,i)=>
                <input key={i} 
                onPaste={(e,i)=>this.handlePaste(e,i)}
                onChange={(e)=>this.handleChange(e,i)}
                ref={(element)=>this.element[i]=element} 
                onKeyUp={(e)=>this.handleKey(e,i)}
                maxLength="4"
                className="inputBox" 
                type="text"/>)}
            </>
           
        )
    }
}