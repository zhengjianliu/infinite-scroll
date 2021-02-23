import React, {Component} from 'react'

class Feed extends Component {

    generateRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    render(){
        return (
            <div className="feed" style={{"backgroundColor": this.generateRandomColor()}}>
                <h1>#{this.props.index+1}: {this.props.feed} {this.generateRandomColor()}</h1>
            </div>
        )
    }
}

export default Feed;