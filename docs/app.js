const content = {
  featured: [
    {
      title: "Perusopas",
      description: "Kokonaiskuva vihreän datakeskuksen suunnittelusta, sijainnista, energiasta, toiminnasta ja mittareista.",
      link: "../README.md"
    },
    {
      title: "Itseopiskelumateriaali",
      description: "Moduulit M1-M6 ICT-ammattilaisille ja tekniselle johdolle.",
      link: "../itseopiskelumateriaali/m1-rakentamisen-syyt.md"
    },
    {
      title: "Menetelmäopas",
      description: "Yksi koottu opas datakeskuksen hiilijalanjäljen optimointiin.",
      link: "../menetelmaopas/menetelmaopas.md"
    }
  ],
  sections: [
    {
      title: "Perusopas",
      items: [
        ["P0 Kohderyhmät", "../perusopas/p0-kohderyhmat.md"],
        ["P1 Johdanto", "../perusopas/p1-johdanto.md"],
        ["P2 Sijainti", "../perusopas/p2-sijainti.md"],
        ["P3 Elementit", "../perusopas/p3-elementit.md"],
        ["P4 Elinkaari", "../perusopas/p4-elinkaari.md"],
        ["P5 Toiminta", "../perusopas/p5-toiminta.md"],
        ["P6 Energia ja hukkalämpö", "../perusopas/p6-energia-hukkalampo.md"],
        ["P7 Mittarit", "../perusopas/p7-mittarit.md"],
        ["P8 Lähdeluettelo", "../perusopas/p8-lahdeluettelo.md"],
        ["Hankintaliite", "../perusopas/liitteet/hankintaliite.md"],
        ["Optimidatakeskus", "../perusopas/liitteet/optimidatakeskus.md"]
      ]
    },
    {
      title: "Itseopiskelumateriaali",
      items: [
        ["M1 Rakentamisen syyt", "../itseopiskelumateriaali/m1-rakentamisen-syyt.md"],
        ["M2 Elementit ja periaatteet", "../itseopiskelumateriaali/m2-elementit-ja-periaatteet.md"],
        ["M3 Elinkaari", "../itseopiskelumateriaali/m3-elinkaari.md"],
        ["M4 Toiminta", "../itseopiskelumateriaali/m4-toiminta.md"],
        ["M5 Energia ja hukkalämpö", "../itseopiskelumateriaali/m5-energia-ja-hukkalampo.md"],
        ["M6 Mittarit", "../itseopiskelumateriaali/m6-mittarit.md"],
        ["Tehtävät", "../itseopiskelumateriaali/tehtavat.md"]
      ]
    },
    {
      title: "Mittarikortit",
      items: [
        ["PUE", "../itseopiskelumateriaali/mittarikortit/pue.md"],
        ["REF", "../itseopiskelumateriaali/mittarikortit/ref.md"],
        ["ERF", "../itseopiskelumateriaali/mittarikortit/erf.md"],
        ["CER", "../itseopiskelumateriaali/mittarikortit/cer.md"],
        ["CUE", "../itseopiskelumateriaali/mittarikortit/cue.md"],
        ["WUE", "../itseopiskelumateriaali/mittarikortit/wue.md"]
      ]
    },
    {
      title: "Kaaviot ja työmuistiot",
      items: [
        ["Arkkitehtuuri", "../kaaviot/arkkitehtuuri.md"],
        ["Järjestelmäkaavio", "../kaaviot/jarjestelmakaavio.md"],
        ["Mittapistekartta", "../kaaviot/mittapistekartta.md"],
        ["Oliopohjainen malli", "../kaaviot/oliopohjainen-malli.md"],
        ["Opaskartta", "../tyomuistiot/opaskartta.md"],
        ["Operatiivinen opas luonnos", "../tyomuistiot/operatiivinen-opas-luonnos.md"],
        ["Optimointikartoitus", "../tyomuistiot/optimointikartoitus.md"],
        ["Ten relevant studies", "../tyomuistiot/ten-relevant-studies.md"],
        ["Toimintasuunnitelma", "../tyomuistiot/toimintasuunnitelma.md"]
      ]
    }
  ]
};

const featuredGrid = document.getElementById("featured-grid");
const sectionsContainer = document.getElementById("content-sections");
const searchInput = document.getElementById("search");

function renderFeatured() {
  featuredGrid.innerHTML = content.featured.map(item => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p style="margin-top:0.8rem;">
        <a href="${item.link}" target="_blank" rel="noreferrer">Avaa sisältö</a>
      </p>
    </article>
  `).join("");
}

function renderSections(filter = "") {
  const q = filter.trim().toLowerCase();

  const html = content.sections.map(section => {
    const items = section.items.filter(([title, path]) =>
      title.toLowerCase().includes(q) || path.toLowerCase().includes(q) || section.title.toLowerCase().includes(q)
    );

    if (q && items.length === 0) return "";

    return `
      <section class="section-card">
        <h3>${section.title}</h3>
        <div class="file-list">
          ${items.map(([title, path]) => `
            <div class="file-item">
              <a class="file-link" href="${path}" target="_blank" rel="noreferrer">${title}</a>
              <span class="file-path">${path}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

  sectionsContainer.innerHTML = html || `<div class="section-card"><p>Ei osumia tällä haulla.</p></div>`;
}

renderFeatured();
renderSections();

searchInput.addEventListener("input", (e) => {
  renderSections(e.target.value);
});
