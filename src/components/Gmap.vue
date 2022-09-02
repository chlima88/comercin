<template>
    <div ref="mapDivRef" class="map"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
    faLocationDot,
    faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
// the google map object
const map = ref(null);
// the map element in the template
const mapDivRef = ref(null);

const props = defineProps({
    center: {
        type: Object,
        required: true,
    },
    zoom: {
        type: Number,
        required: true,
    },
    mapType: {
        type: String,
        required: true,
    },
    markers: {
        type: Array,
        required: true,
    },
    disableUi: {
        type: Boolean,
        required: true,
    },
});

onMounted(() => {
    const ApiKey = import.meta.env.VITE_MAPS_API_KEY;

    const googleMapsScript = document.createElement("SCRIPT");
    googleMapsScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&callback=initMap`
    );
    googleMapsScript.setAttribute("defer", "");
    googleMapsScript.setAttribute("async", "");
    document.head.appendChild(googleMapsScript);

    const loadMapMarkers = () => {
        if (!props.markers.length) return;

        // // SVG Icon
        // const svgMarker = {
        //     path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        //     fillColor: "#3171e0",
        //     fillOpacity: 1,
        //     strokeWeight: 0,
        //     rotation: 0,
        //     scale: 2,
        //     anchor: new window.google.maps.Point(15, 30),
        // };

        // // Font Awesome Icon
        const userIcon = {
            path: faLocationDot.icon[4],
            fillColor: "#dd0000",
            fillOpacity: 0.9,
            anchor: new window.google.maps.Point(
                faLocationDot.icon[0] / 2, // width
                faLocationDot.icon[1] // height
            ),
            strokeWeight: 1,
            strokeColor: "#ffffff",
            scale: 0.065,
        };

        const vendorIcon = {
            path: faLocationPin.icon[4],
            fillColor: "#3171e0",
            fillOpacity: 0.9,
            anchor: new window.google.maps.Point(
                faLocationPin.icon[0] / 2, // width
                faLocationPin.icon[1] // height
            ),
            strokeWeight: 1,
            strokeColor: "#ffffff",
            scale: 0.065,
        };

        const userMark = new window.google.maps.Marker({
            position: props.center,
            map: map.value,
            icon: userIcon,
            title: "You",
            optimized: false,
        });
        userMark.setMap(map.value);

        props.markers.forEach((markerInfo) => {
            const mark = new window.google.maps.Marker({
                position: {
                    lat: markerInfo.lat,
                    lng: markerInfo.lng,
                },
                title: markerInfo.title,
                icon: vendorIcon,
            });

            mark.setMap(map.value);
            mark.setAnimation(window.google.maps.Animation.DROP);
        });
    };

    window.initMap = () => {
        // map.value = new window.google.maps.Map(mapDivRef.value, {
        //     mapTypeId: props.mapType || "hybrid",
        //     zoom: props.zoom || 8,
        //     disableDefaultUI: props.disableUi || false,
        //     markers: props.markers,
        //     center: props.center || { lat: 38.0, lng: -77.01 },
        // });

        map.value = new window.google.maps.Map(mapDivRef.value, {
            mapTypeId: props.mapType || "hybrid",
            center: props.center,
            zoom: props.zoom || 8,
            disableDefaultUI: props.disableUi || false,
            heading: 179,
            tilt: 60.5,
            mapId: "6f6a875750468fd7",
        });

        const buttons = [
            {
                text: "Left",
                html: '<i class="fa-solid fa-angle-left"></i>',
                mode: "rotate",
                amount: 20,
                position: window.google.maps.ControlPosition.LEFT_CENTER,
            },
            {
                text: "Right",
                html: '<i class="fa-solid fa-angle-right"></i>',
                mode: "rotate",
                amount: -20,
                position: window.google.maps.ControlPosition.RIGHT_CENTER,
            },
            {
                text: "Up",
                html: '<i class="fa-solid fa-angle-up"></i>',
                mode: "tilt",
                amount: 20,
                position: window.google.maps.ControlPosition.TOP_CENTER,
            },
            {
                text: "Down",
                html: '<i class="fa-solid fa-angle-down"></i>',
                mode: "tilt",
                amount: -20,
                position: window.google.maps.ControlPosition.BOTTOM_CENTER,
            },
        ];

        const adjustMap = (mode, amount) => {
            switch (mode) {
                case "tilt":
                    map.value.setTilt(map.value.getTilt() + amount);
                    break;
                case "rotate":
                    map.value.setHeading(map.value.getHeading() + amount);
                    break;
                default:
                    break;
            }
        };

        buttons.forEach(({ text, mode, html, amount, position }) => {
            const controlDiv = document.createElement("div");
            const controlUI = document.createElement("button");

            controlUI.classList.add("ui-button");
            controlUI.innerText = `${text}`;
            controlUI.innerHTML = html;
            controlUI.style.fontSize = "2rem";
            controlUI.style.width = "2rem";
            controlUI.style.height = "2rem";
            controlUI.style.color = "white";
            controlUI.style.backgroundColor = "#572894";
            controlUI.addEventListener("click", () => {
                adjustMap(mode, amount);
            });
            controlDiv.appendChild(controlUI);
            map.value.controls[position].push(controlDiv);
        });
        loadMapMarkers();
    };
});
</script>

<style lang="css" scoped>
.map {
    width: 100%;
    height: 300px;
    background-color: azure;
}

#markerLayer img {
    border-radius: 50% important!;
    border: 1px solid #000 !important;
}
</style>
