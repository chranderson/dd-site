import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  Button,
} from '../components';

import {
  Header,
} from '../containers';

import Welcome from './Welcome';

import '../index.css';
import App from '../App';

storiesOf('App', module)
  .add('default view', () => (
    <App />
  ));

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button action={action('clicked')} id="yolo" margin="10" text="Hello Button" />
  ))
  .add('with icon', () => (
    <Button action={action('clicked')} id="yolo" margin="10" text="😀 😎 👍 💯" />
  ));

storiesOf('Header', module)
  .add('default view', () => (
    <Header />
  ))
