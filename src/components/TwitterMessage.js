import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      value: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleMessageChange(event)} value={this.state.value} type="text" maxLength={this.props.maxChars}/>
        Character Counter: {this.state.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
