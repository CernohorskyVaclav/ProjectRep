

document.addEventListener('DOMContentLoaded', function () {


    // db.collection('Requests').orderBy('name').onSnapshot(snapshot => {

    // })
    const form = document.getElementById('add-requests-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        db.collection('requests').add({
            otazka: form.otazka.value,
            odpoved: form.odpoved.value
        });
        form.otazka.value = '';
        form.odpoved.value = '';
    })
})