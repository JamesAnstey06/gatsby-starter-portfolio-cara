/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="triangle" hiddenMobile width={56} stroke color="#453C67" left="10%" top="20%" />
        <Svg icon="hexa" width={48} stroke color="#6D67E4" left="60%" top="70%" />
        <Svg icon="box" width={6} color="#46C2CB" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="#F2F7A1" left="80%" top="10%" />
        <Svg icon="triangle" width={12} stroke color="#453C67" left="90%" top="50%" />
        <Svg icon="circle" width={16} color="#6D67E4" left="70%" top="90%" />
        <Svg icon="triangle" width={16} stroke color="#46C2CB" left="30%" top="65%" />
        <Svg icon="cross" width={16} stroke color="#F2F7A1" left="28%" top="15%" />
        <Svg icon="circle" width={6} color="#453C67" left="75%" top="10%" />
        <Svg icon="upDown" hiddenMobile width={8} color="#6D67E4" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={24} color="#46C2CB" left="5%" top="70%" />
      <Svg icon="circle" width={6} color="#F2F7At" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="#453C67" left="50%" top="60%" />
      <Svg icon="upDown" width={8} color="#6D67E4" left="95%" top="90%" />
      <Svg icon="upDown" hiddenMobile width={24} color="#46C2CB" left="40%" top="80%" />
      <Svg icon="triangle" width={8} stroke color="#F2F7At" left="25%" top="5%" />
      <Svg icon="circle" width={64} color="#453C67" left="95%" top="5%" />
      <Svg icon="box" hiddenMobile width={64} color="#6D67E4" left="5%" top="90%" />
      <Svg icon="box" width={6} color="#46C2CB" left="10%" top="10%" />
      <Svg icon="box" width={12} color="#F2F7At" left="40%" top="30%" />
      <Svg icon="hexa" width={16} stroke color="#453C67" left="10%" top="50%" />
      <Svg icon="hexa" width={8} stroke color="#6D67E4" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
