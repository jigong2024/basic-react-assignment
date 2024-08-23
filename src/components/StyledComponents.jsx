import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
  return (
    <Dashboard>
      <div>
        <Text>Quick Access</Text>
        <BoxContainer>
          <Box>
            16
            <br />
            New Tasks
          </Box>
          <Box>
            4<br />
            Active Project
          </Box>
          <Box>
            2<br />
            Meetings
          </Box>
        </BoxContainer>
      </div>
      <div>
        <Text>Today's Tasks</Text>
        <Box2Container>
          <Box2>Design system update</Box2>
          <Box2>Contact page - review</Box2>
          <Box2>Instagram post - design tips</Box2>
          <Box2>JSM motion moodboard</Box2>
        </Box2Container>
      </div>
    </Dashboard>
  );
};

export default StyledComponents;

const Dashboard = styled.div`
  background-color: #ededed71;
  width: 600px;
  height: 390px;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Text = styled.span`
  font-weight: bold;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 40px 0;
`;

const Box = styled.div`
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  width: 33%;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  color: white;

  &:first-child {
    width: 60%;
    background-color: rgb(255, 77, 0);
  }

  &:nth-child(2) {
    width: 25%;
    background-color: #5900ff;
  }

  &:nth-child(3) {
    background-color: #1f1e20;
  }
`;

const Box2Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Box2 = styled.div`
  /* border: 1px solid black; */
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 5px;
  height: 33px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 13px;
`;
