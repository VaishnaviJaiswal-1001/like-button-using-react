import {useState} from "react";

export default function LikeButton(){
    let [isliked,SetIsliked]=useState(false);
    let [count,setcount]=useState(0);
    let toggle=()=>{
        SetIsliked((prevValue)=>{
            return !prevValue;
        })
        setcount((prevValue)=>{
            return prevValue+1
        })
    }
    let likestyle={color:'red'}
    return (
        <div>
            <h1>like count ={count}</h1>
            <p onClick={toggle}>
                {
                    isliked?<i className="fa-solid fa-heart" style={likestyle}></i>:<i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    )
}