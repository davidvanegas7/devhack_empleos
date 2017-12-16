import React from 'react';
import { Button } from 'reactstrap';
import Link from 'react-toolbox/lib/link';
// import 'bootstrap/dist/css/bootstrap.css';

import imageLogoDevhack from '../../../assets/img/logo.png';

const Home = () =>
  (
    <div>
      <img src={imageLogoDevhack} alt="logo" />
      <h3>
        This is the DEVHACK HOME PAGE
      </h3>
      <Button color="primary">primary</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Link href="/" label="Home" />
    </div>
  );

export default Home;
