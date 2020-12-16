import styled from 'styled-components'

export const CardSignosContainer = styled.div`
    background-color: #BF4B60;
    color: #fff;
    margin: 25px 10px 0;
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #BF4B60;
    width: 250px;
    height: 330px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    img{
        width: 230px;
        height: 200px;
        background-color: #fff;
        object-fit: contain;
        border-radius: 5px;
        border: 1px solid #BF4B60;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 8px;
        flex: 1;
    }
`
export const NomeSigno = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`

export const PeriodoNascimento = styled.p`
  font-size: 14px;
`