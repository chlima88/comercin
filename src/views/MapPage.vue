<template>
    <Header>
        <template #title>Mapa</template>
    </Header>

    <Main>
        <template #main>
            <form action=".">
                <div class="box_search">
                    <img src="../assets/icons/search.svg" />
                    <input
                        type="text"
                        class="search"
                        placeholder="Busque pelo mapa"
                    />
                    <img src="../assets/icons/close.svg" />
                </div>
                <button class="button_search" type="submit">Procurar</button>
            </form>
            <Content />
            <RouterLink to="/newFavorite" class="button_list">
                Visualizar em Lista
                <img
                    src="../assets/icons/clipboard.svg"
                    alt=""
                    class="clipboard"
                />
            </RouterLink>
        </template>
    </Main>
</template>

<script setup>
import Content from "@/components/Content.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
</script>

<style scoped>
.button_list {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 20px;
    gap: 15px;
    margin-top: 15px;
    color: white;
    max-width: 650px;
    width: 100%;
    height: 45px;
    background: #9747ff;
    border-radius: 3px;
}

form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-inline: 0px;
    width: 100%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
}

.box_search {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    height: 40px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px 0px 0px 3px;
}

.box_search img:first-child {
    position: absolute;
    left: 1rem;
}

.box_search img:last-child {
    position: absolute;
    right: 1rem;
}
.search {
    width: 100%;
    height: 38px;
    text-align: center;
    border: 0;
    background: #faf7ff;
}

.button_search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 15px;
    width: 94px;
    height: 40px;
    color: var(--color-primary-contrast);
    background: #9747ff;
    border-radius: 0px 3px 3px 0px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
</style>
