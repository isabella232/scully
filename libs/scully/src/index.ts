import {
  findPlugin,
  getConfig,
  getPluginConfig,
  setConfig,
  setPluginConfig,
  setPluginPriority
} from './lib/pluginManagement/pluginConfig';
import { configValidator, registerPlugin } from './lib/pluginManagement/pluginRepository';
import './lib/pluginManagement/systemPlugins';
import { ContentMetaData } from './lib/renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import { renderRoute } from './lib/renderPlugins/executePlugins';
import { ContentTextRoute, HandledRoute, RouteConfig } from './lib/routerPlugins/handledRoute.interface';
import { WriteToStorage } from './lib/systemPlugins/writeToFs.plugin';
import { createFolderFor } from './lib/utils';
import { prod } from './lib/utils/cli-options';
import { loadConfig, routeRenderer, scullyConfig, updateScullyConfig } from './lib/utils/config';
import './lib/utils/exitHandler';
import { handleTravesal } from './lib/utils/handlers/handleTravesal';
import { routeDiscovery } from './lib/utils/handlers/routeDiscovery';
import { httpGetJson } from './lib/utils/httpGetJson';
import { RouteTypes, ScullyConfig } from './lib/utils/interfacesandenums';
import { replaceFirstRouteParamWithVal } from './lib/utils/replaceFirstRouteParamWithVal';
import { routeSplit } from './lib/utils/routeSplit';
import { staticServer } from './lib/utils/serverstuff/staticServer';
import { title404 } from './lib/utils/serverstuff/title404';
import { getHandledRoutes } from './lib/utils/services/routeStorage';
import { startScully } from './lib/utils/startup';
export * as cliOptions from './lib/utils/cli-options';
export * from './lib/utils/log';
export * from './lib/utils/platform-server';
export * from './lib/utils/procesmanager';
export { waitForIt } from './lib/utils/waitForIt';
export { SPSRouteRenderer } from './lib/utils/platform-server';
export {
  title404,
  routeRenderer,
  configValidator,
  ContentMetaData,
  ContentTextRoute,
  createFolderFor,
  findPlugin,
  getHandledRoutes,
  getPluginConfig,
  HandledRoute,
  httpGetJson,
  registerPlugin,
  replaceFirstRouteParamWithVal,
  RouteConfig,
  routeSplit,
  RouteTypes,
  scullyConfig,
  ScullyConfig,
  setPluginConfig,
  startScully,
  updateScullyConfig,
  /** WIP part, those might be remove again in near future. */
  handleTravesal,
  // launchedBrowser$,
  loadConfig,
  renderRoute,
  routeDiscovery,
  staticServer,
  WriteToStorage,
  /** end WIP */
  getConfig as getMyConfig,
  setConfig as setMyConfig,
  prod,
  setPluginPriority,
};