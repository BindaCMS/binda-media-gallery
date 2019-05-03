import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

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
                <div>
                    <strong>Description:</strong>
                    {' '}
                    {medium.description}
                </div>
            </li>
        </ul>
    </StyledContainer>
);

Medium.propTypes = {
    medium: PropTypes.object.isRequired,
};

Medium.defaultProps = {
    medium: undefined,
};

function mapStateToProps(state, ownProps) {
    let medium = {
        name: '',
        description: ''
    };
    const mediumId = ownProps.match.params.id;
    if (state.media.length > 0) {
        medium = Object.assign({}, state.media.find(medium => medium.id == mediumId))
    }
    return {medium: medium};
}

export default connect(mapStateToProps)(Medium);
