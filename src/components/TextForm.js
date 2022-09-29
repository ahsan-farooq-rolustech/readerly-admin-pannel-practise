import React, { useState } from 'react'
import UploadAudio from './UploadAudio'

const TextForm = (props) =>
{
    const [text, setText] = useState('Enter text here')
    const [sentance, setSentance] = useState([{ text:"", length:0 }])

    const handleOnChange = (event) =>
    {
        setText(event.target.value)
        let text = event.target.value


    }
    const addAudio = () =>
    {
        setSentance([{ text: "", length: 0 }])
        let sentencesList = text?.split(/[.,!,?]/)
        let sentanceObjList = []
        for (let i = 0; i < sentencesList.length; i++) {
            if (!(sentencesList[i] === "" || sentencesList[i] === null)) {
                sentanceObjList = [...sentanceObjList, { text: sentencesList[i], length: sentencesList[i].length }]
            }
        }
        setSentance(sentanceObjList)
    }

    return (

        <div className='container' >
            <h3 className='my-3'>Enter the Text Here</h3>
            <div >
                <textarea className="form-control" value={ text } onChange={ handleOnChange } id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-3' onClick={ addAudio }>Add Audio</button>

            <div className='row'>
                { sentance.map((element, index) =>(
                    <div key={ index } className='container'>
                        <h1 className='text-black'>{ element.text }</h1>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TextForm