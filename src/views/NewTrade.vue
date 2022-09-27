<template>
    <Header>
        <template #title>Sugerir um Parceiro</template>
    </Header>
    <Main>
        <template #main>
            <div id="messageBox">
                <h1>Não encontrou quem procurava? Indique-o aqui!</h1>
            </div>
            <div id="textBox">
                <p>Manteremos você atualizado!</p>
                <p>Assim que o comércio se juntar a nós, te notificaremos.</p>
            </div>
            <section class="form">
                <form>
                    <input
                        type="text"
                        name="nameItem"
                        class="nameItem"
                        placeholder="Nome Fantasia:"
                    />

                    <input
                        type="text"
                        name="address"
                        class="address"
                        placeholder="Endereço completo:"
                    />
                    <p>
                        <input
                            type="tel"
                            name="tel"
                            class="tel"
                            placeholder="Tel: (xx) xxxx-xxxx"
                        />
                        <input
                            type="number"
                            name="cep"
                            class="cep"
                            placeholder="CEP: 00000-000"
                        />
                    </p>
                    <input
                        type="text"
                        name="email"
                        class="email"
                        placeholder="E-mail:"
                    />

                    <input
                        type="text"
                        name="webSite"
                        class="webSite"
                        placeholder="Web Site:"
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

#messageBox h1 {
    /* importar font-family */
    max-width: 590px;
    height: 30px;
    font-family: "Inter", sans-serif;
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
    height: 60px;
    flex: none;
    border: 1;
    align-self: stretch;
    flex-grow: 0;
}

#textBox p {
    /* importar fonte */
    max-width: 1200px;
    height: 19px;
    font-family: "Inter", sans-serif;
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
    align-items: center;
    padding: 0px;
    gap: 10px;
    max-width: 650px;
    height: 290px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: auto;
}

.nameItem {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 650px;
    height: 39px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.address {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 650px;
    height: 39px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

form p {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    max-width: 650px;
    height: 39px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}

.tel {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 322.5px;
    height: 39px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 0;
    flex-grow: 1;
}

.cep {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 322.5px;
    height: 39px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 1;
    flex-grow: 1;
}

.email {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 650px;
    height: 39px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}

.webSite {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    max-width: 650px;
    height: 39px;
    background: #faf7ff;
    border: 1px solid #dddddd;
    border-radius: 3px;
    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
}

.send {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 20px;
    max-width: 650px;
    height: 45px;
    background: #9747ff;
    border-radius: 3px;
    flex: none;
    order: 5;
    align-self: stretch;
    flex-grow: 0;
}

.button {
    max-width: 84px;
    height: 22px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #ffffff;
    background: #9747ff;
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
