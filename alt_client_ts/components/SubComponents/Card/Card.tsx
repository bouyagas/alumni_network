import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { cardStyle } from '../../../assets/jss/nextjs-material/components/subComponents/card/cardStyle';

// @ts-ignore
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
    <React.Fragment>
      <div className={cardClasses} {...rest}>
        {children}
      </div>
    </React.Fragment>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
};

export default Card;
