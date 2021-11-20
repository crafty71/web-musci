import React, { memo, useState} from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { getSearchValue } from "./store/actionCreators"


import { headerLinks } from "../../services/local-data";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { AppHeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default withRouter ( memo(function CRFFTYAppHeader(props) {
  const [inputValue, setInputValue] = useState('周杰伦');

  const dispatch = useDispatch();

  const ValueChange = (e) => {
    setInputValue(e.target.value)
  };

  const dealKeypress = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      dispatch(getSearchValue(inputValue))
      props.history.push(`/search`)
    }
  };
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className={classnames("select-item")} key={item.title}>
                  {showItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            onChange={(e) => {
              ValueChange(e);
            }}
            value={inputValue}
            onKeyPress={(e) => {
              dealKeypress(e);
            }}
          />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
}));
