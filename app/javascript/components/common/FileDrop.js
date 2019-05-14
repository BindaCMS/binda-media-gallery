import React, {useCallback} from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {DirectUpload} from 'activestorage'

const dropzoneColor = '#999'

const StyledContainer = styled.div`
    width: 100%;
    margin: 10px 0;
`

const StyledMessage = styled.div`
    padding: 40px;
    text-align: center;
    border: dashed ${dropzoneColor} 1px;
    p { color: ${dropzoneColor} }
    margin-bottom: 1em;
`

const StyledPreview = styled.div`
    padding: 0 10px;
    display: flex;
`

const StyledThumb = styled.div`
    max-width:200px;
    height: auto;
    img { width:100%; height: 100%; }
`

class FileDrop extends React.Component {
   constructor(state) {
      super(state);
      this.state = {
         files: []
      };
      this.handleDrop = this.handleDrop.bind(this)
      this.inputRef = React.createRef();
   }

   componentDidMount() {
      console.log({ref: this.inputRef})
      //console.log({fn: this.dropzoneRef.current.open})
   }

   componentDidUpdate(prevProps, prevState, snapshot) {

   }

   handleDrop(files) {
      files.forEach(file => this.uploadFile(file))
   }

   uploadFile(file) {
      const input = this.inputRef.current;
      const url = "/rails/active_storage/direct_uploads"
      const upload = new DirectUpload(file, url)

      upload.create((error, blob) => {
         if (error) {
            // Handle error
         } else {
            // Add an appropriately-named hidden input to the form with a
            //  value of blob.signed_id so that the blob ids will be
            //  transmitted in the normal upload flow
            const hiddenField = document.createElement('input')
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("value", blob.signed_id);
            hiddenField.name = this.props.name;
            input.closest('form').appendChild(hiddenField)
         }
      })
   }

   renderPreview() {
      return (
         this.state.files.map(file => (
            <div key={file.name}>
               <div>
                  <StyledThumb>
                     <img src={URL.createObjectURL(file)}/>
                  </StyledThumb>
                  <p>{file.name}</p>
               </div>
            </div>
         ))
      )
   }

   render() {
      return (
         <Dropzone onDrop={this.handleDrop}>
            {({getRootProps, getInputProps}) => (
               <StyledContainer>
                  <StyledMessage {...getRootProps({className: 'dropzone'})}>
                     <input
                        {...getInputProps({
                           onChange: this.props.onChange,
                           multiple: false,
                           name: "dropzone_input",
                           ref:this.inputRef
                        })}
                     />
                     <p>Drag 'n' drop or click to choose a file</p>
                  </StyledMessage>
                  <StyledPreview>
                     {this.renderPreview()}
                  </StyledPreview>
               </StyledContainer>
            )}
         </Dropzone>
      );
   }
}



FileDrop.defaultProps = {
   handleDrop: () => { console.log('Dropzone default onChange function') }
}

FileDrop.propTypes = {
   handleDrop: PropTypes.func.isRequired,
}

export default FileDrop