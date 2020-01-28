import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto'
  }
};

// @ts-ignore
const useStyles = makeStyles(styles);

interface Props {
  props: any;
}

const GridItem: React.FC<Props> | any = ({
  props
}: Props): React.ReactElement => {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <React.Fragment>
      <Grid item {...rest} className={classes.grid + ' ' + className}>
        {children}
      </Grid>
    </React.Fragment>
  );
};

GridItem.defaultProps = {
  className: ''
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default GridItem;
