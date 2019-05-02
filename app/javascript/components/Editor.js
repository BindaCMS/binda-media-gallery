import React from 'react';
import axios from 'axios';
import Header from './Header';
import MediumList from "./MediumList";
import Medium from "./Medium";
import PropsRoute from './PropsRoute';
import { Switch } from 'react-router-dom';
import MediumForm from './MediumForm';
import styled from 'styled-components'
import { success } from '../helpers/notifications';
import { handleAjaxError } from '../helpers/helpers';

const StyledContainer = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 25% auto;
    margin: 25px auto;
    width: 90%;
    height: calc(100vh - 145px);
`


class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            media: null,
        };

        this.deleteMedium = this.deleteMedium.bind(this);
        this.updateMedium = this.updateMedium.bind(this);
    }

    componentDidMount() {
        axios
            .get('/api/media.json')
            .then(response => {
                this.setState({ media: response.data })
            })
            .catch((error) => {
                handleAjaxError(error);
            });
    }

    componentWillReceiveProps({ medium }) {
        this.setState({ medium });
    }


    addMedium(newMedium) {
        axios
            .post('/api/media.json', newMedium)
            .then((response) => {
                success('Medium Added!')
                const savedMedium = response.data;
                this.setState(prevState => ({
                    media: [...prevState.media, savedMedium],
                }));
                const { history } = this.props;
                history.push(`/media/${savedMedium.id}`);
            })
            .catch((error) => {
                handleAjaxError(error);
            });
    }

    updateMedium(updatedMedium) {
        axios
            .put(`/api/media/${updatedMedium.id}.json`, updatedMedium)
            .then(() => {
                success('Medium updated');
                const { media } = this.state;
                const idx = media.findIndex(media => media.id === updatedMedium.id);
                media[idx] = updatedMedium;
                const { history } = this.props;
                history.push(`/media/${updatedMedium.id}`);
                this.setState({ media });
            })
            .catch(handleAjaxError);
    }

    deleteMedium(mediumId) {
        const sure = window.confirm('Are you sure?');
        if (sure) {
            axios
                .delete(`/api/media/${mediumId}.json`)
                .then((response) => {
                    if (response.status === 204) {
                        success('Medium deleted!')
                        const { history } = this.props;
                        history.push('/media');

                        const { media } = this.state;
                        this.setState({ media: media.filter(medium => medium.id !== mediumId) });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }


    render() {
        const { media } = this.state;
        if (media === null) return null;

        const { match } = this.props;
        const mediumId = match.params.id;
        const medium = media.find(e => e.id === Number(mediumId));

        return (
            <div>
                <Header />
                <StyledContainer>
                    <MediumList media={media} activeId={Number(mediumId)}/>
                    <Switch>
                        <PropsRoute
                            path="/media/new"
                            component={MediumForm}
                            medium={medium}
                            onSubmit={this.addMedium}
                        />
                        <PropsRoute
                            exact
                            path="/media/:id/edit"
                            component={MediumForm}
                            medium={medium}
                            onSubmit={this.updateMedium}
                        />
                        <PropsRoute
                            path="/media/:id"
                            component={Medium}
                            medium={medium}
                            onDelete={this.deleteMedium}
                        />
                    </Switch>
                </StyledContainer>
            </div>
        );
    }
}

export default Editor;
