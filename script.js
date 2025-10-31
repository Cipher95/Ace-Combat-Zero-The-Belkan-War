document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'en'; // Default language

    // --- SITE DATA & TRANSLATIONS ---
    const siteData = {
        en: {
            pageTitle: "Ace Combat Zero: The Belkan War｜BANDAI NAMCO",
            trailerUrl: "trailer.mp4",
            galleryArt: {
                imageUrl: "Ace_Combat_Zero_Box_Art_B_Wallpaper_1280x1024_Alt.webp",
                title: "The Demon Lord of the Round Table",
                details: "Official artwork depicting the ace pilot 'Cipher' and his wingman 'Pixy'. Their F-15C Eagles became a symbol of fear for Belkan forces and a sign of hope for the Allied Forces during the war."
            },
            squadrons: [
                { name: "Galm Team", imageUrl: "squadron-galm.webp", details: "The player's unit. A legendary mercenary team consisting of 'Cipher' and 'Pixy'. Their unparalleled skill earned them the title 'Demon Lord of the Round Table'." },
                { name: "Rot Team", imageUrl: "squadron-rot.webp", details: "A Belkan Air Force fighter squadron led by Detlef Fleisher. Flying the Typhoon, they are known for their aggressive, coordinated attacks." },
                { name: "Grun Team", imageUrl: "squadron-grun.webp", details: "An elite Belkan fighter squadron composed of F/A-18C Hornet pilots. They are respected for their strict adherence to Belkan chivalry and honor." },
                { name: "Indigo Team", imageUrl: "squadron-indigo.webp", details: "A veteran squadron from the Sapin Air Force. Flying the JAS 39 Gripen C, they are known for their elegant and precise formation flying." },
                { name: "Gelb Team", imageUrl: "squadron-gelb.webp", details: "A Belkan tactical fighter squadron led by Orbert Jager. Flying the Su-37 Terminator, they are formidable opponents encountered over the B7R airspace." },
                { name: "Gault Team", imageUrl: "squadron-gault.webp", details: "One of the most fearsome Belkan squadrons, led by Anton Kupchenko. They pilot eight Su-47 Berkuts and are the final guard of a critical Belkan facility." },
                { name: "Espada Team", imageUrl: "squadron-espada.webp", details: "A two-man ace squadron from the Sapin Air Force, led by Alberto Lopez. Flying the J35J Draken, their synchronized and deadly maneuvers earned them the nickname 'The Dance of Death'." },
                { name: "Schwarze Team", imageUrl: "squadron-schwarze.png", details: "A Belkan Air Force squadron led by the aggressive Dominic Zubov. Flying a swarm of eight MiG-21bis fighters, they overwhelm their opponents with sheer numbers and relentless assault." },
                { name: "Silber Team", imageUrl: "squadron-silber.jpg", details: "A Belkan chivalric fighter squadron led by the honorable Erich Hillenberand. They pilot the F-4E Phantom II and later the F-16C, viewing combat as a duel between knights." },
                { name: "Wizard Team", imageUrl: "squadron-wizard.webp", details: "An elite mercenary squadron belonging to 'A World With No Boundaries'. They utilize a mix of F/A-18C Hornets and the advanced YF-23A Black Widow II, coordinated by their AWACS, 'Magic'." },
                { name: "Sorcerer Team", imageUrl: "squadron-sorcerer.webp", details: "Another top-tier mercenary squadron from 'A World With No Boundaries'. Flying the highly maneuverable F-15S/MTD, they serve as the organization's primary command and control unit in the field." }
            ],
            aces: [
                { name: "Cipher (Player)", imageUrl: "ace-cipher.webp", details: "The protagonist. A mercenary ace pilot whose callsign strikes fear into his enemies. His choices on the battlefield define his path as a Soldier, a Knight, or a Mercenary." },
                { name: "Larry 'Pixy' Foulke", imageUrl: "ace-pixy.webp", details: "Cipher's wingman, known as 'Solo Wing Pixy'. A highly skilled pilot who questions the nature of war and borders, leading to his eventual defection." },
                { name: "Patrick James 'PJ' Beckett", imageUrl: "ace-pj.webp", details: "A rookie pilot from Osea who joins Galm Team as Cipher's wingman later in the war. He is cheerful and holds a photo of his girlfriend in his cockpit." },
                { name: "Erich 'Phonix' Hillenberand", imageUrl: "ace-silber.jpg", details: "The leader of Belka's Silber Team. A veteran ace who values honor above all else, he sees the war as a duel of knights and respects worthy opponents." },
                { name: "Dietrich 'Boss' Kellerman", imageUrl: "ace-schwarze.jpg", details: "Leader of the aggressive Schwarze squadron. A ruthless and highly skilled pilot who will stop at nothing to achieve victory for Belka." }
            ],
            planes: [
                { name: "F-15C Eagle", imageUrl: "plane-f15c.jpg", details: "The signature aircraft of Galm Team. A highly versatile and powerful twin-engine air superiority fighter, capable of achieving high speeds and carrying a formidable arsenal." },
                { name: "Su-37 Terminator", imageUrl: "plane-su37.webp", details: "A super-maneuverable fighter flown by the ace Gelb Squadron. Its thrust-vectoring nozzles allow it to perform incredible post-stall maneuvers, making it a deadly dogfighter." },
                { name: "Typhoon", imageUrl: "plane-typhoon.webp", details: "The aircraft of choice for Rot Squadron. A delta-wing multirole fighter known for its agility and high-speed performance, particularly in close-quarters combat." },
                { name: "J35J Draken", imageUrl: "plane-j35j.webp", details: "A unique double-delta wing fighter flown by Espada Team. It is an older but exceptionally fast and nimble aircraft, deadly in the hands of a skilled pilot." },
                { name: "ADFX-02 Morgan", imageUrl: "plane-adfx02.webp", details: "A Belkan super-prototype aircraft piloted by 'Pixy' after his defection. It is equipped with advanced weaponry, including a Tactical Laser System (TLS) and Multi-Purpose Burst Missiles (MPBM)." },
                { name: "ADF-01 FALKEN", imageUrl: "plane-adf01.webp", details: "An experimental, next-generation fighter developed from Morgan data. As a 'superplane,' it features a fully enclosed cockpit system and a powerful onboard Tactical Laser System." }
            ],
            translations: {
                nav_story: "STORY", nav_trailer: "TRAILER", nav_squadrons: "SQUADRONS", nav_aces: "THE ACES", nav_planes: "AIRCRAFT", nav_gallery: "GALLERY", nav_details: "DETAILS",
                release_date: "\"Yo, buddy. You still alive?\"", story_title: "THE BELKAN WAR", story_subtitle1: "Fifteen Years Ago, There Was a War.",
                story_text1: "The year is 1995. The Principality of Belka, facing economic collapse from a series of internal crises, invades its neighbors in a desperate bid for resources. In response, the Allied Forces, led by the Osean Federation and the Union of Yuktobanian Republics, launch a massive counter-offensive.",
                story_subtitle2: "The Demon Lord of the Round Table", story_text2: "Amidst the chaos, one mercenary fighter wing, the 66th Air Force Unit 'Galm,' rises to prominence. Piloted by the legendary ace 'Cipher,' they turn the tide of every battle they enter. This is their story, told through the eyes of the aces they fought—a tale of knights, mercenaries, and the ghosts of the battlefield.",
                trailer_title: "MEMORIAL TRAILER", squadrons_title: "LEGENDARY SQUADRONS", aces_title: "KEY FIGURES", planes_title: "ICONIC AIRCRAFT", gallery_title: "DECLASSIFIED GALLERY",
                details_title: "GAME DETAILS", detail_label_available: "Released", detail_label_players: "Players",
                detail_label_platforms: "Platform", detail_label_rating: "Rating", detail_label_genre: "Genre", detail_label_developer: "Developer",
                detail_value_players: "1-2 Players", detail_value_rating: "ESRB T / PEGI 12+", detail_value_developer: "Project Aces"
            }
        },
        ja: {
            pageTitle: "エースコンバット・ゼロ ザ・ベルカン・ウォー｜BANDAI NAMCO",
            trailerUrl: "trailer.mp4",
            galleryArt: {
                imageUrl: "Ace_Combat_Zero_Box_Art_B_Wallpaper_1280x1024_Alt.webp",
                title: "円卓の鬼神",
                details: "エースパイロット「サイファー」と彼の僚機「ピクシー」を描いた公式アートワーク。彼らのF-15Cイーグルは、ベルカ軍にとっては恐怖の象徴であり、連合軍にとっては希望の印となった。"
            },
            squadrons: [
                { name: "ガルム隊", imageUrl: "squadron-galm.webp", details: "プレイヤーが所属する部隊。「サイファー」と「ピクシー」で構成される伝説的な傭兵チーム。その卓越したスキルから「円卓の鬼神」の異名を持つ。" },
                { name: "ロト隊", imageUrl: "squadron-rot.webp", details: "デトレフ・フレイジャー率いるベルカ空軍の戦闘飛行隊。タイフーンを駆り、連携の取れた攻撃的な戦術で知られる。" },
                { name: "グリュン隊", imageUrl: "squadron-grun.webp", details: "F/A-18Cホーネットで構成されるベルカの精鋭戦闘飛行隊。ベルカの騎士道と名誉を重んじることで尊敬されている。" },
                { name: "インディゴ隊", imageUrl: "squadron-indigo.webp", details: "サピン空軍のベテラン飛行隊。JAS 39 グリペンCを操り、そのエレガントで精密な編隊飛行で知られる。" },
                { name: "ゲルプ隊", imageUrl: "squadron-gelb.webp", details: "オルベルト・イェーガー率いるベルカの戦術戦闘飛行隊。Su-37ターミネーターを駆り、B7R空域で遭遇する強敵である。" },
                { name: "ゴルト隊", imageUrl: "squadron-gault.webp", details: "アントン・カプチェンコ率いる最も恐れられるベルカ飛行隊の一つ。8機のSu-47ベールクトを操り、ベルカの重要施設の最後の守護者である。" },
                { name: "エスパーダ隊", imageUrl: "squadron-espada.webp", details: "アルベルト・ロペス率いるサピン空軍の2機編成のエース部隊。J35Jドラケンを駆り、その同調した死の舞踏のような機動から『死の舞踏』の異名を持つ。" },
                { name: "シュヴァルツェ隊", imageUrl: "squadron-schwarze.png", details: "攻撃的なドミニク・ズボフが率いるベルカ空軍の飛行隊。8機のMiG-21bisの大群を操り、圧倒的な数と絶え間ない猛攻で敵を制圧する。" },
                { name: "ジルバー隊", imageUrl: "squadron-silber.jpg", details: "高潔なエーリッヒ・ヒレンベランドが率いるベルカの騎士道的な戦闘飛行隊。F-4EファントムII、後にF-16Cを駆り、戦闘を騎士同士の決闘と見なしている。" },
                { name: "ウィザード隊", imageUrl: "squadron-wizard.webp", details: "『国境無き世界』に所属する精鋭傭兵飛行隊。F/A-18Cホーネットと先進的なYF-23AブラックウィドウIIを混成で運用し、AWACS『マジック』によって統制される。" },
                { name: "ソーサラー隊", imageUrl: "squadron-sorcerer.webp", details: "『国境無き世界』に所属するもう一つのトップクラスの傭兵飛行隊。高機動を誇るF-15S/MTDを駆り、組織の現場における主要な指揮統制部隊として機能する。" }
            ],
            aces: [
                { name: "サイファー (プレイヤー)", imageUrl: "ace-cipher.webp", details: "本作の主人公。そのコールサインが敵に恐怖を与える傭兵エースパイロット。戦場での選択が、彼の道を兵士、騎士、または傭兵として定義する。" },
                { name: "ラリー・フォルク 'ピクシー'", imageUrl: "ace-pixy.webp", details: "「片羽の妖精」として知られるサイファーの僚機。戦争と国境の性質に疑問を抱き、最終的に離反する高度なスキルを持つパイロット。" },
                { name: "パトリック・ジェームズ・ベケット 'PJ'", imageUrl: "ace-pj.webp", details: "戦争後期にサイファーの僚機としてガルム隊に加わるオセアの新人パイロット。陽気な性格で、恋人の写真をコックピットに飾っている。" },
                { name: "エーリッヒ・ヒレンベランド 'フォーニクス'", imageUrl: "ace-silber.jpg", details: "ベルカのジルバー隊の隊長。名誉を何よりも重んじるベテランエースで、戦争を騎士の決闘とみなし、価値ある相手に敬意を払う。" },
                { name: "ディートリッヒ・ケラーマン 'ボス'", imageUrl: "ace-schwarze.jpg", details: "攻撃的なシュヴァルツェ隊のリーダー。ベルカの勝利のためなら手段を選ばない、冷酷で非常に熟練したパイロット。" }
            ],
            planes: [
                 { name: "F-15C イーグル", imageUrl: "plane-f15c.jpg", details: "ガルム隊の象徴的な機体。高い汎用性とパワーを誇る双発の制空戦闘機で、高速性能と強力な武装を誇る。" },
                 { name: "Su-37 ターミネーター", imageUrl: "plane-su37.webp", details: "エース部隊ゲルプ隊が駆る高機動戦闘機。推力偏向ノズルにより驚異的なポストストールマニューバを可能にし、格闘戦で恐るべき性能を発揮する。" },
                 { name: "タイフーン", imageUrl: "plane-typhoon.webp", details: "ロト隊が選択した機体。デルタ翼の多用途戦闘機で、特に近接戦闘における俊敏性と高速性能で知られる。" },
                 { name: "J35J ドラケン", imageUrl: "plane-j35j.webp", details: "エスパーダ隊が駆る特徴的なダブルデルタ翼戦闘機。旧式ながら非常に高速かつ機敏な機体で、熟練パイロットの手にかかれば恐るべき存在となる。" },
                 { name: "ADFX-02 モルガン", imageUrl: "plane-adfx02.webp", details: "離反後の「ピクシー」が搭乗するベルカの超試作機。戦術レーザーシステム（TLS）や多目的炸裂ミサイル（MPBM）など、先進的な兵器を搭載している。" },
                 { name: "ADF-01 ファルケン", imageUrl: "plane-adf01.webp", details: "モルガンのデータを基に開発された実験的な次世代戦闘機。「スーパープレーン」として、完全密閉型のコックピットシステムと強力な戦術レーザーシステムを搭載する。" }
            ],
            translations: {
                nav_story: "ストーリー", nav_trailer: "トレーラー", nav_squadrons: "飛行隊", nav_aces: "エース", nav_planes: "登場機体", nav_gallery: "ギャラリー", nav_details: "詳細",
                release_date: "『相棒、まだ生きてるか？』", story_title: "ベルカ戦争", story_subtitle1: "十五年前、戦争があった。",
                story_text1: "時は1995年。一連の国内危機により経済的崩壊に直面したベルカ公国は、資源を求め近隣諸国への侵攻を開始。これに対し、オセア連邦とユークトバニア連邦共和国を中心とする連合軍は、大規模な反攻作戦を開始した。",
                story_subtitle2: "円卓の鬼神", story_text2: "混沌の中、一つの傭兵戦闘機部隊、第66航空師団「ガルム」が頭角を現す。伝説のエース「サイファー」が駆る彼らは、参戦するすべての戦いの流れを変えた。これは、彼らが戦ったエースたちの目を通して語られる物語—騎士、傭兵、そして戦場の亡霊たちの物語である。",
                trailer_title: "メモリアルトレーラー", squadrons_title: "伝説の飛行隊", aces_title: "主な登場人物", planes_title: "象徴的な機体", gallery_title: "機密解除ギャラリー",
                details_title: "ゲーム詳細", detail_label_available: "発売日", detail_label_players: "プレイ人数",
                detail_label_platforms: "プラットフォーム", detail_label_rating: "CERO", detail_label_genre: "ジャンル", detail_label_developer: "開発",
                detail_value_players: "1～2人", detail_value_rating: "A (全年齢対象)", detail_value_developer: "プロジェクト・エイセス"
            }
        }
    };

    const gameDetails = [
        { label_key: "detail_label_available", value: "March 23, 2006" },
        { label_key: "detail_label_players", value_key: "detail_value_players" },
        { label_key: "detail_label_platforms", value: "PlayStation®2" },
        { label_key: "detail_label_rating", value_key: "detail_value_rating" },
        { label_key: "detail_label_genre", value: "Flight Shooting" },
        { label_key: "detail_label_developer", value_key: "detail_value_developer" },
    ];

    // --- DOM ELEMENT REFERENCES ---
    const languageSelectorScreen = document.getElementById('language-selector-screen');
    const introVideoContainer = document.getElementById('intro-video-container');
    const introVideo = document.getElementById('intro-video');
    const mainContent = document.getElementById('main-content');
    const langButtons = document.querySelectorAll('.lang-btn');
    const galleryContainer = document.getElementById('gallery-clickable-container');
    const modalOverlay = document.getElementById('details-modal-overlay');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // --- LANGUAGE & INTRO SEQUENCE ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageSelectorScreen.style.display = 'none';
            introVideoContainer.classList.add('is-visible');
            introVideo.play().catch(error => {
                console.error("Intro video autoplay failed:", error);
                showMainContent();
            });
        });
    });

    introVideo.addEventListener('ended', showMainContent);

    function showMainContent() {
        introVideoContainer.classList.remove('is-visible');
        mainContent.style.display = 'block';
        playAudio();
    }

    function setLanguage(lang) {
        currentLang = lang;
        const data = siteData[lang];
        document.documentElement.lang = lang;
        document.title = data.pageTitle;

        document.getElementById('gallery-img').src = data.galleryArt.imageUrl;

        const trailerVideo = document.getElementById('announce-trailer');
        const trailerSource = document.getElementById('trailer-source');
        if (trailerVideo && trailerSource) {
            trailerSource.src = data.trailerUrl;
            trailerVideo.load();
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (data.translations[key]) {
                element.textContent = data.translations[key];
            }
        });
        
        populateGrid('squadron-grid-container', data.squadrons);
        populateGrid('aces-grid-container', data.aces);
        populateGrid('plane-grid-container', data.planes);
        populateGameDetails(lang);
    }
    
    // --- LIVE DATE & TIME ---
    function updateLiveDateTime() {
         const container = document.getElementById('live-datetime-container');
        if (!container) return;
        const now = new Date();
        let date, time;
        if (currentLang === 'ja') {
            const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
            date = now.toLocaleDateString('ja-JP-u-ca-japanese', dateOptions);
            time = now.toLocaleTimeString('ja-JP');
        } else {
            const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
            date = now.toLocaleDateString('en-US', dateOptions);
            time = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
        }
        container.textContent = `${date} | ${time}`;
    }

    // --- DYNAMIC CONTENT GENERATION ---
    function populateGrid(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container || !items) return;
        container.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'grid-card';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${item.imageUrl}" alt="${item.name}">
                </div>
                <div class.card-content">
                    <p>${item.name}</p>
                </div>`;
            card.addEventListener('click', () => openModal(item.imageUrl, item.name, item.details));
            container.appendChild(card);
        });
    }
    
    function populateGameDetails(lang) {
        const container = document.getElementById('game-details-list');
        const translations = siteData[lang].translations;
        if (!container) return;
        container.innerHTML = '';
        gameDetails.forEach(detail => {
            const listItem = document.createElement('li');
            const label = translations[detail.label_key] || detail.label_key;
            const value = detail.value_key ? (translations[detail.value_key] || detail.value_key) : detail.value;
            listItem.innerHTML = `<strong>${label}:</strong> ${value}`;
            container.appendChild(listItem);
        });
    }
    
    // --- MODAL FUNCTIONS ---
    function openModal(image, title, details) {
        modalImage.src = image;
        modalImage.alt = title; 
        modalTitle.textContent = title;
        modalDetails.textContent = details;
        modalOverlay.classList.remove('modal-hidden');
    }

    function closeModal() {
        modalOverlay.classList.add('modal-hidden');
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });

    // --- GALLERY CLICK LISTENER ---
    galleryContainer.addEventListener('click', () => {
        const artData = siteData[currentLang].galleryArt;
        openModal(artData.imageUrl, artData.title, artData.details);
    });

    // --- INTERACTIVITY & ANIMATIONS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');
    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => navWrapper.classList.toggle('active'));
        navWrapper.querySelectorAll('ul li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navWrapper.classList.contains('active')) {
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // --- BACKGROUND MUSIC HANDLER ---
    const backgroundMusic = document.getElementById('bg-music');
    function playAudio() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {
                console.log("Autoplay blocked. User interaction required.");
                document.body.addEventListener('click', playAudio, { once: true });
            });
        }
    }

    // --- INITIALIZATION ---
    updateLiveDateTime();
    setInterval(updateLiveDateTime, 1000);
});