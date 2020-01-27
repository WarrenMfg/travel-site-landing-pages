import styled from '@emotion/styled';

const styles = {
  propertyAmenitiesContainer: styled.div({
    borderBottom: '1px solid rgb(229, 229, 229)',
    paddingBottom: '14px',
    '& h4': {
      margin: '0',
      paddingTop: '25px'
    }
  }),

  grid: styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: '"left right"'
  }),

  left: styled.div({
    gridArea: 'left',
    '& i': {
      width: '16px',
      marginRight: '15px'
    }
  }),

  right: styled.div({
    gridArea: 'right',
    '& i': {
      width: '16px',
      marginRight: '15px'
    }
  }),

  showMore: styled.p({
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: 'rgb(0, 129, 113)'
  })


};

export default styles;