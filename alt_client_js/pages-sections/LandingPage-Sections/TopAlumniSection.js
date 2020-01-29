import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js';

// @ts-ignore
import student1 from '../../assets/img/faces/female_developer.jpg';
// @ts-ignore
import student2 from '../../assets/img/faces/christian.jpg';
// @ts-ignore
import student3 from '../../assets/img/faces/black_female_coder.jpg';

const useStyles = makeStyles(styles);

export default function TopAlumniSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Top Alumni Students</h2>
      <div>
        <GridContainer>
          <GridItem
            // @ts-ignore
            xs={12}
            sm={12}
            md={4}
          >
            <Card plain>
              <GridItem
                // @ts-ignore
                xs={12}
                sm={12}
                md={6}
                className={classes.itemGrid}
              >
                <img src={student1} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>
                  Frontend Developer/Designer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Frontend Developer with experience architecting and developing
                  complex fast web application with SDLC best practices in
                  React, Redux, JavaScript, Rails, jQuery, Ruby, Sinatra, Ruby
                  on Rails, Github, HTML, Nokogiri, RESTful API, SQL, JSON, and
                  Rack. I believe in giving back to the community and helping
                  others.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-github'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem
            // @ts-ignore
            xs={12}
            sm={12}
            md={4}
          >
            <Card plain>
              <GridItem
                // @ts-ignore
                xs={12}
                sm={12}
                md={6}
                className={classes.itemGrid}
              >
                <img src={student2} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christian Louboutin
                <br />
                <small className={classes.smallTitle}>
                  Fullstack Developer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Former Business Analyst turned Fullstack Engineer. Past work
                  experience, and exposure to different job roles has fueled my
                  desire to switch to a more technical career and join a coding
                  bootcamp. I am looking for a fulfilling career with many
                  opportunities for continuous learning and self improvement.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-github'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem
            // @ts-ignore
            xs={12}
            sm={12}
            md={4}
          >
            <Card plain>
              <GridItem
                // @ts-ignore
                xs={12}
                sm={12}
                md={6}
                className={classes.itemGrid}
              >
                <img src={student3} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Tara Ojo
                <br />
                <small className={classes.smallTitle}>Backend Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Backend Developer with a passion for continuous learning and
                  building a sophisticated web application. With experience in
                  Ruby on Rails, JavaScript, React and CSS3 and background as a
                  web designer, I discovered web development through utilizing
                  my skill to visualize web apps.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-github'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
