class Storage {
    constructor() {
        this.zip;
        this.defaultZip = '27583';
    }
    getLocationData() {
        if (localStorage.getItem('zip') === null) {
            this.zip = this.defaultZip;
        } else {
            this.zip = localStorage.getItem('zip');
        }
        return {
            zip: this.zip
        }
    }
    setLocationData(zip) {
        localStorage.setItem('zip', zip);
    }
}