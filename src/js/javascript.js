document.addEventListener('DOMContentLoaded', function () {
    page.base('/src');

    page('/', home);
    page('/hra', hra);
    page('*', home);
    page();
    function home() {
        $('#content').load('homepage.html', function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $(document).ready(function () {
                    $('.tabs').tabs();
                });

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
                });
            }
        });
    }

    function hra() {
        $('#content').load('hra.html', function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $(document).ready(function () {
                    $('.tabs').tabs();
                });

                // const form = document.getElementById('add-student-form');
                db.collection('requests').limit(5).get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        console.log(doc.data());
                    });
                    // console.log(doc.data());
                }); 

                // const form = document.getElementById('add-requests-form');

                // form.addEventListener('submit', (e) => {

                //     e.preventDefault();

                //     db.collection('requests').add({
                //         otazka: form.otazka.value,
                //         spravnaOdpoved: form.spravnaOdpoved.value,
                //         spatnaOdpoved1: form.spatnaOdpoved1.value,
                //         spatnaOdpoved2: form.spatnaOdpoved2.value,
                //         spatnaOdpoved3: form.spatnaOdpoved3.value
                //     });
                //     form.otazka.value = '';
                //     form.spravnaOdpoved.value = '';
                //     form.spatnaOdpoved1.value = '';
                //     form.spatnaOdpoved2.value = '';
                //     form.spatnaOdpoved3.value = '';
                // });
            }
        });
        // console.log('hra');
        // $('#content').text("loading");
        // $('#content').load('hra.html');
        
        // $(document).ready(function () {
        //     $('.tabs').tabs();
        // });
    }

    // db.collection('Requests').orderBy('name').onSnapshot(snapshot => {

    // })

})