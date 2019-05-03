import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import MediumList from "./MediumList";
import { Switch } from 'react-router-dom';
import Medium from './Medium'
import Header from './Header'
import PropsRoute from "./PropsRoute";

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
            <div>
            <Header />
            <StyledContainer>
                <MediumList media={this.props.media}/>
                <Switch>
                    <PropsRoute
                        path="/media/:id/edit"
                        component={Medium}/>
                    <PropsRoute
                        exact
                        path="/media/:id"
                        component={Medium}/>
                </Switch>
            </StyledContainer>
            </div>
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
