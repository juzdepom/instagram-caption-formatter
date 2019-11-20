import React from 'react';
import './InstagramCaptionFormatter.scss';
import { 
    AddSpecialCharactersBetweenParagraphs,
    AddSpecialCharacters,
 } from './InstagramCaptionFormatterMethods'

class InstagramCaptionFormatter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'test BBthis should be boldBB IIthis should be italicII blaballaballabal \n \n BIthis should be bold italicBI blabal \n and TYPthis should be typewriterTYP bla',
            charCount: 0,
            bold: "BB",
            italic: "II",
            bolditalic: "BI",
            typewriter: "TYP",
        };
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        let value = event.target.value
        let charCount = value.length
        this.setState({value, charCount});
    }

    convert = () => {
        let value = this.state.value
        //instagram ignores paragraphs unless you put a special character
        var newValue = AddSpecialCharactersBetweenParagraphs(value)
        //update the charazcter count
        let charCount = newValue.length
        //replace with special characters
        newValue = AddSpecialCharacters(newValue, this.state.bold, "bold")
        newValue = AddSpecialCharacters(newValue, this.state.italic, "italic")
        newValue = AddSpecialCharacters(newValue, this.state.bolditalic, "bolditalic")
        newValue = AddSpecialCharacters(newValue, this.state.typewriter, "typewriter")
        // console.log(newValue)
        this.setState({
            value: newValue,
            charCount, 
        })
        // alert('A name was submitted: ' + newValue);
    }

    render(){
        return (
            <div className="form">

                <div className="form--title">Instagram Caption Formatter</div>
                
                <div className="form--specialcharacters">
                    <span>𝐛𝐨𝐥𝐝 = {this.state.bold}</span>
                    {/* <input className="form--specialcharacters--input" type="text" defaultValue={this.state.bold}/> */}
                    <span>𝘪𝘵𝘢𝘭𝘪𝘤 = {this.state.italic}</span>
                    {/* <input className="form--specialcharacters--input" type="text" defaultValue={this.state.italic}/> */}
                    <span>𝙗𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘 = {this.state.bolditalic}</span>
                    {/* <input className="form--specialcharacters--input" type="text" defaultValue={this.state.bolditalic}/> */}
                    <span>𝚝𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛 = {this.state.typewriter}</span>
                    {/* <input className="form--specialcharacters--input" type="text" defaultValue={this.state.typewriter}/> */}
                </div>

                <textarea 
                    className="form--input"
                    maxLength="2200"
                    value={this.state.value} 
                    onChange={this.handleChange}
                />
                
                <div className="form--charcount">
                    {this.state.charCount}/2200
                </div>

                <div>
                    <button className="form--submit" 
                        onClick={() => this.convert()}>
                            CONVERT
                    </button>
                </div>

                <div className="form--links">
                    <a href="https://lingojam.com/FancyTextGenerator" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://lingojam.com/FancyTextGenerator" target="_blank" rel="noopener noreferrer">Fancy Text Generator</a>
                </div>

            </div>
        );
    }
}

export default InstagramCaptionFormatter