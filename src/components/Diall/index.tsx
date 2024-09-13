import { FC, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import { getOneDeal } from "../../api";

import { formatDate, selectColor } from "../../utils";

import { IExtendedInfo } from "../../types";

import DialsStyled from "./Dial.styled";

interface IDials {
  name: string;
  createdDate: number;
  price: number;
  id: string;
  handleClick: (id: string) => void;
  isSelected: boolean;
}

const Dial: FC<IDials> = ({ name, createdDate, price, id, handleClick, isSelected }) => {

  const [extendedInfo, setExtendedInfo] = useState<IExtendedInfo>({});
  const [loading, setLoading] = useState<boolean>(false);

  const selectDeal = async () => {
    setLoading(true);
    handleClick(id);
    try {
      const dealsData = await getOneDeal(id);
      setExtendedInfo(dealsData);
    } catch (error: unknown) {
      console.error("Ошибка получения сделки", error);
    } finally {
      setLoading(false);
    }
  };

  let color = extendedInfo?.closest_task_at ? selectColor(extendedInfo?.closest_task_at) : 'transparent';
  color = extendedInfo?.closest_task_at === null ? 'red' : color;

  return (
    <DialsStyled color={color}>
      <div className="dials" onClick={selectDeal}>
        {loading ? (
          <div className='ballTriangle'>
            <BallTriangle
              height={50}
              width={50}
              radius={3}
              color="#2f79e7"
              ariaLabel="ball-triangle-loading"
              visible={loading}
            />
          </div>
        ) : (
          <div>
            <div>
              идентификатор: {id}
            </div>
            <div className="dial-text">название: {name}</div>
            <div className="dial-price">{isSelected ? formatDate(createdDate) : `Бюджет: ${price} ₽`}</div>
            {isSelected && <svg className="dial-status">
              <circle className="dial-status-circle" cx="6" cy="6" r="6" fill={color} />
            </svg>}
          </div>
        )}
      </div>
    </DialsStyled>
  );
}

export default Dial;