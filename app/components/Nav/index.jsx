import React from 'react';
import { } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import imageLogoDevhack from '../../../assets/img/logo.png';

const Navig = () =>
  (
    // <div>
    //
    // </div>
    <div>
      <style jsx>{`
        ul {
            list-style-type: none;
            margin: 15px;
            padding: 10px;
            overflow: hidden;
            background-color: #fff;
        }

        li {
            float: left;
            margin: 0 10px;
        }

        li a {
            display: block;
            color: black;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        li img {
            margin: -20px 0;
        }

        /* Change the link color to #111 (black) on hover */
        li a:hover {
            background-color: #fff;
        }
        .dere {
          float:right
        }
      `}
      </style>
      <ul>
        <li><img src={imageLogoDevhack} alt="logo" /></li>
        <li className="dere"><button className="btn btn-sm btn-danger btn-right">Comunidad</button></li>
        <li className="dere"><h4>Contactanos</h4></li>
      </ul>
    </div>
  );

export default Navig;
