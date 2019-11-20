import React from 'react';
import './SpecialCharactersCreator.scss';
import { generateSpecialCharactersDictionary } from './SpecialCharactersCreatorMethods';

class SpecialCharactersCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            originalCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEGFHIJKLMNOPQRSTUVWXYZ',
            specialCharacters: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐆𝐅𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
            toggleButtonText: "CREATE SPECIAL CHARACTERS",
            createSpecialCharactersIsOn: false,
            generatedDictionaryTextAreaIsShowing: false,
            dictString: '', 
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updateOriginalCharacters = (event) => {
        let originalCharacters = event.target.value
        let specialCharacters = this.state.specialCharacters[4]
        this.setState({originalCharacters, specialCharacters});
    }

    updateSpecialCharacters = (event) => {
        let specialCharacters = event.target.value
        this.setState({specialCharacters});
    }
    
    copyToClipboard = () => {
        alert('functionality is not set up yet!')
        //refer to this tutorial
        //https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    }

    generateDictionary = () => {
        console.log('generating dictionary!')
        var dict = generateSpecialCharactersDictionary(this.state.originalCharacters, this.state.specialCharacters)
        var dictString = JSON.stringify(dict)
        // specialCharacters = JSON.stringify(specialCharacters, undefined, 4);
        let generatedDictionaryTextAreaIsShowing = true;
        this.setState({dictString, generatedDictionaryTextAreaIsShowing})
    }

    closeDictionaryTextArea = () => {
        this.setState({
            generatedDictionaryTextAreaIsShowing: false,
            dictString: '', 
        })
    }

    toggle = () => {
        let createSpecialCharactersIsOn = !this.state.createSpecialCharactersIsOn
        let toggleButtonText = (createSpecialCharactersIsOn === true) ? "CANCEL" : "CREATE SPECIAL CHARACTERS"
        this.setState({
            createSpecialCharactersIsOn,
            toggleButtonText
        })
    }

    handleSubmit(event) {
        let value = this.state.value
        this.setState({value})
        event.preventDefault();
    }

    render(){
        return (
            <form className="spchar" onSubmit={this.handleSubmit}>

                <div>
                    <button 
                        className="spchar--button" 
                        onClick={() => this.toggle() }>
                            {this.state.toggleButtonText}
                    </button>
                </div>

                {
                    this.state.createSpecialCharactersIsOn &&
                    <React.Fragment>
                        <textarea 
                            className="spchar--input"
                            value={this.state.originalCharacters} 
                            onChange={this.updateOriginalCharacters}
                        />

                        <button 
                            className="spchar--button" 
                            disabled
                            onClick={() => this.copyToClipboard()}
                        >
                            ↑ COPY TO CLIPBOARD (not set up yet)
                        </button>
                    
                        <textarea 
                            className="spchar--input"
                            placeholder="Special Characters..."
                            value={this.state.specialCharacters} 
                            onChange={this.updateSpecialCharacters}
                        />

                        <button 
                            className="spchar--button" 
                            onClick={() => this.generateDictionary()}
                        >
                            GENERATE DICTIONARY
                        </button>

                        {
                            this.state.generatedDictionaryTextAreaIsShowing &&
                            <React.Fragment>
                                <textarea 
                                    className="spchar--input"
                                    defaultValue={this.state.dictString} 
                                    // onChange={this.updateSpecialCharacters}
                                />
                                <button 
                                    className="spchar--button" 
                                    onClick={() => this.closeDictionaryTextArea()}
                                >
                                    CLOSE
                                </button>
                                <button 
                                    className="spchar--button" 
                                    disabled
                                    onClick={() => this.copyToClipboard()}
                                >
                                    ↑ COPY TO CLIPBOARD (not set up yet)
                                </button>
                            </React.Fragment>
                        }
                    </React.Fragment>
                }
                
            </form>
        );
    }
}

export default SpecialCharactersCreator