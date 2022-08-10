<template>
    <div ref="mapDivRef" class="map"></div>
</template>

<script setup>
import { ref } from "vue"

// the google map object
const map = ref(null)
// the map element in the template
const mapDivRef = ref(null)
</script>
