import http from "../http-common";

class KamusyService {
    get_word() {
        return http.get('/words');
    }
    get_all_word() {
        return http.get('/words/');
    }
    add_word() {
        return -1;
    }
    update_word() {
        return -1;
    }
    delete_word() {
        return -1;
    }
    get_language() {
        return -1;
    }
    get_all_language() {
        return http.get('/languages/');
    }
    add_language(language) {
        return http.post('/language/', {"name": language});
    }
    get_update_language() {
        return -1;
    }
    get_delete_language() {
        return -1;
    }
    get_all_translation() {
        return http.get('/dicts');
    }
    add_a_translation() {
        return -1
    }

}

export default new KamusyService();