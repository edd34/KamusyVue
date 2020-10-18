import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
        path: "/",
        name: "home",
        component: () =>
            import ("./components/Home")
        },{
            path: "/browse-words",
            name: "words-list",
            component: () =>
                import ("./components/WordList")
        },
        {
            path: "/browse-languages",
            name: "languages-list",
            component: () =>
                import ("./components/LanguageList")
        },
        {
            path: "/browse-translations",
            name: "translations-list",
            component: () =>
                import ("./components/TranslateList")
        },
        {
            path: "/add-language",
            name: "add-language",
            component: () =>
                import ("./components/AddLanguage")
        }
    ]
});