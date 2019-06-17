import React from "react";
import * as S from "./GlobalInstitutions.styled";

const GlobalInstitutions = () => {
  return (
    <S.GlobalInstitutionsWrapper>
      <S.Title>We partner with global financial institutions</S.Title>
      <S.Description>
        Our consultants are industry experts on market and reference data
        products and investment management solutions. MDC delivers results that
        make financial differences.
      </S.Description>
      <S.CompanyContentWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/scotiabank-long-copy.png"
            srcSet="../../static/images/scotiabank-long-copy@1x.png 1x, ../../static/images/scotiabank-long-copy@2x.png 2x,
                                 ../../static/images/scotiabank-long-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/iiroc-copy.png"
            srcSet="../../static/images/iiroc-copy@1x.png 1x, ../../static/images/iiroc-copy@2x.png 2x,
                                 ../../static/images/iiroc-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/cppib-copy.png"
            srcSet="../../static/images/cppib-copy@1x.png 1x, ../../static/images/cppib-copy@2x.png 2x,
                                 ../../static/images/cppib-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/fiera-logo-black-copy.png"
            srcSet="../../static/images/fiera-logo-black-copy@1x.png 1x, ../../static/images/fiera-logo-black-copy@2x.png 2x,
                                 ../../static/images/fiera-logo-black-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/psp-copy.png"
            srcSet="../../static/images/psp-copy@1x.png 1x, ../../static/images/psp-copy@2x.png 2x,
                                 ../../static/images/psp-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/aviva-long-black-copy.png"
            srcSet="../../static/images/aviva-long-black-copy@1x.png 1x, ../../static/images/aviva-long-black-copy@2x.png 2x,
                                 ../../static/images/aviva-long-black-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/swiss-re-black-copy.png"
            srcSet="../../static/images/swiss-re-black-copy@1x.png 1x, ../../static/images/swiss-re-black-copy@2x.png 2x,
                                 ../../static/images/swiss-re-black-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
        <S.CompanyWrapper>
          <img
            src="../../static/images/rbc-logo-copy.png"
            srcSet="../../static/images/rbc-logo-copy@1x.png 1x, ../../static/images/rbc-logo-copy@2x.png 2x,
                                 ../../static/images/rbc-logo-copy@3x.png 3x"
          />
        </S.CompanyWrapper>
      </S.CompanyContentWrapper>
    </S.GlobalInstitutionsWrapper>
  );
};

export default GlobalInstitutions;
