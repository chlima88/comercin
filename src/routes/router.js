import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AccountPage from "@/views/AccountPage.vue";
import NewPage from "@/views/NewPage.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;