import { createComponentExtension, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

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


export const EntityCaliboPluginCard = caliboPluginPlugin.provide(
  createComponentExtension({
    name: 'EntityCaliboPluginCard',
    component: {
      lazy: () =>
      import('./components/EntityOverviewCard').then(
        m => m.EntityOverviewCard
        ),
    },
  }),
);

export const CaliboPluginContent = caliboPluginPlugin.provide(
  createRoutableExtension({
    name: 'CaliboPluginContent',
    component: () => 
      import('./components/EntityOverviewCard').then(m => m.EntityOverviewCard),
      mountPoint: rootRouteRef,
  }),
);