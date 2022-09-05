<template>
    <Header>
        <template #title>Home</template>
    </Header>
    <Main>
        <template #main>
            <h1>Localize facilmente os comércios próximos a você!</h1>
            <div class="textBox">
                <p>
                    Encontre a sua comida preferida ou os comércios mais
                    procurados da região
                </p>
            </div>
            <div class="tags-box">
                <div class="tags"><p>Comidas mais procuradas</p></div>
                <div class="tags"><p>Comércios mais populares</p></div>
                <div class="tags"><p>Próximos de você</p></div>
                <div class="tags"><p>Pesquisa por região</p></div>
            </div>
            <Carrousel title="Mais vistos em sua localização">
                <template #content>
                    <Card
                        v-for="i in 5"
                        :key="i"
                        title="Picole da Thalita"
                        :img="picoleImg"
                        :price="2"
                        :stars="3"
                        size="md"
                    >
                        <template #text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam inventore deleniti dolore repellendus
                            voluptatem velit molestias quidem omnis excepturi
                            eveniet, minus vitae. Qui fugiat reiciendis optio
                            eligendi libero. Deleniti, sed.
                        </template>
                        <template #address>
                            Rua da imaginação N° 0000
                        </template>
                        <template #contact> (00) 0000-0000 </template>
                    </Card>
                </template>
            </Carrousel>
            <div class="section-row">
                <Carrousel title="Favoritos">
                    <template #content>
                        <Card
                            v-for="i in 5"
                            :key="i"
                            title="Coco do Charles"
                            :img="cocoImg"
                            size="lg"
                        >
                            <template #text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum ab quo ducimus amet qui
                                inventore, officiis assumenda sequi, totam dolor
                                minus! Odio pariatur alias sequi repudiandae
                                sint velit ad. Incidunt.
                            </template>
                            <template #address>
                                Rua da imaginação N° 0000
                            </template>
                            <template #contact> (00) 0000-0000 </template>
                        </Card>
                    </template>
                </Carrousel>
                <Carrousel title="Vistos Recentemente">
                    <template #content>
                        <Card
                            v-for="i in 5"
                            :key="i"
                            title="Sanduíche do Lucas"
                            :img="sanduicheImg"
                            size="lg"
                        >
                            <template #text>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Repellat, consequuntur omnis,
                                fugiat nobis enim dolor sint cumque ipsa ipsam
                                eaque sapiente nihil quis! Eos consequatur
                                consequuntur aliquam, deserunt impedit
                                molestiae.
                            </template>
                            <template #address>
                                Rua da imaginação N° 0000
                            </template>
                            <template #contact> (00) 0000-0000 </template>
                        </Card>
                    </template>
                </Carrousel>
            </div>
        </template>
    </Main>
    <!-- <Footer /> -->
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Carrousel from "@/components/Carrousel.vue";
import Card from "@/components/Card.vue";
import picoleImg from "@/assets/picole.png";
import cocoImg from "@/assets/coco.png";
import sanduicheImg from "@/assets/sanduiche.png";
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

.tags-box {
    display: flex;
    justify-content: space-between;
    gap: 3px;
    width: 100%;
}

.tags {
    display: flex;
    align-items: center;
    padding-block: 5px;
    width: 25rem;
    border: 1px solid var(--color-light-shade);
    transition: all ease 0.2s;
}

.tags:hover {
    border-color: var(--color-primary);
    background-color: var(--color-secondary-tint);
    color: var(--color-primary);
    cursor: pointer;
    transition: all ease 0.2s;
}

.tags p {
    font-weight: 600;
    font-size: 1.2rem;
}

.section-row {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .tags {
        padding-block: 2rem;
    }

    .section-row {
        flex-direction: row;
        max-width: 100%;
        gap: 5rem;
    }

    .section-row .trendlist {
        overflow: hidden;
    }
}
</style>
