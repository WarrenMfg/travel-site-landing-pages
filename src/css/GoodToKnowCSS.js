import styled from '@emotion/styled';

const styles = {
  goodToKnowContainer: styled.div({
    borderBottom: '1px solid rgb(229, 229, 229)',
    paddingBottom: '14px',
    '& h4': {
      margin: '0',
      paddingTop: '25px'
    },
    '& h5': {
      fontSize: '12px',
      margin: '16px 0 8px'
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