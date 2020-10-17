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
            path: "/words",
            name: "words-list",
            component: () =>
                import ("./components/WordList")
        },
        {
            path: "/languages",
            name: "languages-list",
            component: () =>
                import ("./components/LanguageList")
        },
        {
            path: "/translate",
            name: "translations-list",
            component: () =>
                import ("./components/TranslateList")
        }
    ]
});