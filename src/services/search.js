import request from "./axios";

export function getSearchList(keywords) {
  return request({
    url: "/search",
    params: {
      keywords: keywords,
    },
  });
}
