import React, { useState } from 'react';
import styles from './WoundRim.module.css';
export default function WoundRim({ clickHandler }) {
  const [wr, setWr] = useState('00000000');
  let primary_color = 'rgba(219 , 251, 38 , 1)'; //part color
  let eclipse_background = 'rgb(242, 242, 242)'; // eclipse background
  let hover_color = 'orange'; // hover color
  let second_color = '#f03'; // selected color
  let border_color = 'grey';
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  function click(e, i) {
    let element = e.target;
    let fill = element.getAttribute('fill');

    if (fill == hover_color) {
      element.setAttribute('fill', second_color);
      setWr(setCharAt(wr, i - 1, '1'));
    } else {
      element.setAttribute('fill', primary_color);
      setWr(setCharAt(wr, i - 1, '0'));
    }
  }

  function hover(e) {
    let element = e.target;
    let fill = element.getAttribute('fill');
    if (fill != second_color) {
      element.setAttribute('fill', hover_color);
    }
  }

  function out(e) {
    let element = e.target;
    let fill = element.getAttribute('fill');
    if (fill != second_color) {
      element.setAttribute('fill', primary_color);
    }
  }

  return (
    <>
      <svg
        className={styles.svg}
        width="800"
        height="200"
        viewBox="0 180 800 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            onClick={(e) => click(e, 1)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_1"
            d="m425.03306,201.91925l-85.42997,44.02527l28.53119,-89.48989l56.89877,45.46462z"
            transform="rotate(-17.1245 382.318 201.2)"
          />
          <path
            onClick={(e) => click(e, 2)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_2"
            d="m458.74054,238.92301l-89.23788,41.28147l34.58167,-89.92663l54.65622,48.64516z"
            transform="rotate(24.617 414.122 235.241)"
          />
          <path
            onClick={(e) => click(e, 3)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_3"
            d="m455.57033,287.58873l-85.42996,44.02527l28.22114,-92.37982l57.20882,48.35455z"
            transform="rotate(72.4445 412.855 285.424)"
          />
          <path
            onClick={(e) => click(e, 4)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_4"
            d="m422.01902,322.83537l-87.63023,39.31374l34.58167,-89.92663l53.04856,50.61289z"
            transform="rotate(114.186 378.204 317.186)"
          />
          <path
            onClick={(e) => click(e, 5)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_5"
            d="m354.4892,355.59036l-0.42891,-97.60131l-69.4853,68.38905l69.91421,29.21226z"
          />
          <path
            onClick={(e) => click(e, 6)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_6"
            d="m284.28367,325.9957l68.58381,-68.17176l-98.17271,-0.17953l29.5889,68.3513z"
          />
          <path
            onClick={(e) => click(e, 7)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_7"
            d="m255.0408,256.9666l98.94467,0.05801l-69.75276,-67.34841l-29.1919,67.2904z"
          />
          <path
            onClick={(e) => click(e, 8)}
            onMouseOver={(e) => hover(e)}
            onMouseOut={(e) => out(e)}
            stroke={border_color}
            fill={primary_color}
            id="svg_8"
            d="m284.61224,189.10232l69.53185,67.22827l1.04832,-93.53444l-70.58017,26.30617z"
          />
          <ellipse
            stroke="#000"
            fill={eclipse_background}
            cx="355.49556"
            cy="259.39339"
            id="svg_44"
            rx="27.76787"
            ry="24.92858"
          />
          <ellipse
            transform="rotate(-0.236437 354.329 258.777)"
            stroke={border_color}
            strokeWidth="10"
            ry="94.65064"
            rx="95.86032"
            id="svg_41"
            cy="258.77737"
            cx="354.32948"
            fill="none"
          />
        </g>
        <defs>
          <filter id="svg_4_blur" x="-50%" y="-50%" width="100%" height="100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
          </filter>
        </defs>
      </svg>
      <button
        type="button"
        className={styles.button}
        onClick={() => clickHandler(wr)}
      >
        تایید
      </button>
    </>
  );
}

export { WoundRim };
