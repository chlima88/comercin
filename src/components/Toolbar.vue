<template>
    <div class="toolbar">
        <a href="#" class="toolbar__avatar-container" @click="toggleSideBar">
            <img
                class="toolbar__avatar-image"
                src="@/assets/avatar.png"
                alt="avatar"
            />
        </a>
        <div class="toolbar__menu-container">
            <form action="submit">
                <div class="toolbar__input-container">
                    <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.4733 13.0266L10.9999 10.5733C11.96 9.37621 12.4249 7.8568 12.2991 6.32747C12.1733 4.79814 11.4664 3.37512 10.3236 2.35103C9.18085 1.32694 7.68914 0.77961 6.15522 0.821583C4.6213 0.863557 3.16175 1.49164 2.0767 2.5767C0.991644 3.66175 0.363557 5.1213 0.321583 6.65522C0.27961 8.18914 0.82694 9.68085 1.85103 10.8236C2.87512 11.9664 4.29814 12.6733 5.82747 12.7991C7.3568 12.9249 8.87621 12.46 10.0733 11.4999L12.5266 13.9533C12.5886 14.0158 12.6623 14.0654 12.7436 14.0992C12.8248 14.133 12.9119 14.1505 12.9999 14.1505C13.0879 14.1505 13.1751 14.133 13.2563 14.0992C13.3376 14.0654 13.4113 14.0158 13.4733 13.9533C13.5934 13.829 13.6606 13.6628 13.6606 13.4899C13.6606 13.317 13.5934 13.1509 13.4733 13.0266V13.0266ZM6.33327 11.4999C5.41029 11.4999 4.50804 11.2262 3.74061 10.7135C2.97318 10.2007 2.37504 9.47185 2.02183 8.61913C1.66862 7.7664 1.57621 6.82809 1.75627 5.92285C1.93634 5.0176 2.38079 4.18608 3.03344 3.53344C3.68608 2.88079 4.5176 2.43634 5.42285 2.25627C6.32809 2.07621 7.2664 2.16862 8.11913 2.52183C8.97185 2.87504 9.70068 3.47318 10.2135 4.24061C10.7262 5.00804 10.9999 5.91029 10.9999 6.83327C10.9999 8.07095 10.5083 9.25793 9.6331 10.1331C8.75793 11.0083 7.57095 11.4999 6.33327 11.4999V11.4999Z"
                            fill="currentColor"
                        />
                    </svg>
                    <input
                        type="text"
                        class="toolbar__form-input"
                        placeholder="Busque por produto, vendedor ou lugar"
                    />
                    <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.99992 0.833252C3.33325 0.833252 0.333252 3.83325 0.333252 7.49992C0.333252 11.1666 3.33325 14.1666 6.99992 14.1666C10.6666 14.1666 13.6666 11.1666 13.6666 7.49992C13.6666 3.83325 10.6666 0.833252 6.99992 0.833252ZM9.46659 9.03325C9.73325 9.29992 9.73325 9.69992 9.46659 9.96659C9.19992 10.2333 8.79992 10.2333 8.53325 9.96659L6.99992 8.43325L5.46659 9.96659C5.19992 10.2333 4.79992 10.2333 4.53325 9.96659C4.26659 9.69992 4.26659 9.29992 4.53325 9.03325L6.06659 7.49992L4.53325 5.96659C4.26659 5.69992 4.26659 5.29992 4.53325 5.03325C4.79992 4.76659 5.19992 4.76659 5.46659 5.03325L6.99992 6.56659L8.53325 5.03325C8.79992 4.76659 9.19992 4.76659 9.46659 5.03325C9.73325 5.29992 9.73325 5.69992 9.46659 5.96659L7.93325 7.49992L9.46659 9.03325Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <button class="toolbar__form-submit" type="submit">
                    Procurar
                </button>
            </form>
            <nav class="toolbar__menu">
                <router-link to="/">
                    <img src="@/assets/icons/house.png" />
                </router-link>
                <router-link to="/account">
                    <img src="@/assets/icons/account.png" />
                </router-link>
                <router-link to="/new">
                    <img src="@/assets/icons/plus_square.png" />
                </router-link>
                <router-link to="/newTrade">
                    <img src="@/assets/icons/plus_square.png" />
                </router-link>
                <router-link to="/MapPage">
                    <img src="@\assets\icons\Map-location.svg" />
                </router-link>
                <router-link to="/favorites">
                    <img src="@/assets/icons/favorite.png" />
                </router-link>
                <router-link to="/settings">
                    <img src="@/assets/icons/settings.png" />
                </router-link>
            </nav>
            <router-link class="toolbar__logout-btn" to="/logout">
                <img src="@/assets/icons/logout.png" />
            </router-link>
        </div>
        <div class="toolbar__logo">
            <router-link to="/" class="toolbar__logo-icon">
                <img src="@/assets/icons/vuejs.png" />
            </router-link>
            <router-link to="/" class="toolbar__logo-text"
                >Comercin</router-link
            >
        </div>
    </div>
</template>

<script setup>
import router from "@/routes/router.js";

function toggleSideBar() {
    router.push("/account");
}
</script>

<style scoped>
.toolbar {
    background-color: var(--color-primary);
    position: fixed;
    bottom: 0;
    height: 6rem;
    width: 100%;
    min-width: 35rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 2rem;
    z-index: 1;
}
.toolbar a {
    flex-shrink: 0;
}

.toolbar__avatar-container {
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

.toolbar__avatar-image {
    width: 100%;
}

.toolbar__menu-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 100%;
}

.toolbar__menu-container form {
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    padding-left: 15%;
    width: 100%;
}

.toolbar__input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 80rem;
}
.toolbar__input-container svg {
    position: absolute;
}
.toolbar__input-container svg:first-child {
    left: 1rem;
    color: var(--color-primary);
}

.toolbar__input-container svg:last-child {
    right: 1rem;
    color: var(--color-medium);
}

.toolbar__form-input {
    font-size: 1.6rem;
    width: 100%;
    height: 4rem;
    border: 1px solid #dddddd;
    border-radius: 3px 0 0 3px;
    padding: 1rem 3rem;
    background-color: #faf6ff;
}
.toolbar__form-input::placeholder {
    color: #aeaeae;
}

.toolbar__form-submit {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-primary);
    background-color: var(--color-primary-contrast);
    padding: 0.3rem 1.5rem;

    height: 4rem;
    border: 1px solid transparent;
    border-radius: 0 3px 3px 0;
}

.toolbar__menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
}

.toolbar__logout-btn {
    padding-inline: 10px;
}

.toolbar__logo {
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
}

.toolbar__logo-icon {
    width: 28px;
    height: 28px;
}

.toolbar__logo-text {
    display: flex;
    font-weight: 600;
    font-size: 2rem;
    line-height: 24px;
    color: var(--color-light);
}

.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0px;
    gap: 1.5rem;

    width: 100%;
    height: 80px;

    background: var(--color-primary);
}

.top > h1 {
    width: 100%;
    height: 44px;

    font-weight: 600;
    font-size: 3.6rem;
    line-height: 44px;

    /* color: var(--color-light); */

    text-align: center;
}

@media screen and (min-width: 768px) {
    .toolbar {
        position: relative;
    }
    .toolbar__menu-container {
        justify-content: flex-end;
    }
    .toolbar__logo {
        display: flex;
    }

    .toolbar__menu-container form {
        display: flex;
    }
}
</style>
