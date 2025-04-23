# Wprowadzenie 

**Multipurpose Discord to Margonem Addons (MDMA)** to pierwszy publicznie dostępny zestaw dodatków do gry <a href="https://www.margonem.pl" target="_blank" rel="noopener noreferrer">Margonem</a> napisany w języku Rust, zainspirowany zestawami <a href="https://maddonz.barlag.pl" target="_blank" rel="noopener noreferrer">Maddonz</a>, <a href="https://gargonem.margoworld.pl" target="_blank" rel="noopener noreferrer">Gargonem</a> oraz <a href="https://forum.margonem.pl/?task=forum&show=posts&id=502192" target="_blank" rel="noopener noreferrer">REVO</a>. Rozszerzenie przeglądarkowe **MDMA** oferuje znacznie więcej możliwości, niż standardowe skrypty działające w <a href="https://www.tampermonkey.net" target="_blank" rel="noopener noreferrer">Tampermonkey</a>.

Celem zestawu jest zapewnienie graczom dostępu do najlepszych dodatków na rynku, bez konieczności żonglowania skryptami z wielu niezależnych źródeł.

> Jakiś błąd lub pomysł na zmianę? <a href="https://discord.gg/dodatki-margonem" target="_blank" rel="noopener noreferrer">Zapraszamy na nasz serwer Discord!</a>

---

W tej książce znajdziesz komplet informacji o dostępnych dodatkach oraz szczegółowy opis funkcjonalności zestawu. Tak, zestaw jest rozbudowany na tyle, że napisałem do niego dokumentację 🫠

Wszystko znajduje się w pasku bocznym (może być zwinięty na urządzeniach mobilnych), ale oto szybki podgląd zawartości:
1. [Instalacja](addons/download.md)
2. [Lista Dodatków](addons/index.md)
3. [Wstęp Do API](api/index.md)
4. [Nadchodzące Zmiany](todo/index.md)
5. [Legalność Zestawu](misc/legality.md)
6. [Najczęstsze Pytania](misc/faq.md)

Kilka istotnych informacji, zanim przejdziemy do instalacji. MDMA tworzone jest przez graczy (a właściwie jednego <a href="https://www.margonem.pl/profile/view,8938162" target="_blank" rel="noopener noreferrer">gracza</a>) – dla graczy. Poprzez głosowania na <a href="https://discord.gg/dodatki-margonem" target="_blank" rel="noopener noreferrer">discordzie</a> to właśnie Wy decydujecie o tym, co jako następne pojawi się w zestawie!

Dokładam wszelkich starań, aby każdy dodatek zawierał wszystkie potrzebne funkcjonalności i nie zagrażał bezpieczeństwu kont użytkowników.

> **INFO:** Od początku istnienia zestawu[^first-ver], żaden użytkownik nie został zbanowany za korzystanie z MDMA! Dodatkowo, od niedawna współpracujemy z administracją gry, aby na bieżąco monitorować i dbać o zgodność dodatków z regulaminem.

Wygląd managera[^new-manager] dodatków jest zainspirowany modem <a href="https://absolllute.com/" target="_blank" rel="noopener noreferrer">Mega Hack</a>.
Okna dodatków przypominają te z gry, ale technicznie to zupełnie inna liga — są [szybsze, lżejsze](https://github.com/Pauan/rust-dominator) i [niewykrywalne](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#encapsulation_from_javascript) dla kodu spoza zestawu.
Kod MDMA nie korzysta z rozwiązań Garmory, wszystko pisane jest od zera w Rust 🚀

[^first-ver]: Pierwsza oficjalna wersja zestawu została upubliczniona 30.11.2023
[^new-manager]: Wygląd managera jest aktualnie w przebudowie!