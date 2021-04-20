import React, { Fragment } from "react"
import Title from "./Titles"

const Titlelist = ({titles}) => {
    
    const titleList = titles.map((title) => {
        return (
            <Title key = {title.id}  URL= {title.url} name = {title.name} />
        );
    })



return (
    <>
    <div>
    {titleList} 
    </div>
    </>
)
}

export default Titlelist;
