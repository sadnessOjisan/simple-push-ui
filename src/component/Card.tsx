import * as React from "react";
import styled from "styled-components";
import { IProfile } from "../infra/data";
export default ({ data }: { data: IProfile }) => {
  return (
    <Wrapper>
      <ProfImg src={data.image}></ProfImg>
      <div>
        <span>{data.name} </span>/<span> {data.age} </span>/
        <span> {data.where} </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover {
    background-color: whitesmoke;
  }
`;

const ProfImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 2.4rem;
`;

const ReplyBox = styled.div`
  margin-left: auto;
  > button:not(:first-child) {
    margin-left: 8px;
  }
`;

const OKButton = styled.button`
  width: 64px;
  height: 40px;
  background: linear-gradient(90deg, #78ff76, #11c5c5);
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
`;

const NGButton = styled.button`
  width: 64px;
  height: 40px;
  border-radius: 16px;
  background: linear-gradient(90deg, #ffb5db, #ff3c7b);
  border: none;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
`;
