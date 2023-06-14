import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import AboutMDX from "../sections/about.mdx"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" hiddenMobile width={6} color= "#0C134F"  left="50%" top="75%" />
        <Svg icon="upDown" hiddenMobile width={8} color="#1D267D" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="#5C469C" left="25%" top="5%" />
        <Svg icon="upDown" hiddenMobile width={24} color="#D4ADFC" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="#0C134F" left="5%" top="80%" />
        <Svg icon="triangle" width={12} stroke color="#1D267D" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="#5C469C" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="#D4ADFC" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="#0C134F" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="#1D267D" left="70%" top="60%" />
      <Svg icon="box" width={6} color="#5C469C" left="10%" top="10%" />
      <Svg icon="box" width={12} color="#D4ADFC" left="20%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="#5C469C" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
