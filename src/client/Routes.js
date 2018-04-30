import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';

// A list of routes config
export default [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path : "/users",
        component: UserListPage
    }
];