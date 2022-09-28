<template>
    <div class="wrapper">
        <div
            id="sidemenu"
            class="sidemenu"
            :class="{ 'sidemenu--show': menuState }"
        >
            <div class="sidemenu__nav">
                <div class="sidemenu__top">
                    <router-link to="/" class="toolbar__logo-icon">
                        <img src="@/assets/icons/vuejs.png" />
                        <p>Comercin</p>
                    </router-link>
                    <button @click="toggleMenu, $emit('toggleMenu')">
                        .X.
                    </button>
                </div>
                <div class="sidemenu__items">
                    <router-link to="/">
                        <img src="@/assets/icons/house.png" />
                        <p>Home</p>
                    </router-link>
                    <router-link to="/account">
                        <img src="@/assets/icons/account.png" />
                        <p>My Account</p>
                    </router-link>
                    <router-link to="/new">
                        <img src="@/assets/icons/plus_square.png" />
                        <p>New</p>
                    </router-link>
                    <router-link to="/favorites">
                        <img src="@/assets/icons/favorite.png" />
                        <p>Favorites</p>
                    </router-link>
                    <router-link to="/settings">
                        <img src="@/assets/icons/settings.png" />
                        <p>Settings</p>
                    </router-link>
                </div>
                <div class="sidemenu__items">
                    <router-link to="/">
                        <img src="@/assets/icons/logout.png" />
                        <p>Logout</p>
                    </router-link>
                </div>
            </div>
            <div class="sidemenu__statusbar">
                <div class="sidemenu__user">
                    <a
                        href="#"
                        class="sidemenu__avatar-container"
                        @click="toggleMenu, $emit('toggleMenu')"
                    >
                        <img
                            class="sidemenu__avatar-image"
                            src="@/assets/avatar.png"
                            alt="avatar"
                        /> </a
                    >User
                </div>
                <div class="sidemenu__status">Online</div>
            </div>
        </div>
    </div>
    <!-- <button style="width: 500px" @click="toggleMenu">Show</button> -->
</template>

<script setup>
import { ref, watchEffect } from "vue";

defineEmits(["toggleMenu"]);

const props = defineProps({
    show: {
        require: true,
        type: Boolean,
    },
});

const menuState = ref(false);

watchEffect(() => {
    menuState.value = props.show;
});

const toggleMenu = () => {
    menuState.value = !menuState.value;
};
</script>

<style lang="css" scoped>
.wrapper {
    position: fixed;
    left: -230px;
    z-index: 1;
    height: 100%;
}
.sidemenu--show {
    position: relative;
    left: 230px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
.sidemenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 230px;

    position: relative;
    /* left: 230px; */
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;

    padding-inline: 1.5rem;
    padding-block: 0.5rem;

    background: var(--color-primary);
    color: var(--color-primary-contrast);
    font-size: 20px;
}

.sidemenu__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
}

.sidemenu__nav {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    font-weight: 600;
}

.sidemenu__items {
    display: flex;
    padding-inline: 1.2rem;
    flex-direction: column;
    gap: 1rem;
}

.sidemenu__top a,
.sidemenu__items a {
    display: flex;
    gap: 2rem;
    color: var(--color-primary-contrast);
}

.sidemenu__statusbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.sidemenu__user {
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.sidemenu__avatar-container {
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 13px;

    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid #21ec00;
    overflow: hidden;
}

.sidemenu__avatar-image {
    width: 100%;
}

.sidemenu__status {
    font-size: 1.3rem;
    font-weight: 500;
}

@media screen and (min-width: 768px) {
    .sidemenu__top {
        visibility: hidden;
    }
}
</style>
