import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "../../router"

import CRFFTYAppHeader from '../../components/app-header/index.js';
import CRFFTYAppFooter from '../../components/app-footer';
import CRFFTYAppPlayBar from '@/pages/player/app-play-bar';
import Loading from '@/components/loading/index.js'

export default memo(function HYMain() {
  return (
    <HashRouter>
      <CRFFTYAppHeader />
      <Suspense fallback={<div><Loading/></div>}>
        {renderRoutes(routes)}
      </Suspense>
      <CRFFTYAppFooter />
      <CRFFTYAppPlayBar/>
    </HashRouter>
  )
})
