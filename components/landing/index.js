import * as S from "./Landing.styled";
import Button from "../button";
import TabBar from "../tab-bar";

const Landing = () => (
  <S.LandingWrapper>
    <TabBar />
    <S.Title>
      Industry research by
      <br /> industry experts.
    </S.Title>
    <S.Description>
      MDC is a boutique Consulting firm for the Financial Information Services
      Industry. Our consultants are Industry Experts on Market & Reference Data
      products and Investment Management Solutions.
    </S.Description>
    <S.ButtonWrapper>
      <Button btnText="Case studies" />
      <Button btnText="Contact us" isDefault={false} />
    </S.ButtonWrapper>
  </S.LandingWrapper>
);

export default Landing;
