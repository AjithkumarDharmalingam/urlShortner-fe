import React from 'react'
import axios from "axios";
import { url } from '../App';
import {useState,useEffect} from "react";
import Header from './Header'

function Home() {
    let [longUrl,setlongUrl]=useState("");
    let [res,setRes]=useState("");
    const [allUrl, setAllurl] = useState([]);
    let [ setActualUrl] = useState('');
    
 
 const handleEvent =async(event)=>{
    event.preventDefault()
    try {
        let response =  await axios.post(`${url}/create`,{
            longUrl:longUrl,
           
        })
        console.log(response)
        if(response.status === 201){
            setRes(response.data.message);
        } 
        } catch (error) {
           console.log(error)
        }
     }

useEffect(()=>{
    getalltUrl();
},[])

const getalltUrl = async()=>{
    try {
        let response = await axios.get(`${url}/home`)
        // console.log(response)
        if(response.status === 200){
            setAllurl(response.data.allUrl)
        }
        console.log(response.data.allUrl)
    } catch (error) {
        console.log(error)
    }
}

const actualLink = async(name)=>{
    try {
        let res = await axios.get(`${url}/${name}`)
        // console.log(res)
        if(res.status === 200){
            setActualUrl(res.data.longUrl)
        }
    } catch (error) {
        console.log(error)
    }
}


  return <>
  <Header/>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>URL Shortener</h1>
            </div>
        </div>
        <form  onClick={(event)=>handleEvent(event)} action='POST' >
            <div className="row">
                <div className="input-group mb-3">
                    <input type="text" name="longurl" className="form-control" placeholder="Paste your long URL"
                        aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e)=>setlongUrl(e.target.value)}/>
                    <div className="input-group-append">
                        <input type="submit" className="btn btn-outline-secondary" onClick={getalltUrl} value="Submit"/>
                    </div>
                    <div style={{color:"green"}}>{res}</div>
                </div>
            </div>
            </form>
            
       <div>
        <h3>Url Shortner</h3>
            <table className="table table-hover table-bordered border-primary">
                <thead className="table" id="thead">
                    <tr>
                        <th>longUrl</th>
                        <th>shortUrl</th>
                        <th>clickCount</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        allUrl.map((e,index)=>{
                            return <>
                                <tr key={index}>
                                    <td><a href={e.longUrl} target="_blank" rel="noreferrer">{e.longUrl}</a></td>
                                    <td><a href={e.longUrl} target="_blank"  onClick={()=>{actualLink(e.shortUrl)}} rel="noreferrer">{e.shortUrl}</a></td>
                                    <td>{e.clickCount}</td>
                                    
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </div>
        
    </div>
  </>
}

export default Home