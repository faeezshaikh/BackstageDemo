import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { caliboPluginPlugin, CaliboPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(caliboPluginPlugin)
  .addPage({
    element: <CaliboPluginPage />,
    title: 'Root Page',
    path: '/calibo-plugin'
  })
  .render();
