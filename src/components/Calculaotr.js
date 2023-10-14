import {useState} from 'react';

export function Calculator(){

    const[result, setResult] = useState(' ');
    const[actualresult, setActualresult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    } 

    const backspace = () => {
        setResult(result.slice(0, result.length-1));
    }

    const calculate = () => {
        try{
            setActualresult(eval(result));
        } catch(err){
            setActualresult("Err");
        }
    }

    return(
        <div>
            <table style={{
                borderCollapse:'collapse',
                backgroundColor:"#070b26",
                borderRadius:"15px"
                }}>
                <tr style={{backgroundColor:"#172d67"}}>
                    <td className='top' colSpan={"2"}>
                        <input type="text" className='input' readOnly value={result} /> <br/>
                        <input type="text" className='input' readOnly value={actualresult} />
                    </td>
                </tr>
                <tr>
                    <td className='bottom'>
                        <div>
                            <button className='type1' onClick={handleClick} value="7">7</button>
                            <button className='type1' onClick={handleClick} value="8">8</button>
                            <button className='type1' onClick={handleClick} value="9">9</button>
                        </div>
                        <div>
                            <button className='type1' onClick={handleClick} value="4">4</button>
                            <button className='type1' onClick={handleClick} value="5">5</button>
                            <button className='type1' onClick={handleClick} value="6">6</button>
                        </div>
                        <div>
                            <button className='type1' onClick={handleClick} value="1">1</button>
                            <button className='type1' onClick={handleClick} value="2">2</button>
                            <button className='type1' onClick={handleClick} value="3">3</button>
                        </div>
                        <div>
                            <button className='type1' onClick={handleClick} value="0">0</button>
                            <button className='type1' onClick={handleClick} value=".">.</button>
                            <button className='type1' onClick={calculate}>=</button>
                        </div>
                    </td>
                    <td>
                        <div>
                            <button className='type2' id='backspace' onClick={backspace}>Clr</button>
                        </div>
                        <div>
                            <button className='type2' onClick={handleClick} value="/">&divide;</button>
                        </div>
                        <div>
                            <button className='type2' onClick={handleClick} value="*">&times;</button>
                        </div>
                        <div>
                            <button className='type2' onClick={handleClick} value="-">&ndash;</button>
                        </div>
                        <div>
                            <button className='type2' onClick={handleClick} value="+">+</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )

}