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
    const [training,setTraining]=useState("")
    const [area,setArea]=useState("")
    const [locality,setLocality]=useState("")
    const [ownership,SetOwnership]=useState("")
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
             <h5>skill training</h5>
             <select name="" id="" onChange={(e)=>{setTraining(e.target.value)}}>
                 <option value="no formal skill training">no formal skill training</option>
                 <option value="has formal sill training and certificate">has formal sill training and certificate</option>
             </select>
             <h5>name of area</h5>
             <input type="text" placeholder="name of area"
              onChange={(e)=>{setArea(e.target.value)}} name="" id="" />
              <h5>Locality of Business</h5>
              <select name="" id="" onChange={(e)=>{setLocality(e.target.value)}}>
                  <option value="urban">urban</option>
                  <option value="rural">rural</option>
              </select>
              <h5>Ownership of Infrastructure</h5>
              <select name="" id="" onChange={(e)=>{SetOwnership(e.target.value)}}>
                  <option value="rented">rented</option>
                  <option value="leased">leased</option>
              </select>
            </article>
            <article className="right">
            <p>{name}-is looking for xyz</p>
            <p>{idea}</p>
            <p>{age}</p>
            <p>{product}</p>
            <p>{offer}</p>
            <p>{secondary}</p>
            <p>{years}</p>
            <p>{training}</p>
            <p>{area}</p>
            <p>{locality}</p>
            <p>{ownership}</p>
            </article>
        </div>
            

     
    )
}