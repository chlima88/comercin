<template>
    <GMap
        :disable-ui="true"
        :zoom="17"
        :center="user"
        :markers="markers"
        map-type="roadmap"
    />
</template>

<script setup>
import GMap from "./GMap.vue";

const user = { lat: -22.974944, lng: -43.395531 };
const vendorOne = { lat: -22.974483, lng: -43.394483 };
const vendorTwo = { lat: -22.973875, lng: -43.395014 };
const vendorThree = { lat: -22.974875, lng: -43.395014 };

const markers = [
    { ...vendorOne, title: "Vendor 1" },
    { ...vendorTwo, title: "Vendor 2" },
    { ...vendorThree, title: "Vendor 3" },
];
</script>
