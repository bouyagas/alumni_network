import { conatinerFluid } from '../../../nextjs-material-kit';

import { imagesStyles } from '../../imagesStyles';

export const exampleStyle = {
  section: {
    padding: '70px 0'
  },
  container: {
    ...conatinerFluid,
    textAlign: 'center !important'
  },
  ...imagesStyles,
  link: {
    textDecoration: 'none'
  }
};
