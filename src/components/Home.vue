<template>
 <div>
  <h1>Bienvenue sur l'application Kamusy</h1>
     <p>Kamusy signifie dictionnaire en Swahili.</p>
     <p>Cette application permet de créer un dictionnaire sous forme de base de données.</p>
     <p>Le menu Traduction permet de parcourir un dictionnaire.</p>
     <p>Les menus <b> Mots</b> et <b>Langues</b> permenttent d'obtenir des statistiques sur le dictionnaire.</p>
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
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

h1 {
  text-align : center;
}
</style>
