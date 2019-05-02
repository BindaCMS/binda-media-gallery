import React from 'react';
import PropTypes from 'prop-types';
import { isEmptyObject, validateMedium } from '../helpers/helpers';



class MediumForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            medium: props.medium,
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
        return (
            <div>
                <h2>New Medium</h2>
                <form className="mediumForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            <strong>Name:</strong>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="description">
                            <strong>Description:</strong>
                            <textarea
                                cols="30"
                                rows="10"
                                id="description"
                                name="description"
                                onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
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
