import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  MenuItem,
  MenuList,
  ClickAwayListener,
  Paper,
  Grow,
  Divider,
  Popper,
  Icon
} from '@material-ui/core';

import Button from '../CustomButtons/Button';

import { customDropdownStyle } from '../../../assets/jss/nextjs-material/components/subComponents/customDropdown/customDropdown';

// @ts-ignore
const useStyles = makeStyles(customDropdownStyle);

interface Props {
  props: any;
}

const CustomDropdown: React.FC<Props> | any = ({
  props
}: Props): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | any>(null);

  const classes = useStyles();

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
    navDropdown
  } = props;

  const handleClick = (event: any) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (param: any) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = (event: any) => {
    if (anchorEl.contains(event.target)) {
      return null;
    }
    setAnchorEl(null);
  };

  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });

  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + 'Hover']]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });

  let icon = null;
  switch (typeof buttonIcon) {
    case 'object':
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case 'string':
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <React.Fragment>
      <div>
        <Button
          aria-label='Notifications'
          aria-owns={anchorEl ? 'menu-list' : null}
          aria-haspopup='true'
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? 'top-start'
              : 'top'
            : left
            ? 'bottom-start'
            : 'bottom'
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
          [classes.pooperNav]: Boolean(anchorEl) && navDropdown
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            // @ts-ignore
            id='menu-list'
            style={
              dropup
                ? { transformOrigin: '0 100% 0' }
                : { transformOrigin: '0 0 0' }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role='menu' className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={classes.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop: any, key: any) => {
                    if (prop.divider) {
                      return (
                        <Divider
                          key={key}
                          onClick={() => handleClose('divider')}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleClose(prop)}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary'
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    'black',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  navDropdown: PropTypes.bool,
  onClick: PropTypes.func
};

export default CustomDropdown;
