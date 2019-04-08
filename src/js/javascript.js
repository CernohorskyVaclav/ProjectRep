

document.addEventListener('DOMContentLoaded', function () {


    // db.collection('Requests').orderBy('name').onSnapshot(snapshot => {

    // })
    const form = document.getElementById('add-requests-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        db.collection('requests').add({
            otazka: form.otazka.value,
            spravnaOdpoved: form.spravnaOdpoved.value,
            spatnaOdpoved1: form.spatnaOdpoved1.value,
            spatnaOdpoved2: form.spatnaOdpoved2.value,
            spatnaOdpoved3: form.spatnaOdpoved3.value
        });
        form.otazka.value = '';
        form.spravnaOdpoved.value = '';
        form.spatnaOdpoved1.value = '';
        form.spatnaOdpoved2.value = '';
        form.spatnaOdpoved3.value = '';
    })
})