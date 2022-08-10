<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>SAVGE</ion-title>
            <img
                v-for="i in items"
                :key="i"
                alt="Vue logo"
                src="./assets/logo.png"
            />
        </ion-toolbar>
    </ion-header>
</template>

<script setup>
import { IonApp, IonHeader, IonToolbar, IonTitle } from "@ionic/vue"
</script>
