import React from "react";
import * as S from "./styled";

const NotFound = () => {
  return (
    <>
      <S.Wrapper>
        <h1>Ops...</h1>
      </S.Wrapper>
      <S.Wrapper>
        <h2>O usuário não foi encontrado !</h2>
      </S.Wrapper>
      <S.Wrapper>
        <h3>Ou você excedeu o limite de consultas ao Github em 1 hora. Tente mais tarde</h3>
      </S.Wrapper>
    </>
  );
};

export default NotFound;
