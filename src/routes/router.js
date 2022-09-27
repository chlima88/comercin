import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AccountPage from "@/views/AccountPage.vue";
import NewPage from "@/views/NewPage.vue";
import NewTrade from "@/views/NewTrade.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import MapPage from "@/views/MapPage.vue";
import NewFavorite from "@/views/NewFavorite.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/account",
        component: AccountPage,
    },
    {
        path: "/new",
        component: NewPage,
    },
    {
        path: "/newTrade",
        component: NewTrade,
    },
    {
        path: "/favorites",
        component: FavoritesPage,
    },
    {
        path: "/settings",
        component: SettingsPage,
    },
    {
        path: "/login",
        component: SettingsPage,
    },
    {
        path: "/logout",
        component: SettingsPage,
    },
    {
        path: "/MapPage",
        component: MapPage,
    },
    {
        path: "/newFavorite",
        component: NewFavorite,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
