import React from 'react';
import axios from 'axios';
import Header from './Header';
import MediumList from "./MediumList";
import Medium from "./Medium";
import PropsRoute from './PropsRoute';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            media: null,
        };
    }

    componentDidMount() {
        axios
            .get('/api/media.json')
            .then(response => this.setState({ media: response.data }))
            .catch((error) => {
                console.log(error);
            });
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
                <MediumList media={media} />
                <PropsRoute path="/media/:id" component={Medium} medium={medium} />
            </div>
        );
    }
}

export default Editor;
