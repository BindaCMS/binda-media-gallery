import React from 'react';
import MediumList from "./MediumList";
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 25% auto;
    margin: 25px auto;
    width: 90%;
    height: calc(100vh - 145px);
`


class Editor extends React.Component {

    render() {
        return (
            <StyledContainer>
                <MediumList media={this.props.media}/>
            </StyledContainer>
        )
    }
}

Editor.propTypes = {
    media: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        media: state.media
    }
}

export default connect(mapStateToProps)(Editor);
