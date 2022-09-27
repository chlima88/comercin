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
                <form>
                    <p>
                        <input
                            type="text"
                            name="nameItem"
                            class="nameItem"
                            placeholder="Nome do produto"
                        />
                        <input
                            type="number"
                            name="itemPrice"
                            class="itemPrice"
                            placeholder="R$"
                        />
                    </p>
                    <input
                        type="text"
                        name="desciption"
                        class="desciption"
                        placeholder="Descrição do produto"
                    />
                    <span class="send">
                        <input type="submit" value="Enviar" class="button" />
                        <img
                            src="../assets/icons/plus.svg"
                            alt=""
                            class="plus"
                        />
                    </span>
                </form>
            </section>
        </template>
    </Main>
    <!-- <Content /> -->
    <!-- <Footer /> -->
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
// import Content from "@/components/Content.vue";
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

.desciption {
    box-sizing: border-box;
    max-width: 100%;
    height: 157px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.send {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 20px;
    max-width: 100%;
    height: 45px;
    background: #9747ff;
    border-radius: 3px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}

.button {
    width: 15%;
    height: 22px;
    background-color: #9747ff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #ffffff;
    flex: none;
    border: 0;
    flex-grow: 0;
}

.plus {
    max-width: 24px;
    height: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #ffffff;
}
</style>
