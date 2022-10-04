<template>
    <Header>
        <template #title>Cadastro de Itens</template>
    </Header>
    <Main>
        <template #main>
            <div id="messageBox">
                <h1>Novo Item</h1>
            </div>
            <div id="textBox">
                <p>Informe os dados do item</p>
            </div>
            <section class="form">
                <form
                    @submit.prevent="saveItem"
                    @change="statusMessage = false"
                >
                    <p>
                        <input
                            v-model="item.name"
                            type="text"
                            name="nameItem"
                            class="nameItem"
                            placeholder="Nome do produto"
                        />
                        <input
                            v-model.number="item.price"
                            type="number"
                            name="itemPrice"
                            class="itemPrice"
                            placeholder="R$"
                        />
                    </p>
                    <textarea
                        v-model="item.description"
                        name="description"
                        class="description"
                        placeholder="Descrição do produto"
                    ></textarea>
                    <button type="submit" class="button">
                        Enviar
                        <img
                            src="../assets/icons/plus.svg"
                            alt=""
                            class="plus"
                        />
                    </button>
                </form>
                <div
                    class="status-message"
                    :class="{ 'show-statusmessage': statusMessage }"
                >
                    Adicionado com sucesso!
                </div>
            </section>
        </template>
    </Main>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

const store = useStore();
const vendor = {
    name: "User",
    address: "Rua Lisboa 40",
    contact: "(21) 2121-2121",
    stars: 5,
    price: 2,
};
const item = reactive({
    name: "",
    description: "",
    price: "",
});
const statusMessage = ref(false);

const saveItem = () => {
    store.commit("saveVendor", {
        ...vendor,
        product: item.name,
        description: item.description,
    });
    statusMessage.value = true;
    item.name = "";
    item.description = "";
    item.price = "";
};
</script>

<style scoped>
#messageBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 10px;
    max-width: 1200px;
    height: 70px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

#messageBox > h1 {
    max-width: 123px;
    height: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
}

#textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 0px;
    gap: 10px;
    max-width: 1200px;
    height: 31px;
}

#textBox > p {
    max-width: 1200px;
    height: 19px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: block;
    align-items: center;
    text-align: center;
    color: #4e4e4e;
    flex: none;
    border: 0;
    align-self: stretch;
    flex-grow: 0;
}

.form {
    width: 100%;
    align-items: center;
    margin: auto;
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    max-width: 650px;
    height: 262px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: auto;
}

form > p {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    max-width: 100%;
    height: 40px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.nameItem {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 70%;
    height: 40px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
}

.itemPrice {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 30%;
    height: 40px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.description {
    width: 100%;
    height: 157px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    font-family: Arial, sans-serif;
    padding: 1rem;
    font-size: 12.5px;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 4rem;
    width: 100%;
    padding: 0.7rem;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-primary-contrast);
    background-color: var(--color-primary);
}

.plus {
    height: 15px;
    color: #ffffff;
}

.status-message {
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 20px;

    margin: auto;
    width: 100%;
    max-width: 650px;
    height: 45px;

    background: #e2ffdd;
    border: 2px solid #21ec00;
    border-radius: 3px;
    color: #2ba417;
}

.show-statusmessage {
    display: flex;
}
</style>
