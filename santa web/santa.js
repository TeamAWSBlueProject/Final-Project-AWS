// Datos de ejemplo de felicitaciones
const sampleGreetings = [
    {
        id: 1,
        author: "María",
        message: "¡Feliz Navidad a toda mi familia!",
        style: "❄️ Blanco Nevado",
        likes: 24
    },
    {
        id: 2,
        author: "Carlos",
        message: "Que la magia de la Navidad llene sus hogares de amor",
        style: "🎄 Árbol de Navidad",
        likes: 36
    }
];

// Plantillas de felicitaciones predefinidas
const greetingTemplates = [
    "¡Feliz Navidad y próspero Año Nuevo!",
    "Que la paz y el amor reinen en estas fiestas",
    "Un abrazo navideño lleno de cariño para ti",
    "Que Santa traiga alegría a tu hogar"
];

function renderGreetingCreator() {
    const container = document.getElementById('greeting-creator');
    container.innerHTML = `
        <form id="greeting-form">
            <input type="text" id="author-name" placeholder="Tu nombre" required>
            <select id="greeting-style">
                <option value="❄️ Blanco Nevado">❄️ Blanco Nevado</option>
                <option value="🎄 Árbol de Navidad">🎄 Árbol de Navidad</option>
                <option value="🎅 Santa Claus">🎅 Santa Claus</option>
            </select>
            <textarea id="greeting-message" placeholder="Escribe tu mensaje navideño" required></textarea>
            <button type="submit">Crear Felicitación</button>
        </form>
    `;

    document.getElementById('greeting-form').addEventListener('submit', createGreeting);
}

function createGreeting(e) {
    e.preventDefault();
    const name = document.getElementById('author-name').value;
    const style = document.getElementById('greeting-style').value;
    const message = document.getElementById('greeting-message').value;

    const newGreeting = {
        id: sampleGreetings.length + 1,
        author: name,
        message: message,
        style: style,
        likes: 0
    };

    sampleGreetings.push(newGreeting);
    renderGreetingsGallery();
    renderInvitationSection();
}

function renderGreetingsGallery() {
    const gallery = document.getElementById('greetings-gallery');
    gallery.innerHTML = '';

    sampleGreetings.forEach(greeting => {
        const card = document.createElement('div');
        card.classList.add('greeting-card');
        card.innerHTML = `
            <h3>${greeting.style}</h3>
            <p>${greeting.message}</p>
            <small>Por ${greeting.author}</small>
            <div class="greeting-actions">
                <button onclick="likeGreeting(${greeting.id})">❤️ ${greeting.likes} Likes</button>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function likeGreeting(id) {
    const greeting = sampleGreetings.find(g => g.id === id);
    if (greeting) {
        greeting.likes++;
        renderGreetingsGallery();
    }
}

function renderInvitationSection() {
    const container = document.getElementById('invitation-section');
    container.innerHTML = `
        <div class="invite-card">
            <h3>Invita a tus Amigos</h3>
            <p>¡Comparte Festiva y gana puntos!</p>
            <input type="email" id="friend-email" placeholder="Correo de tu amigo">
            <button onclick="inviteFriend()">Enviar Invitación</button>
            <p class="invite-bonus">Cada invitación te da +10 puntos</p>
        </div>
    `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderGreetingCreator();
    renderGreetingsGallery();
    renderInvitationSection();
});

document.addEventListener('DOMContentLoaded', () => {
    // Configurar un valor predeterminado (DNS del ALB)
    const defaultHostname = 'SantaALB-1173865301.us-west-2.elb.amazonaws.com';
    document.getElementById('ec2-hostname').textContent = defaultHostname;

    // Intentar obtener el hostname desde el Instance Metadata Service
    fetch('http://169.254.169.254/latest/meta-data/public-hostname')
        .then(response => response.text())
        .then(hostname => {
            // Si el fetch tiene éxito, actualizar el contenido con el hostname real
            document.getElementById('ec2-hostname').textContent = hostname;
        })
        .catch(() => {
            // Si falla, mantener el valor predeterminado
            console.warn('No se pudo obtener el hostname desde Instance Metadata Service');
        });
});
