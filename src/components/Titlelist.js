import React from "react"
import Title from "./Titles"

const Titlelist = ({titles}) => {
    
    const titleNodes = titles.map((title) => {
        return (
            <Title ID = {title.id}  URL= {title.url} name = {title.name} >
        );
    })



return(
    <>
    {titleNodes}
    </>
    )
};

export default Titlelist;
