<template>
    <header>
        <div class="top">
            <h1><slot name="title" /></h1>
        </div>
    </header>
</template>

<script setup></script>

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
