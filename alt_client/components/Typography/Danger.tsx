import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import { typographyStyle } from '../../assets/jss/nextjs-material-kit/components/typographyStyle';

// @ts-ignore
const useStyles = makeStyles(typographyStyle);

export default function Danger(props: any) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + ' ' + classes.dangerText}>
      {children}
    </div>
  );
}

Danger.propTypes = {
  children: PropTypes.node
};
