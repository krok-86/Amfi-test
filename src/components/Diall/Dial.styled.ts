import styled from 'styled-components';

interface IDialsStyled {
  color: string
}

const DialsStyled = styled.div<IDialsStyled>`
.dials {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 312px;
  height: 52px;
  min-height: 80px;
  border: 1px solid #c5c5c5;
  background-color: #f5f5f5;
  box-shadow: 5px 2px 5px gray;
  border-radius: 3px;
  margin: 10px;
  padding: 0 40px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dial-text {
  color: #0057a9;
  font-weight: 400;
  font-size: 15px;
}
.dial-id {
  color: #0057a9;
  font-weight: 400;
  font-size: 15px;
}
.dial-price {
  color: #92989b;
  font-size: 12px;
}
.dial-status {
  width: 12px;
  height: 12px;
  margin-left: 5px;
  position: absolute;
  top: 40%;
  right: 88%;
}
.dial-status-circle {
}
.ballTriangle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
}
`
export default DialsStyled;