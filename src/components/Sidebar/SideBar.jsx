import styled from "styled-components";
import Logo from 'assets/Logo.svg';
import Menu1 from 'assets/Menu1.svg';
import Menu2 from 'assets/Menu2.svg';
import Menu3 from 'assets/Menu3.svg';
import Menu4 from 'assets/Menu4.svg';
import Menu5 from 'assets/Menu5.svg';
import Menu6 from 'assets/Menu6.svg';
import Menu7 from 'assets/Menu7.svg';
import Menu8 from 'assets/Menu8.svg';
import Menu9 from 'assets/Menu9.svg';
import ETH from 'assets/ETH.svg';






const SideBarStyled = styled.div`
  background-color: white;
  float: left;
  min-width: 19%;
  height: 100vh;
  padding-left: 42px;
  padding-top: 40px;
  img{
        margin-right: 25px;
    }
  .TopMenu{
        margin-bottom: 27px;
        font-family: 'DM Sans', sans-serif;
        font-size: 16px;
        line-height: 21px;
        color: rgba(116, 116, 117, 1);
    }
`;


const MenuStyled = styled.div`
    margin-top: 40px;
    h3{
        font-family: 'DM Sans', sans-serif;
        font-size: 12px;
        line-height: 16px;
        font-weight: bold;
        margin-bottom: 25px;
    }
`;

const CardStyle = styled.div`
    width: 228px;
    height: 190px;
    background-image: linear-gradient(to top left, rgba(84, 41, 255, 1)
 , rgba(187, 170, 255, 1));
    color: white;
    text-align: center;
    padding-top: 20px;
    border-radius: 20px;
    font-family: 'DM Sans', sans-serif;
    .YB {
        color: rgba(224, 222, 229, 1);
        font-size: 12px;
        line-height: 16px;
    }
    .amount{
        color: rgba(255, 255, 255, 1);
        font-size: 30px;
        line-height: 39px;
        font-weight: bold;
        margin-top: -2px;
        margin-bottom: 9px;
    }
    span{
        color: rgba(224, 222, 229, 1);
        font-size: 12px;
        line-height: 16px;
        margin-left: -17px;
    }
`;

const StyleBtn = styled.button`
    width: 196px;
    height: 49px;
    border: 1px solid black;
    border-radius: 12px;
`;

const SideBar = () => {
    return (
        <SideBarStyled>
            <img src={Logo}></img>
            <MenuStyled>
                <div className="TopMenu">
                    <img src={Menu1}></img>
                    <a>Dashboard</a>
                </div>
                <div className="TopMenu">
                    <img src={Menu2}></img>
                    <a>Market</a>
                </div>
                <div className="TopMenu">
                    <img src={Menu3}></img>
                    <a>Active Bids</a>
                </div>
            </MenuStyled>
            <MenuStyled>
                <h3>PROFILE</h3>
                <div className="TopMenu">
                    <img src={Menu4}></img>
                    <a>My Portfolio</a>
                </div>
                <div className="TopMenu">
                    <img src={Menu5}></img>
                    <a>Wallet</a>
                </div>
                <div className="TopMenu">
                    <img src={Menu6}></img>
                    <a>Favorites</a>
                </div>
                <div className="TopMenu">
                    <img src={Menu7}></img>
                    <a>History</a>
                </div>
                <div className="TopMenu">
                    <img src={Menu8}></img>
                    <a>Settings</a>
                </div>
            </MenuStyled>
            <MenuStyled>
                <h3>OTHER</h3>
                <div className="TopMenu">
                    <img src={Menu9}></img>
                    <a>Settings</a>
                    <input type="checkbox"></input>
                </div>
            </MenuStyled>
            <CardStyle>
                <p className="YB">Your Balance</p>
                <p className="amount">1,034.02</p>
                <img src={ETH}></img> <span>ETH</span>
                <StyleBtn></StyleBtn>
            </CardStyle>
        </SideBarStyled>
    )
}

export default SideBar;
