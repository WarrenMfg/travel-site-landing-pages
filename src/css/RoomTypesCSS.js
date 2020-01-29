import styled from '@emotion/styled';

const styles = {
  roomTypesContainer: styled.div({
    borderBottom: '1px solid rgb(229, 229, 229)',
    paddingBottom: '5px',
    '& h4': {
      margin: '0',
      paddingTop: '25px'
    }
  }),

  columns: styled.div({
    columns: '2 110px',
    columnFill: 'auto',
    breakInside: 'avoid',
    // minHeight: '100px',
    paddingTop: '16px',
    '& div': {
      display: 'grid',
      gridTemplateColumns: '.5fr 3fr',
      gridTemplateAreas: '"icon text"',
      breakInside: 'avoid'//,
      // alignItems: 'center'
    },
    '& i': {
      gridArea: 'icon',
      width: '16px'
    },
    '& p': {
      gridArea: 'text',
      fontSize: '14px',
      // margin: '8px 0 8px 10px'
      margin: '0 0 16px 10px'
    }
  }),

  seeMore: styled.p({
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '20px 0',
    width: 'fit-content',
    color: 'rgb(0, 129, 113)',
    cursor: 'pointer',
    '& a': {
      '&:link': {
        color: 'rgb(0, 129, 113)',
        textDecoration: 'none'
      },
      '&:visited': {
        color: 'rgb(0, 129, 113)',
        textDecoration: 'none'
      },
      '&:hover': {
        color: 'rgb(0, 129, 113)',
        textDecoration: 'none'
      },
      '&:active': {
        color: 'rgb(0, 129, 113)',
        textDecoration: 'none'
      }
    }
  })
};

export default styles;