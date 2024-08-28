import React, { useContext } from "react";
import styled from "styled-components";
import { ClipboardCheck, Monitor, Video } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Quick Access</h1>
        <div>
          <Box color="rgb(231 88 44)" width="2">
            <span>
              <ClipboardCheck />
            </span>
            <span>
              16
              <br />
              New Tasks
            </span>
          </Box>
          <Box color="rgb(88 43 231)" width="0.9">
            <span>
              <Monitor />
            </span>
            <span>
              4<br />
              Active Projects
            </span>
          </Box>
          <Box color="rgb(37 37 37)" width="1.1">
            <span>
              <Video />
            </span>
            <span>
              2<br />
              Meeting
            </span>
          </Box>
        </div>
      </SectionContainer>
      <SectionContainer>
        <h1>Today's Tasks</h1>
        <section>{children}</section>
      </SectionContainer>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  background-color: rgb(247 246 249);
  max-width: 768px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    gap: 10px;
    border-radius: 10px;
  }
`;

const Box = styled.div`
  width: ${({ width }) => `calc((100% - 20px) * ${width / 4})`};
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: white;
  font-size: 0.8rem;

  background-color: ${({ color }) => color};
`;
