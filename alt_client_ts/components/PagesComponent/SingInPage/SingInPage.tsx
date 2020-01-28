import React from 'react';
import PropTypes from 'prop-types';

interface Props {}

const SignIn: React.FC<Props> | any = ({}: Props): React.ReactElement => {
  return (
    <React.Fragment>
      <div>
        <h1>SignUp</h1>
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {
  Signin: PropTypes.string
};

export default SignIn;
