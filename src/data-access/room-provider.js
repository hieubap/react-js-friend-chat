import { API } from "@src/constants";
import baseProvider from "./base-provider";
import { combineUrlParams } from "@utils/common";
import clientUtils from "@utils/client-utils";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...baseProvider(API.room),
  create: (body = {}) => {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", `${API.room}/create`, body)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  addUser: (userId, roomId) => {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi(
          "post",
          combineUrlParams(`${API.room}/join/${roomId}/${userId}`, {}),
          {}
        )
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  addUsers: (listUserId, roomId) => {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi(
          "post",
          combineUrlParams(`${API.room}/join/${roomId}`, {}),
          {
            idAddUsers: listUserId,
          }
        )
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  // getListRoomId({ page = 0, size = 999, ...param } = {}) {
  //   return new Promise((resolve, reject) => {
  //     clientUtils
  //       .requestApi(
  //         "get",
  //         combineUrlParams(`${API.room}/list-room-id`, {
  //           page,
  //           size,
  //           ...param,
  //         }),
  //         {}
  //       )
  //       .then((x) => {
  //         resolve(x);
  //       })
  //       .catch((e) => {
  //         reject(e);
  //       });
  //   });
  // },
};
