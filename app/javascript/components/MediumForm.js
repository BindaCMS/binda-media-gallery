import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import TextInput from './common/textInput'

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

    render() {
        return (
            <div>
                <StyledTitle>New Medium</StyledTitle>
                <form>
                    <TextInput
                        name="name"
                        label="name"
                        placeholder="name"
                        value={this.props.medium.name}
                        onChange={this.props.onChange} />
                    <TextInput
                        name="description"
                        label="description"
                        placeholder="description"
                        value={this.props.medium.description}
                        onChange={this.props.onChange} />
                    <input
                        type="submit"
                        //disabled={this.props.saving}
                        onClick={this.props.onSave} />
                </form>
            </div>
        )
    }
}

MediumForm.propTypes = {
    medium: PropTypes.shape(),
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default MediumForm;
