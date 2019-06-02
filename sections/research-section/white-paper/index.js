import React from "react";
import AnimatedCard from "../../../components/animated-card";
import { PINK } from "../../../assets/colors";
import * as S from "./WhitePaper.styled";

const WhitePaper = () => (
  <S.WhitePaperWrapper>
    <S.WhitePaperTitle>White Papers</S.WhitePaperTitle>
    <AnimatedCard
      title="Uncovering the FRTB & Non-Modellable Risk Factors"
      description="HARNESSING DATA is a critical element in complying with the Fundamental Review of the Trading Book (FRTB) regulation. Banks are obliged to grasp incremental data requirements against their existing data calculation models and calculators. Banks will need to identify whether their risk factors can be modelled or not ..."
      notchColor={PINK}
    />
  </S.WhitePaperWrapper>
);

export default WhitePaper;
