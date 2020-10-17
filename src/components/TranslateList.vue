<template>
 <div>
  <h4>Listes des traductions</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(translations, index) in this.translations"
          :key="index">
          {{translations.current_word_name +' ('+ translations.current_word_language+')' + ' -> ' + translations.translated_word_name + ' (' + translations.translated_word_language +')' }}
        </li>
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
</style>
