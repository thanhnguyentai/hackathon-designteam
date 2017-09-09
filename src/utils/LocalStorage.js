class LocalStorage {
    constructor() {
        this.key = "filter-key";
    }

    getFilterData() {
        let filter = localStorage.getItem(this.key);
        if(filter) {
            return JSON.parse(filter);
        } else {
            return {
                isHotNew: true,
                isAnnouncement: true
            };
        }
    }

    setFilterData(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}

export default new LocalStorage();