import styled from '@emotion/styled';

const styles = {
  roomFeaturesContainer: styled.div({
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
    minHeight: '125px',
    paddingTop: '16px',
    '& p': {
      fontSize: '14px',
      margin: '0 0 16px'
    },
    '& i': {
      width: '16px',
      marginRight: '15px'
    }
  })
};

export default styles;