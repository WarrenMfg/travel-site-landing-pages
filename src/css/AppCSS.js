import styled from '@emotion/styled';
import {css} from '@emotion/core';

const styles = {
  global: css`
  body {
    font-family: Arial;
    color: #4A4A4A;
    background-color: rgb(242, 242, 242);
  }
`,

  aboutContainer: styled.div({
    width: '50vw',
    borderTop: '4px solid rgb(0, 129, 113)',
    margin: '0 auto',
    padding: '0 24px 16px',
    backgroundColor: 'white'
  }),

  h2: styled.h2({
    borderBottom: '1px solid rgb(229, 229, 229)',
    color: 'black',
    padding: '20px 0',
    margin: '0'
  }),

  grid: styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: '"left right"',
    gridColumnGap: '15px',
  }),

  left: styled.div({
    gridArea: 'left'
  }),

  imagePlaceholder: styled.div({
    width: '100%',
    height: '325px',
    backgroundImage: 'url("../../public/hotel.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '20px'
  }),


  right: styled.div({
    gridArea: 'right'
  })
};

export default styles;