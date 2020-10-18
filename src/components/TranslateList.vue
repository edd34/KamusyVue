<template>
 <div>
  <h1>Gestionnaire traductions</h1>
      <ul class="list-group" v-if="translations">
        <li class="list-group-item" v-for="(translations, index) in this.translations"
          :key="index">
          {{translations.current_word_name +' ('+ translations.current_word_language+')' + ' -> ' + translations.translated_word_name + ' (' + translations.translated_word_language +')' }}
        </li>
      </ul>
      <ul class="list-group" v-else>
        <li class="list-group-item"> Cliquer ici pour ajouter une traduction</li>
      </ul>
 </div>
</template>

<script>
import KamusyService from "../services/KamusyService";

export default {
  name: "translation-list",
  data() {
    return {
      translations: []
    };
  },
  methods: {
    getAllLanguages() {
      KamusyService.get_all_translation()
      .then(response => {
        this.translations = response.data.res;
        console.log(this.translations, response.data);
      })
      .catch(e => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.getAllLanguages();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

h1 {
  text-align: center;
}
</style>
