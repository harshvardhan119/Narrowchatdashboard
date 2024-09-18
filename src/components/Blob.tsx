import * as React from "react"
import { SVGProps } from "react"
const Blob1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
        <stop
          id="stop1"
          stopColor="rgba(22.687, 55.471, 87.343, 1)"
          offset="0%"
        />
        <stop
          id="stop2"
          stopColor="rgba(53.948, 190.704, 221.674, 1)"
          offset="100%"
        />
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient)"
      d="M27.1,-23.2C32.3,-15,31.9,-3.9,29.7,7.2C27.4,18.3,23.5,29.4,15.6,33.6C7.8,37.8,-3.9,35.1,-13.2,29.7C-22.5,24.3,-29.4,16.3,-32,6.8C-34.6,-2.7,-32.8,-13.7,-26.8,-22.1C-20.7,-30.5,-10.4,-36.2,0.3,-36.5C10.9,-36.7,21.8,-31.4,27.1,-23.2Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      strokeWidth={0}
      style={{
        transition: "all 0.3s ease 0s",
      }}
      stroke="url(#sw-gradient)"
    />
  </svg>
)
export default Blob1
