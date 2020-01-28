import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Tooltip } from '@material-ui/core';
import { Apps, CloudDownload } from '@material-ui/icons';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';
import { headerLinksStyle } from '../../../assets/jss/nextjs-material/components/subComponents/header/headerLinksStyle';

// @ts-ignore
const useStyles = makeStyles(headerLinksStyle);

interface Props {}

const HeaderLinks: React.FC<Props> | any = ({}: Props): React.ReactElement => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText='Components'
            buttonProps={{
              className: classes.navLink,
              color: 'transparent'
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link href='/components'>
                <a className={classes.dropdownLink}>All components</a>
              </Link>,
              <a
                href='https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar'
                target='_blank'
                className={classes.dropdownLink}
              >
                Documentation
              </a>
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href='https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar'
            color='transparent'
            target='_blank'
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} /> Download
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
          <Tooltip
            id='instagram-twitter'
            title='Follow us on twitter'
            placement={'top'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href='https://twitter.com/CreativeTim?ref=creativetim'
              target='_blank'
              color='transparent'
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-twitter'} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id='instagram-facebook'
            title='Follow us on facebook'
            placement={'top'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color='transparent'
              href='https://www.facebook.com/CreativeTim?ref=creativetim'
              target='_blank'
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-facebook'} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id='instagram-tooltip'
            title='Follow us on instagram'
            placement={'top'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color='transparent'
              href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
              target='_blank'
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-instagram'} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default HeaderLinks;
