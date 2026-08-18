const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}


document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelectorAll('.filter').forEach(b => {
            b.classList.remove('active');
        });

        btn.classList.add('active');

        const f = btn.dataset.filter;

        document.querySelectorAll('.package-card').forEach(card => {
            card.style.display =
                f === 'all' || card.dataset.category === f
                    ? 'block'
                    : 'none';
        });
    });
});


const params = new URLSearchParams(location.search);
const packageSelect = document.querySelector('select[name="package"]');

if (packageSelect && params.get('package')) {
    const wanted = params.get('package');

    [...packageSelect.options].forEach(option => {
        if (option.text === wanted) {
            option.selected = true;
        }
    });
}


const booking = document.getElementById('bookingForm');

if (booking) {
    booking.addEventListener('submit', e => {
        e.preventDefault();

        alert(
            'Thank you! Your booking request has been received. Our team will contact you shortly.'
        );

        booking.reset();
    });
}


const contact = document.getElementById('contactForm');

if (contact) {
    contact.addEventListener('submit', e => {
        e.preventDefault();

        alert(
            'Thanks for contacting Sudha Travels! We will get back to you soon.'
        );

        contact.reset();
    });
}


document.querySelectorAll('.gallery-grid img').forEach(img => {

    img.addEventListener('click', () => {

        const light = document.createElement('div');

        light.style = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.92);
            z-index: 99;
            display: grid;
            place-items: center;
            padding: 30px;
            cursor: zoom-out;
        `;

        const big = document.createElement('img');

        big.src = img.src;

        big.style = `
            max-width: 95%;
            max-height: 90%;
            object-fit: contain;
        `;

        light.appendChild(big);

        document.body.appendChild(light);

        light.onclick = () => {
            light.remove();
        };
    });
});


document.querySelectorAll('input[type="date"]').forEach(input => {

    input.min = new Date()
        .toISOString()
        .split('T')[0];

});