import styled from '@emotion/styled';

const styles = {
  ratingsContainer: styled.div({
    padding: '15px 0'
  }),

  averageNum: styled.span({
    color: 'rgb(0, 129, 113)',
    fontSize: '48px',
    fontWeight: '700'
  }),

  averageLink: styled.a({
    display: 'inline-block',
    marginLeft: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }),

  averageWords: styled.div({
    color: 'rgb(0, 129, 113)'
  }),

  reviewsLink: styled.span({
    display: 'inline-block',
    marginLeft: '5px',
    color: 'black',
    fontSize: '14px',
    fontWeight: 'normal',
    textDecoration: 'underline rgb(100, 100, 100) dotted'
  })
};

export default styles;