import React from "react";
import styled from "styled-components";


const Input = styled.input`
  height: 100%;
  width:100%;
  font-size: 16px;
  color: #4a4a4a;
  padding: 0 16px 0 16px;
  text-align: left;
  outline:none;
  border:none;
`

const Icon = styled.img`
    top:19px;
    right:16px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: absolute;
`;
class InputWithIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentWillMount() {
    this.setState({
      value: this.props.startValue || ""
    });
  }
  handleOnChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div className={this.props.className}>
        <Input
          onChange={this.handleOnChange}
          placeholder={this.props.startHolder}
          value={this.state.value}
        />
        {this.props.icon ? (
          <Icon
            width={this.props.iconWidth}
            height={this.props.iconHeight}
            src={this.props.icon}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
const InputContainer = styled(InputWithIcon)`
  height: 56px;
  position: relative;
  display:inline-block;
  margin:1px;
`;

export default InputContainer;
