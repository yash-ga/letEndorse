import { useState } from "react"

export const Form=()=>
{
    const [name,setName]=useState("")
    const [idea,setIdea]=useState("")
    const [age,setAge]=useState("")
    const [product,setProduct]=useState("")
    const [offer,setOffer]=useState("")
    const [secondary,setSecondary]=useState("")
    const [years,setYears]=useState("")
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
            <h4>primary products/services offered</h4>
            <input type="text"  onChange={(e)=>{setProduct(e.target.value)}}/>
            <h5>offered to</h5>
            <select name="" id="" onChange={(e)=>{setOffer(e.target.value)}}>
                <option value="wholesaler">wholesaler</option>
                <option value="distributors">distributors</option>
                <option value="rilerseta">retailer</option>
                <option value="consumer">consumer</option>
            </select>
            <h5>secondary products/services/offered</h5>
            <input type="text" placeholder="secondary services offered" onChange={(e)=>{setSecondary(e.target.value)}} />
            <h5>years of exp</h5>
            <input type="text" placeholder="year of exp" onChange={(e)=>{setYears(e.target.value)}} name="" id="" />
             
            </article>
            <article className="right">
            <p>{name}-is looking for xyz</p>
            <p>{idea}</p>
            <p>{age}</p>
            <p>{product}</p>
            <p>{offer}</p>
            <p>{secondary}</p>
            <p>{years}</p>

            </article>
        </div>
            

     
    )
}