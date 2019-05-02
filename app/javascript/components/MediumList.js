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
   display: block;
   a { display: block }
   & a.active, & a:hover {
     background: #f8e5ce;
   }
`

class MediumList extends React.Component {
    renderMedia() {
        const { media, activeId } = this.props;

        return media.map(medium => (
            <StyledItem key={medium.id}>
                <Link to={`/media/${medium.id}`} className={activeId === medium.id ? 'active' : ''}>
                    {medium.name}
                    {/*' - '*/}
                    {/*medium.description*/}
                </Link>
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
    activeId: PropTypes.number
};

MediumList.defaultProps = {
    media: [],
    activeId: undefined
};

export default MediumList;
