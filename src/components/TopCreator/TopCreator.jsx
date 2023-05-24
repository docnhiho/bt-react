import styled from 'styled-components';

const StyleCreator = styled.div`
height: 478px;
width: 327px;
border: none;
border-radius: 16px;
background-color: rgba(255, 255, 255, 1);
padding: 0 30px;
font-family: 'DM Sans', sans-serif;
;
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tc{
    color: rgba(39, 38, 46, 1);
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
}
.sa{
    color: rgba(116, 116, 117, 1);
    font-size: 16px;
    line-height: 21px;
}
`;

const Creator = ({ count, image, name, button }) => {
    return (
        <table>
            <tr>
                <td>
                    {count}
                </td>
                <td>
                    {image}
                </td>
                <td>
                    {name}
                </td>
            </tr>
        </table>
    )
}

export const TopCreator = () => {
    return (
        <StyleCreator>
            <div className='top'>
                <p className='tc'>Top Creator</p>
                <p className='sa'>See all</p>
            </div>
            <Creator count={"1"}>

            </Creator>
            <Creator count={"2"}>

            </Creator>
        </StyleCreator>
    )
}
