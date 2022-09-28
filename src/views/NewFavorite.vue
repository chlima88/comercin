<template>
    <Header>
        <template #title>Novo Favorito</template>
    </Header>
    <Main>
        <template #main>
            <h1>Iniciar Busca</h1>
            <div class="textBox">
                <p>Insira o nome de um lugar, produto ou vendedor</p>
            </div>
            <div class="search_container">
                <form action="submit">
                    <div class="box_search">
                        <img src="../assets/icons/search.svg" />
                        <input
                            type="text"
                            class="search"
                            placeholder="Busque pelo mapa"
                        />
                        <img src="../assets/icons/close.svg" />
                    </div>
                    <button class="button_search" type="submit">
                        Procurar
                    </button>
                </form>
            </div>
            <div class="card_container">
                <Card
                    v-for="i in cards"
                    :key="i.id"
                    :title="i.title"
                    :img="i.imagem"
                    :size="i.size"
                    class="card"
                >
                    <template #text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat, consequuntur omnis, fugiat nobis enim
                        dolor sint cumque ipsa ipsam eaque sapiente nihil quis!
                        Eos consequatur consequuntur aliquam, deserunt impedit
                        molestiae.
                    </template>
                    <template #address> Rua da imaginação N° 0000 </template>
                    <template #contact> (00) 0000-0000 </template>
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
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Card from "@/components/Card.vue";
import picoleImg from "@/assets/picole.png";
import cocoImg from "@/assets/coco.png";
import sanduicheImg from "@/assets/sanduiche.png";

const cards = [
    { id: 1, title: "Sanduíche do Lucas", imagem: sanduicheImg, size: "md" },
    { id: 2, title: "Sanduíche do Lucas", imagem: sanduicheImg, size: "md" },
    { id: 3, title: "Sanduíche do Lucas", imagem: sanduicheImg, size: "md" },
    { id: 4, title: "Coco do Charles", imagem: cocoImg, size: "md" },
    { id: 5, title: "Coco do Charles", imagem: cocoImg, size: "md" },
    { id: 6, title: "Coco do Charles", imagem: cocoImg, size: "md" },
    { id: 7, title: "Picole da Thalita", imagem: picoleImg, size: "md" },
    { id: 8, title: "Picole da Thalita", imagem: picoleImg, size: "md" },
    { id: 9, title: "Picole da Thalita", imagem: picoleImg, size: "md" },
];
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
