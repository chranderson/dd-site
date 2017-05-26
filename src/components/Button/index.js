import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './button.css';

export default class Button extends PureComponent {

  static propTypes = {
    action: PropTypes.func,
    size: PropTypes.oneOf([
      'default',
      'small'
    ]),
    theme: PropTypes.oneOf([
      'danger', // red button - Delete, Remove, Reject
      'link', // blue link - Cancel, Show, Hide
      'primary', // blue button - Accept, Add, Execute, Submit, Update
      'secondary', // orange button - Select, Navigate, Undo
    ]),
    disabled: PropTypes.bool,
    icon: PropTypes.func,
    id: PropTypes.string,
    btnGroup: PropTypes.bool,
    margin: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf([ // passed in to native button type
      'button',
      'submit'
    ])
  }

  static defaultProps = {
    theme: 'primary',
    disabled: false,
    btnGroup: false,
    margin: '0 0 0 0',
    size: 'default',
    text: 'Button',
    type: 'button'
  }


  handleClick = () => {
    // console.log('handleClick id: ', this.props.id);
    this.props.action(this.props.id);
  }

  render() {
    // const styles = require('./button.scss');

    const {
      // action,
      // theme,
      disabled,
      icon,
      id,
      btnGroup,
      margin,
      // size,
      text,
      title,
      type,
    } = this.props; // eslint-disable


    // const btnSize = size === 'default'
    //               ? styles.default
    //               : styles.small;
    //
    // const btnTheme = styles[theme];
    //
    // const btnStyle = theme !== 'link'
    //                ? `${styles.button} ${btnSize} ${btnTheme} ${!inBtnGroup ? styles.singleBtn : styles.groupBtn}`
    //                : `${btnSize} ${btnTheme}`;
    //
    const soloBtn = !btnGroup ? { borderRadius: 2 } : null;

    const dynamicStyle = {
      ...soloBtn,
      margin: margin,
    };

    return (
      <button className={`button defaultBtn`}
              disabled={disabled}
              id={id}
              onClick={this.handleClick}
              style={dynamicStyle}
              title={title}
              type={type}>
        <div className="btnBody">
          { icon ? icon : null }
          {text}
        </div>
      </button>
    );
  }
}


// import React from 'react';
//
// const buttonStyles = {
//   border: '1px solid #eee',
//   borderRadius: 3,
//   backgroundColor: '#FFFFFF',
//   cursor: 'pointer',
//   fontSize: 15,
//   padding: '3px 10px',
//   margin: 10,
// };
//
// const Button = ({ children, onClick }) => (
//   <button
//     style={buttonStyles}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );
//
// Button.propTypes = {
//   children: React.PropTypes.string.isRequired,
//   onClick: React.PropTypes.func,
// };
//
// export default Button;
