import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { cardFooterStyle } from '../../../assets/jss/nextjs-material/components/subComponents/card/cardFooterStyle';

const useStyles = makeStyles(cardFooterStyle);

interface Props {
  props: any;
}
const CardFooter: React.FC<Props> | any = ({
  props
}: Props): React.ReactElement => {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return (
    <React.Fragment>
      <div className={cardFooterClasses} {...rest}>
        {children}
      </div>
    </React.Fragment>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default CardFooter;
