import * as React from "react";
import { useState, useEffect } from "react";
import Card from "../component/Card";
import styled from "styled-components";
import { profData } from "../infra/data";
import { getToken } from "../infra/firebase-messaging";

export default () => {
  const [token, setToken] = useState<string>(null);
  const [data] = useState(profData);
  const userAgent = window.navigator.userAgent.toLowerCase();
  useEffect(() => {
    (async () => {
      const token = await getToken();
      setToken(token);
    })();
  }, []);

  return (
    <Wrapper>
      <CardList>
        {data.map(d => (
          <Card data={d}></Card>
        ))}
      </CardList>
      {token}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  > div:not(:first-child) {
    margin-top: 3.2rem;
  }
`;
