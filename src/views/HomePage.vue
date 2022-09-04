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
                        size="lg"
                    >
                        <template #text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit...zxczxc zxczxcz zxczxcasdasdasda asdasdas
                            dasasasd asdasda
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
                            v-for="i in 3"
                            :key="i"
                            title="Coco do Charles"
                            :img="cocoImg"
                            size="lg"
                        >
                            <template #text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit...
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
                            v-for="i in 2"
                            :key="i"
                            title="Picolé da Thalita"
                            :img="picoleImg"
                            size="lg"
                        >
                            <template #text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit...<br />
                                <br />
                                Rua da imaginação N° 0000<br />
                                <br />
                                (00) 0000-0000
                            </template>
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
    border: 1px solid #dddddd;
}

.tags p {
    font-weight: 600;
    font-size: 12px;
}

.section-row {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
}
</style>
