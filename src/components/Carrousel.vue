<template>
    <div class="trendlist">
        <p class="trendlist__title">{{ title }}</p>
        <div class="trendlist__carrousel">
            <img src="@/assets/icons/arrowLeft.svg" alt="left" />
            <slot name="content" />
            <img src="@/assets/icons/arrowRight.svg" alt="right" />
        </div>
    </div>
</template>

<script setup>
// import { defineProps } from "vue";

defineProps({
    title: { type: String, required: true },
});
</script>

<style lang="css" scoped>
.trendlist {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
}

.trendlist__title {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
}
.trendlist__carrousel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    width: 100%;
}
</style>
