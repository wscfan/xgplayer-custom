<template>
  <div class="xg-player">
    <div id="mse"></div>
  </div>
</template>

<script>
import Player from 'xgplayer'
import '@/assets/.xgplayer/skin/index'

export default {
    name: 'XgPlayer',
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = new Player({
            id: 'mse',
            url: '/video.mp4'
        })
    }
}
</script>

<style>
    #id {
        width: 400px;
        height: 400px;
    }
</style>