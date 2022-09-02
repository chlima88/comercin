<template>
    <ion-content class="ion-padding">
        <div>
            <h1>Geolocation</h1>
            <p>Your location is:</p>
            <p>Latitude: {{ location.lat }}</p>
            <p>Longitude: {{ location.lng }}</p>
            <ion-button @click="getCurrentPosition">
                Get Current Location!
            </ion-button>
        </div>

        <Suspense>
            <MapCompoment v-if="location.lat" :location="location" />
        </Suspense>
    </ion-content>
</template>

<script setup>
import { IonButton, IonContent } from "@ionic/vue";
import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import MapCompoment from "@/components/OldMapComponent.vue";

const location = ref({
    lat: null,

    lng: null,
});

const getCurrentPosition = async () => {
    const pos = await Geolocation.getCurrentPosition();

    location.value = {
        lat: pos.coords.latitude,

        lng: pos.coords.longitude,
    };
};
</script>
