const siteConfig = {
    title: "Rejoins-nous !",
    subtitle: "Rejoins-nous ! Parce que les sciences, c’est comme une série Netflix : une fois qu’on commence, on ne peut plus s’arrêter.",
    tabs: [
        {
            id: "epsilon-calcul",
            title: "ε epsilonCalcul",
            links: [
                { name: "Calculatrice Scientifique", url: "https://www.desmos.com/scientific" },
                { name: "WolframAlpha", url: "https://www.wolframalpha.com" },
                { name: "GeoGebra", url: "https://www.geogebra.org" }
            ]
        },
        {
            id: "phi-enseignement",
            title: "φ phiEnseignement", 
            links: [
                { name: "Khan Academy", url: "https://www.khanacademy.org" },
                { name: "Coursera", url: "https://www.coursera.org" }
            ]
        },
        {
            id: "psi-science",
            title: "ψ psiScience",
            links: [
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov" },
                { name: "arXiv", url: "https://arxiv.org" },
                { name: "Nature", url: "https://www.nature.com" },
                { name: "Science", url: "https://www.science.org" },
                { name: "ResearchGate", url: "https://www.researchgate.net" }
            ]
        },
        {
            id: "produits",
            title: "🛒 Produits",
            links: []
        }
    ]
};

let currentOpenTab = -1;

function init() {
    document.getElementById('main-title').textContent = siteConfig.title;
    document.getElementById('main-subtitle').textContent = siteConfig.subtitle;

    const container = document.getElementById('tabs-container');
    container.innerHTML = '';

    siteConfig.tabs.forEach((tab, index) => {
        const tabElement = document.createElement('div');
        tabElement.className = 'tab-item';
        tabElement.id = `tab-${index}`;
                
        tabElement.innerHTML = `
            <div class="tab-header">
                <button class="tab-button" onclick="toggleTab(${index})">${tab.title}</button>
                <button class="close-button" onclick="closeTab(${index})">×</button>
            </div>
            <div class="tab-content" id="content-${index}">
                <div class="links-list" id="links-${index}"></div>
            </div>
        `;
                
        container.appendChild(tabElement);
        updateLinks(index);
    });
}

function toggleTab(index) {
    if (currentOpenTab === index) {
        closeCurrentTab();
        return;
    }
            
    if (currentOpenTab !== -1) {
        closeCurrentTab();
    }
            
    document.getElementById(`tab-${index}`).classList.add('active');
    document.getElementById(`content-${index}`).classList.add('active');
    currentOpenTab = index;
}

function closeTab(index) {
    if (currentOpenTab === index) {
        closeCurrentTab();
    }
}

function closeCurrentTab() {
    if (currentOpenTab === -1) return;
            
    document.getElementById(`tab-${currentOpenTab}`).classList.remove('active');
    document.getElementById(`content-${currentOpenTab}`).classList.remove('active');
    currentOpenTab = -1;
}

function updateLinks(index) {
    const container = document.getElementById(`links-${index}`);
    const tab = siteConfig.tabs[index];
            
    container.innerHTML = '';
            
    if (tab.links.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <div class="empty-state-text">Aucun lien disponible</div>
            </div>
        `;
    } else {
        tab.links.forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.className = 'link-item';
            linkElement.innerHTML = `
                <a href="${link.url}" target="_blank">${link.name}</a>
                <small>${link.url}</small>
            `;
            container.appendChild(linkElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', init);