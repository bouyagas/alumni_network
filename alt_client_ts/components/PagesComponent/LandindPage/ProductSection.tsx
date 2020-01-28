import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chat, VerifiedUser, Fingerprint } from '@material-ui/icons';
import GridContainer from '../../SubComponents/Grid/GridContainer';
import GridItem from '../../SubComponents/Grid/GridItem';
import InfoArea from '../../SubComponents/InfoArea/InfoArea';
import { productStyle } from '../../../assets/jss/nextjs-material/components/pagesComponent/landingPage/productStyle';

// @ts-ignore
const useStyles = makeStyles(productStyle);

interface Props {}

const ProductSection: React.FC<Props> = ({}: Props): React.ReactElement => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.section}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let{"'"}s talk product</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn
              {"'"}t scroll to get here. Add a button if you want the user to
              see more.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title='Free Chat'
                description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                icon={Chat}
                iconColor='info'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title='Verified Users'
                description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                icon={VerifiedUser}
                iconColor='success'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title='Fingerprint'
                description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                icon={Fingerprint}
                iconColor='danger'
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSection;
