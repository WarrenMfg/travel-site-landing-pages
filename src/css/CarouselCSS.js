import styled from '@emotion/styled';

const styles = {
  carouselContainer: styled.div({
    marginTop: '20px'
  }),

  mainImageContainer: styled.div({
    width: '100%',
    height: 'auto'
  }),

  mainImage: styled.img({
    width: '100%',
    height: 'auto'
  }),

  bottomImagesContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto'
  }),

  bottomImage: styled.img({
    width: '13.5%',
    height: 'auto',
    cursor: 'pointer'
  })

};

export default styles;