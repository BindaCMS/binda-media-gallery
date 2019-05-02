import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledContainer = styled.div`
  font-size: 15px;
  line-height: 35px;
  padding: 16px;
`

const StyledTitle = styled.div`
  font-size: 20px;
  padding: 0px 6px 10px;
`

const Medium = ({ medium }) => (
    <StyledContainer>
        <StyledTitle>
            {medium.name}
        </StyledTitle>
        <ul>
            <li>
                <strong>Description:</strong>
                {' '}
                {medium.description}
            </li>
        </ul>
    </StyledContainer>
);

Medium.propTypes = {
    medium: PropTypes.shape(),
};

Medium.defaultProps = {
    medium: undefined,
};

export default Medium;
