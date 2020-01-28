import styled from '@emotion/styled';

const styles = {
  hotelLinksContainer: styled.div({
    // paddingBottom: '14px',
    '& h4': {
      margin: '25px 0 16px'
    }
  }),

  a: styled.a({
    display: 'block',
    fontSize: '14px',
    margin: '8px 0',
    width: 'fit-content',
    cursor: 'pointer',
    '&:link': {
      color: '#4A4A4A',
      textDecoration: 'none'
    },
    '&:visited': {
      color: '#4A4A4A'
    },
    '&:hover': {
      textDecoration: 'underline rgb(100, 100, 100) dotted',
      color: 'black'
    },
    '& i': {
      color: 'rgb(0, 129, 113)',
      fontSize: '14px'
    },
    '& span': {
      color: 'rgb(0, 129, 113)',
      fontWeight: 'bold'
    }
  })
};

export default styles;