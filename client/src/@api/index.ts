// apiKey is https://social-network.samuraijs.com/ access string
import axios, { AxiosInstance } from 'axios';
// import { UserType, PhotosType } from '../@types';

export const instance: AxiosInstance = axios.create({
  baseURL: '/api/',
  // withCredentials: true,
  // headers: {
  //   'API-KEY': apiKey,
  // },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCapcthaEnum {
  CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

// export type GetItemsType = {
//   items: Array<UserType>;
//   totalCount: number;
//   error: string | null;
// };

// export type PhotosDataType = {
//   photos: PhotosType;
// };

// export type CaptchaType = string;
