import React from 'react';
import PropTypes from 'prop-types';
import { isEmptyObject, validateMedium } from '../helpers/helpers';
import styled from 'styled-components'

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

const StyledInput = styled.input`
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
    constructor(props) {
        super(props);

        this.state = {
            medium: props.medium ? props.medium : {
                name: "",
                description: ""
            },
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { medium } = this.state;
        const errors = validateMedium(medium);

        if (!isEmptyObject(errors)) {
            this.setState({ errors });
            this.renderErrors();
        } else {
            const { onSubmit } = this.props;
            onSubmit(medium);
        }
        console.log('submitted');
    }

    handleInputChange(medium) {
        const { target } = medium;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState(prevState => ({
            medium: {
                ...prevState.medium,
                [name]: value,
            },
        }));
    }

    renderErrors() {
        const { errors } = this.state;

        if (this.isEmptyObject(errors)) {
            return null;
        }

        return (
            <div className="errors">
                <h3>The following errors prohibited the medium from being saved:</h3>
                <ul>
                    {Object.values(errors).map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {

        const { medium } = this.state;

        return (
            <div>
                <StyledTitle>New Medium</StyledTitle>
                <form className="mediumForm" onSubmit={this.handleSubmit}>
                    <div>
                        <StyledLabel htmlFor="name">
                            <strong>Name:</strong>
                            <StyledInput
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.handleInputChange}
                                value={medium.name}
                            />
                        </StyledLabel>
                    </div>
                    <div>
                        <StyledLabel htmlFor="description">
                            <strong>Description:</strong>
                            <StyledTextArea
                                cols="30"
                                rows="5"
                                id="description"
                                name="description"
                                onChange={this.handleInputChange}
                                value={medium.description}
                            />
                        </StyledLabel>
                    </div>
                    <div>
                        <StyledFormAction type="submit">Save</StyledFormAction>
                    </div>
                </form>
            </div>
        );
    }
}

MediumForm.propTypes = {
    medium: PropTypes.shape(),
    onSubmit: PropTypes.func.isRequired,
};

export default MediumForm;
