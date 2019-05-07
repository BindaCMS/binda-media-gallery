import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledSection = styled.section`
  background: #f6f6f6;
  padding: 16px;
`

const StyledTitle = styled.h2`
  font-size: 20px;
  padding: 0px 6px 10px;
`

const StyledItem = styled.li`
    /*  ---------  */
`

const StyledLink = styled(Link)`
   display:block;
   &:hover, &.active {
     background: #f8e5ce;
   }
`

class MediumList extends React.Component {

    renderMedia() {
        const { media } = this.props;

        return media.map(medium => (
            <StyledItem key={medium.id}>
                <StyledLink to={`/media/${medium.id}`}>
                    {medium.name}
                </StyledLink>
            </StyledItem>
        ));
    }

    render() {
        return (
            <StyledSection>
                <StyledTitle>Media <Link to="/media/new">New Media</Link></StyledTitle>
                <ul>{this.renderMedia()}</ul>
            </StyledSection>
        );
    }
}

MediumList.propTypes = {
    media: PropTypes.arrayOf(PropTypes.object),
};

MediumList.defaultProps = {
    media: [],
};

export default MediumList;
