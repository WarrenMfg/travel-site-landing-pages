import styled from '@emotion/styled';

const styles = {
  goodToKnowContainer: styled.div({
    position: 'relative',
    borderBottom: '1px solid rgb(229, 229, 229)',
    paddingBottom: '17px',
    '& h4': {
      margin: '0',
      paddingTop: '25px'
    },
    '& h5': {
      fontSize: '12px',
      margin: '16px 0 8px'
    },
    '& i': {
      '&:hover': {
        color: 'rgb(0, 129, 113)',
        cursor: 'pointer'
      }
    }
  }),

  infoPopup: styled.div({
    position: 'absolute',
    width: '300px',
    transform: 'translate(-19%, -130%)',
    filter: 'drop-shadow(0 0 5px black)',
    '& div': {
      clipPath: 'polygon(0 0, 100% 0, 100% 75%, 60% 75%, 50% 100%, 40% 75%, 0 75%)',
      backgroundColor: 'white',
      padding: '15px 15px 12.5% 15px'
    },
    '& p': {
      margin: '0',
      fontSize: '12px'
    }
  }),

  hotelStyleContainer: styled.div({
    columns: '2 110px',
    columnFill: 'balance',
    minHeight: '40px',
    '& p': {
      fontSize: '14px',
      margin: '0 0 8px'
    }
  })


};

export default styles;