<template>
 <div>
  <h4>Listes des langues</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in this.languages"
          :key="index">
          {{index + '. ' + item.language.name + ' : '+item.count +' mot(s)'}}
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
      languages: []
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
