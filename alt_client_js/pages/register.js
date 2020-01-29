// @ts-nocheck
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import CardHeader from '../components/Card/CardHeader';
import CardFooter from '../components/Card/CardFooter';
import CustomInput from '../components/CustomInput/CustomInput';

import styles from '../assets/jss/nextjs-material-kit/pages/loginPage';
import image from '../assets/img/register_user.jpeg';

// @ts-ignore
const useStyles = makeStyles(styles);

const Register_User = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
    $comfirmPassword: String!
  ) {
    register(
      input: {
        username: $username
        email: $email
        password: $password
        comfirmPassword: $comfirmPassword
      }
    ) {
      token
      user {
        username
        email
        avatar
      }
    }
  }
`;

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [comfirmPassword, setComfirmPassword] = React.useState('');

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  const handleChangeComfirmPassword = event => {
    setComfirmPassword(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    registerUser();
  };

  const [registerUser, { loading, error, data }] = useMutation(Register_User, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      input: {
        username,
        email,
        password,
        comfirmPassword
      }
    }
  });

  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color='transparent'
        brand='The Alumni Network'
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      >
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color='primary' className={classes.cardHeader}>
                    <h4>Regisger</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={e => e.preventDefault()}
                      >
                        <i className={'fab fa-twitter'} />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={e => e.preventDefault()}
                      >
                        <i className={'fab fa-facebook'} />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={e => e.preventDefault()}
                      >
                        <i className={'fab fa-github'} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    <CustomInput
                      labelText='Username...'
                      id='first'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        name: 'username',
                        value: { username },
                        onChange: { handleChangeUsername },
                        endAdornment: (
                          <InputAdornment position='end'>
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText='Email...'
                      id='email'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'email',
                        value: { email },
                        onChange: { handleChangeEmail },
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText='Password'
                      id='pass'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password',
                        value: { password },
                        onChange: { handleChangePassword },
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                    <CustomInput
                      labelText='Confirm Password'
                      id='pass'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password',
                        value: { comfirmPassword },
                        onChange: { handleChangeComfirmPassword },
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color='primary' size='lg'>
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
