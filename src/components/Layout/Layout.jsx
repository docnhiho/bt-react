import Header from "components/Header";
import styled from "styled-components";
import SideBar from "components/Sidebar/SideBar";

const LayoutStyled = styled.div`
  background-color:  rgba(202, 234, 230, 1);
  min-height: 100vh;
  .right {
    float: right;
    min-width: 78%;
  }
`;
const ContentStyled = styled.div`
  background-color: rgba(202, 234, 230, 1);
  margin-top: 64px;
  height: 100vh;
`;


const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      
        <SideBar></SideBar>
        <Header ></Header>

      <div className="right">
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;