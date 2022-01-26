<template>
    <section>
        <div class="wrapper">
    <div class="scroll-text">
      <h1>STAR WARS</h1>
      <h2>{{ film.title }}</h2>
      <p>{{ film.opening_crawl }}</p>
    </div>
  </div>
    </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.film);
  },
  data () {
    return {
      number: Math.floor(Math.random() * 6),
    }
  },
  computed: {
    film() {
      return this.$store.state.films[0][this.number];
    }
  }
}
</script>


<style scoped>
section {
  margin: 10% 0 0 0;
  position: relative;
}

.wrapper {
  display: flex;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  perspective: 450px;
}
.scroll-text {
  z-index: -100;
  color: #ffc909;
  font-size: 3vw;
  line-height: 1.5em;
  font-weight: bold;
  text-align: justify;
  position: relative;
  transform: translateZ(-2000);
  animation: scroll 130s linear forwards;
}
.scroll-text p::selection, .scroll-text h1::selection, .scroll-text h2::selection {
  background-color: white !important;
}
h1,h2 {
  text-align: center;
}

@keyframes scroll {
	0% { top: 0; transform: rotateX(15deg);}
  100% { top: -5000px;}
}
</style>