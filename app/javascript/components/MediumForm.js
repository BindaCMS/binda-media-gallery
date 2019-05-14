import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import TextInput from './common/TextInput'
import FileDrop from './common/FileDrop';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addMediumAction} from "../actions/addMediumAction";
import {editMediumAction} from "../actions/editMediumAction";

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
        this.handleChange = this.handleChange.bind(this);
        this.formRef = React.createRef();
    }

    handleChange(event) {
        const field = event.target.name;
        const medium = this.state.medium;
        medium[field] = event.target.value;
        console.log(medium[field]); // todo remove
        return this.setState({medium:medium})
    }

    handleSubmit(event) {
        event.preventDefault()
        let formData = new FormData();

        if (this.formRef) {
            const form = this.formRef.current;
            let formNodes = form.querySelectorAll("input");
            [...formNodes].forEach((input) => {
                console.log(input)
                formData.append(`medium[${input['name']}]`, input['value'])
            })
        }

        // pass data to parent function
        const {mode, editMediumAction, addMediumAction} = this.props;
        if      (mode === "edit") { editMediumAction(formData) }
        else if (mode === "new")  { addMediumAction(formData)  }
    }

    render() {
        return (
            <div>
                <StyledTitle>
                    {this.props.mode === "edit" ? "Edit" :
                     this.props.mode === "new" ? "New" : ""} Medium
                </StyledTitle>
                <form ref={this.formRef}>
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
                    <FileDrop name="file"/>
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMediumAction,
        editMediumAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediumForm);
