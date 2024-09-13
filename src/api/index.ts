import axios, { AxiosResponse } from "axios";

import { BATCH_SIZE, authCode } from "../mock";
import { IDealsResponse, IExtendedInfo } from "../types";

export const getDeals = async (offset: number = 1) => {
  const url = `https://8700478.amocrm.ru/api/v4/leads?limit=${BATCH_SIZE}&page=${offset}`;
  const headers = {
    Authorization: `Bearer ${authCode}`,
    'Content-Type': 'application/json'
  };
  try {
    const response: AxiosResponse<IDealsResponse> = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Ошибка получения сделок:", error.response?.data ?? error.message);
    } else {
      console.error("Ошибка получения сделок:", error);
    }
    throw error;
  }
};

export const getOneDeal = async (id: string): Promise<IExtendedInfo> => {
  const url = `https://8700478.amocrm.ru/api/v4/leads/${id}`;
  const headers = {
    Authorization: `Bearer ${authCode}`,
    'Content-Type': 'application/json'
  };

  try {
    const response: AxiosResponse<IExtendedInfo> = await axios.get(url, { headers });
    return response.data;
  } catch (error: unknown) {
    console.error("Ошибка получения сделки:", error.response?.data ?? error.message);
    throw error;
  }
};