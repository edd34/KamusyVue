import http from "../http-common";

class KamusyService {
    get_word() {
        return http.get(`/words`);
    }
    get_all_word() {
        return http.get(`/words/`);
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
        return http.get(`/languages/`);
    }
    get_update_language() {
        return -1;
    }
    get_delete_language() {
        return -1;
    }

}

export default new KamusyService();