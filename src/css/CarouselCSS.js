import styled from '@emotion/styled';

const styles = {
  carouselContainer: styled.div({
    marginTop: '20px',
    width: '100%',
    height: 'auto',
    maxHeight: '325px'
  }),

  mainImageContainer: styled.div({
    width: '100%',
    height: 'auto',
    maxHeight: '275px',
    marginBottom: '2px'
  }),

  bottomImagesContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '50px'
  }),

  leftChevron: styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '0',
    top: '50%',
    width: '50px',
    height: '50px',
    transform: 'translate(0, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    '& i': {
      color: 'white'
    }
  }),

  rightChevron: styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '0',
    top: '50%',
    width: '50px',
    height: '50px',
    transform: 'translate(0, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    '& i': {
      color: 'white'
    }
  })

};

export default styles;