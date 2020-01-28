import React from 'react';
import PropTypes from 'prop-types';

interface Props {}

const SignUp: React.FC<Props> | any = ({}: Props): React.ReactElement => {
  return (
    <React.Fragment>
      <div>
        <h1>SignUp</h1>
      </div>
    </React.Fragment>
  );
};

SignUp.propTypes = {
  Signup: PropTypes.string
};

export default SignUp;
