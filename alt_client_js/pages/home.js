import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import HeaderLinks from '../components/Header/HeaderLinks.js';
import Parallax from '../components/Parallax/Parallax.js';
import { landingPageStyle } from '../assets/jss/nextjs-material-kit/pages/landingPage.js';
import TopAlumniSection from '../pages-sections/LandingPage-Sections/TopAlumniSection';
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection.js';
// @ts-ignore
import landingPic from '../assets/img/cool_alumni.jpg';

const dashboardRoutes = [];

// @ts-ignore
const useStyles = makeStyles(landingPageStyle);

/**
 * @param {{ [x: string]: any; }} props
 */

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color='transparent'
        // @ts-ignore
        routes={dashboardRoutes}
        brand='The Alumni Network'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax filter responsive image={landingPic}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              // @ts-ignore
              xs={12}
              sm={12}
              md={6}
            >
              <h1 className={classes.title}>Share Your Coding Experience</h1>
              <h4>
                Alumni Network is a platform that allowed students who were
                graduated from different bootcamp to stay connected and share
                experience with fellow student.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TopAlumniSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
