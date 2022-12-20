import React from "react"
import { useState } from "react"
import "./style.css"
export default function Calculator() {

    const [tabs, setTabs] = useState([
        {
            name: "AC",
            utility: "0"    
        },
        {
            name: "+/-",
            utility: "1"    
        },
        {
            name: "%",
            utility: "2"    
        },
        {
            name: "/",
            utility: "3"    
        },
        {
            name: "7",
            utility: "4"    
        },
        {
            name: "8",
            utility: "5"    
        },
        {
            name: "9",
            utility: "6"    
        },
        {
            name: "X",
            utility: "7"    
        },
        {
            name: "4",
            utility: "8"    
        },
        {
            name: "5",
            utility: "9"    
        },
        {
            name: "6",
            utility: "10"
        },
        {
            name: "-",
            utility: "11"    
        },
        {
            name: "1",
            utility: "12"    
        },
        {
            name: "2",
            utility: "13"    
        },
        {
            name: "3",
            utility: "14"    
        },
        {
            name: "+",
            utility: "15"    
        },
        {
            name: "0",
            utility: "16"    
        },
        {
            name: ".",
            utility: "17"    
        },
        {
            name: "=",
            utility: "18"    
        }
    ])


    const [index, setIndex] = useState(0)

    const findName = (id: number) =>  {
        setIndex(id)
        console.log(id,'=',tabs[index].name)
        if(tabs[index].utility === "18") {
            console.log("Finish!")
        }
    }

    

    return (
        <>
        {tabs.map((tabs,i) => (
            <button key={i} onClick={() => findName(i)}>
                {tabs.name}
            </button>
        ))}
        </>
    )
}

/*
           <table style={{width: 500}}>

                <tbody>
                    <th onClick={() => console.log(index)} key={0}>AC</th>
                    <th onClick={() => console.log(index)} key={1}>+/-</th>
                    <th onClick={() => console.log(index)} key={2}>%</th>
                    <th onClick={() => console.log(index)} key={3}>/</th>
                </tbody>
                <tbody>
                    <th onClick={() => console.log(index)} key={4}>7</th>
                    <th onClick={() => console.log(index)} key={5}>8</th>
                    <th onClick={() => console.log(index)} key={6}>9</th>
                    <th onClick={() => console.log(index)} key={7}>X</th>
                </tbody>

                <tbody>
                    <th onClick={() => console.log(index)} key={8}>4</th>
                    <th onClick={() => console.log(index)} key={9}>5</th>
                    <th onClick={() => console.log(index)} key={10}>6</th>
                    <th onClick={() => console.log(index)} key={11}>-</th>
                </tbody>

                <tbody>
                    <th onClick={() => console.log(index)} key={12}>1</th>
                    <th onClick={() => console.log(index)} key={13}>2</th>
                    <th onClick={() => console.log(index)} key={14}>3</th>
                    <th onClick={() => console.log(index)} key={15}>+</th>
                </tbody>

                <tbody>
                    <th onClick={() => console.log(index)} key={16} colSpan='2'>0</th>
                    <th onClick={() => console.log(index)} key={17}>.</th>
                    <th onClick={() => console.log(index)} key={18}>=</th>
                </tbody>
            </table>

*/