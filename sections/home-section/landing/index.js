import * as S from "./Landing.styled";
import Button from "../../../components/button";
import TabBar from "../../../components/tab-bar";

const Landing = () => (
  <S.LandingWrapper>
    <TabBar />
    <S.Title>
      Industry research by
      <br /> industry experts.
    </S.Title>
    <S.Description>
      We are a boutique consulting firm serving the financial information services
      industry. Our consultants are industry experts on market and reference data
      products and investment management solutions.
    </S.Description>
    <S.ButtonWrapper>
      <Button btnText="View Research" href="/research"/>
      <Button btnText="Contact us" isDefault={false} href="/contact"/>
    </S.ButtonWrapper>
  </S.LandingWrapper>
);

export default Landing;
