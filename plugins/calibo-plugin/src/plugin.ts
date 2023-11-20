import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const caliboPluginPlugin = createPlugin({
  id: 'calibo-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const CaliboPluginPage = caliboPluginPlugin.provide(
  createRoutableExtension({
    name: 'CaliboPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
