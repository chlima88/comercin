import { createStore } from "vuex";
import picoleImg from "@/assets/picole.png";
import cocoImg from "@/assets/coco.png";
import sanduicheImg from "@/assets/sanduiche.png";
import noImage from "@/assets/noimage.png";

const store = createStore({
    state: {
        vendorList: [
            {
                id: 1,
                name: "Picole da Thalita",
                address: "Rua Paris N° 10",
                product: "Picole da Thalita",
                contact: "(00) 0000-0000 ",
                description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, consequuntur omnis, fugiat nobis enim dolor sint cumque ipsa ipsam eaque sapiente nihil quis! Eos consequatur consequuntur aliquam, deserunt impedit molestiae.",
                image: picoleImg,
                stars: 5,
                price: 3,
            },
            {
                id: 2,
                name: "Sanduiche do Lucas",
                address: "Rua Madrid N° 20",
                product: "Sanduiche do Lucas",
                contact: "(00) 0000-0000 ",
                description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, consequuntur omnis, fugiat nobis enim dolor sint cumque ipsa ipsam eaque sapiente nihil quis! Eos consequatur consequuntur aliquam, deserunt impedit molestiae.",
                image: sanduicheImg,
                stars: 4,
                price: 2,
            },
            {
                id: 3,
                name: "Agua do Charles",
                address: "Rua Toquio N° 30",
                product: "Agua do Charles",
                contact: "(00) 0000-0000 ",
                description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, consequuntur omnis, fugiat nobis enim dolor sint cumque ipsa ipsam eaque sapiente nihil quis! Eos consequatur consequuntur aliquam, deserunt impedit molestiae.",
                image: cocoImg,
                stars: 3,
                price: 2,
            },
        ],
        userFavorites: [1],
    },
    mutations: {
        toggleFavorite(state, id) {
            const index = state.userFavorites.findIndex(
                (favoriteId) => favoriteId === id
            );
            if (index === -1) {
                state.userFavorites.push(id);
            } else {
                state.userFavorites.splice(index, 1);
            }
        },
        saveVendor(state, vendor) {
            const updatedVendor = vendor;

            updatedVendor.image = vendor.image || noImage;
            updatedVendor.product = `${vendor.product} do ${vendor.name}`;
            state.vendorList.push(vendor);
        },
    },
    getters: {
        getResultsAll: (state, getters) =>
            getters.getResultsWithFavorite(state.vendorList),

        getResultsWithFavorite: (state) => (vendorList) =>
            vendorList.map((vendor) => {
                const updatedVendor = vendor;
                updatedVendor.favorite = state.userFavorites.includes(
                    vendor.id
                );
                return updatedVendor;
            }),

        getResultsByVendor: (state, getters) => (vendorName) => {
            let vendors;

            if (vendorName) {
                vendors = state.vendorList.filter((vendor) =>
                    vendor.name.toLowerCase().includes(vendorName.toLowerCase())
                );
            } else {
                vendors = state.vendorList;
            }

            return getters.getResultsWithFavorite(vendors);
        },
        getFavoriteById: (state) => (id) =>
            state.userFavorites.findIndex((favoriteId) => favoriteId === id),

        getFavoriteVendors: (state, getters) => {
            const favoriteVendors = state.vendorList.filter((vendor) =>
                state.userFavorites.includes(vendor.id)
            );

            return getters.getResultsWithFavorite(favoriteVendors);
        },
    },
});

export default store;
