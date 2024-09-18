import './gradient.css'





import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={636}
    height={586}
    viewBox="0 0 636 586"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Ellipse 9" filter="url(#filter0_f_262_12)">
      <ellipse
        cx={318}
        cy={306}
        rx={278}
        ry={266}
        fill="url(#paint0_linear_262_12)"
        fillOpacity={0.43}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_262_12"
        x={0}
        y={0}
        width={636}
        height={612}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={20}
          result="effect1_foregroundBlur_262_12"
        />
      </filter>
      <linearGradient
        id="paint0_linear_262_12"
        x1={318}
        y1={306}
        x2={318}
        y2={572}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00CBF7" />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export { SvgComponent as Gradient }
