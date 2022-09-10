<template>
    <Header />

    <form action="submit">
        <div class="box_search">
            <img src="../assets/icons/search.svg" />
            <input type="text" class="search" placeholder="Busque pelo mapa" />
            <img src="../assets/icons/close.svg" />
        </div>
        <button class="button_search" type="submit">Procurar</button>
    </form>
    <Content />

    <button class="button_list">
        Visualizar em Lista
        <img src="../assets/icons/clipboard.svg" alt="" class="clipboard" />
    </button>
    <main />
    <Footer />
</template>

<script setup>
import Content from "@/components/Content.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
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
    width: 650px;
    height: 45px;
    background: #9747ff;
    border-radius: 3px;
}

form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    width: 1200px;
    height: 40px;
    flex: none;
    border: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
}

.box_search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 1106px;
    height: 40px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px 0px 0px 3px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
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
    background: #9747ff;
    border-radius: 0px 3px 3px 0px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
</style>
