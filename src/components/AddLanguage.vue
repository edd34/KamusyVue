<template>
 <div>
  <h1>Ajouter une langue</h1>
  <div>
    <p><em>Les nouvelles langues sont soumises à l'approbation de l'administrateur</em></p>
    <b-form-input v-model="new_language" placeholder="Insérer une nouvelle langue"></b-form-input>
<br>
<div>
  <b-button>Effacer</b-button>
  <b-button variant="success" @click="onClickValiderBtn">Valider</b-button>
</div>

  </div>
 </div>
</template>

<script>
import KamusyService from "../services/KamusyService";

export default {
  name: "add-language",
  data() {
    return {
      new_language: ''
    };
  },
  methods: {
    getAllLanguages() {
      KamusyService.get_all_language()
      .then(response => {
        this.languages = response.data;
        console.log(this.word);
      })
      .catch(e => {
        console.log(e);
      });
    },
    onClickValiderBtn() {
      KamusyService.add_language(this.new_language)
      .then(response => console.log(response))
      .catch(e => console.log(e))
    },
    onClickEffacerBtn() {
      this.new_language = ''
    }
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
