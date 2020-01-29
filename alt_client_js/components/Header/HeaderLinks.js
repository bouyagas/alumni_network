import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import { Apps, CloudDownload } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';

import styles from '../../assets/jss/nextjs-material-kit/components/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText='Veiw Alumni Students'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href='/studentNetwork' as='/feeds'>
              <a className={classes.dropdownLink}>Student Network</a>
            </Link>,
            <a
              href='https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar'
              target='_blank'
              className={classes.dropdownLink}
            >
              Recent Graduates
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Sign In'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='/signIn'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fas fa-sign-in-alt'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Sign Up To A Member'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='/signUp'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fas fa-user-plus'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
