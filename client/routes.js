/* eslint-disable global-require */
import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';

export const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      }, {
        path: '/items/:id',
        component: ItemDetail,
        params: {},
      }
    ],
    children: Object,
  }
];
