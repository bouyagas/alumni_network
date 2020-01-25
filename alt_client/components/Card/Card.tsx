import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { cardStyle } from '../../assets/jss/nextjs-material-kit/components/cardStyle';

// @ts-check
const useStyles = makeStyles(cardStyle);

interface Props {
  props: any;
}

const Card: React.FC<Props> | any = ({ props }: Props): React.ReactElement => {
  const classes = useStyles();
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
};

export default Card;
