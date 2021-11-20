import React, { memo, useState} from 'react';
import { useSelector, shallowEqual,useDispatch } from "react-redux";
import { getSongDetailAction } from '@/pages/player/store/index.js';
import { NavLink } from 'react-router-dom';

import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import HYThemeHeaderSong from '@/components/theme-header-song';
import {
  RankingListWrapper
} from './style';

export default memo(function HYRankingList() {
 const [currentindex, setCurrentindex] = useState()

  const {
    isplaying,
    currentSong,
  } = useSelector(state => ({
    isplaying: state.getIn(["player", "isplaying"]),
    currentSong: state.getIn(["player", "currentSong"]),
  }), shallowEqual);

  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);
  const tracks = state.playList.tracks || [];

   // redux hooks
   const dispatch = useDispatch();
  // other handle
  const playMusic = (item,index) => {
    dispatch(getSongDetailAction(item.id));
    console.log(currentSong.name,item.name);
    setCurrentindex(index)
  }

  return (
    <RankingListWrapper isPlaying={isplaying}>
      <HYThemeHeaderSong />
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
            {
              tracks.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className={"play sprite_table"+ (index === currentindex ? "    active": "")}  onClick={e => playMusic(item,index)}
                        ></span>
                         <NavLink to="/discover/player">
                        <span className="name">{item.name}</span>
                        </NavLink>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

