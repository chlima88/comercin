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
                <div v-for="i in 10" :key="i" class="card">
                    <div class="card__img-container">
                        <img src="@/assets/coco.png" alt="card image" />
                    </div>
                    <div class="card__content">
                        <div class="card__data">
                            <p class="card__title">Coco do Charles</p>
                            <p class="card__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit...
                            </p>
                            <div class="card__raters">
                                <div class="price-rater">
                                    <svg
                                        v-for="i in [1, 2, 3]"
                                        :key="i"
                                        width="10"
                                        height="14"
                                        viewBox="0 0 10 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.33333 2.33333H3.33334C2.04467 2.33333 1 3.378 1 4.66667V4.66667C1 5.95533 2.04467 7 3.33333 7H6.66667C7.95533 7 9 8.04467 9 9.33333V9.33333C9 10.622 7.95533 11.6667 6.66667 11.6667H1M5 1V13"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div class="star-rater">
                                    <svg
                                        v-for="i in [1, 2, 3, 4, 5]"
                                        :key="i"
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.125 1.61803L9.44558 5.68237L9.55784 6.02786H9.92111H14.1946L10.7373 8.53976L10.4434 8.75329L10.5556 9.09878L11.8762 13.1631L8.41889 10.6512L8.125 10.4377L7.83111 10.6512L4.37377 13.1631L5.69436 9.09878L5.80662 8.75329L5.51272 8.53976L2.05539 6.02786H6.32889H6.69216L6.80442 5.68237L8.125 1.61803Z"
                                            fill="currentColor"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="card__heart-container">
                            <img
                                src="@/assets/icons/favorite.svg"
                                alt="favorite"
                            />
                        </div>
                    </div>
                </div>

                <div class="card new-card">
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
                </div>
            </div>
        </template>
    </Main>
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

.cardlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 1rem;

    width: 100%;
}

.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 350px;

    border: 1px solid #dddddd;
    border-radius: 0.7rem;
}

.card__img-container {
    width: 93px;
    height: 93px;
    flex-shrink: 0;
    border-radius: 7px 0 0 7px;
    overflow: hidden;
}
.card__img-container img {
    width: 100%;
}

.card__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    gap: 5px;
}

.card__data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 5px;

    height: 100%;
}

.card__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

.card__description {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #4e4e4e;
}

.card__raters {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    gap: 5px;

    width: 100%;
}

.price-rater {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: #4e4e4e;
}

.price-rater svg:last-of-type path {
    color: #dddddd;
}

.star-rater {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #ffe600;
}
.star-rater svg:last-of-type path {
    color: #dddddd;
}

.card__heart-container {
    width: 21px;
    height: 18px;
    flex-shrink: 0;
}

.card__heart-container img {
    width: 100%;
}

.new-card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-style: dashed;
    width: 100%;
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
</style>
