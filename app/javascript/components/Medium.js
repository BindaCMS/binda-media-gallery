import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  font-size: 15px;
  line-height: 35px;
  padding: 16px;
`

const StyledTitle = styled.div`
  font-size: 20px;
  padding: 0px 6px 10px;
`

const Medium = ({ medium, onDelete }) => (
    <StyledContainer>
        <StyledTitle>
            {medium.name}
        </StyledTitle>
        <ul>
            <li>
                <div>
                    <strong>Description:</strong>
                    {' '}
                    {medium.description}
                </div>
                <Link to={`/media/${event.id}/edit`}>Edit</Link>
                <button className="delete" type="button" onClick={() => onDelete(medium.id)}>
                    Delete
                </button>
            </li>
        </ul>
    </StyledContainer>
);

Medium.propTypes = {
    medium: PropTypes.shape(),
    onDelete: PropTypes.func.isRequired,
};

Medium.defaultProps = {
    medium: undefined,
};

export default Medium;
