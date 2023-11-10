<script>
export default {
  name: "Playlist",
  data() {
    return {
      isPlayerVisible: true,
      audioFile: "",
      audio: "",
      currentTime: 0,
      isPlaylistActive: true,
      currentlyPlaying: true,
      currentlyStopped: false,
      checkingCurrentPositionInTrack: "",
      trackDuration: 0,
      currentProgressBar: 0,
      currentSong: 0,
      musicPlaylist: [
        {
          title: "Service Bell",
          artist: "Daniel Simion",
          url: "https://maido.vercal.com/audio/audio_1.mp3",
        },
        {
          title: "Meadowlark",
          artist: "Daniel Simion",
          url: "https://maido.vercal.com/audio/audio_2.mp3",
        },
        {
          title: "Hyena Laughing",
          artist: "Daniel Simion",
          url: "https://maido.vercal.com/audio/audio_3.mp3",
        },
        {
          title: "Creepy Background",
          artist: "Daniel Simion",
          url: "https://maido.vercal.com/audio/audio_4.mp3",
        },
        {
          title: "Creepy Background",
          artist: "Daniel Simion",
          url: "https://maido.vercal.com/audio/audio_5.mp3",
        },
        {
          title: "Creepy Background",
          artist: "Daniel Simion",
          url: "https://maido.vercal.com/audio/audio_6.mp3",
        }
      ]
    }
  },
  mounted: function () {
    this.changeSong(1);
    this.audio.loop = true;
  },
  methods: {
    togglePlaylist() {
      this.isPlaylistActive = !this.isPlaylistActive;
    },

    changeSong(index) {
      var wasPlaying = this.currentlyPlaying;
      if (index !== undefined) {
        // this.stopAudio();
        this.currentSong = index;
      }
      this.audioFile = this.musicPlaylist[this.currentSong].url;
      this.audio = new Audio(this.audioFile);
      var localThis = this;
      this.audio.addEventListener("loadedmetadata", function () {
        localThis.trackDuration = Math.round(this.duration);
      });
      this.audio.addEventListener("ended", this.handleEnded);
      if (wasPlaying) {
        this.playAudio();
      }
    },

    stopAudio() {
      this.audio.pause();
      this.currentlyPlaying = false;
      this.pausedMusic();
    },

    playAudio() {
      if (
          this.currentlyStopped == true &&
          this.currentSong + 1 == this.musicPlaylist.length
      ) {
        this.currentSong = 0;
        this.changeSong();
      }
      if (!this.currentlyPlaying) {
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },

    pausedMusic() {
      clearTimeout(this.checkingCurrentPositionInTrack);
    },

    getCurrentTimeEverySecond(startStop) {
      var localThis = this;
      this.checkingCurrentPositionInTrack = setTimeout(
          function () {
            localThis.currentTime = localThis.audio.currentTime;
            localThis.currentProgressBar =
                localThis.audio.currentTime / localThis.trackDuration * 100;
            localThis.getCurrentTimeEverySecond(true);
          }.bind(this),
          1000
      );
    },

    handleEnded: function () {
      if (this.currentSong + 1 == this.musicPlaylist.length) {
        this.stopAudio();
        this.currentlyPlaying = false;
        this.currentlyStopped = true;
      } else {
        this.currentlyPlaying = false;
        this.currentSong++;
        this.changeSong();
        this.playAudio();
      }
    },
  },

  watch: {
    currentTime: function () {
      this.currentTime = Math.round(this.currentTime);
    }
  },

  beforeDestroy() {
    this.audio.removeEventListener("ended", this.handleEnded);
    this.audio.removeEventListener("loadedmetadata", this.handleEnded);

    clearTimeout(this.checkingCurrentPositionInTrack);
  }
}
</script>

<template>
  <div class="fixed bottom-4 left-4">
    <button :class="currentlyPlaying ? 'width-play w-10' : 'width-pause'" class="h-10 rounded-full cursor-pointer px-2 overflow-hidden" @click="playAudio()">
      <div class="w-[220px] flex grid-cols-2 items-center">
        <div class="mr-2.5">
          <svg v-if="!currentlyPlaying" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               version="1.1" width="25"
               height="25" viewBox="0 0 256 256" xml:space="preserve">
            <defs></defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
               transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                  d="M 45 90 C 20.187 90 0 69.813 0 45 c 31.16 -8.812 61.257 -9.555 90 0 C 90 69.813 69.813 90 45 90 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(187,26,26); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              <path d="M 45 0 C 20.187 0 0 20.187 0 45 h 90 C 90 20.187 69.813 0 45 0 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(221,34,34); fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              <path
                  d="M 63.885 47.325 l -14.816 8.554 l -14.816 8.554 c -1.79 1.033 -4.026 -0.258 -4.026 -2.325 V 45 c 10.606 -4.196 22.359 -3.855 35 0 C 65.227 45.904 64.78 46.808 63.885 47.325 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,240,240); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              <path
                  d="M 63.885 42.675 l -14.816 -8.554 l -14.816 -8.554 c -1.79 -1.033 -4.026 0.258 -4.026 2.325 V 45 h 35 C 65.227 44.096 64.78 43.192 63.885 42.675 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            </g>
          </svg>

          <svg v-if="currentlyPlaying" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               version="1.1" width="25"
               height="25" viewBox="0 0 256 256" xml:space="preserve">
              <defs></defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
               transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <circle cx="45" cy="45" r="45"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(230,62,50); fill-rule: nonzero; opacity: 1;"
                        transform="  matrix(1 0 0 1 0 0) "/>
              <path
                  d="M 38.899 67.5 H 25.523 c -1.104 0 -2 -0.896 -2 -2 v -41 c 0 -1.104 0.896 -2 2 -2 h 13.376 c 1.104 0 2 0.896 2 2 v 41 C 40.899 66.604 40.004 67.5 38.899 67.5 z M 27.523 63.5 h 9.376 v -37 h -9.376 V 63.5 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              <path
                  d="M 64.477 67.5 H 51.101 c -1.104 0 -2 -0.896 -2 -2 v -41 c 0 -1.104 0.896 -2 2 -2 h 13.376 c 1.104 0 2 0.896 2 2 v 41 C 66.477 66.604 65.581 67.5 64.477 67.5 z M 53.101 63.5 h 9.376 v -37 h -9.376 V 63.5 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              </g>
          </svg>
        </div>
        <div>
          Để tận hưởng âm nhạc nhé!!!
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>