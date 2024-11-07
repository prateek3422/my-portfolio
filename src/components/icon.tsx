import { p } from "framer-motion/client";
import { Earth, Github, Globe2Icon, MailIcon } from "lucide-react";
export type IconProps = React.HTMLAttributes<SVGElement>;
export const ICONS = {
  globe: <Earth />,
  mail: <MailIcon />,

  Html: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
      <path
        fill="#FFF"
        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
      ></path>
      <path
        fill="#EEE"
        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
      ></path>
    </svg>
  ),
  Css: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
      <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
      <path
        fill="#FFF"
        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
      ></path>
      <path
        fill="#EEE"
        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
      ></path>
    </svg>
  ),
  javascript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
      <path
        fill="#000001"
        d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
      ></path>
    </svg>
  ),
  React: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="11.999" r="2.147" fill="#53C1DE"></circle>
      <path
        fill="#53C1DE"
        d="M4.514,15.801c0.211,0.07,0.422,0.141,0.638,0.202c-0.07,0.281-0.131,0.558-0.188,0.844	c-0.492,2.602-0.108,4.664,1.12,5.372c1.266,0.731,3.394-0.019,5.466-1.833c0.164-0.145,0.328-0.295,0.492-0.455	c0.206,0.202,0.422,0.394,0.637,0.581c2.006,1.725,3.989,2.423,5.213,1.716c1.266-0.731,1.678-2.948,1.144-5.648	c-0.042-0.206-0.089-0.417-0.141-0.633c0.15-0.042,0.295-0.089,0.441-0.136C22.041,14.916,24,13.467,24,11.981	c0-1.42-1.847-2.798-4.397-3.675V8.305c-0.253-0.084-0.506-0.164-0.759-0.239c0.042-0.173,0.08-0.347,0.117-0.52	c0.577-2.794,0.197-5.038-1.083-5.779c-1.233-0.708-3.244,0.028-5.278,1.8c-0.202,0.173-0.398,0.356-0.586,0.539	c-0.127-0.122-0.258-0.244-0.389-0.361C9.492,1.851,7.355,1.054,6.075,1.8C4.847,2.513,4.481,4.627,4.997,7.269	c0.052,0.263,0.108,0.52,0.173,0.783C4.87,8.136,4.575,8.23,4.298,8.329C1.795,9.196,0,10.565,0,11.981	C0,13.444,1.912,14.91,4.514,15.801z M10.889,19.62c-0.773,0.708-1.669,1.27-2.644,1.655c-0.52,0.248-1.12,0.272-1.655,0.061	c-0.745-0.431-1.055-2.086-0.633-4.313c0.052-0.262,0.108-0.525,0.173-0.783c1.05,0.225,2.109,0.38,3.183,0.459	c0.619,0.877,1.298,1.716,2.025,2.503c-0.15,0.145-0.3,0.286-0.45,0.417L10.889,19.62z M16.842,10.818	c-0.22-0.413-0.445-0.825-0.68-1.228c-0.23-0.398-0.469-0.792-0.717-1.181c0.755,0.094,1.477,0.22,2.152,0.375	C17.381,9.478,17.128,10.153,16.842,10.818z M16.851,13.152c0.3,0.68,0.563,1.369,0.792,2.077c-0.727,0.164-1.462,0.291-2.203,0.375	c0.253-0.394,0.492-0.797,0.727-1.2C16.406,13.991,16.631,13.574,16.851,13.152z M16.309,11.986	c-0.314,0.647-0.652,1.284-1.012,1.912c-0.356,0.623-0.736,1.228-1.134,1.828c-0.698,0.052-1.425,0.075-2.161,0.075	c-0.736,0-1.448-0.023-2.137-0.066c-0.408-0.595-0.792-1.205-1.153-1.828c-0.361-0.623-0.694-1.256-1.008-1.903H7.702	c0.309-0.647,0.647-1.28,1.003-1.903c0.356-0.623,0.741-1.228,1.144-1.823c0.703-0.052,1.42-0.08,2.152-0.08s1.453,0.028,2.152,0.08	c0.398,0.591,0.778,1.195,1.139,1.814C15.653,10.711,15.99,11.344,16.309,11.986z M7.832,9.599c-0.23,0.398-0.455,0.805-0.666,1.218	c-0.295-0.698-0.544-1.382-0.75-2.043c0.675-0.15,1.392-0.272,2.137-0.366C8.306,8.797,8.062,9.195,7.832,9.599z M7.167,13.189	L7.167,13.189c0.216,0.413,0.436,0.821,0.67,1.224c0.239,0.408,0.483,0.816,0.741,1.214c-0.731-0.08-1.458-0.197-2.175-0.352	C6.609,14.6,6.867,13.902,7.167,13.189z M12.038,18.48L12.038,18.48c-0.478-0.515-0.956-1.086-1.42-1.701	c0.45,0.019,0.914,0.028,1.383,0.028c0.483,0,0.956-0.009,1.425-0.033C12.995,17.369,12.531,17.937,12.038,18.48z M18.165,19.888	L18.165,19.888c-0.043,0.571-0.324,1.105-0.774,1.466c-0.745,0.431-2.334-0.131-4.05-1.603c-0.197-0.169-0.394-0.352-0.595-0.539	c0.717-0.792,1.378-1.631,1.978-2.512c1.073-0.089,2.142-0.253,3.197-0.492c0.047,0.192,0.089,0.384,0.127,0.572	C18.278,17.793,18.315,18.847,18.165,19.888z M18.572,9.032c0.244,0.07,0.478,0.145,0.703,0.22c2.184,0.75,3.717,1.866,3.717,2.719	c0,0.919-1.636,2.105-3.975,2.878c-0.131,0.042-0.262,0.084-0.398,0.122c-0.328-1.022-0.731-2.02-1.195-2.991	C17.874,11.024,18.254,10.039,18.572,9.032z M13.26,4.326L13.26,4.326c1.745-1.518,3.371-2.113,4.112-1.687	c0.792,0.455,1.097,2.292,0.6,4.706c-0.033,0.159-0.066,0.314-0.108,0.469c-1.041-0.234-2.095-0.403-3.155-0.497	C14.1,6.444,13.434,5.61,12.712,4.827C12.895,4.654,13.073,4.49,13.26,4.326z M12.01,5.545c0.492,0.534,0.956,1.096,1.387,1.677	c-0.928-0.042-1.861-0.042-2.789,0C11.067,6.618,11.541,6.056,12.01,5.545z M6.572,2.672C7.36,2.213,9.108,2.869,10.95,4.5	c0.117,0.103,0.234,0.216,0.356,0.328C10.579,5.61,9.909,6.444,9.295,7.316C8.236,7.41,7.186,7.574,6.145,7.804	C6.084,7.565,6.033,7.321,5.981,7.077C5.54,4.808,5.831,3.098,6.572,2.672z M4.627,9.28c0.267-0.094,0.539-0.178,0.811-0.258	c0.319,1.017,0.703,2.016,1.148,2.981c-0.45,0.98-0.839,1.992-1.162,3.023l-0.001,0.001c-0.197-0.056-0.389-0.117-0.581-0.183	c-0.998-0.314-2.133-0.811-2.953-1.462c-0.473-0.328-0.792-0.834-0.881-1.402C1.008,11.122,2.489,10.025,4.627,9.28z"
      ></path>
    </svg>
  ),
  Nextjs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
        x1="24"
        x2="24"
        y1="43.734"
        y2="4.266"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0a070a"></stop>
        <stop offset=".465" stopColor="#2b2b2b"></stop>
        <stop offset="1" stopColor="#4b4b4b"></stop>
      </linearGradient>
      <circle
        cx="24"
        cy="24"
        r="19.734"
        fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
      ></circle>
      <rect
        width="3.023"
        height="15.996"
        x="15.992"
        y="16.027"
        fill="#fff"
      ></rect>
      <linearGradient
        id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
        x1="30.512"
        x2="30.512"
        y1="33.021"
        y2="18.431"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".377" stopColor="#fff" stopOpacity="0"></stop>
        <stop offset=".666" stopColor="#fff" stopOpacity=".3"></stop>
        <stop offset=".988" stopColor="#fff"></stop>
      </linearGradient>
      <rect
        width="2.953"
        height="14.59"
        x="29.035"
        y="15.957"
        fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
      ></rect>
      <linearGradient
        id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
        x1="22.102"
        x2="36.661"
        y1="21.443"
        y2="40.529"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".296" stopColor="#fff"></stop>
        <stop offset=".521" stopColor="#fff" stopOpacity=".5"></stop>
        <stop offset=".838" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
      <polygon
        fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
        points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
      ></polygon>
    </svg>
  ),
  nodejs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#21a366"
        d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
      ></path>
      <path
        fill="#21a366"
        d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
      ></path>
    </svg>
  ),
  tailwindcss: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#00acc1"
        d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
      ></path>
    </svg>
  ),
  framerMotion: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.811,1H19c0.552,0,1,0.448,1,1v6c0,0.552-0.448,1-1,1h-7L5.28,2.28C4.808,1.808,5.142,1,5.811,1z"
        opacity=".35"
      ></path>
      <path d="M5,9h7l6.72,6.72c0.472,0.472,0.138,1.28-0.53,1.28H5c-0.552,0-1-0.448-1-1v-6C4,9.448,4.448,9,5,9z"></path>
      <path
        d="M4,10v6.006c0,0.637,0.253,1.247,0.703,1.697l6.017,6.017c0.472,0.472,1.28,0.138,1.28-0.53V9H5 C4.448,9,4,9.448,4,10z"
        opacity=".35"
      ></path>
    </svg>
  ),
  mongodb: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#689f38"
        d="M34,26C34,13,24,2,24,2S14,13,14,26c0,10.698,6.768,13.268,9.166,13.843L24,9l0.834,30.843 C27.232,39.268,34,36.698,34,26z"
      ></path>
      <path
        fill="#689f38"
        d="M23.166,39.843L23,46h2l-0.166-6.157C24.318,39.967,24,40,24,40S23.682,39.967,23.166,39.843z"
      ></path>
    </svg>
  ),
  express: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
    </svg>
  ),
  typescript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
      <polygon
        fill="#fff"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      ></polygon>
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      ></path>
    </svg>
  ),
  Github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path d="M15.673,21.633c-0.152,0.057 -0.322,0.035 -0.456,-0.057c-0.133,-0.093 -0.212,-0.245 -0.212,-0.407c-0.005,-0.842 -0.005,-2.139 -0.005,-2.139c0,-0.689 -0.241,-1.351 -0.728,-1.838c-0.21,-0.21 -0.451,-0.38 -0.713,-0.505c2.352,-0.547 4.074,-2.299 4.074,-4.373c0,-0.902 -0.325,-1.743 -0.887,-2.451c0.364,-1.281 0.021,-2.533 0.021,-2.533c-1.333,-0.013 -2.137,0.421 -2.579,0.79c-0.672,-0.229 -1.412,-0.356 -2.188,-0.356c-0.776,-0 -1.516,0.127 -2.188,0.356c-0.442,-0.369 -1.246,-0.803 -2.579,-0.79c0,0 -0.343,1.252 0.021,2.533c-0.562,0.708 -0.887,1.549 -0.887,2.451c-0,2.074 1.722,3.826 4.074,4.373c-0.262,0.125 -0.503,0.295 -0.713,0.505c-0.487,0.487 -0.728,1.149 -0.728,1.838l0,2.139c0,0.164 -0.08,0.318 -0.214,0.411c-0.135,0.094 -0.307,0.116 -0.461,0.058c-3.702,-1.47 -6.325,-5.085 -6.325,-9.308c0,-5.519 4.481,-10 10,-10c5.519,0 10,4.481 10,10c0,4.223 -2.623,7.838 -6.327,9.303Z"></path>
    </svg>
  ),
  figma: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#e64a19"
        d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
      ></path>
      <path
        fill="#7c4dff"
        d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
      ></path>
      <path
        fill="#66bb6a"
        d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
      ></path>
      <path
        fill="#ff7043"
        d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
      ></path>
      <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
    </svg>
  ),
  graphql: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#e8457c"
        d="M24.5,44.661L7,34.32V13.68L24.5,3.339L42,13.68v20.64L24.5,44.661z M9,33.18l15.5,9.159L40,33.18	V14.82L24.5,5.661L9,14.82V33.18z"
      ></path>
      <circle cx="24.5" cy="5" r="4" fill="#e8457c"></circle>
      <circle cx="24.5" cy="43" r="4" fill="#e8457c"></circle>
      <circle cx="8.5" cy="33" r="4" fill="#e8457c"></circle>
      <circle cx="40.5" cy="33" r="4" fill="#e8457c"></circle>
      <circle cx="8.5" cy="15" r="4" fill="#e8457c"></circle>
      <circle cx="40.5" cy="15" r="4" fill="#e8457c"></circle>
      <path
        fill="#e8457c"
        d="M42.72,34.5H6.28L24.5,2.478L42.72,34.5z M9.72,32.5h29.56L24.5,6.522L9.72,32.5z"
      ></path>
    </svg>
  ),
  supabase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <g id="Ð¡Ð»Ð¾Ð¹_1">
        <path
          fill="#71c674"
          d="M43.9,22.5L27.5,43.3c-1.2,1.4-3.5,0.6-3.5-1.2V30H6.6c-2.1,0-3.3-2.5-2-4.1L20.7,5.1c1.1-1.5,3.4-0.7,3.4,1.2 v12.1h17.7C44.1,18.4,45.3,20.8,43.9,22.5z"
        ></path>
      </g>
    </svg>
  ),
  postgresql: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#fff"
        d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
      ></path>
      <path
        fill="#0277bd"
        d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
      ></path>
      <path
        fill="#0277bd"
        d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
      ></path>
      <path
        fill="#0277bd"
        d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
      ></path>
    </svg>
  ),
  kafka: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 64 64"
    >
      <linearGradient
        id="McNNGNAksUGwd4dZoMtSia_fOhLNqGJsUbJ_gr1"
        x1="25"
        x2="25"
        y1="24.681"
        y2="35.468"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6dc7ff"></stop>
        <stop offset=".699" stopColor="#e6abff"></stop>
      </linearGradient>
      <circle
        cx="25"
        cy="32"
        r="6"
        fill="url(#McNNGNAksUGwd4dZoMtSia_fOhLNqGJsUbJ_gr1)"
      ></circle>
      <linearGradient
        id="McNNGNAksUGwd4dZoMtSib_fOhLNqGJsUbJ_gr2"
        x1="25"
        x2="25"
        y1="2.683"
        y2="15.247"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6dc7ff"></stop>
        <stop offset=".699" stopColor="#e6abff"></stop>
      </linearGradient>
      <circle
        cx="25"
        cy="9"
        r="5"
        fill="url(#McNNGNAksUGwd4dZoMtSib_fOhLNqGJsUbJ_gr2)"
      ></circle>
      <linearGradient
        id="McNNGNAksUGwd4dZoMtSic_fOhLNqGJsUbJ_gr3"
        x1="45.5"
        x2="45.5"
        y1="14.815"
        y2="26.122"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6dc7ff"></stop>
        <stop offset=".699" stopColor="#e6abff"></stop>
      </linearGradient>
      <path
        fill="url(#McNNGNAksUGwd4dZoMtSic_fOhLNqGJsUbJ_gr3)"
        d="M49.4,18.25c0.6,1.04,0.76,2.25,0.45,3.41 c-0.31,1.17-1.06,2.14-2.1,2.74c-0.69,0.39-1.46,0.6-2.24,0.6c-0.39,0-0.79-0.05-1.17-0.15c-1.17-0.31-2.14-1.06-2.74-2.1 c-0.6-1.04-0.76-2.25-0.45-3.41c0.31-1.17,1.06-2.14,2.1-2.74c0.69-0.39,1.46-0.6,2.24-0.6c0.39,0,0.79,0.05,1.17,0.15 C47.83,16.46,48.8,17.21,49.4,18.25z"
      ></path>
      <linearGradient
        id="McNNGNAksUGwd4dZoMtSid_fOhLNqGJsUbJ_gr4"
        x1="45.5"
        x2="45.5"
        y1="38.414"
        y2="49.233"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6dc7ff"></stop>
        <stop offset=".699" stopColor="#e6abff"></stop>
      </linearGradient>
      <path
        fill="url(#McNNGNAksUGwd4dZoMtSid_fOhLNqGJsUbJ_gr4)"
        d="M49.85,42.34 c0.31,1.16,0.15,2.37-0.45,3.41c-0.6,1.04-1.57,1.79-2.73,2.1c-0.39,0.1-0.79,0.15-1.18,0.15c-0.78,0-1.55-0.21-2.24-0.6 c-1.04-0.6-1.79-1.57-2.1-2.74c-0.31-1.16-0.15-2.37,0.45-3.41c0.6-1.04,1.57-1.79,2.73-2.1c0.39-0.1,0.79-0.15,1.18-0.15 c0.78,0,1.55,0.21,2.24,0.6C48.79,40.2,49.54,41.17,49.85,42.34z"
      ></path>
      <linearGradient
        id="McNNGNAksUGwd4dZoMtSie_fOhLNqGJsUbJ_gr5"
        x1="25"
        x2="25"
        y1="48.976"
        y2="58.584"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6dc7ff"></stop>
        <stop offset=".699" stopColor="#e6abff"></stop>
      </linearGradient>
      <circle
        cx="25"
        cy="55"
        r="5"
        fill="url(#McNNGNAksUGwd4dZoMtSie_fOhLNqGJsUbJ_gr5)"
      ></circle>
      <linearGradient
        id="McNNGNAksUGwd4dZoMtSif_fOhLNqGJsUbJ_gr6"
        x1="34.503"
        x2="34.503"
        y1="0"
        y2="64"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1a6dff"></stop>
        <stop offset="1" stopColor="#c822ff"></stop>
      </linearGradient>
      <path
        fill="url(#McNNGNAksUGwd4dZoMtSif_fOhLNqGJsUbJ_gr6)"
        d="M49.75,36.14 C48.44,35.38,46.99,35,45.51,35c-0.74,0-1.48,0.09-2.21,0.29c-1.94,0.52-3.6,1.68-4.74,3.31l-4.43-2.54C34.68,34.82,35,33.45,35,32 s-0.32-2.82-0.87-4.06l4.43-2.54c1.14,1.63,2.8,2.79,4.74,3.31c0.73,0.2,1.48,0.29,2.21,0.29c1.48,0,2.93-0.38,4.24-1.14 c1.97-1.13,3.37-2.97,3.96-5.16c0.59-2.19,0.29-4.48-0.85-6.45c-1.13-1.97-2.97-3.37-5.16-3.96c-0.73-0.2-1.47-0.29-2.21-0.29 c-1.48,0-2.93,0.38-4.24,1.14c-1.97,1.13-3.37,2.97-3.96,5.16c-0.48,1.79-0.36,3.65,0.32,5.34l-4.48,2.56 c-1.63-2.28-4.19-3.86-7.13-4.15v-4.11c4.49-0.5,8-4.32,8-8.94c0-4.96-4.04-9-9-9s-9,4.04-9,9c0,4.62,3.51,8.44,8,8.94v4.11 c-5.05,0.5-9,4.77-9,9.95s3.95,9.45,9,9.95v4.11c-4.49,0.5-8,4.32-8,8.94c0,4.96,4.04,9,9,9s9-4.04,9-9c0-4.62-3.51-8.44-8-8.94 v-4.11c2.94-0.29,5.5-1.87,7.13-4.15l4.48,2.56c-0.68,1.69-0.8,3.55-0.32,5.34c0.59,2.19,1.99,4.03,3.96,5.16 c1.31,0.76,2.76,1.14,4.24,1.14c0.73,0,1.48-0.09,2.21-0.29c2.19-0.59,4.03-1.99,5.16-3.96c1.14-1.97,1.44-4.26,0.85-6.45 C53.12,39.11,51.72,37.27,49.75,36.14z M39.22,18.82c0.45-1.68,1.53-3.08,3.03-3.95c1-0.58,2.11-0.87,3.24-0.87 c0.56,0,1.13,0.07,1.69,0.22c1.68,0.45,3.08,1.53,3.95,3.03s1.1,3.25,0.65,4.93c-0.45,1.68-1.53,3.08-3.03,3.95 c-1,0.58-2.11,0.87-3.24,0.87c-0.56,0-1.13-0.07-1.69-0.22c-1.68-0.45-3.08-1.53-3.95-3.03S38.77,20.5,39.22,18.82z M25,62 c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S28.86,62,25,62z M25,40c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8s8,3.59,8,8 C33,36.41,29.41,40,25,40z M25,2c3.86,0,7,3.14,7,7s-3.14,7-7,7s-7-3.14-7-7S21.14,2,25,2z M47.18,49.78 C46.62,49.93,46.06,50,45.49,50c-1.13,0-2.24-0.29-3.24-0.87c-1.5-0.87-2.58-2.27-3.03-3.95c-0.45-1.68-0.22-3.43,0.65-4.93 s2.27-2.58,3.95-3.03c0.56-0.15,1.13-0.22,1.69-0.22c1.13,0,2.24,0.29,3.24,0.87c1.5,0.87,2.58,2.27,3.03,3.95 c0.45,1.68,0.22,3.43-0.65,4.93S48.86,49.33,47.18,49.78z"
      ></path>
    </svg>
  ),
  radis: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#b71c1c"
        d="M45,29.316c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,29.316,3,29.832,3,30.469v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,32.882,45,32.83,45,32.775V29.316z"
      ></path>
      <path
        fill="#e53935"
        d="M20.616,39.158c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,39.792,22.048,39.798,20.616,39.158z"
      ></path>
      <path
        fill="#b71c1c"
        d="M45,21.675c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,21.675,3,22.192,3,22.829v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,25.242,45,25.19,45,25.135V21.675z"
      ></path>
      <path
        fill="#e53935"
        d="M20.616,31.517c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,32.152,22.048,32.158,20.616,31.517z"
      ></path>
      <path
        fill="#b71c1c"
        d="M45,14.035c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,14.035,3,14.551,3,15.188v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,17.601,45,17.549,45,17.494V14.035z"
      ></path>
      <path
        fill="#e53935"
        d="M20.616,23.877c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,24.512,22.048,24.517,20.616,23.877z"
      ></path>
      <path
        fill="#fff"
        d="M18.748,14.741c-0.002,1.042-2.762,2.057-5.093,2.086c-2.419,0.03-5.273-0.993-5.282-2.051	c-0.009-1.061,2.842-2.161,5.311-2.135C16.017,12.665,18.751,13.703,18.748,14.741z"
      ></path>
      <path
        fill="#fff"
        d="M17.038,18.471c2.393,1.022,4.785,2.045,7.178,3.067c1.054-1.56,2.108-3.12,3.162-4.68	C23.931,17.396,20.485,17.934,17.038,18.471z"
      ></path>
      <path
        fill="#fff"
        d="M21.86,9.775c-1.101,0.401-2.203,0.801-3.304,1.202c1.507,0.132,3.015,0.264,4.522,0.395	c0.48,0.796,0.959,1.592,1.439,2.387c0.295-0.722,0.59-1.444,0.885-2.166c1.286-0.1,2.572-0.2,3.858-0.3	c-0.997-0.419-1.994-0.839-2.991-1.259c0.254-0.608,0.508-1.216,0.762-1.825c-0.97,0.29-1.939,0.58-2.909,0.87	c-1.07-0.422-2.14-0.843-3.21-1.265C21.228,8.468,21.544,9.122,21.86,9.775z"
      ></path>
      <path
        fill="#b71c1c"
        d="M27.267,14.619c2.271-0.906,4.543-1.813,6.814-2.719c1.962,0.834,3.924,1.668,5.886,2.502	c-2.202,0.876-4.403,1.752-6.605,2.629C31.331,16.226,29.299,15.423,27.267,14.619z"
      ></path>
      <path
        fill="#a01c1c"
        d="M34.082,11.963c-0.005,1.596-0.01,3.191-0.015,4.787c1.967-0.783,3.934-1.565,5.901-2.348	C38.006,13.589,36.044,12.776,34.082,11.963z"
      ></path>
    </svg>
  ),
};
