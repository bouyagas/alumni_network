import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import { badgeStyle } from '../../assets/jss/nextjs-material-kit/components/badgeStyle';
// @ts-ignore
const useStyles = makeStyles(badgeStyle);

interface Props {
  props: any;
}
const Badge: React.FC<Props> | any = ({ props }: Props): React.ReactElement => {
  const classes = useStyles();
  const { color, children } = props;
  return (
    <span className={classes.badge + ' ' + classes[color]}>{children}</span>
  );
};

Badge.defaultProps = {
  color: 'gray'
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  children: PropTypes.node
};

export default Badge;
