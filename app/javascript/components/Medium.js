import React from 'react';
import PropTypes from 'prop-types';

const Medium = ({ medium }) => (
    <div>
        <h2>
            {medium.name}
        </h2>
        <ul>
            <li>
                <strong>Description:</strong>
                {' '}
                {medium.description}
            </li>
        </ul>
    </div>
);

Medium.propTypes = {
    medium: PropTypes.shape(),
};

Medium.defaultProps = {
    medium: undefined,
};

export default Medium;
