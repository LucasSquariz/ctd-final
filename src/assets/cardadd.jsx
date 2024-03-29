import { type } from 'os';
import React from 'react';

// eslint-disable-next-line react/prop-types
function Cardadd({ color }) {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="#292D32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8.5H13.5"
        stroke="#c1fd35"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6 16.5H8"
        stroke="#c1fd35"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M10.5 16.5H14.5"
        stroke="#c1fd35"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
        stroke="#c1fd35"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M16.5 6.25H22"
          stroke="#c1fd35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19.25 9V3.5"
          stroke="#c1fd35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Cardadd;
