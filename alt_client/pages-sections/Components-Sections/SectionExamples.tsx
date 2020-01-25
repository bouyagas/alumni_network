import React from 'react';
// react components for routing our app without refresh
import Link from 'next/link';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';

import landing from 'assets/img/landing.jpg';
import profile from 'assets/img/profile.jpg';

import { exampleStyle } from '../../assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle';

// @ts-ignore
const useStyles = makeStyles(exampleStyle);
interface Props {}

const SectionExamples: React.FC<Props> = ({}: Props): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        // @ts-ignore
        <GridContainer justify='center'>
          // @ts-ignore
          <GridItem xs={12} sm={12} md={6}>
            <Link href='/landing'>
              <a className={classes.link}>
                <img
                  src={landing}
                  alt='...'
                  className={
                    classes.imgRaised +
                    ' ' +
                    classes.imgRounded +
                    ' ' +
                    classes.imgFluid
                  }
                />
                <Button color='primary' size='lg' simple>
                  View landing page
                </Button>
              </a>
            </Link>
          </GridItem>
          // @ts-ignore
          <GridItem xs={12} sm={12} md={6}>
            <Link href='/profile'>
              <a className={classes.link}>
                <img
                  src={profile}
                  alt='...'
                  className={
                    classes.imgRaised +
                    ' ' +
                    classes.imgRounded +
                    ' ' +
                    classes.imgFluid
                  }
                />
                <Button color='primary' size='lg' simple>
                  View profile page
                </Button>
              </a>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default SectionExamples;
