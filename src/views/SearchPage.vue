<template>
    <Header>
        <template #title>Pesquisar</template>
    </Header>
    <Main>
        <template #main>
            <h1>Iniciar Busca</h1>
            <div class="textBox">
                <p>Insira o nome de um lugar, produto ou vendedor</p>
            </div>
            <SearchBox
                placeholder="Busque pelo mapa"
                @searchcomplete="showResults"
            />

            <div class="card_container">
                <Card
                    v-for="card in searchList"
                    :id="card.id"
                    :key="card.id"
                    :title="card.product"
                    :img="card.image"
                    :stars="card.stars"
                    :price="card.price"
                    :favorite="card.favorite"
                    size="md"
                    class="card"
                >
                    <template #text> {{ card.description }}</template>
                    <template #address> {{ card.address }} </template>
                    <template #contact> {{ card.contact }} </template>
                </Card>
            </div>
            <div class="map_view">
                <RouterLink to="/map">
                    <p>Visualizar no mapa</p>
                    <img src="@\assets\icons\Map-location.svg" />
                </RouterLink>
            </div>
        </template>
    </Main>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Card from "@/components/Card.vue";
import SearchBox from "../components/SearchBox.vue";

const searchList = ref([]);

const showResults = (results) => {
    searchList.value = results;
};
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

.search_container {
    display: flex;
    justify-content: center;
    width: 100%;
}

form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

.box_search {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 650px;
    width: 100%;
    height: 4rem;
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
    width: 9rem;
    height: 4rem;
    background: #9747ff;
    color: #fff;
    border-radius: 0px 3px 3px 0px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

/* .card_container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
} */

.card_container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.card {
    flex-grow: 0;
}

.map_view {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
}

.map_view > a {
    background-color: var(--color-primary);
    width: 100%;
    max-width: 650px;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.map_view > a > p {
    width: auto;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: #ffffff;
}

@media screen and (min-width: 768px) {
    form {
        width: 50%;
    }

    .map_view > button {
        width: 50%;
    }
}
</style>
