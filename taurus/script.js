/* ═══════════════════════════════════════════════════════════
   TAURUS ZODIAC — Complete JavaScript
   "Slow, steady, and draped in starlight"
   ═══════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════

const traits = [
    { name: "Sensuality", score: 95, desc: "Taurus experiences the world through all five senses. Touch, taste, scent — every moment is savored like aged wine, every texture a revelation." },
    { name: "Determination", score: 92, desc: "Once a Taurus sets their course, no cosmic force can redirect them. Their persistence is legendary — slow, steady, and absolutely unstoppable." },
    { name: "Loyalty", score: 96, desc: "A Taurus's loyalty runs deeper than roots of ancient redwoods. They stand beside their people through every storm and drought without wavering." },
    { name: "Patience", score: 88, desc: "They understand masterpieces take time. Like a sculptor revealing marble's secrets, Taurus knows rushing perfection only shatters beauty." },
    { name: "Luxury", score: 90, desc: "Quality over quantity, always. Taurus possesses an innate radar for craftsmanship and the finer details that elevate existence into art." },
    { name: "Stubbornness", score: 94, desc: "The shadow of determination. Once their hooves are planted, no argument moves them. This immovability is both their fortress and their prison." },
    { name: "Financial Wisdom", score: 85, desc: "Ruled by Venus yet grounded by Earth, Taurus has a natural genius for building wealth. They understand true value — material and spiritual." },
    { name: "Nature Bond", score: 91, desc: "Taurus feels a primal pull toward the natural world. Forests, gardens, mountains — wherever earth breathes, Taurus finds sanctuary." }
];

const quotes = [
    { text: '"Patience is not the ability to wait, but how you act while you\'re waiting."', author: "Taurus Proverb" },
    { text: '"I am rooted, but I flow."', author: "Virginia Woolf" },
    { text: '"The earth has music for those who listen."', author: "William Shakespeare" },
    { text: '"Nature does not hurry, yet everything is accomplished."', author: "Lao Tzu" },
    { text: '"Stubbornness is also determination, wearing a different coat."', author: "The Bull's Journal" },
    { text: '"Luxury is not a necessity, but it is necessary for the soul."', author: "Coco Chanel" },
    { text: '"Slow and steady wins the race — and savors the scenery."', author: "Taurus Wisdom" }
];

const moodBoards = {
    earthy: [
        { title: "Morning Soil", sub: "Fresh earth after rain", bg: "linear-gradient(135deg,#3D5A2A,#5C7A3A,#4A6830)" },
        { title: "Moss Stone", sub: "Ancient & enduring", bg: "linear-gradient(135deg,#4A5A3A,#6B7A5A,#3D4A2D)" },
        { title: "Root System", sub: "Deep connections below", bg: "linear-gradient(135deg,#5A4A30,#7A6A4A,#4A3A20)" },
        { title: "Clay Hands", sub: "The art of creation", bg: "linear-gradient(135deg,#8B6A4A,#A07A5A,#6A5030)" },
        { title: "Fern Valley", sub: "Untouched green depths", bg: "linear-gradient(135deg,#2D5A3D,#4A7A5A,#1A4A2D)" },
        { title: "Autumn Floor", sub: "Nature's warm carpet", bg: "linear-gradient(135deg,#7A5A2A,#9A7A4A,#5A4A1A)" }
    ],
    luxe: [
        { title: "Rose Gold Hour", sub: "Sunset on silk", bg: "linear-gradient(135deg,#C9956A,#D4AF7A,#B8845A)" },
        { title: "Velvet Night", sub: "Opulent darkness", bg: "linear-gradient(135deg,#3A2A1A,#5A4A3A,#2A1A0A)" },
        { title: "Champagne Mist", sub: "Effervescent elegance", bg: "linear-gradient(135deg,#D4C4A0,#E8D8B4,#C0B090)" },
        { title: "Gold Leaf", sub: "Gilded & precious", bg: "linear-gradient(135deg,#B8962A,#D4B64A,#9A7A1A)" },
        { title: "Marble Honey", sub: "Sweet luxury", bg: "linear-gradient(135deg,#E8E0D4,#D4C8B4,#F0E8DC)" },
        { title: "Cashmere", sub: "Pure indulgence", bg: "linear-gradient(135deg,#A09080,#B8A898,#8A7A6A)" }
    ],
    wild: [
        { title: "Thunderstorm", sub: "Raw earthen power", bg: "linear-gradient(135deg,#2A3A2A,#4A5A4A,#1A2A1A)" },
        { title: "Wild Meadow", sub: "Untamed blooming", bg: "linear-gradient(135deg,#5A8A4A,#7AAA6A,#4A7A3A)" },
        { title: "Mountain Peak", sub: "Immovable strength", bg: "linear-gradient(135deg,#5A5A6A,#7A7A8A,#4A4A5A)" },
        { title: "Deep Forest", sub: "Ancient wilderness", bg: "linear-gradient(135deg,#1A3A1A,#2D5A2D,#0A2A0A)" },
        { title: "River Stone", sub: "Shaped by persistence", bg: "linear-gradient(135deg,#6A7A6A,#8A9A8A,#5A6A5A)" },
        { title: "Bull's Charge", sub: "Unstoppable force", bg: "linear-gradient(135deg,#5A2A1A,#7A4A3A,#4A1A0A)" }
    ]
};

const elements = [
    {
        icon: "🌍", name: "Earth Element", cat: "Classical Element",
        desc: "Earth is the element of substance, stability, and material reality. Taurus represents the most solid, enduring expression — the bedrock upon which empires are built.",
        kw: ["Grounded", "Stable", "Fertile", "Abundant", "Physical", "Enduring"]
    },
    {
        icon: "♀", name: "Venus", cat: "Ruling Planet",
        desc: "Venus bestows Taurus with unparalleled appreciation for aesthetics, sensual pleasure, and harmonious living — making them the zodiac's ultimate connoisseur of beauty.",
        kw: ["Love", "Beauty", "Harmony", "Art", "Pleasure", "Values"]
    },
    {
        icon: "𓃥", name: "The Bull", cat: "Sacred Symbol",
        desc: "The celestial bull embodies strength tempered with gentleness, power balanced with patience. Like a bull in emerald fields, Taurus radiates calm — until provoked.",
        kw: ["Strength", "Patience", "Fertility", "Power", "Protection", "Majesty"]
    },
    {
        icon: "💎", name: "Emerald", cat: "Sacred Gemstone",
        desc: "The emerald resonates with Taurus's bond to nature and growth. This stone of Venus promotes loyalty, sharpens intuition, and attracts the prosperity Taurus deserves.",
        kw: ["Growth", "Prosperity", "Healing", "Wisdom", "Loyalty", "Renewal"]
    }
];

const elChips = [
    { icon: "🎨", label: "Lucky Color", value: "Emerald Green" },
    { icon: "🔢", label: "Lucky Numbers", value: "6, 15, 24" },
    { icon: "🌸", label: "Birth Flower", value: "Rose & Poppy" },
    { icon: "📅", label: "Best Day", value: "Friday" }
];

const zodiacSigns = [
    { name: "Aries", sym: "♈", dates: "Mar 21 – Apr 19", el: "fire", love: 55, friend: 60, trust: 50, desc: "Fire meets Earth in a dynamic clash. Aries sparks what Taurus secretly craves, while Taurus grounds Aries. Challenging but electric." },
    { name: "Taurus", sym: "♉", dates: "Apr 20 – May 20", el: "earth", love: 90, friend: 95, trust: 92, desc: "Two bulls forge an unshakeable bond on shared values. They understand each other's silences perfectly. Only danger? Double the stubbornness." },
    { name: "Gemini", sym: "♊", dates: "May 21 – Jun 20", el: "air", love: 45, friend: 55, trust: 40, desc: "Steady bull and restless twins are an unlikely match. Gemini's reinvention unsettles Taurus, yet their wit proves irresistible." },
    { name: "Cancer", sym: "♋", dates: "Jun 21 – Jul 22", el: "water", love: 88, friend: 90, trust: 85, desc: "A nurturing match written in stars. Cancer's emotional depth meets Taurus's warmth, creating the coziest, most secure haven in the zodiac." },
    { name: "Leo", sym: "♌", dates: "Jul 23 – Aug 22", el: "fire", love: 60, friend: 65, trust: 55, desc: "Two fixed signs with iron wills. Leo's drama can exhaust Taurus, but shared love of luxury creates undeniable magnetic attraction." },
    { name: "Virgo", sym: "♍", dates: "Aug 23 – Sep 22", el: "earth", love: 85, friend: 92, trust: 90, desc: "Fellow earth signs speaking the same grounded language. Virgo's detail complements Taurus's devotion to quality. Built to last ages." },
    { name: "Libra", sym: "♎", dates: "Sep 23 – Oct 22", el: "air", love: 72, friend: 75, trust: 65, desc: "Both ruled by Venus, sharing profound love of beauty and harmony. Libra's indecision frustrates Taurus, but their aesthetic bond runs deep." },
    { name: "Scorpio", sym: "♏", dates: "Oct 23 – Nov 21", el: "water", love: 78, friend: 60, trust: 58, desc: "Opposite signs locked in intense attraction. Scorpio's emotional depth matches Taurus's physical intensity. Passionate, possessive, volcanic." },
    { name: "Sagittarius", sym: "♐", dates: "Nov 22 – Dec 21", el: "fire", love: 40, friend: 55, trust: 42, desc: "Homebody bull and wandering archer have different souls. Sagittarius craves freedom while Taurus craves roots. Beautiful briefly." },
    { name: "Capricorn", sym: "♑", dates: "Dec 22 – Jan 19", el: "earth", love: 92, friend: 88, trust: 94, desc: "The zodiac's ultimate power couple. Both earth signs understand ambition, treasure security, build empires together. Legendary combination." },
    { name: "Aquarius", sym: "♒", dates: "Jan 20 – Feb 18", el: "air", love: 38, friend: 50, trust: 45, desc: "Fixed earth meets fixed air in the zodiac's most immovable standoff. Only deep mutual respect bridges this cosmic divide." },
    { name: "Pisces", sym: "♓", dates: "Feb 19 – Mar 20", el: "water", love: 82, friend: 80, trust: 75, desc: "Dreamy Pisces and sensual Taurus weave a fairy-tale romance. Taurus grounds fantasies while Pisces adds magic. Tender and transcendent." }
];


// ═══════════════════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════════════════

const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

document.addEventListener('mousedown', function () {
    cursorDot.classList.add('clicking');
    cursorRing.classList.add('clicking');
});
document.addEventListener('mouseup', function () {
    cursorDot.classList.remove('clicking');
    cursorRing.classList.remove('clicking');
});

const hoverSelectors = 'a,button,.nav-link,.home-feature,.trait-item,.mood-card,.mood-btn,.el-card,.el-chip,.tex-btn,.hero-badge,.footer-stat,.el-kw,.nav-logo,[role="button"],[data-tooltip]';

document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverSelectors)) {
        cursorDot.classList.add('hovering');
        cursorRing.classList.add('hovering');
    }
});
document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverSelectors)) {
        cursorDot.classList.remove('hovering');
        cursorRing.classList.remove('hovering');
    }
});


// ═══════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════

let currentPage = 'home';
let isTransitioning = false;

function navigateTo(page) {
    if (page === currentPage || isTransitioning) return;
    isTransitioning = true;

    const oldP = document.getElementById('page-' + currentPage);
    const newP = document.getElementById('page-' + page);

    document.querySelectorAll('.nav-link').forEach(function (l) {
        l.classList.remove('active');
    });
    document.querySelectorAll('.nav-link[data-page="' + page + '"]').forEach(function (l) {
        l.classList.add('active');
    });

    oldP.classList.remove('visible');

    setTimeout(function () {
        oldP.classList.remove('active');
        newP.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'instant' });

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                newP.classList.add('visible');
                currentPage = page;
                isTransitioning = false;
                initPage(page);
                observeReveals();
            });
        });
    }, 500);
}

function initPage(page) {
    switch (page) {
        case 'personality':
            initRadar();
            animateTraitBars();
            break;
        case 'aesthetics':
            renderMoodBoard(currentMood);
            break;
        case 'compatibility':
            initZodiacWheel();
            break;
    }
}

function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}


// ═══════════════════════════════════════════════════
// VENUS CLOCK
// ═══════════════════════════════════════════════════

function updateVenusClock() {
    var now = new Date();
    var s = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    var vs = s * 2.34;
    var vh = Math.floor((vs / 3600) % 24);
    var vm = Math.floor((vs % 3600) / 60);
    var vss = Math.floor(vs % 60);
    var str = String(vh).padStart(2, '0') + ':' + String(vm).padStart(2, '0') + ':' + String(vss).padStart(2, '0');
    var el = document.getElementById('venusTime');
    if (el) el.textContent = str;
}

setInterval(updateVenusClock, 1000);
updateVenusClock();


// ═══════════════════════════════════════════════════
// SOUND TOGGLE
// ═══════════════════════════════════════════════════

let soundOn = true;

function toggleSound() {
    soundOn = !soundOn;
    var btn = document.getElementById('soundToggle');
    btn.classList.toggle('muted', !soundOn);
    btn.querySelector('.sound-label').textContent = soundOn ? 'Forest Ambience' : 'Sound Muted';
}


// ═══════════════════════════════════════════════════
// CONSTELLATION + EASTER EGG
// ═══════════════════════════════════════════════════

let constellationClicks = 0;
let lastClickTime = 0;

function initConstellation() {
    var canvas = document.getElementById('constellation-canvas');
    var ctx = canvas.getContext('2d');
    var cw, ch, stars = [], tStars = [];

    var pattern = [
        { x: 0.38, y: 0.30 }, { x: 0.42, y: 0.34 }, { x: 0.46, y: 0.38 }, { x: 0.50, y: 0.42 },
        { x: 0.54, y: 0.40 }, { x: 0.52, y: 0.35 }, { x: 0.56, y: 0.31 }, { x: 0.48, y: 0.46 },
        { x: 0.45, y: 0.50 }, { x: 0.50, y: 0.52 }, { x: 0.58, y: 0.37 }, { x: 0.61, y: 0.33 },
        { x: 0.55, y: 0.45 }, { x: 0.43, y: 0.54 }
    ];
    var conns = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
        [3, 7], [7, 8], [8, 9], [4, 10], [10, 11], [4, 12], [7, 13]
    ];

    function resize() {
        var dpr = window.devicePixelRatio || 1;
        cw = canvas.offsetWidth;
        ch = canvas.offsetHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        buildStars();
    }

    function buildStars() {
        stars = [];
        for (var i = 0; i < 90; i++) {
            stars.push({
                x: Math.random() * cw,
                y: Math.random() * ch,
                r: Math.random() * 1 + 0.2,
                sp: Math.random() * 0.012 + 0.004,
                off: Math.random() * Math.PI * 2,
                a: Math.random() * 0.35 + 0.15
            });
        }
        tStars = pattern.map(function (p) {
            return {
                x: p.x * cw,
                y: p.y * ch,
                r: Math.random() * 1.5 + 1.8,
                sp: Math.random() * 0.01 + 0.005,
                off: Math.random() * Math.PI * 2
            };
        });
    }

    // Easter egg: triple-click on constellation center
    canvas.addEventListener('click', function (e) {
        var r = canvas.getBoundingClientRect();
        var mx = e.clientX - r.left;
        var my = e.clientY - r.top;
        var centerX = cw * 0.5;
        var centerY = ch * 0.42;
        var dist = Math.sqrt(Math.pow(mx - centerX, 2) + Math.pow(my - centerY, 2));

        if (dist < cw * 0.18) {
            var now = Date.now();
            if (now - lastClickTime > 2000) constellationClicks = 0;
            lastClickTime = now;
            constellationClicks++;

            if (constellationClicks >= 3) {
                constellationClicks = 0;
                triggerGoldBurst(e.clientX, e.clientY);
            }
        }
    });

    var t = 0;
    function draw() {
        ctx.clearRect(0, 0, cw, ch);
        t += 0.01;

        // Background stars
        stars.forEach(function (s) {
            var tw = Math.sin(t * 3 + s.off) * 0.3 + 0.7;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(245,236,215,' + (s.a * tw) + ')';
            ctx.fill();
        });

        // Constellation lines
        conns.forEach(function (c) {
            var sa = tStars[c[0]], sb = tStars[c[1]];
            if (!sa || !sb) return;
            var g = ctx.createLinearGradient(sa.x, sa.y, sb.x, sb.y);
            g.addColorStop(0, 'rgba(168,184,122,0.15)');
            g.addColorStop(0.5, 'rgba(212,175,122,0.1)');
            g.addColorStop(1, 'rgba(168,184,122,0.15)');
            ctx.beginPath();
            ctx.moveTo(sa.x, sa.y);
            ctx.lineTo(sb.x, sb.y);
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.8;
            ctx.stroke();
        });

        // Constellation stars with glow
        tStars.forEach(function (s) {
            var tw = Math.sin(t * 2.5 + s.off) * 0.25 + 0.75;
            var rg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
            rg.addColorStop(0, 'rgba(212,175,122,' + (0.12 * tw) + ')');
            rg.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
            ctx.fillStyle = rg;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(212,175,122,' + (0.65 * tw) + ')';
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();
}


// ═══════════════════════════════════════════════════
// GOLD BURST EASTER EGG
// ═══════════════════════════════════════════════════

function triggerGoldBurst(ox, oy) {
    var canvas = document.getElementById('burst-canvas');
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth;
    var h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var particles = [];
    var colors = ['#D4AF7A', '#C9956A', '#E8C89A', '#FFD700', '#D4A88C', '#A8B87A', '#F5ECD7'];

    for (var i = 0; i < 120; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = Math.random() * 8 + 3;
        particles.push({
            x: ox, y: oy,
            vx: Math.cos(angle) * speed * (0.5 + Math.random()),
            vy: Math.sin(angle) * speed * (0.5 + Math.random()) - 2,
            size: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: Math.random() * 0.012 + 0.006,
            gravity: 0.08 + Math.random() * 0.04,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 6,
            type: Math.random() > 0.6 ? 'star' : 'circle'
        });
    }

    var active = true;

    function animate() {
        ctx.clearRect(0, 0, w, h);
        var alive = 0;

        particles.forEach(function (p) {
            if (p.alpha <= 0) return;
            alive++;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.98;
            p.alpha -= p.decay;
            p.rotation += p.rotSpeed;
            p.size *= 0.997;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;

            if (p.type === 'star') {
                ctx.beginPath();
                for (var j = 0; j < 5; j++) {
                    var a = j * Math.PI * 2 / 5 - Math.PI / 2;
                    ctx.lineTo(Math.cos(a) * p.size, Math.sin(a) * p.size);
                    ctx.lineTo(Math.cos(a + Math.PI / 5) * p.size * 0.4, Math.sin(a + Math.PI / 5) * p.size * 0.4);
                }
                ctx.closePath();
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Glow
            var rg = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.5);
            rg.addColorStop(0, 'rgba(212,175,122,' + (p.alpha * 0.2) + ')');
            rg.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = rg;
            ctx.fill();

            ctx.restore();
        });

        if (alive > 0 && active) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, w, h);
            active = false;
        }
    }

    active = true;
    animate();
}


// ═══════════════════════════════════════════════════
// PARTICLES (Leaves & Petals)
// ═══════════════════════════════════════════════════

function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    var ctx = canvas.getContext('2d');
    var cw, ch;
    var particles = [];

    function resize() {
        var dpr = window.devicePixelRatio || 1;
        cw = canvas.offsetWidth;
        ch = canvas.offsetHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function Particle(init) {
        this.reset(init);
    }

    Particle.prototype.reset = function (init) {
        this.x = Math.random() * cw;
        this.y = init ? Math.random() * ch : -12;
        this.sz = Math.random() * 4.5 + 2;
        this.vy = Math.random() * 0.22 + 0.08;
        this.vx = Math.random() * 0.2 - 0.1;
        this.rot = Math.random() * 360;
        this.vr = (Math.random() - 0.5) * 0.4;
        this.a = Math.random() * 0.2 + 0.04;
        this.wo = Math.random() * Math.PI * 2;
        this.ws = Math.random() * 0.012 + 0.005;
        this.leaf = Math.random() > 0.45;
        this.hue = this.leaf ? '168,184,122' : '201,149,106';
    };

    Particle.prototype.update = function (t) {
        this.y += this.vy;
        this.x += this.vx + Math.sin(t * this.ws + this.wo) * 0.15;
        this.rot += this.vr;
        if (this.y > ch + 15) this.reset(false);
    };

    Particle.prototype.draw = function (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot * Math.PI / 180);
        ctx.globalAlpha = this.a;
        ctx.fillStyle = 'rgb(' + this.hue + ')';

        if (this.leaf) {
            ctx.beginPath();
            ctx.ellipse(0, 0, this.sz * 0.3, this.sz, 0, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.moveTo(0, -this.sz);
            ctx.bezierCurveTo(this.sz * 0.6, -this.sz * 0.3, this.sz * 0.35, this.sz * 0.4, 0, this.sz);
            ctx.bezierCurveTo(-this.sz * 0.35, this.sz * 0.4, -this.sz * 0.6, -this.sz * 0.3, 0, -this.sz);
            ctx.fill();
        }
        ctx.restore();
    };

    for (var i = 0; i < 18; i++) {
        particles.push(new Particle(true));
    }

    var t = 0;
    function draw() {
        ctx.clearRect(0, 0, cw, ch);
        t += 0.01;
        particles.forEach(function (p) {
            p.update(t);
            p.draw(ctx);
        });
        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();
}


// ═══════════════════════════════════════════════════
// RADAR CHART
// ═══════════════════════════════════════════════════

let radarProg = 0;
let radarAnim = null;

function initRadar() {
    radarProg = 0;
    if (radarAnim) cancelAnimationFrame(radarAnim);

    function step() {
        radarProg = Math.min(1, radarProg + 0.008);
        drawRadar(radarProg);
        if (radarProg < 1) radarAnim = requestAnimationFrame(step);
    }
    step();
}

function drawRadar(prog) {
    var canvas = document.getElementById('radar-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var cw = rect.width, ch = rect.height;
    var cx = cw / 2, cy = ch / 2;
    var maxR = Math.min(cw, ch) * 0.35;
    var n = traits.length;
    var angleStep = Math.PI * 2 / n;
    var startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, cw, ch);

    // Grid rings
    for (var r = 1; r <= 5; r++) {
        var rd = maxR * (r / 5);
        ctx.beginPath();
        for (var i = 0; i <= n; i++) {
            var a = startAngle + angleStep * i;
            var px = cx + Math.cos(a) * rd;
            var py = cy + Math.sin(a) * rd;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(168,184,122,' + (0.03 + r * 0.018) + ')';
        ctx.lineWidth = 0.7;
        ctx.stroke();
    }

    // Axis lines
    for (var i = 0; i < n; i++) {
        var a = startAngle + angleStep * i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx.strokeStyle = 'rgba(168,184,122,0.05)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
    }

    // Easing
    var e = prog < 0.5 ? 4 * prog * prog * prog : 1 - Math.pow(-2 * prog + 2, 3) / 2;

    // Data fill
    ctx.beginPath();
    traits.forEach(function (t, i) {
        var a = startAngle + angleStep * i;
        var r = maxR * (t.score / 100) * e;
        var px = cx + Math.cos(a) * r;
        var py = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    });
    ctx.closePath();

    var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
    g.addColorStop(0, 'rgba(168,184,122,0.1)');
    g.addColorStop(1, 'rgba(168,184,122,0.015)');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(168,184,122,' + (0.5 * e) + ')';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Points and labels
    traits.forEach(function (t, i) {
        var a = startAngle + angleStep * i;
        var r = maxR * (t.score / 100) * e;
        var px = cx + Math.cos(a) * r;
        var py = cy + Math.sin(a) * r;

        // Glow
        var rg = ctx.createRadialGradient(px, py, 0, px, py, 7);
        rg.addColorStop(0, 'rgba(212,175,122,' + (0.25 * e) + ')');
        rg.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = rg;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212,175,122,' + (0.75 * e) + ')';
        ctx.fill();

        // Label
        var lr = maxR + 18;
        ctx.fillStyle = 'rgba(245,236,215,' + (0.55 * e) + ')';
        ctx.font = '500 9.5px Lato, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(t.name, cx + Math.cos(a) * lr, cy + Math.sin(a) * lr);
    });
}


// ═══════════════════════════════════════════════════
// TRAITS LIST
// ═══════════════════════════════════════════════════

function buildTraitsList() {
    var container = document.getElementById('traits-list');
    container.innerHTML = traits.map(function (t, i) {
        return '<div class="trait-item" onclick="toggleTrait(this)" tabindex="0" role="button" aria-label="Expand ' + t.name + ' trait" data-tooltip="' + t.name + ': ' + t.score + '/100">' +
            '<div class="trait-header">' +
            '<span class="trait-name">' + t.name + '</span>' +
            '<div class="trait-meta"><span class="trait-score">' + t.score + '%</span><span class="trait-expand">+</span></div>' +
            '</div>' +
            '<div class="trait-bar"><div class="trait-bar-fill" data-width="' + t.score + '"></div></div>' +
            '<div class="trait-desc">' + t.desc + '</div>' +
            '</div>';
    }).join('');
}

function toggleTrait(el) {
    var was = el.classList.contains('expanded');
    document.querySelectorAll('.trait-item.expanded').forEach(function (e) {
        e.classList.remove('expanded');
    });
    if (!was) el.classList.add('expanded');
}

function animateTraitBars() {
    setTimeout(function () {
        document.querySelectorAll('.trait-bar-fill').forEach(function (b) {
            b.style.width = b.dataset.width + '%';
        });
    }, 400);
}


// ═══════════════════════════════════════════════════
// QUOTES
// ═══════════════════════════════════════════════════

let quoteIdx = 0;

function cycleQuote() {
    quoteIdx = (quoteIdx + 1) % quotes.length;
    var qt = document.getElementById('quoteText');
    var qa = document.getElementById('quoteAuthor');

    qt.style.opacity = '0';
    qt.style.transform = 'translateY(6px)';
    qa.style.opacity = '0';

    setTimeout(function () {
        qt.textContent = quotes[quoteIdx].text;
        qa.textContent = '— ' + quotes[quoteIdx].author;
        qt.style.opacity = '1';
        qt.style.transform = 'translateY(0)';
        qa.style.opacity = '1';
    }, 320);

    qt.style.transition = qa.style.transition = 'all 0.5s cubic-bezier(0.16,1,0.3,1)';
}


// ═══════════════════════════════════════════════════
// AESTHETICS — MOOD BOARD
// ═══════════════════════════════════════════════════

let currentMood = 'earthy';

function setMood(mood) {
    currentMood = mood;
    document.querySelectorAll('.mood-btn').forEach(function (b) {
        b.classList.toggle('active', b.dataset.mood === mood);
    });
    renderMoodBoard(mood);
}

function renderMoodBoard(mood) {
    var board = document.getElementById('moodboard');
    var items = moodBoards[mood] || moodBoards.earthy;

    board.style.opacity = '0';
    board.style.transform = 'translateY(6px)';

    setTimeout(function () {
        board.innerHTML = items.map(function (item, i) {
            return '<div class="mood-card" onclick="toggleLike(this)" style="animation:fadeSlideUp 0.7s ' + (i * 0.08) + 's cubic-bezier(0.16,1,0.3,1) both">' +
                '<div class="mood-card-bg" style="background:' + item.bg + '"></div>' +
                '<div class="mood-card-over"></div>' +
                '<div class="mood-heart" aria-label="Like">🤍</div>' +
                '<div class="mood-card-content"><div class="mood-card-title">' + item.title + '</div><div class="mood-card-sub">' + item.sub + '</div></div>' +
                '</div>';
        }).join('');

        requestAnimationFrame(function () {
            board.style.opacity = '1';
            board.style.transform = 'translateY(0)';
        });
    }, 280);
}

function toggleLike(card) {
    card.classList.toggle('liked');
    var heart = card.querySelector('.mood-heart');
    heart.textContent = card.classList.contains('liked') ? '💛' : '🤍';
}

function selectTex(btn) {
    document.querySelectorAll('.tex-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    btn.style.transform = 'scale(1.25)';
    setTimeout(function () {
        btn.style.transform = '';
    }, 280);
}


// ═══════════════════════════════════════════════════
// ELEMENTS
// ═══════════════════════════════════════════════════

function buildElements() {
    var grid = document.getElementById('elements-grid');
    grid.innerHTML = elements.map(function (el) {
        var keywords = el.kw.map(function (k) {
            return '<span class="el-kw" data-tooltip="' + k + '">' + k + '</span>';
        }).join('');

        return '<div class="el-card" onclick="toggleEl(this)" tabindex="0" role="button" aria-label="Reveal ' + el.name + '">' +
            '<div class="el-icon">' + el.icon + '</div>' +
            '<div class="el-name">' + el.name + '</div>' +
            '<div class="el-cat">' + el.cat + '</div>' +
            '<div class="el-hint">↓ Click to reveal</div>' +
            '<div class="el-detail"><div class="el-detail-inner">' +
            '<p>' + el.desc + '</p>' +
            '<div>' + keywords + '</div>' +
            '</div></div>' +
            '</div>';
    }).join('');

    var infoRow = document.getElementById('elInfoRow');
    infoRow.innerHTML = elChips.map(function (c) {
        return '<div class="el-chip" data-tooltip="' + c.label + ': ' + c.value + '" tabindex="0">' +
            '<div class="el-chip-icon">' + c.icon + '</div>' +
            '<div><div class="el-chip-label">' + c.label + '</div><div class="el-chip-value">' + c.value + '</div></div>' +
            '</div>';
    }).join('');
}

function toggleEl(el) {
    var was = el.classList.contains('revealed');
    document.querySelectorAll('.el-card.revealed').forEach(function (c) {
        c.classList.remove('revealed');
    });
    if (!was) el.classList.add('revealed');
}


// ═══════════════════════════════════════════════════
// ZODIAC WHEEL — Auto-rotating
// ═══════════════════════════════════════════════════

let selSign = null;
let wheelHover = -1;
let wheelRot = 0;
let wheelAuto = true;
let wCanvas, wCtx, wAnimId;

function initZodiacWheel() {
    wCanvas = document.getElementById('zodiac-canvas');
    wCtx = wCanvas.getContext('2d');
    wheelRot = 0;
    wheelAuto = true;
    selSign = null;
    updateWheelStatus();

    function resize() {
        var dpr = window.devicePixelRatio || 1;
        var r = wCanvas.getBoundingClientRect();
        wCanvas.width = r.width * dpr;
        wCanvas.height = r.height * dpr;
    }

    resize();
    window.addEventListener('resize', resize);

    wCanvas.onclick = function (e) {
        var rect = wCanvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2, cy = rect.height / 2;
        var dist = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
        var maxR = Math.min(rect.width, rect.height) * 0.39;

        if (dist < maxR * 0.42 || dist > maxR * 1.2) {
            if (selSign !== null) {
                selSign = null;
                wheelAuto = true;
                updateWheelStatus();
                document.getElementById('compat-card').innerHTML =
                    '<div class="compat-placeholder"><div class="compat-ph-icon">♉</div>' +
                    '<p class="compat-ph-text">Click a zodiac sign on the wheel<br>to explore its cosmic bond with Taurus</p></div>';
            }
            return;
        }

        var angle = Math.atan2(y - cy, x - cx) + Math.PI / 2 - wheelRot;
        angle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        selSign = Math.floor(angle / (Math.PI * 2 / 12)) % 12;
        wheelAuto = false;
        updateWheelStatus();
        showCompat(selSign);
    };

    wCanvas.onmousemove = function (e) {
        var rect = wCanvas.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var cx = rect.width / 2, cy = rect.height / 2;
        var dist = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
        var maxR = Math.min(rect.width, rect.height) * 0.39;

        if (dist >= maxR * 0.42 && dist <= maxR * 1.2) {
            wCanvas.style.cursor = 'none';
            var angle = Math.atan2(y - cy, x - cx) + Math.PI / 2 - wheelRot;
            angle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
            wheelHover = Math.floor(angle / (Math.PI * 2 / 12)) % 12;
        } else {
            wCanvas.style.cursor = 'none';
            wheelHover = -1;
        }
    };

    wCanvas.onmouseleave = function () {
        wheelHover = -1;
    };

    if (wAnimId) cancelAnimationFrame(wAnimId);

    function animate() {
        if (wheelAuto) wheelRot += 0.0015;
        drawWheel();
        wAnimId = requestAnimationFrame(animate);
    }
    animate();
}

function updateWheelStatus() {
    var el = document.getElementById('wheelStatus');
    if (wheelAuto) {
        el.textContent = 'Wheel rotating — click a sign to explore';
        el.classList.remove('active');
    } else {
        el.textContent = '✦ ' + zodiacSigns[selSign].name + ' selected — click center to resume';
        el.classList.add('active');
    }
}

function drawWheel() {
    if (!wCanvas || !wCtx) return;

    var ctx = wCtx;
    var dpr = window.devicePixelRatio || 1;
    var rw = wCanvas.width / dpr;
    var rh = wCanvas.height / dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rw, rh);

    var cx = rw / 2, cy = rh / 2;
    var maxR = Math.min(rw, rh) * 0.39;
    var innerR = maxR * 0.56;
    var n = 12;
    var angleStep = Math.PI * 2 / n;
    var baseAngle = -Math.PI / 2 + wheelRot;

    // Outer glow ring
    var og = ctx.createRadialGradient(cx, cy, maxR - 2, cx, cy, maxR + 3);
    og.addColorStop(0, 'rgba(168,184,122,0.06)');
    og.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, maxR + 2, 0, Math.PI * 2);
    ctx.fillStyle = og;
    ctx.fill();

    // Rings
    ctx.beginPath();
    ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(168,184,122,0.1)';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(168,184,122,0.06)';
    ctx.stroke();

    // Segments
    zodiacSigns.forEach(function (sign, i) {
        var a1 = baseAngle + angleStep * i;
        var a2 = a1 + angleStep;
        var mid = a1 + angleStep / 2;

        // Highlight selected/hovered
        if (i === selSign || i === wheelHover) {
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(a1) * innerR, cy + Math.sin(a1) * innerR);
            ctx.arc(cx, cy, maxR, a1, a2);
            ctx.arc(cx, cy, innerR, a2, a1, true);
            ctx.closePath();
            ctx.fillStyle = i === selSign ? 'rgba(212,175,122,0.1)' : 'rgba(168,184,122,0.04)';
            ctx.fill();
        }

        // Divider
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a1) * innerR, cy + Math.sin(a1) * innerR);
        ctx.lineTo(cx + Math.cos(a1) * maxR, cy + Math.sin(a1) * maxR);
        ctx.strokeStyle = 'rgba(168,184,122,0.04)';
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Symbol
        var sr = (maxR + innerR) / 2;
        var symbolColor;
        if (i === selSign) symbolColor = '#D4AF7A';
        else if (i === wheelHover) symbolColor = '#A8B87A';
        else if (i === 1) symbolColor = 'rgba(212,175,122,0.65)';
        else symbolColor = 'rgba(245,236,215,0.35)';

        ctx.fillStyle = symbolColor;
        ctx.font = (i === selSign ? '700 18px' : '400 16px') + ' serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(sign.sym, cx + Math.cos(mid) * sr, cy + Math.sin(mid) * sr);

        // Outer name
        ctx.fillStyle = i === selSign ? 'rgba(212,175,122,0.8)' : 'rgba(245,236,215,0.22)';
        ctx.font = '600 7.5px Lato, sans-serif';
        ctx.fillText(sign.name.toUpperCase(), cx + Math.cos(mid) * (maxR + 14), cy + Math.sin(mid) * (maxR + 14));
    });

    // Center circle
    var cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerR * 0.5);
    cg.addColorStop(0, 'rgba(36,40,32,0.95)');
    cg.addColorStop(1, 'rgba(28,31,24,0.88)');
    ctx.beginPath();
    ctx.arc(cx, cy, innerR * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = cg;
    ctx.fill();
    ctx.strokeStyle = 'rgba(168,184,122,0.08)';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // Center symbol
    ctx.fillStyle = '#D4AF7A';
    ctx.font = '700 24px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('♉', cx, cy - 4);

    ctx.fillStyle = 'rgba(245,236,215,0.35)';
    ctx.font = '600 7.5px Lato, sans-serif';
    ctx.fillText('TAURUS', cx, cy + 15);

    // Rotating dots indicator
    if (wheelAuto) {
        for (var i = 0; i < 3; i++) {
            var da = wheelRot * 2.5 + i * (Math.PI * 2 / 3);
            var dr = innerR * 0.5 + 5;
            ctx.beginPath();
            ctx.arc(cx + Math.cos(da) * dr, cy + Math.sin(da) * dr, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(168,184,122,0.25)';
            ctx.fill();
        }
    }
}

function showCompat(idx) {
    var sign = zodiacSigns[idx];
    var card = document.getElementById('compat-card');

    card.style.opacity = '0';
    card.style.transform = 'translateY(8px)';

    setTimeout(function () {
        card.innerHTML =
            '<div class="compat-header"><div class="compat-sym ' + sign.el + '">' + sign.sym + '</div>' +
            '<div><div class="compat-sign-name">' + sign.name + '</div><div class="compat-dates">' + sign.dates + '</div></div></div>' +
            '<span class="compat-el-tag ' + sign.el + '">' + sign.el + ' sign</span>' +
            '<div class="compat-meters">' +
            '<div class="compat-meter"><div class="compat-meter-label"><span>💕 Love</span><span>' + sign.love + '%</span></div><div class="compat-meter-bar"><div class="compat-meter-fill love" id="cf-l"></div></div></div>' +
            '<div class="compat-meter"><div class="compat-meter-label"><span>🤝 Friendship</span><span>' + sign.friend + '%</span></div><div class="compat-meter-bar"><div class="compat-meter-fill friendship" id="cf-f"></div></div></div>' +
            '<div class="compat-meter"><div class="compat-meter-label"><span>🛡 Trust</span><span>' + sign.trust + '%</span></div><div class="compat-meter-bar"><div class="compat-meter-fill trust" id="cf-t"></div></div></div>' +
            '</div><p class="compat-desc">' + sign.desc + '</p>';

        requestAnimationFrame(function () {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s cubic-bezier(0.16,1,0.3,1)';

            setTimeout(function () {
                var l = document.getElementById('cf-l');
                var f = document.getElementById('cf-f');
                var t = document.getElementById('cf-t');
                if (l) l.style.width = sign.love + '%';
                if (f) f.style.width = sign.friend + '%';
                if (t) t.style.width = sign.trust + '%';
            }, 100);
        });
    }, 260);
}


// ═══════════════════════════════════════════════════
// TOOLTIP
// ═══════════════════════════════════════════════════

var tooltip = document.getElementById('tooltip');
var ttTO;

document.addEventListener('mouseover', function (e) {
    var target = e.target.closest('[data-tooltip]');
    if (!target) return;
    clearTimeout(ttTO);
    tooltip.textContent = target.dataset.tooltip;
    tooltip.classList.add('visible');
});

document.addEventListener('mousemove', function (e) {
    if (!tooltip.classList.contains('visible')) return;
    var x = Math.min(e.clientX + 14, window.innerWidth - tooltip.offsetWidth - 14);
    var y = e.clientY - tooltip.offsetHeight - 10;
    tooltip.style.left = x + 'px';
    tooltip.style.top = (y < 4 ? e.clientY + 16 : y) + 'px';
});

document.addEventListener('mouseout', function (e) {
    if (!e.target.closest('[data-tooltip]')) return;
    ttTO = setTimeout(function () {
        tooltip.classList.remove('visible');
    }, 60);
});


// ═══════════════════════════════════════════════════
// SCROLL REVEAL (Intersection Observer)
// ═══════════════════════════════════════════════════

function observeReveals() {
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) {
                en.target.classList.add('shown');
                obs.unobserve(en.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal:not(.shown)').forEach(function (el) {
        obs.observe(el);
    });
}


// ═══════════════════════════════════════════════════
// SCROLL EVENTS
// ═══════════════════════════════════════════════════

window.addEventListener('scroll', function () {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

window.addEventListener('resize', function () {
    if (currentPage === 'personality' && radarProg >= 1) drawRadar(1);
});


// ═══════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
    initConstellation();
    initParticles();
    buildTraitsList();
    buildElements();

    // Show home page with entrance animation
    var home = document.getElementById('page-home');
    requestAnimationFrame(function () {
        home.classList.add('visible');
    });

    observeReveals();

    // Keyboard accessibility
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            var target = e.target;
            if (target.hasAttribute('role') && target.getAttribute('role') === 'button') {
                target.click();
            }
        }
    });
});