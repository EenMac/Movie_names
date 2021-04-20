import React from "react"

const Title = ({name, URL}) => {


    return(
    
        <a href = {URL} > 
        {name} 
        </a>
    )
}

export default Title;