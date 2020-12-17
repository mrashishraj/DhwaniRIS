import React from "react"


export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    
    render(){
        const {cardData,handleDelete} = this.props
        return(
            <>
            {cardData && cardData.map(item=>
                <div style={{margin:"15px"}} key={item.id}>
                    <h2 style={{margin:"0"}}>{item.value}</h2>
                    <button style={{padding:"5px"}} onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
                )}
            </>
        )
    }
}