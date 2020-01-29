import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/CustomButtons/Button';

import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ready For A Coding Bootcamp</h2>
          <h4 className={classes.description}>
            The decision to enroll in a coding Bootcamp is a life-changing one.
            Bootcamps are fast tracks to coding success, but they also require
            some preparation. Before jumping into a course, make sure you’ve
            prepared for all of the followings. Choosing the right coding boot
            camp is a big decision. We want to help you to narrow down your
            options and Then check out the best coding boot that's camps suits
            you
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Name'
                  id='name'
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='Your Email'
                  id='email'
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText='Your Message'
                id='message'
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color='primary'>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
