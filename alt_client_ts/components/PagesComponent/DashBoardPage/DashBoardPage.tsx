import React from 'react';
import PropTypes from 'prop-types';

interface Props {}

const DashBoardPage: React.FC<Props> = ({}: Props): React.ReactElement => {
  return (
    <React.Fragment>
      <div>
        <h1>DashBoard</h1>
      </div>
    </React.Fragment>
  );
};

DashBoardPage.propTypes = {
  Signup: PropTypes.string
};

export default DashBoardPage;
