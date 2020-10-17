<template>
 <div>
  <h4>Listes des mots</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(Word, index) in this.words"
          :key="index">
          {{ Word.name + ' -> ' + Word.language }}
        </li>
      </ul>
 </div>
</template>

<script>
import KamusyService from "../services/KamusyService";

export default {
  name: "word-list",
  data() {
    return {
      words: []
    };
  },
  methods: {
    getAllWord() {
      KamusyService.get_all_word()
      .then(response => {
        this.words = response.data;
        console.log(this.word);
      })
      .catch(e => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.getAllWord();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
