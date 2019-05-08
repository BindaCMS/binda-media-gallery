import React from 'react'
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type = "text"
                name = {name}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default TextInput;