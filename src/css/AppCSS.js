import styled from '@emotion/styled';
import {css} from '@emotion/core';

const styles = {
  global: css`
  body {
    font-family: Arial;
    background-color: rgb(242, 242, 242);
  }
`,

  aboutContainer: styled.div({
    width: '50vw',
    borderTop: '4px solid rgb(0, 129, 113)',
    margin: '0 auto',
    padding: '0 15px 15px',
    backgroundColor: 'white'
  }),

  h2: styled.h2({
    borderBottom: '1px solid rgb(229, 229, 229)',
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

  right: styled.div({
    gridArea: 'right'
  })
};

export default styles;