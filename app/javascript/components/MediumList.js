import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MediumList extends React.Component {
    renderMedia() {
        const { media, activeId } = this.props;

        return media.map(medium => (
            <li key={medium.id}>
                <Link to={`/media/${medium.id}`} className={activeId === medium.id ? 'active' : ''}>
                    {medium.name}
                    {' - '}
                    {medium.description}
                </Link>
            </li>
        ));
    }

    render() {
        return (
            <section>
                <h2>Media <Link to="/media/new">New Media</Link></h2>
                <ul>{this.renderMedia()}</ul>
            </section>
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
