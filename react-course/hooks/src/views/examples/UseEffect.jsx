import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(number) {
    const n = parseInt(number)
    if (n < 0) return -1 
    if (n === 0) return 1 
    return calcFactorial(n - 1) * n
}

function evenOrOdd(number) {
    const n = parseInt(number)
    if(n % 2 === 0){
        return true
    }else {
        return false
    }
}

const UseEffect = (props) => {

    // Ex #01

    const [number, setNumber] = useState(0);
    const [factorial, setFactorial] = useState(1)
    
    useEffect(function() {
        setFactorial(calcFactorial(number))
    }, [number])
    
    useEffect(() => {
        if(factorial > 1000000) {
            document.title = "Hello Daniel"
        } else {
            
            document.title = "Hello"
        }
    }, [factorial])
    
    // Ex #02
    const [verify, setVerify] = useState()
    useEffect(() => {
        setVerify(evenOrOdd(number))
    }, [factorial])

    // // teacher
    //     const [status, setStatus] = useState("Par")
    //     useEffect(() => {
    //         setStatus(number % 2 === 0 ? "Even" : "Odd")
    //     }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercice #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? "Is not exist a factorial to negative number" : factorial}</span>
                </div>
                <input className="input" type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercice #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{verify ? "Even" : "Odd"}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
