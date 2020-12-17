import styled from 'styled-components'

export const CardSignosContainer = styled.div`
    background-color: #F29F05;
    color: #fff;
    margin: 25px 10px 0;
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #F29F05;
    width: 180px;
    height: 310px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    img{
        width: 130px;
        height: 100px;
        background-color: #fff;
        object-fit: contain;
        border-radius: 10px;
        border: 1px solid #F29F05;
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