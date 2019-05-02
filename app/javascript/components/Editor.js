import React from 'react';
import axios from 'axios';
import Header from './Header';
import MediumList from "./MediumList";
import Medium from "./Medium";
import PropsRoute from './PropsRoute';
import { Switch } from 'react-router-dom';
import MediumForm from './MediumForm';
import styled from 'styled-components'

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
    }

    componentDidMount() {
        axios
            .get('/api/media.json')
            .then(response => this.setState({ media: response.data }))
            .catch((error) => {
                console.log(error);
            });
    }

    addMedium(newMedium) {
        axios
            .post('/api/media.json', newMedium)
            .then((response) => {
                alert('Medium Added!');
                const savedMedium = response.data;
                this.setState(prevState => ({
                    events: [...prevState.media, savedMedium],
                }));
                const { history } = this.props;
                history.push(`/media/${savedMedium.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteMedium(mediumId) {
        const sure = window.confirm('Are you sure?');
        if (sure) {
            axios
                .delete(`/api/media/${mediumId}.json`)
                .then((response) => {
                    if (response.status === 204) {
                        alert('Medium deleted');
                        const { history } = this.props;
                        history.push('/media');

                        const { events } = this.state;
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
                        <PropsRoute path="/media/new"
                                    component={MediumForm}
                                    medium={medium}
                                    onSubmit={this.addMedium} />
                        <PropsRoute path="/media/:id"
                                    component={Medium}
                                    medium={medium}
                                    onDelete={this.deleteMedium}/>
                    </Switch>
                </StyledContainer>
            </div>
        );
    }
}

export default Editor;
