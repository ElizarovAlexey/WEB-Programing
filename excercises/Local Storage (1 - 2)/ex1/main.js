class LocalStorage {
    save(value) {
        localStorage.setItem('textarea', value);
    }

    get() {
        return localStorage.getItem('textarea');
    }
}

const storage = new LocalStorage();
const textarea = document.getElementById('textarea');

textarea.value = storage.get();
textarea.addEventListener('input', () => {
    storage.save(textarea.value);
});