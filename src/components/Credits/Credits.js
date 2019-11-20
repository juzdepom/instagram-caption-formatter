import React from 'react';
import './Credits.scss';


class Credits extends React.Component {

    render(){
        return (
            <div className="credits">
                Coded by Julia Gao Miller
                <br/>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/fightcodejulia/" >
                        Instagram
                </a>
                <br/>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/fightcodejulia/" >
                        LinkedIn
                </a>
            </div>
        );
    }
}

export default Credits