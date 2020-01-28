import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../SubComponents/Grid/GridContainer';
import GridItem from '../../SubComponents/Grid/GridItem';
import CustomInput from '../../SubComponents/CustomInput/CustomInput';
import Button from '../../SubComponents/CustomButtons/Button';

import { workStyle } from '../../../assets/jss/nextjs-material/components/pagesComponent/landingPage/workStyle';

// @ts-ignore
const useStyles = makeStyles(workStyle);

interface Props {}

const WorkSection: React.FC<Props> = ({}: Props): React.ReactElement => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.section}>
        <GridContainer justify='center'>
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
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
    </React.Fragment>
  );
};

export default WorkSection;
