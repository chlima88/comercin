<template>
    <header>
        <Toolbar :user-status="userStatus" @toggle-menu="toggleSideMenu" />
        <SideMenu
            :show="state"
            @toggle-menu="state = false"
            @toggle-user-status="toggleUserStatus"
        />
        <div class="top">
            <h1><slot name="title" /></h1>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import Toolbar from "@/components/Toolbar.vue";
import SideMenu from "./SideMenu.vue";

const state = ref(false);
const userStatus = ref(false);

const toggleSideMenu = () => {
    state.value = !state.value;
};

const toggleUserStatus = () => {
    userStatus.value = !userStatus.value;
};
</script>

<style scoped>
.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding-inline: 1.5rem;

    width: 100%;
    height: 60px;

    background: #9747ff;
}

.top > h1 {
    width: 100%;

    font-weight: 600;
    font-size: 3.6rem;
    /* line-height: 44px; */

    color: #ffffff;

    text-align: center;
}
</style>
