import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';

import { footerStyle } from '../../../assets/jss/nextjs-material/components/subComponents/footer/footerStyle';

// @ts-ignore
const useStyles = makeStyles(footerStyle);
interface Props {
  props: any;
}
const Footer: React.FC<Props> | any = ({
  props
}: Props): React.ReactElement => {
  const classes = useStyles();
  const { whiteFont } = props;

  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <React.Fragment>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='https://www.creative-tim.com/?ref=njsmk-footer'
                  className={classes.block}
                  target='_blank'
                >
                  Creative Tim
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='https://www.creative-tim.com/presentation?ref=njsmk-footer'
                  className={classes.block}
                  target='_blank'
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='http://blog.creative-tim.com/?ref=njsmk-footer'
                  className={classes.block}
                  target='_blank'
                >
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href='https://www.creative-tim.com/license?ref=njsmk-footer'
                  className={classes.block}
                  target='_blank'
                >
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getFullYear()} , made with{' '}
            <Favorite className={classes.icon} /> by{' '}
            <a
              href='https://www.creative-tim.com?ref=njsmk-footer'
              className={aClasses}
              target='_blank'
            >
              Creative Tim
            </a>{' '}
            for a better web.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

Footer.propTypes = {
  whiteFont: PropTypes.bool
};

export default Footer;
