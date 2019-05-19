import React, { useState } from "react";
import CompanyCard from "../../../components/company-card";
import * as S from "./WorkedWith.styled";

const COMPANY_DATA = [
  {
    title: "Canada Pension Plan Investment Board",
    description: `“MDC identified and realized vendor cost savings of 12% of our spend, and then developed a target state organization with capabilities to effectively manage market data products, consumption, costs and vendors”`,
    role: "Marc Odho – Head of Data Management",
    company: "PSP"
  },
  {
    title: "PSP Investissements",
    description: `“The team at Market Data Company is great to work with. Each consultant has their own strengths and weaknesses, and are great at what they do. In my book, I highly recommend the entire team at MDC.”`,
    role: "Alex DiCristofano, Director of Market Data",
    company: "Aviva"
  },
  {
    title: "Aviva Investors",
    description: `“Robert and his team brought the right expertise to the job, making the transitional program easier to manage. MDC’s approach to market data supported our Global operations and provided a clear line of sight to our vendor spend.”`,
    role: "Kelly McManis, Head of Operations",
    company: "Swiss Re"
  },
  {
    title: "Swiss Re",
    description: `“MDC’s product Kiaro’s overspend report clearly articulated where Bloomberg data was being replicated within our technology envirorment. As a result we closed down several jobs that lead to $450,000 in cost savings.”`,
    role: "Eric Kemeny, Vice President, Group Asset Management",
    company: "CPPIB"
  }
];

const WorkedWith = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setNextIndex = () => {
    if (currentIndex === COMPANY_DATA.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <S.WorkedWithWrapper>
      <S.Title>Who we’ve worked with</S.Title>
      <S.CardWrapper>
        <CompanyCard
          title={COMPANY_DATA[currentIndex].title}
          description={COMPANY_DATA[currentIndex].description}
          role={COMPANY_DATA[currentIndex].role}
          company={COMPANY_DATA[currentIndex].company}
          onNext={setNextIndex}
        />
      </S.CardWrapper>
    </S.WorkedWithWrapper>
  );
};

export default WorkedWith;
