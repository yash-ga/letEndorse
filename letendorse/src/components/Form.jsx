import { useState } from "react"

export const Form=()=>
{
    const [name,setName]=useState("")
    const [idea,setIdea]=useState("")
    const [age,setAge]=useState("")
    const getName=(e)=>{
        setName(e.target.value)
    }
    return(
        <div id="cont">
            <article className="left">
            <h1>Name</h1>
            <input type="text" placeholder="type your name" onChange={getName} />
             <h2>Stage of business</h2>
            <select name="" id="#" 
            onChange={(e)=>{setIdea(e.target.value)}}>
                <option value="startup">startup</option>
                <option value="scale">scale</option>
            </select>
            <h3>age of est</h3>
            <input type="text" id="age" onChange={(e)=>{setAge(e.target.value)}} />

            </article>
            <article className="right">
            <p>{name}-is looking for xyz</p>
            <p>{idea}</p>
            <p>{age}</p>

            </article>
        </div>
            

     
    )
}