import * as React from "react";
import {Svg} from "./styles";

export const Logo = (props) => {
  return (
    <Svg
      width={442.578}
      height={137.64}
      viewBox="28.711 6.18 442.578 137.64"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-stripe-bk"
          filterUnits="userSpaceOnUse"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#b4b524" result="flood1" />
          <feFlood floodColor="#fff" floodOpacity={0.5} result="flood2" />
          <feImage
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjYuOCIgaGVpZ2h0PSI2LjgiPjxwYXRoIGQ9Ik0gLTYuOCAtNi44IEwgMTMuNiAxMy42IE0gLTEzLjYgLTYuOCBMIDYuOCAxMy42IE0gLTYuOCAtMTMuNiBMIDEzLjYgNi44IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS43Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+"
            width={2000}
            height={1000}
            result="image"
          />
          <feTile in="image" result="tile" />
          <feComposite operator="in" in="flood1" in2="tile" result="tile2" />
          <feGaussianBlur in="SourceAlpha" stdDeviation={10} result="blur" />
          <feComposite operator="in" in="tile2" in2="blur" result="cloud" />
          <feMorphology
            operator="dilate"
            radius={2}
            in="SourceAlpha"
            result="dilate"
          />
          <feComposite operator="in" in="flood2" in2="dilate" result="base" />
          <feMerge>
            <feMergeNode in="cloud" />
            <feMergeNode in="base" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-stripe-bk)">
        <path
          d="M126.785 57.72q18.13 0 18.13 12.8 0 7.03-4.51 11.25-4.44 4.22-12.21 4.22-3.63 0-6.44-2.07-1.33-.89-2.22-2.07 5.4 0 8.25-3.3 2.85-3.29 2.85-9.73t-6.36-6.44h-1.78q-.44 0-.81.08l-8.51 44.62h-16.06l9.1-48.47q7.92-.74 12.51-.81 4.58-.08 8.06-.08zm48.47 36.85q1.85 1.26 1.85 4.04 0 2.77-1.4 4.55-1.41 1.77-3.7 2.96-4.74 2.44-9.85 2.44-5.1 0-8.1-1.11t-4.99-3.18q-3.93-3.92-3.93-11.1 0-11.18 6.07-17.98 6.51-7.33 17.84-7.33 7.03 0 10.5 2.96 2.59 2.22 2.59 5.85 0 13.02-22.49 13.02-.3 1.92-.3 3.55 0 3.41 1.52 4.7 1.52 1.3 4.33 1.3t5.81-1.3q2.99-1.29 4.25-3.37zm-15.09-8.06q5.25 0 8.28-3.26 3.04-3.11 3.04-8.06 0-1.71-.63-2.63-.63-.93-1.89-.93-1.26 0-2.33.49-1.07.48-2.18 2.1-2.74 3.7-4.29 12.29zm25.67 13.17q0-2 1.04-7.03l3.92-19.98h-4.36l.29-2.22q8.88-2.66 17.47-9.18h3.55l-1.78 8.07h5.77l-.66 3.33h-5.7l-3.77 19.98q-.97 4.59-.97 6.14 0 3.55 3.11 4.29-.74 2.52-3.4 4-2.67 1.48-6.44 1.48-3.77 0-5.92-2.37t-2.15-6.51zm30.49-23.53q2.52-3.55 6.33-5.92t8.47-2.37q4.66 0 6.88 1.48l14.51-1.48-5.03 28.42q-2.59 14.5-8.07 20.2-5.25 5.4-15.47 5.4-7.77 0-12.21-2.44-4.44-2.44-4.44-6.51 0-3.04 2.3-4.78 2.29-1.74 5.84-1.74 3.11 0 5.48 1.41 1.41.74 2.07 1.78-1.7 1.48-1.7 3.92 0 3.18 2.96 3.18 4.96 0 7.77-11.69.81-3.18 1.48-6.37-3.33 4.07-10.88 4.07-5.25 0-8.29-2.51-3.03-2.52-3.03-8.44 0-3.7 1.26-7.88t3.77-7.73zm9.62 15.83q0 5.04 2.59 5.04 1.78 0 3.48-1.93 1.33-1.55 1.85-3.85l3.77-19.01q-.37-.08-.74-.23-.74-.29-1.7-.29-4.51 0-7.18 7.4-2.07 5.77-2.07 12.87zm52.62-5.69q2.66-4.74 2.66-9.55 0-3.18-2.29-3.18-1.78 0-3.63 3.03-1.92 3.04-2.52 6.96l-3.84 23.53-15.32 1.48 7.55-39.22 12.21-1.48-1.34 7.47q3.63-7.47 11.77-7.47 4.29 0 6.62 2.22t2.33 6.77q0 4.55-2.99 7.44-3 2.88-8.11 2.88-2.22 0-3.1-.88zm18.61 18.57q-1.74-1.92-2.52-4.96-.78-3.03-.78-7.99 0-4.96 1.71-9.47 1.7-4.52 4.81-7.77 6.36-6.81 16.87-6.81 3.77 0 6.51 1.26l12.65-1.26-5.47 28.86q-.22.89-.22 2.52 0 1.62.99 2.66 1 1.04 2.48 1.18-.74 2.52-3.44 4t-5.73 1.48q-3.04 0-5.07-1.15-2.04-1.14-2.63-3.07-1.18 1.85-3.7 3.04-2.51 1.18-5.88 1.18t-6.11-.89q-2.73-.89-4.47-2.81zm15.61-30.04q-.85 1.33-1.59 3.59-.74 2.25-1.96 8.28-1.22 6.03-1.22 10.33 0 4.29.66 5.55.67 1.25 1.85 1.25 2.37 0 4.11-2.25 1.74-2.26 2.41-6.26l3.92-21.68q-1.56-1.33-3.37-1.33t-2.88.59q-1.08.59-1.93 1.93zm80.92 33.74q-8.95 0-8.95-6.96 0-3.03 1.29-8.91 1.3-5.89 1.74-8.25 1.04-5.41 1.04-7.11 0-3.77-2.82-3.77-1.85 0-3.62 2.55-1.78 2.55-2.59 7.66l-4.59 23.31-14.43 1.48 4-20.13q.66-3.33 1.25-7.1.6-3.78.6-4.37 0-3.4-2.52-3.4-1.7 0-3.55 2.51-1.85 2.52-2.89 7.7l-4.51 23.31-14.58 1.48 7.77-39.22 12.06-1.48-1.26 7.47q1.93-3.99 5.48-5.73 3.55-1.74 9.1-1.74 3.18 0 5.26 1.55 2.07 1.56 2.73 4.07 1.26-2.59 4.48-4.1 3.22-1.52 7.18-1.52 3.96 0 5.92.85t3.14 2.26q2 2.59 2 7.32 0 4.67-2 14.36-1.03 4.74-1.03 6.48 0 1.73 1 2.77t2.48 1.18q-.74 2.52-3.3 4-2.55 1.48-5.88 1.48z"
          fill="#1087b0"
        />
      </g>
      <style />
    </Svg>
  )
}
