import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types';
import MediumList from "./MediumList";
import { Switch } from 'react-router-dom';
import Medium from './Medium'
import MediumForm from './MediumForm'
import Header from './Header'
import PropsRoute from "./PropsRoute";
import {getMediaAction} from '../actions/getMediaAction'
import {deleteMediumAction} from "../actions/deleteMediumAction";
import {addMediumAction} from "../actions/addMediumAction";
import {editMediumAction} from "../actions/editMediumAction";

const StyledContainer = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 25% auto;
    margin: 25px auto;
    width: 90%;
    height: calc(100vh - 145px);
`

class Editor extends React.Component {
    constructor(state) {
        super(state)
    }

    componentDidMount() {
        this.props.getMediaAction();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(this.props.media)
    }

    renderMedia() {
        if (this.props.media.payload) {
            return (
                <div>
                    <MediumList media={this.props.media.payload}/>
                </div>
            )
        }
    }

    renderTimeout() {
        if (this.props.media.timeout) {
            return (
                <div>Timeout: {this.props.media.timeout}</div>
            )
        }
    }

    renderLoader() {
        if (this.props.media.isLoading) {
            return (
                <div>... Loading ...</div>
            )
        }
    }

    render() {
        return(
            <div>
                <Header />
                <StyledContainer>
                    {this.renderLoader()}
                    {this.renderTimeout()}
                    {this.renderMedia()}
                    <Switch>
                        <PropsRoute
                            exact
                            path={"/media/new"}
                            component={MediumForm}
                            onSave={this.props.addMediumAction} />
                        <PropsRoute
                            path="/media/:id/edit"
                            component={MediumForm}
                            media={this.props.media.payload}
                            onSave={this.props.editMediumAction} />
                        <PropsRoute
                            exact
                            path="/media/:id"
                            component={Medium} />
                    </Switch>
                </StyledContainer>
            </div>
        )
    }
}

Editor.propTypes = {
    //media: PropTypes.array.isRequired
}

Editor.defaultProps = {
    media: []
}

function mapStateToProps({ media }) {
    return { media }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMediaAction,
        deleteMediumAction,
        addMediumAction,
        editMediumAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
