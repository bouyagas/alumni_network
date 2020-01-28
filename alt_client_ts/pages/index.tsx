import React, { Component } from 'react';
import Router from 'next/router';
import '../assets/scss/nestjs-material.scss';
export default class Index extends Component {
  componentDidMount = () => {
    Router.push('/landing');
  };

  render() {
    return <div />;
  }
}
