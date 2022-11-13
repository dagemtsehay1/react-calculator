import { useState } from "react";

function Card () {
    const keys = [
        [1,2,3,"DEL"],
        [4,5,6,"C"],
        [7,8,9,"/"],
        [".",0,"x","-"],
        ["+","="]
    ];
    const [sign, setSign] = useState("");
    const [sum, setSum] = useState(null);
    const [num, setNum] = useState("");

    const handleClick = (e)=>{
        if(e == "+"){
            if(sum == null){
                setSum(num);
            }
            
            else{
                setSum(parseFloat(sum) + parseFloat(num));
            }
            setSign("+")
            setNum("");
        }
        else if(e == "-"){
            if(sum == null){
                setSum(num);
            }
            
            else{
                setSum(parseFloat(sum) - parseFloat(num));
            }
            setSign("-")
            setNum("");
        }

        else if(e == "x"){
            if(sum == null){
                setSum(num);
            }
            
            else{
                setSum(parseFloat(sum) * parseFloat(num));
            }
            setSign("x")
            setNum("");
        }

        else if(e == "/"){
            if(sum == null){
                setSum(num);
            }
            
            else{
                setSum(parseFloat(sum) / parseFloat(num));
            }
            setSign("/")
            setNum("");
        }

        else if(e == "="){
            if(sign == "-")
            setSum(parseFloat(sum) - parseFloat(num));
            else if(sign == "/")
            setSum(parseFloat(sum) / parseFloat(num));
            else if(sign == "+")
            setSum(parseFloat(sum) + parseFloat(num));
            else if(sign == "x")
            setSum(parseFloat(sum) * parseFloat(num));
            setSign("")
            setNum("");
        }

        else if( e == "DEL"){
            setNum(num.substring(0, num.length-1))
        }

        else if(e == "C"){
            setNum("");
            setSign("");
            setSum(null);
        }

        else{
            setNum(num + e);
        }
    }
    return <div className="card">
        <div className="txtInput">
            <h4>{sum != null && sum}</h4>
            <p>{sign}</p>
            <h4>{num}</h4>

        </div>

        <div className="btns">
        {keys.map(e=>{
            return <div>
                {e.map(k=>{
                    return <p className="btn" onClick={e=>handleClick(k)}>{k}</p>
                })}
            </div>
        })}
        </div>
    </div>
}

export default Card;