<template>
    <ion-content>
        <capacitor-google-map id="gmap" ref="mapElement"></capacitor-google-map>
    </ion-content>
</template>

<script setup>
import { GoogleMap } from "@capacitor/google-maps"
import { IonContent } from "@ionic/vue"

import { onMounted, ref } from "vue"

const props = defineProps({
    location: {
        type: String,
        required: true,
    },
})
const mapElement = ref("")

onMounted(async () => {
    const mapConfig = {
        center: {
            lat: props.location.lat,
            lng: props.location.lng,
        },
        zoom: 16,
        androidLiteMode: false,
    }
    const mapOptions = {
        id: "map",
        apiKey: import.meta.env.VITE_MAPS_API_KEY,
        config: mapConfig,
        element: mapElement.value,
    }

    try {
        // Create the Map Element
        const map = await GoogleMap.create(mapOptions)

        // Drop a Map Marker
        await map.addMarkers([
            {
                coordinate: {
                    lat: props.location.lat,
                    lng: props.location.lng,
                },
                title: "Charles",
            },
            {
                coordinate: {
                    lat: -22.813,
                    lng: -43.027,
                },
                title: "Lucas",
            },
            {
                coordinate: {
                    lat: -22.814,
                    lng: -43.027,
                },
                iconUrl:
                    "https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-2-icon.png",
            },
        ])
    } catch (err) {
        console.log(err)
    }
})
</script>

<style>
capacitor-google-map {
    display: inline-block;
    width: 275px;
    height: 400px;
}
</style>
