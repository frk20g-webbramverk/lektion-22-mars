<template>
  <main class="dark">
    <div class="bookinfo">
      <header>
        <a href="#" class="back" v-on:click="close">&leftarrow;</a>
      </header>
      <section class="display">
        <article class="book">
          <section class="bg"></section>
          <section class="content">
            <aside></aside>
            <section>
              <h2>{{ book.title }}</h2>
              <h2>{{ book.author }}</h2>
            </section>
          </section>
        </article>
      </section>
      <section class="info">
          <h1>{{ book.title }}</h1>
          <h3>{{ book.author }}</h3>
          <p>{{ book.plot}}</p>
          <footer>
            <p><b>Audience:</b> {{ book.audience }}</p>
            <p><b>First Published:</b> {{ book.year }}</p>
            <p><b>Pages:</b> {{ book.pages || '-' }}</p>
            <p><b>Publisher:</b> {{ book.publisher }}</p>
          </footer>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'BookInfo',
  props: {
    books: Array
  },
  computed: {
    book() {
      return this.$store.state.selectedBook;
    }
  },
  methods: {
    close: function() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.dark {
  height: 100vh;
  width: 100vw;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bookinfo {
  max-width: 1000px;
  grid-template-columns: auto 1fr;
  display: grid;
  gap: 1rem;
}

.bookinfo header {
  grid-column: auto / span 2;
  height: 3rem;
  padding: 1rem;
}

.back {
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255,255,255,.2);
  color: rgba(0,0,0,0.8);
  text-decoration: none;
  border-radius: 999rem;
  transition: all .2s ease;
}

.back:hover {
  background: rgba(255,255,255,.8);
}

.bookinfo > section {
  grid-column: auto / span 1;
  padding: 1rem;
}

.bookinfo > .display {
  display: flex;
  justify-content: center;
}

.bookinfo > .info {
  padding: 0 1rem;
  color: white;
  display: flex;
  flex-direction: column;
}

.bookinfo .info h1 {
  font-size: 2.6rem;
  margin: 0;
  padding: 0;
  line-height: 120%;
}

.bookinfo .info h3 {
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(255,255,255,.8);
  margin: .4rem 0 0 0;
  padding: 0;
}

.bookinfo .info > p {
  color: rgba(255,255,255,.8);
  line-height: 160%;
  padding: .4rem 0;
}

.bookinfo .info footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  background: rgba(255,255,255,.05);
  border-radius: 2px;
  margin: auto 0 1rem 0;
}

.bookinfo .info footer p {
  padding: 0;
  margin: .25rem 0;
}

.book {
  width: 24rem;
  height: 28rem;
  background: blueviolet;
  border-radius: 4px;
  position: relative;
  transition: all .2s ease;
  box-shadow: 0 0 2rem rgba(0,0,0,0.6);
}

.book:hover {
  cursor: pointer;
  filter: brightness(1.05);
}

.book section {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 2px;
}

.book .bg {
  background: linear-gradient(36deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
  border-radius: inherit;
}

.book .content {
  display: flex;
  border-radius: inherit;
}

.content aside {
  width: .6rem;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%);
  margin: 0 0 0 1.5rem;
  position: relative;
}

.book .content > section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 1.4rem;
}

.book .content > section h2 {
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 120%;
  color: white;
}

.book .content > section h3 {
  margin: .25rem 0 0 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(255,255,255,.8);
}
</style>