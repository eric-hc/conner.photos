import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const Location = styled.h1`
  z-index: 2;
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  width: 100%;
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  color: #5c6ac4;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>{props.date}</Date> in <Location>{props.location}</Location>
    </Wrapper>
  )
}

export default PostDetails
