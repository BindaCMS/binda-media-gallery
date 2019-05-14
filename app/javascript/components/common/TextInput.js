import React from 'react'
import PropTypes from 'prop-types';

const TextInput = React.forwardRef((props, ref) => (
    <div>
        <label htmlFor={props.name}>{props.label}</label>
        <input
            type = "text"
            name = {props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} />
    </div>
))

TextInput.defaultProps = {
    name: "",
    placeholder: "",
    value: "",
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    //value: PropTypes.string.isRequired
};

export default TextInput;