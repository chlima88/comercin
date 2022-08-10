<template>
    <IonPage>
        <IonHeader :translucent="true">
            <IonToolbar>
                <IonTitle>Google Maps App</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding"></IonContent>
    </IonPage>
</template>

<script setup>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from "@ionic/vue"
import { ref } from "vue"

// the google map object
const map = ref(null)
// the map element in the template
const mapDivRef = ref(null)
</script>
