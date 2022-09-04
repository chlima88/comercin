<template>
    <div class="card">
        <div class="card__img-container" :class="cardSize">
            <img :src="img" alt="card image" />
        </div>
        <div class="card__content">
            <div class="card__data">
                <p class="card__title">{{ title }}</p>
                <p class="card__description">
                    <slot name="text" />
                </p>
                <div class="card__raters">
                    <div class="price-rater">
                        <svg
                            v-for="i in price"
                            :key="i"
                            class="price-rater__filled-price"
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
                        <svg
                            v-for="i in 3 - price"
                            :key="i"
                            class="price-rater__empty-price"
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
                            v-for="i in stars"
                            :key="i"
                            class="star-rater__filled-star"
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
                        <svg
                            v-for="i in 5 - stars"
                            :key="i"
                            class="star-rater__empty-star"
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
            <div class="card__actionbar">
                <div class="card__marker-container">
                    <img src="@/assets/icons/marker.svg" alt="marker" />
                </div>
                <div class="card__heart-container">
                    <img src="@/assets/icons/favorite.svg" alt="favorite" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    title: { type: String, required: true },
    img: { type: String, required: true },
    size: { type: String, default: "" },
    price: { type: Number, default: 3 },
    stars: { type: Number, default: 5 },
});

const cardSize = computed(() => ({
    "imgContainer--sm": props.size === "sm",
    "imgContainer--md": props.size === "md",
    "imgContainer--lg": props.size === "lg",
}));

const price = computed(() => props.price);
const stars = computed(() => props.stars);
</script>

<style lang="css" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* max-width: 15rem; */
    width: 100%;

    position: relative;
    border: 1px solid #dddddd;
    border-radius: 0.7rem;
}

.card__img-container {
    border-radius: 7px 7px 0 0;
    overflow: hidden;
    height: 100%;
}
.card__img-container img {
    width: 100%;
}

.imgContainer--sm {
    width: 9.3rem;
    height: 9.3rem;
}

.imgContainer--md {
    width: 9.3rem;
    height: 9.3rem;
}

.imgContainer--lg {
    width: 100%;
}

.card__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* padding: 10px; */
    gap: 5px;
}

.card__data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 1rem;
    gap: 5px;

    height: 100%;
}

.card__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
}

.card__description {
    flex: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #4e4e4e;
    text-align: center;
    text-overflow: ellipsis;
}

.card__raters {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
}

.price-rater {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.price-rater__filled-price path {
    color: #4e4e4e;
}
.price-rater__empty-price path {
    color: #dddddd;
}

.star-rater {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.star-rater__filled-star path {
    color: #ffe600;
}
.star-rater__empty-star path {
    color: #dddddd;
}

.card__actionbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 1rem;
    padding-inline: 1rem;
    width: 100%;
}

.card__heart-container,
.card__marker-container {
    width: 21px;
    height: 18px;
    flex-shrink: 0;
}

.card__heart-container img,
.card__marker-container img {
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 768px) {
    .card {
        flex-direction: row;
        flex: 1;
    }

    .card__img-container {
        flex-shrink: 0;
        width: 93px;
        border-radius: 7px 0 0 7px;
    }

    .card__img-container img {
        object-fit: cover;
        height: 100%;
    }

    .imgContainer--sm {
        width: 9.3rem;
    }

    .imgContainer--md {
        width: 9.3rem;
    }

    .imgContainer--lg {
        width: 19rem;
    }

    .card__content {
        height: 100%;
        padding: 1rem;
    }

    .card__data {
        padding: 0;
    }
    .card__actionbar {
        position: relative;
        flex-direction: column-reverse;
        height: 100%;
        top: 0;
        padding: 0;
        flex: 1;
    }
}
</style>
