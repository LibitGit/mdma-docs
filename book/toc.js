// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Wprowadzenie</a></li><li class="chapter-item expanded affix "><li class="part-title">Zestaw Dodatków</li><li class="chapter-item expanded "><a href="addons/download.html"><strong aria-hidden="true">1.</strong> Instalacja</a></li><li class="chapter-item expanded "><a href="addons/index.html"><strong aria-hidden="true">2.</strong> Lista Dodatków</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="addons/list/adaptive_builds/index.html"><strong aria-hidden="true">2.1.</strong> Adaptacyjne Zestawy Do Walki</a></li><li class="chapter-item expanded "><a href="addons/list/accept_summon/index.html"><strong aria-hidden="true">2.2.</strong> Akceptowanie Przywołań</a></li><li class="chapter-item expanded "><a href="addons/list/accept_group/index.html"><strong aria-hidden="true">2.3.</strong> Akceptowanie Zaproszeń Do Drużyny</a></li><li class="chapter-item expanded "><a href="addons/list/better_who_is_here/index.html"><strong aria-hidden="true">2.4.</strong> Gracze Na Mapie</a></li><li class="chapter-item expanded "><a href="addons/list/kastrat/index.html"><strong aria-hidden="true">2.5.</strong> Kastrat</a></li><li class="chapter-item expanded "><a href="addons/list/better_messages/index.html"><strong aria-hidden="true">2.6.</strong> Poprawione Powiadomienia</a></li><li class="chapter-item expanded "><a href="addons/list/online_peers/index.html"><strong aria-hidden="true">2.7.</strong> Rówieśnicy Online</a></li><li class="chapter-item expanded "><a href="addons/list/smart_forge/index.html"><strong aria-hidden="true">2.8.</strong> Super Rzemieślnik</a></li><li class="chapter-item expanded "><a href="addons/list/better_group_invites/index.html"><strong aria-hidden="true">2.9.</strong> Zapraszanie Do Grupy</a></li><li class="chapter-item expanded "><a href="addons/list/znacznik/index.html"><strong aria-hidden="true">2.10.</strong> Znacznik</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">API</li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> Wstęp Do API</div></li><li class="chapter-item expanded "><a href="todo/index.html"><strong aria-hidden="true">4.</strong> Nadchodzące Zmiany</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="misc/legality.html"><strong aria-hidden="true">5.</strong> Legalność Zestawu</a></li><li class="chapter-item expanded "><a href="misc/faq.html"><strong aria-hidden="true">6.</strong> Najczęstsze Pytania</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
