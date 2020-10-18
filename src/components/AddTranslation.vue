<template>
 <div>
  <h1>Ajouter une traduction</h1>
  <b-container class="bv-example-row">
  <b-row>
<b-col>     
  <b-form-select v-model="source_selected" :options="source_options" @change="src_change_event"></b-form-select>
    <div class="mt-3">Id : <strong>{{ source_selected }}</strong></div>
</b-col>
<b-col>   <b-form-select v-model="destination_selected" :options="destination_options" @change="dst_change_event"></b-form-select>
    <div class="mt-3">Id : <strong>{{ destination_selected }}</strong></div></b-col>
  </b-row>

  <b-row>
<!-- <b-col></b-col> -->
<!-- <b-col>Inverser</b-col> -->
<!-- <b-col></b-col> -->
  </b-row>

  <b-row>
<b-col><b-form-input v-model="source_word" placeholder="Insérer une nouvelle langue"></b-form-input></b-col>

<b-col><b-form-input v-model="destination_word" placeholder="Insérer une nouvelle langue"></b-form-input></b-col>
  </b-row>

  <br>
</b-container>
<b-row align-h="center">
  <b-button variant="danger" @click="onClickEffacerBtn">Effacer</b-button>
  <b-button variant="warning" @click="onClickInverserBtn">Inverser Langues</b-button>
  <b-button variant="success" @click="onClickValiderBtn">Valider</b-button>
</b-row>
  

 </div>



</template>

<script>
import KamusyService from "../services/KamusyService";

export default {
  name: "add-translation",
  data() {
    return {
      source_word: '',
      destination_word: '',
        source_selected: null,
        source_options: [
          { value: null, text: 'Merci de choisir un élément' }
        ],
    destination_selected: null,
    destination_options: [
          { value: null, text: 'Merci de choisir un élément' }
        ]
    };
  },
  methods: {
    getAllLanguages() {
      var new_options = []
      KamusyService.get_all_language()
      .then(response => {
        response.data.forEach(function(item) {
          console.log(item);
          new_options.push({ value: item.language.id, text: item.language.name });
        });
      this.source_options = this.source_options.concat(new_options);
      this.destination_options = this.destination_options.concat(new_options);
      })
      .catch(e => {
        console.log(e);
      });
    },
    onClickValiderBtn() {
     KamusyService.add_a_translation(this.source_word, this.source_selected, this.destination_word, this.destination_selected)
     .then(response => console.log(response.data))
     .catch(e => console.log(e))
    },
    onClickInverserBtn() {
      var tmp = this.source_selected;
      this.source_selected = this.destination_selected;
      this.destination_selected = tmp;
    },
    onClickEffacerBtn() {
      this.source_word = '';
      this.destination_word = '';
    },
    src_change_event(value) {
      if(this.destination_selected === value) {
        this.destination_selected = null;
      }
    },
    dst_change_event(value) {
      if(this.source_selected === value) {
        this.source_selected = null;
      }
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
