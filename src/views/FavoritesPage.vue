<template>
    <Header>
        <template #title>Favoritos</template>
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
                    v-for="card in favoriteVendors"
                    :id="card.id"
                    :key="card.id"
                    :title="card.product"
                    :img="card.image"
                    :stars="card.stars"
                    :price="card.price"
                    :favorite="card.favorite"
                    size="sm"
                >
                    <template #text>{{ card.description }} </template>
                    <template #address> {{ card.address }}</template>
                    <template #contact> {{ card.contact }} </template>
                </Card>
                <RouterLink to="/search" class="card new-card">
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
import { computed } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Card from "@/components/Card.vue";

const store = useStore();

const favoriteVendors = computed(() => store.getters.getFavoriteVendors);
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* flex-direction: row;
    align-items: center; */
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
    height: 20rem;
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
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 1200px) {
    .cardlist {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
