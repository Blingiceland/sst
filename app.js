/* ==========================================
   SST — Samtök Smærri Tónleikastaða
   Application JavaScript
   ========================================== */

// ==========================================
// DATA STORE — Easy to update content
// ==========================================

const VENUES_DATA = [
    {
        name: "Dillon",
        location: "Reykjavík",
        description: "Whiskey bar og tónlistarstaður í hjarta Reykjavíkur. Einn elsti rokkbarinn í borginni.",
        emoji: "🥃",
        tags: ["Rokk", "Blús", "Lifandi tónlist"],
    },
    {
        name: "Gaukurinn",
        location: "Reykjavík",
        description: "Menningarmiðstöð og tónlistarstaður sem hefur hýst óteljandi tónleika og viðburði.",
        emoji: "🎸",
        tags: ["Indie", "Punk", "Menning"],
    },
    {
        name: "Húrra",
        location: "Reykjavík",
        description: "Vinsæll tónlistarstaður með fjölbreytt dagskrá lifandi tónlistar.",
        emoji: "🎵",
        tags: ["Indie", "Raftónlist", "DJ"],
    },
    {
        name: "Mengi",
        location: "Reykjavík",
        description: "Tilraunakenndur listavettvangur þar sem nýsköpun og listræn tjáning er í fyrirrúmi.",
        emoji: "🎹",
        tags: ["Tilraunatónlist", "List", "Nýsköpun"],
    },
    {
        name: "R6013",
        location: "Reykjavík",
        description: "Sjálfstæður tónlistarstaður rekinn af tónlistarfólki fyrir tónlistarfólk.",
        emoji: "🏠",
        tags: ["DIY", "Punk", "Sjálfstætt"],
    },
    {
        name: "12 Tónar",
        location: "Reykjavík",
        description: "Plötuverslun og tónlistarvettvangur þar sem listafólk kemur fram í nánu umhverfi.",
        emoji: "💿",
        tags: ["Akústískt", "Söngsmiðja", "Plötur"],
    },
];

const EVENTS_DATA = [
    {
        date: "2025-04-05",
        title: "Grasrótartónleikar",
        venue: "Dillon",
        time: "21:00",
        type: "Tónleikar",
    },
    {
        date: "2025-04-12",
        title: "Opinn sviðskvöld",
        venue: "Gaukurinn",
        time: "20:00",
        type: "Opið svið",
    },
    {
        date: "2025-04-18",
        title: "Hljómsveitarkeppni — Undankeppni",
        venue: "Húrra",
        time: "20:30",
        type: "Viðburður",
    },
    {
        date: "2025-04-25",
        title: "Nýtt kvöld — Nýliðakvöld",
        venue: "Mengi",
        time: "20:00",
        type: "Tónleikar",
    },
    {
        date: "2025-05-03",
        title: "Tilrauna-sessía",
        venue: "R6013",
        time: "21:00",
        type: "Tónleikar",
    },
    {
        date: "2025-05-10",
        title: "Plötuútgáfutónleikar",
        venue: "12 Tónar",
        time: "17:00",
        type: "Tónleikar",
    },
];

const NEWS_DATA = [
    {
        title: "Samtök smærri tónleikastaða stofnuð",
        category: "Fréttatilkynning",
        date: "2025-03-17",
        excerpt: "Samtök smærri tónleikastaða hafa verið formlega stofnuð til að standa vörð um grunnstoðir íslensks tónlistarlífs og bæta rekstrarskilyrði minni tónleikastaða um land allt.",
        emoji: "📢",
    },
    {
        title: "Agent of Change — Hvað er það?",
        category: "Pistill",
        date: "2025-03-15",
        excerpt: "Hugmyndafræði Agent of Change verndar tónleikastaði gegn kvörtunum nýrra nágranna. Við skoðum hvernig þetta virkar erlendis og hvers vegna þetta þarf að koma til Íslands.",
        emoji: "📖",
    },
    {
        title: "Staðan á Íslandi: Tónleikastaðir í hættu",
        category: "Greining",
        date: "2025-03-10",
        excerpt: "Á síðustu árum hefur tónleikastöðum fækkað verulega. Við skoðum tölurnar og hvaða afleiðingar þetta hefur á tónlistarlíf þjóðarinnar.",
        emoji: "📊",
    },
];

// ==========================================
// ICELANDIC MONTH NAMES
// ==========================================
const MONTHS_IS = [
    "janúar", "febrúar", "mars", "apríl", "maí", "júní",
    "júlí", "ágúst", "september", "október", "nóvember", "desember",
];
const MONTHS_SHORT = [
    "jan", "feb", "mar", "apr", "maí", "jún",
    "júl", "ágú", "sep", "okt", "nóv", "des",
];
const WEEKDAYS_IS = [
    "sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur",
    "fimmtudagur", "föstudagur", "laugardagur",
];
const WEEKDAYS_SHORT = ["sun", "mán", "þri", "mið", "fim", "fös", "lau"];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initHeroParticles();
    initVenues();
    initSchedule();
    initNews();
    initScrollAnimations();
    initContactForm();
});

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
    });

    // Mobile toggle
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Close menu on link click
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}

