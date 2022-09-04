<template>
    <main>
        <slot name="main" />
    </main>
</template>

<script setup></script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1.5rem;

    max-width: 120rem;
    margin: auto;
    margin-bottom: 60px;
}
</style>
