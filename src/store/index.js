import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state: {
            tiles: []
        },
        getters: {
            getTileById: (state) => (id) => {
                return state.tiles.find(tile => tile.id === id)
            }
        },
        mutations: {
            updateTiles (state, payload) {
                state.tiles = payload
            }
        },
        actions: {
            getTiles(context, payload) {
                axios.get('/api/tiles')
                    .then((response) => {
                        //console.log(response.data.tiles);
                        context.commit('updateTiles', response.data.tiles)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
) 