import React from "react";
import * as S from "./Leadership.styled";
import BioCard from "../../../components/bio-card";

const Leadership = () => (
  <S.LeadershipWrapper>
    <S.Title>Leadership</S.Title>
    <S.CardContent>
      <S.CardWrapper>
        <BioCard
          name="Robert Benedetto"
          role="Founding Partner"
          message="Robert is the founding Partner and Head of Strategy for Market Data Company, formerly leading data and risk management consulting practices delivering for buy-side and sell-side firms. His role has centred around business strategy and risk management for firms throughout Canada, the US and Europe, giving him the opportunity to build a wealth of intellectual capital knowledge through the application of information, technology and data management practices. This experience has formed the foundation for which Market Data Company was launched in 2012."
        />
      </S.CardWrapper>
      <S.CardWrapper>
        <BioCard
          name="Maurice Severin"
          role="Managing Principal"
          message="As Managing Principal and Head of Delivery at MDC, Maurice cultivates relationships with stakeholders to help develop their market data management programs. With 20+ years experience in the financial services community, Maurice has unique insight into vendor and cost management practices. This insight helps him architect programs that gives firms the information they need to make effective strategic sourcing decisions. His results driven approach focuses on building teams that are better positioned to help their organizations achieve their short and long term goals."
        />
      </S.CardWrapper>
      <S.CardWrapper>
        <BioCard
          name="Gregg Novek"
          role="Director"
          message="Gregg Joined MDC in early 2012 as Business Sales Director of North America. He is a dynamic Financial Sales Leader with a proven track record of driving double-digit growth through volatile business cycles. He has a unique background as a senior bank analyst with experience in the fixed income and equity markets. Strong ability to identify business challenges and produce creative solutions. Excellent communication, interpersonal and motivational skills contribute to building loyalty, high performing teams and forging strong client relationships."
        />
      </S.CardWrapper>
    </S.CardContent>
  </S.LeadershipWrapper>
);

export default Leadership;
