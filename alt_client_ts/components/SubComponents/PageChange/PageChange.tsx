import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { infoColor, title } from '../../../assets/jss/nextjs-material';

const useStyles = makeStyles(
  // @ts-ignore
  {
    progress: {
      color: infoColor,
      width: '6rem !important',
      height: '6rem !important'
    },

    wrapperDiv: {
      margin: '100px auto',
      padding: '0px',
      maxWidth: '360px',
      textAlign: 'center',
      position: 'relative',
      zIndex: '9999',
      top: '0'
    },
    iconWrapper: {
      display: 'block'
    },
    title: {
      ...title,
      color: '#FFFFFF'
    }
  }
);

interface Props {
  props: any;
}
const PageChange: React.FC<Props> | any = ({
  props
}: Props): React.ReactElement => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
};

export default PageChange;
