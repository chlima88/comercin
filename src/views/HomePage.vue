<template>
    <Header>
        <template #title>Home</template>
    </Header>
    <Main>
        <template #main>
            <h1>Mensagem importante</h1>
            <div class="textBox">
                <p>
                    Criei esse modelo para facilitar a vida de vocês na criação
                    das telas.
                </p>
                <p>Insira os elementos da página no grupo “Content”</p>
            </div>
        </template>
    </Main>
    <!-- <Footer /> -->
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
</script>
<style scoped>
h1 {
    font-size: 2rem;
    font-weight: 700;
    padding: 2rem 0;
    text-align: center;
    width: 100%;
}

.textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline: 0.6rem;
    gap: 1rem;

    width: 100%;
}

p {
    text-align: center;
    width: 100%;
}
</style>
