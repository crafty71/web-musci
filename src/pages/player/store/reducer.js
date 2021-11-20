import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [
    {
      "name": "星河万里",
      "id": 1843704418,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 47912279,
          "name": "Rom邢瑞",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 7,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127142100,
        "name": "星河万里",
        "picUrl":"https://p1.music.126.net/QYOtbVhmJ-jpPzCPWqjZUw==/109951165965398413.jpg",
        "tns": [],
        "pic_str": "109951165965398413",
        "pic": 109951165965398420
      },
      "dt": 212262,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8493165,
        "vd": -44742
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5095917,
        "vd": -42139
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3397293,
        "vd": -40483
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1231516800000
    }, 
  ],
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentSongIndex: [],
  currentSong: 
  {
    "name": "星河万里",
    "id": 1843704418,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 47912279,
        "name": "Rom邢瑞",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 8,
    "v": 7,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 127142100,
      "name": "星河万里",
      "picUrl":"https://p1.music.126.net/QYOtbVhmJ-jpPzCPWqjZUw==/109951165965398413.jpg",
      "tns": [],
      "pic_str": "109951165965398413",
      "pic": 109951165965398420
    },
    "dt": 212262,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 8493165,
      "vd": -44742
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 5095917,
      "vd": -42139
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 3397293,
      "vd": -40483
    },
    "a": null,
    "cd": "01",
    "no": 1,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 2,
    "s_id": 0,
    "mark": 0,
    "originCoverType": 0,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "mst": 9,
    "cp": 14026,
    "rtype": 0,
    "rurl": null,
    "publishTime": 1231516800000
  }, 
  currentLyrics: [],
  simiPlaylist: [],
  simiSongs: [],
  currentLyricIndex: -1
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.song);
    case actionTypes.CHANGE_LYRICS:
      return state.set("currentLyrics", action.lyrics);
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist);
    case actionTypes.CHANGE_SIMI_SONGS:
      return state.set("simiSongs", action.simiSongs);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set("playSequence", action.sequence);
    default:
      return state;
  }
}

export default reducer;
