import { createSelector } from 'reselect';
import { isEmpty, get } from 'lodash';
import { shapeData, sortLabelsByOrder } from '../util';

export const getPreData = createSelector(
  (state) => get(state, ['pre'], {}),
  (preData) => preData,
);

export const getPostData = createSelector(
  (state) => get(state, ['post'], {}),
  (postData) => postData,
);

export const getNorm = createSelector(
  (state) => get(state, ['demographics'], {}),
  (demographics) => demographics,
);

export const getLabels = createSelector(
  getPreData,
  getPostData,
  (pre, post) => sortLabelsByOrder(pre, post),
);

export const getSession = createSelector(
  (state) => get(state, ['session', 'session'], {}),
  (session) => session,
);

export const getSessionData = createSelector(
  getPreData,
  getPostData,
  (state) => get(state, ['session', 'session'], {}),
  (pre, post, session) => shapeData(session === 'Post' ? post : pre),
);

export const getEmptyData = createSelector(
  getPreData,
  getPostData,
  (pre, post) => isEmpty({ ...post, ...pre }),
);

export const getSubtitle = createSelector(
  (state) => state.chart.chart,
  (state) => state.session.session,
  (chart, session) => `${chart} Chart ${chart !== 'Radar' ? `(${session} appt.)` : ''}`,
);

export const getChartType = createSelector(
  (state) => get(state, ['chart', 'chart'], 'Radar'),
  (chart) => chart,
);
