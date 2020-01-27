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
    gridTemplateAreas: 'left right'
    // gridTemplateRows: '1fr 1fr 1fr 1fr',
    // gridTemplateAreas: '"one two" "three four" "five six" "seven eight"'
  }),

  left: styled.div({
    gridArea: 'left'
  }),

  right: styled.div({
    gridArea: 'right'
  })


};

export default styles;