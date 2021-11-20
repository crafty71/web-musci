import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSongDetailAction } from "@/pages/player/store/index.js";
import { NavLink } from "react-router-dom";

import { getSearch,getSearchAction } from "./store/actionCreators";

import {  formatMinuteSecond } from "@/utils/format-utils.js";

import { RankingListWrapper } from "./style";

export default memo(function HYRankingList() {
  const [currentindex, setCurrentindex] = useState();

  const dispatch = useDispatch();
  const { isplaying, searchList, searchValue} = useSelector(
    (state) => ({
      isplaying: state.getIn(["player", "isplaying"]),
      searchList: state.getIn(["search","searchList"]),
      searchValue: state.getIn(["searchValue","searchValue"])
    }),
    shallowEqual
  );
 

  


  useEffect(() => {
    dispatch(getSearch(searchValue));
  }, [dispatch, searchValue]);

  

  useEffect(() => {
    dispatch(getSearchAction());
  }, [dispatch]);
  const tracks = searchList || [];

  // redux hooks
  // other handle
  const playMusic = (item, index) => {
    dispatch(getSongDetailAction(item.id));
    setCurrentindex(index);
  };

  return (
    <RankingListWrapper isPlaying={isplaying}>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      <span
                        className={
                          "play sprite_table" +
                          (index === currentindex ? "    active" : "")
                        }
                        onClick={(e) => playMusic(item, index)}
                      ></span>
                      <NavLink to="/discover/player">
                        <span className="name">{item.name}</span>
                      </NavLink>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.duration)}</td>
                  <td>{item.artists[0].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
});
