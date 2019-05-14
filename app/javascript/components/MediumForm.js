import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import TextInput from './common/TextInput'
import FileDrop from './common/FileDrop';
import {connect} from 'react-redux';
import {DirectUpload} from 'activestorage'

const StyledTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1em;
`

/**
 *
 */
class MediumForm extends React.Component {

    constructor(state) {
        super(state)
        this.state = {
            medium: this.props.medium,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // refs
        this.fileInputRef = React.createRef();
    }

    handleDrop(event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        Array.from(files).forEach(file => this.uploadFile(file))
    }

    handleChange(event) {
        const field = event.target.name;
        const medium = this.state.medium;
        medium[field] = event.target.value;
        console.log(medium[field]); // todo remove
        return this.setState({medium:medium})
    }

    uploadFile(file) {

    }

    handleSubmit(event) {
        event.preventDefault()
        let formData = new FormData();
        for ( let key in this.state.medium ) {
            let field = `medium[${key}]`
            formData.append(field,  this.state.medium[key]);
            console.log(field, this.state.medium[key])
        }
        // pass data to parent function
        this.props.handleSave(formData)
    }

    render() {
        return (
            <div>
                <StyledTitle>
                    {this.props.new ? "New" : "Edit" } Medium
                </StyledTitle>
                <form>
                    <TextInput
                        name="name"
                        label="name"
                        placeholder="name"
                        value={this.state.medium.name}
                        onChange={this.handleChange} />
                    <TextInput
                        name="description"
                        label="description"
                        placeholder="description"
                        value={this.state.medium.description}
                        onChange={this.handleChange} />
                    <FileDrop
                        ref={this.fileInputRef}
                        handleDrop={this.handleDrop}
                        name="file"
                    />
                    <input
                        type="submit"
                        //disabled={this.props.saving}
                        onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

MediumForm.propTypes = {
    medium: PropTypes.shape(),
    handleSave: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    let medium = {
        name: "",
        description: "",
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
