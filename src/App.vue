<template>
  <div id="app">
    
    <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-navbar-brand href="/">Kamusy</b-navbar-brand>
      <b-nav-item-dropdown text="Mots" right>
        <b-dropdown-item href="/browse-words">Parcourir mots</b-dropdown-item>
        <b-dropdown-item href="/query-word">Demander mot</b-dropdown-item>
      </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Langues" right>
        <b-dropdown-item href="/browse-languages">Consulter Langues</b-dropdown-item>
        <b-dropdown-item href="/add-language">Ajouter une Langue</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Traductions" right>
        <b-dropdown-item href="/browse-translations">Consulter Traductions</b-dropdown-item>
        <b-dropdown-item href="/add-translation">Ajouter une Traduction</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
