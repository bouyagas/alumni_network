import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { buttonStyle } from '../../../assets/jss/nextjs-material/components/subComponents/customBottons/buttonStyle';

// @ts-ignore
const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle
}));

interface Props {}

const RegularButton: any = React.forwardRef<Props>((props: any, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });

  return (
    <React.Fragment>
      <Button
        {...rest}
        ref={ref}
        classes={{
          root: btnClasses
        }}
      >
        {children}
      </Button>
    </React.Fragment>
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'facebook',
    'twitter',
    'google',
    'github',
    'transparent'
  ]),

  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default RegularButton;
