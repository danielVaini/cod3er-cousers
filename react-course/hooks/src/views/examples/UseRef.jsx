import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (s1, s2) => {
    const array1 = []
    const array2 = []
  
    for(let i = 0; i < s1.length; i++){
        if(s1.length > 0){
            array1.push(s1[i])
        }
        
        if (s2.length > 0){
            array2.push(s2[i]) 
        }
    }
    

    let string = ""
    let a = ""
    let b = ""
    for(let i = 0; i < array1.length; i++) {
        if(array1.length > 0){
            a = array1[i]
        }
        if (array2.length > 0){
            b = array2[i]
        }
        string = string + a + (b || "")
        console.log(string)
        console.log(a)
        console.log(b)

    }
   // return string

   return [...s1].map((e, i) => {
       return `${e}${s2[i] || ""}`;
   }).join("")
}

const UseRef = (props) => {

    const [value1, setValue1] = useState("") // Ex 01
    const [value2, setValue2] = useState("") // Ex 02

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    

    useEffect(() => {
        count.current = count.current + 1;
        myInput2.current.focus()
    }, [value1])
    

    useEffect(() => {
        count.current++;
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercice #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercice #02" />
            <div className="center">
                <input type="text" className="input" 
                    ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)}
                  
                    />
            </div>
        </div>
    )
}

export default UseRef
