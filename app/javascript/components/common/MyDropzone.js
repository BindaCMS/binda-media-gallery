import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    border: dashed black 1px;
`

const StyledMessage = styled.div`
    padding: 40px;
    text-align: center;
`

export function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <StyledContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <StyledMessage>
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </StyledMessage>
        </StyledContainer>
    )
}