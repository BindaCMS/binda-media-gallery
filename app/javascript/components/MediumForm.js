import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import TextInput from './common/TextInput'
import {connect} from "react-redux";
import MyDropzone from "./common/MyDropzone";

console.log('hello from mediumform')

const StyledTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1em;
`

const StyledLabel = styled.label`
  & strong {
      display: inline-block;
      vertical-align: top;
      text-align: right;
      width: 100px;
      margin-right: 6px;
      font-size: 15px;  
  }
`

const StyledInput = styled(TextInput)`
      padding: 2px 0 3px 3px;
      width: 400px;
      margin-bottom: 15px;
      box-sizing: border-box;
`

const StyledFormAction = styled.button`
      color: #236fff;
      font-size: 15px;
      margin: 3px 12px 0 12px;
      text-decoration: none;
`

const StyledTextArea = styled.textarea`
      padding: 2px 0 3px 3px;
      width: 400px;
      margin-bottom: 15px;
      box-sizing: border-box;
`


class MediumForm extends React.Component {

    constructor(state) {
        super(state)
        this.state = {
            medium: this.props.medium,
        }
        this.updateMediumState = this.updateMediumState.bind(this)
        this.updateMediumFile = this.updateMediumFile.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    updateMediumFile({files}) {
        if (files.length > 0) {
            let medium = Object.assign({}, this.state.medium);
            medium['file'] = files[0];
            console.log(this.state)
            this.setState({medium:medium})
        }
    }

    updateMediumState(event) {
        console.log(event.target)
        const field = event.target.name;
        const medium = this.state.medium;
        medium[field] = event.target.value;
        return this.setState({medium:medium})
        console.log("state", this.state)
    }

    onSubmit(event) {
        debugger
        event.preventDefault()
        let formData = new FormData();
        for ( let key in this.state.medium ) {
            let field = `medium[${key}]`
            formData.append(field,  this.state.medium[key]);
        }
        this.props.handleSave(formData)
    }

    render() {
        return (
            <div>
                <StyledTitle>
                    {this.props.medium.id ? "Edit" : "New" } Medium
                </StyledTitle>
                <form>
                    <TextInput
                        name="name"
                        label="name"
                        placeholder="name"
                        value={this.props.medium.name}
                        onChange={this.updateMediumState} />
                    <TextInput
                        name="description"
                        label="description"
                        placeholder="description"
                        value={this.props.medium.description}
                        onChange={this.updateMediumState} />
                    <MyDropzone
                        onChange={this.updateMediumFile}
                    />
                    <input
                        type="submit"
                        //disabled={this.props.saving}
                        onClick={this.onSubmit} />
                </form>
            </div>
        )
    }
}

MediumForm.propTypes = {
    medium: PropTypes.shape(),
    handleSave: PropTypes.func.isRequired
};

MediumForm.defaultProps = {
    medium: {
        name: "",
        description: "",
        file: ""
    }
}

function mapStateToProps(state, ownProps) {
    let medium = {
        name: "",
        description: "",
        file: ""
    };
    const mediumId = ownProps.match.params.id;
    if (state.media.payload) {
        if (state.media.payload.length > 0) {
            medium = Object.assign({},
                state.media.payload.find(medium => medium.id == mediumId))
        }
    }
    return { medium: medium }
}

export default connect(mapStateToProps)(MediumForm);
