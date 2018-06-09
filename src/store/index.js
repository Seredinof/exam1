import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state: {
            loaded: false,
            tiles: [],
            error: ''
        },
        getters: {
            getTileById: (state) => (id) => {
                return state.tiles.find(tile => tile.id === id)
            },
        },
        mutations: {
            updateTiles (state, payload) {
                state.tiles = payload
            },
            updateLoaded (state, payload) {
                state.loaded = payload
            },
            updateError (state, payload) {
                state.error = payload;
            }
        },
        actions: {
            getTiles(context, payload) {
                axios.get('/api/tiles')
                    .then((response) => {
                        context.commit('updateTiles', response.data.tiles)
                        context.commit('updateLoaded', true);
                        context.commit('updateError', '');
                    })
                    .catch(function (error) {
                        context.commit('updateError', `Проверьте соединение с интернетом: ${error}`)
                    });
            }
        }
    }
) 