// ==========================================
// HERO PARTICLES
// ==========================================
function initHeroParticles() {
    const container = document.getElementById("hero-particles");
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const x = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 10;

        particle.style.left = `${x}%`;
        particle.style.bottom = `-10px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
}

// ==========================================
// VENUES
// ==========================================
function initVenues() {
    const grid = document.getElementById("venues-grid");
    if (!grid) return;

    VENUES_DATA.forEach((venue) => {
        const card = document.createElement("div");
        card.classList.add("venue-card", "reveal");
        card.innerHTML = `
            <div class="venue-header">
                <div class="venue-avatar">${venue.emoji}</div>
                <div>
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-location">📍 ${venue.location}</div>
                </div>
            </div>
            <p class="venue-description">${venue.description}</p>
            <div class="venue-tags">
                ${venue.tags.map((tag) => `<span class="venue-tag">${tag}</span>`).join("")}
            </div>
        `;
        grid.appendChild(card);
    });

    // Update schedule filter buttons
    updateScheduleFilters();
}

// ==========================================
// SCHEDULE  
// ==========================================
function updateScheduleFilters() {
    const container = document.getElementById("schedule-filters");
    if (!container) return;

    const venueNames = [...new Set(EVENTS_DATA.map((e) => e.venue))];
    venueNames.forEach((name) => {
        const btn = document.createElement("button");
        btn.classList.add("filter-btn");
        btn.dataset.filter = name;
        btn.textContent = name;
        container.appendChild(btn);
    });

    // Filter click handlers
    container.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            container.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            renderSchedule(this.dataset.filter);
        });
    });
}

function initSchedule() {
    renderSchedule("all");
}

function renderSchedule(filter) {
    const list = document.getElementById("schedule-list");
    if (!list) return;

    list.innerHTML = "";

    const filtered =
        filter === "all"
            ? EVENTS_DATA
            : EVENTS_DATA.filter((e) => e.venue === filter);

    if (filtered.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: var(--color-text-muted); padding: 2rem;">Engir viðburðir á dagskrá.</p>`;
        return;
    }

    filtered.forEach((event) => {
        const date = new Date(event.date);
        const day = date.getDate();
        const month = MONTHS_SHORT[date.getMonth()];
        const weekday = WEEKDAYS_SHORT[date.getDay()];

        const item = document.createElement("div");
        item.classList.add("schedule-item", "reveal");
        item.innerHTML = `
            <div class="event-date">
                <span class="event-day">${day}</span>
                <span class="event-month">${month}</span>
                <span class="event-weekday">${weekday}</span>
            </div>
            <div class="event-info">
                <h3>${event.title}</h3>
                <span class="event-venue">${event.venue}</span>
                <span class="event-time"> · kl. ${event.time}</span>
            </div>
            <div class="event-action">
                <span class="event-badge">${event.type}</span>
            </div>
        `;
        list.appendChild(item);
    });

    // Re-init reveal for new items
    initScrollAnimations();
}

// ==========================================
// NEWS & BLOG
// ==========================================
function initNews() {
    const grid = document.getElementById("news-grid");
    if (!grid) return;

    NEWS_DATA.forEach((post) => {
        const date = new Date(post.date);
        const formattedDate = `${date.getDate()}. ${MONTHS_IS[date.getMonth()]} ${date.getFullYear()}`;

        const card = document.createElement("div");
        card.classList.add("news-card", "reveal");
        card.innerHTML = `
            <div class="news-image">
                <div class="news-image-placeholder">${post.emoji}</div>
            </div>
            <div class="news-body">
                <div class="news-meta">
                    <span class="news-category">${post.category}</span>
                    <span class="news-date">${formattedDate}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="news-excerpt">${post.excerpt}</p>
                <a href="#" class="news-link">Lesa meira →</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    reveals.forEach((el) => observer.observe(el));

    // Also add reveal class to section elements  
    document.querySelectorAll(".goal-card, .stake-item, .manifesto-lead, .manifesto-body, .emphasis-block").forEach((el) => {
        if (!el.classList.contains("reveal")) {
            el.classList.add("reveal");
            observer.observe(el);
        }
    });
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById("contact-submit");
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sendi...";
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = "✓ Skilaboð send!";
            submitBtn.style.background = "linear-gradient(135deg, #34c759, #2da44e)";

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = "";
                submitBtn.disabled = false;
                form.reset();
            }, 3000);
        }, 1000);
    });
}

// ==========================================
// SMOOTH SCROLL for anchor links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const navHeight = document.getElementById("navbar").offsetHeight;
            const targetOffset = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetOffset,
                behavior: "smooth",
            });
        }
    });
});
