import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { cardBodyStyle } from '../../../assets/jss/nextjs-material/components/subComponents/card/cardBodyStyle';

const useStyles = makeStyles(cardBodyStyle);
interface Props {
  props: any;
}
const CardBody: React.FC<Props> | any = ({
  props
}: Props): React.ReactElement => {
  const classes = useStyles();
  const { className, children, ...rest } = props;

  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });

  return (
    <React.Fragment>
      <div className={cardBodyClasses} {...rest}>
        {children}
      </div>
    </React.Fragment>
  );
};

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default CardBody;
