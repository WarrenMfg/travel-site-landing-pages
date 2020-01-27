import styled from '@emotion/styled';



const styles = {
  superlativeContainer: styled.div({
    borderBottom: '1px solid rgb(229, 229, 229)',
    paddingBottom: '14px',
    position: 'relative'
  }),

  faSuperlative: {
    color: 'rgb(0, 129, 113)',
    width: '16px',
    marginRight: '5px'
  },

  superlative: styled.p({
    fontSize: '14px',
    textDecoration: 'underline rgb(100, 100, 100) dotted',
    cursor: 'pointer',
    width: 'fit-content',
    paddingRight: '50px'
  }),

  coePopup: styled.div({
    position: 'absolute',
    width: '300px',
    left: '185px',
    transform: 'translate(0, -62.5%)',
    filter: 'drop-shadow(0 0 5px black)',
    '& div': {
      clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 10% 66%, 0 50%, 10% 33%)',
      backgroundColor: 'white',
      padding: '20px 20px 20px 20%'
    },
    '& h3': {
      marginTop: '0'
    },
    '& p': {
      fontSize: '14px',
      marginBottom: '0',
      lineHeight: '18px'
    }
  }),

  greenLeadersPopup: styled.div({
    position: 'absolute',
    width: '310px',
    left: '210px',
    transform: 'translate(0, -62.5%)',
    filter: 'drop-shadow(0 0 5px black)',
    '& div': {
      clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 10% 66%, 0 50%, 10% 33%)',
      backgroundColor: 'white',
      padding: '20px 20px 20px 20%'
    },
    '& h4': {
      margin: '0 0 15px 0'
    },
    '& ul': {
      fontSize: '14px',
      margin: '0',
      paddingLeft: '15px'
    },
    '& li': {
      margin: '5px',
      padding: '0'
    },
    '& a': {
      fontSize: '14px',
      color: 'rgb(0, 129, 113)'

    }
  })
};

export default styles;