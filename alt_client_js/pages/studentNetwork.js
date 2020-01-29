import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/CustomButtons/Button';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import HeaderLinks from '../components/Header/HeaderLinks';
import NavPills from '../components/NavPills/NavPills';
import Parallax from '../components/Parallax/Parallax';

import profile from '../assets/img/faces/christian.jpg';

// @ts-ignore
import studio1 from '../assets/img/examples/studio-1.jpg';
// @ts-ignore
import studio2 from '../assets/img/examples/studio-2.jpg';
// @ts-ignore
import studio3 from '../assets/img/examples/studio-3.jpg';
// @ts-ignore
import studio4 from '../assets/img/examples/studio-4.jpg';
// @ts-ignore
import studio5 from '../assets/img/examples/studio-5.jpg';
// @ts-ignore
import work1 from '../assets/img/examples/olu-eletu.jpg';
// @ts-ignore
import work2 from '../assets/img/examples/clem-onojeghuo.jpg';
// @ts-ignore
import work3 from '../assets/img/examples/cynthia-del-rio.jpg';
// @ts-ignore
import work4 from '../assets/img/examples/mariya-georgieva.jpg';
// @ts-ignore
import work5 from '../assets/img/examples/clem-onojegaw.jpg';

import styles from '../assets/jss/nextjs-material-kit/pages/profilePage.js';

const GetAllProfiles = gql`
  query profilesList {
    profiles {
      id
      user {
        id
        username
        avatar
        email
      }
      status
      location
      bio
      githubusername
      website
      education {
        description
        fieldofstudy
        school
        degree
        from
        current
        to
      }
      experience {
        description
        company
        current
        location
        from
        to
      }
    }
  }
`;

// @ts-ignore
const useStyles = makeStyles(styles);

export default function StudentNetwork(props) {
  const { data, loading, error } = useQuery(GetAllProfiles);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  if (loading) return <p>....</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  return (
    <div>
      <Header
        color='transparent'
        brand='The Alumni Network'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require(// @ts-ignore
        '../assets/img/profile-bg.jpg')}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer
              // @ts-ignore
              justify='center'
            >
              <GridItem
                // @ts-ignore
                xs={12}
                sm={12}
                md={6}
              >
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt='...' className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
            <GridContainer
              // @ts-ignore
              justify='center'
            >
              <GridItem
                // @ts-ignore
                xs={12}
                sm={12}
                md={8}
                className={classes.navWrapper}
              >
                <NavPills
                  alignCenter
                  color='primary'
                  tabs={[
                    {
                      tabButton: 'Studio',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer
                          // @ts-ignore
                          justify='center'
                        >
                          <GridItem
                            // @ts-ignore
                            xs={12}
                            sm={12}
                            md={4}
                          >
                            <img
                              alt='...'
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem
                            // @ts-ignore
                            xs={12}
                            sm={12}
                            md={4}
                          >
                            <img
                              alt='...'
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: 'Work',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer
                          // @ts-ignore
                          justify='center'
                        >
                          <GridItem
                            // @ts-ignore
                            xs={12}
                            sm={12}
                            md={4}
                          >
                            <img
                              alt='...'
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem
                            // @ts-ignore
                            xs={12}
                            sm={12}
                            md={4}
                          >
                            <img
                              alt='...'
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: 'Favorite',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer
                          // @ts-ignore
                          justify='center'
                        >
                          <GridItem
                            // @ts-ignore
                            xs={12}
                            sm={12}
                            md={4}
                          >
                            <img
                              alt='...'
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem
                            // @ts-ignore
                            xs={12}
                            sm={12}
                            md={4}
                          >
                            <img
                              alt='...'
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <h1>StudentNetwork</h1>;
      {data.profiles.map(profile => (
        <h2>{profile.user.username}</h2>
      ))}
      <Footer />
    </div>
  );
}
