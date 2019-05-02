import React from 'react';
import axios from 'axios';
import Header from './Header';
import MediumList from "./MediumList";

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: null,
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

        return (
            <div>
                <Header />
                <MediumList media={media} />
            </div>
        );
    }
}

export default Editor;
