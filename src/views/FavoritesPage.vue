<template>
    <Header>
        <template #title>Favorites</template>
    </Header>
    <Main>
        <template #main>
            <h1>Seus favoritos atuais:</h1>
            <div class="textBox">
                <p>
                    Aqui você encontra os seus locais preferidos ou pode
                    adicionar novos.
                </p>
            </div>
            <div class="cardlist">
                <Card
                    v-for="(card, index) in cardsList"
                    :key="index"
                    :title="card.title"
                    :img="card.image"
                    :price="card.price"
                    :stars="card.stars"
                    size="sm"
                >
                    <template #text>{{ card.text }} </template>
                    <template #address> {{ card.address }}</template>
                    <template #contact> {{ card.contact }} </template>
                </Card>

                <RouterLink to="/newFavorite" class="card new-card">
                    <p class="new-card__add-title">Novo</p>
                    <svg
                        class="new-card__add-icon"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.25 1.5C7.25 1.08579 6.91421 0.75 6.5 0.75C6.08579 0.75 5.75 1.08579 5.75 1.5V5.75H1.5C1.08579 5.75 0.75 6.08579 0.75 6.5C0.75 6.91421 1.08579 7.25 1.5 7.25H5.75V11.5C5.75 11.9142 6.08579 12.25 6.5 12.25C6.91421 12.25 7.25 11.9142 7.25 11.5V7.25H11.5C11.9142 7.25 12.25 6.91421 12.25 6.5C12.25 6.08579 11.9142 5.75 11.5 5.75H7.25V1.5Z"
                            fill="#AEAEAE"
                        />
                    </svg>
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
import sanduicheImg from "@/assets/sanduiche.png";
import cocoImg from "@/assets/coco.png";

const cardsList = [
    {
        title: "Picolé da Thalita",
        image: picoleImg,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore deleniti dolore repellendus voluptatem velit molestias quidem omnis excepturi eveniet, minus vitae. Qui fugia",
        address: "Rua da imaginação N° 0000",
        contact: "(00) 0000-0000",
        price: 3,
        stars: 5,
    },
    {
        title: "Sanduíche do Lucas",
        image: sanduicheImg,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore deleniti dolore repellendus voluptatem velit molestias quidem omnis excepturi eveniet, minus vitae. Qui fugia",
        address: "Rua da imaginação N° 0000",
        contact: "(00) 0000-0000",
        price: 2,
        stars: 4,
    },
    {
        title: "Coco do Charles",
        image: cocoImg,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore deleniti dolore repellendus voluptatem velit molestias quidem omnis excepturi eveniet, minus vitae. Qui fugia",
        address: "Rua da imaginação N° 0000",
        contact: "(00) 0000-0000",
        price: 1,
        stars: 4,
    },
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

.cardlist {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 1rem;
    max-width: 100%;
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border: 1px solid #dddddd;
}
.new-card {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    max-width: 350px;
    border-style: dashed;
    width: 100%;
    border-radius: 0.7rem;
    height: 9.6rem;
}

.new-card__add-title {
    flex: 0;
    color: #aeaeae;
    font-size: 1.8rem;
    font-weight: 600;
}

.new-card__add-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.new-card__add-icon path {
    fill: #aeaeae;
}

@media screen and (min-width: 768px) {
    .cardlist {
        flex-direction: row;
    }
}
</style>
