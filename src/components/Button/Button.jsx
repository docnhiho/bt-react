import styled from 'styled-components';
import GreenArrow from 'assets/GreenArrow.svg';
import RedArrow from 'assets/RedArrow.svg';


const Btn = styled.button`
    width: 100%;
    height: 46px;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 10px;
    background: white;
    img{
        margin-right: 10px;
    }
;
`;

export const Button = ({ percent, children }) => {
    return <Btn percent={percent}>
        <img src={ percent > 0 ? GreenArrow : RedArrow} alt='arr'></img> {Math.abs(percent)}% {children}
        </Btn>
}