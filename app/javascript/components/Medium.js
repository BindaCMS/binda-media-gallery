import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {connect}  from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteMediumAction} from "../actions/deleteMediumAction";
import {Link} from "react-router-dom";

const StyledContainer = styled.div`
  font-size: 15px;
  line-height: 35px;
  padding: 16px;
`

const StyledTitle = styled.div`
  font-size: 20px;
  padding: 0px 6px 10px;
`

class Medium extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            medium: this.props.medium,
            isEditing:false
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.medium.id != nextProps.medium.id) {
            this.setState({medium: nextProps.medium});
        }
    }

    handleDelete(event) {
        const { id } = this.state.medium;
        if (id) {
            this.props.deleteMediumAction(id);
        }
    }

    render() {
        const medium = this.state.medium;

        return (
            <StyledContainer>
                <StyledTitle>{medium.name}</StyledTitle>
                <ul>
                    <li>
                        <div>
                            <strong>Description:</strong>
                            {' '}
                            {medium.description}
                        </div>
                        <div>
                            <strong>File</strong>
                            {medium.file}
                        </div>
                    </li>
                </ul>
                <button onClick={this.handleDelete}>delete</button>
                <Link to={`/media/${medium.id}/edit`}>edit</Link>
            </StyledContainer>
        )
    }
}

Medium.propTypes = {
    medium: PropTypes.object.isRequired,
};

Medium.defaultProps = {
    medium: undefined,
};

function mapStateToProps(state, ownProps) {
    let medium = {
        name: '',
        description: ''
    };
    const mediumId = ownProps.match.params.id;
    if (state.media.payload) {
        if (state.media.payload.length > 0) {
            medium = Object.assign({},
                state.media.payload.find(medium => medium.id == mediumId))
        }
    }
    return { medium: medium }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteMediumAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Medium);
