import styled from '@emotion/styled';

const styles = {
  roomTypesContainer: styled.div({
    borderBottom: '1px solid rgb(229, 229, 229)',
    paddingBottom: '14px',
    '& h4': {
      margin: '0',
      paddingTop: '25px'
    }
  }),

  columns: styled.div({
    columns: '2 110px',
    columnFill: 'balance',
    minHeight: '63px',
    paddingTop: '16px',
    '& p': {
      fontSize: '14px',
      margin: '0 0 16px'
    },
    '& i': {
      width: '16px',
      marginRight: '15px'
    }
  }),

  seeMore: styled.p({
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '10px 0 4px',
    color: 'rgb(0, 129, 113)',
    cursor: 'pointer'
  })
};

export default styles;