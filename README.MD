# HTML oldalak szerkeszése Visual Studio Code-al

## Fejlesztői környezet telepítése, beállítása (Windows)

1.  Node.js letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Node.js command prompt, globális Node.js csomag telepítése:<br>
    "npm install -g eslint" parancsal<br>
    "npm install -g htmlhint" parancsal<br>
3.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
4.  Visual Studio Code (User Installer) telepítése:<br>
    https://code.visualstudio.com/Download<br>
    (User installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
5.  Jedlikes AD hiba - PATH "megtelik..."
    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.EXE) kiadott "npm" vagy<br>
    "code ." parancs nem található:<br>
    - Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Rendszerváltozók
    - Ismétlődő PATH bejegyzések törlése a Rendszeváltozóknál
    - Új bejegyzések (felhasználói) hozzáadása, ha hiányoznak (idézőjelek nélkül):
      - "C:\Program Files\nodejs\"
      - "%LocalAppData%\Programs\Microsoft VS Code\bin"
      - "%APPDATA%\npm"
6.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztés keresése, telepítés:<br>
    Javasolt (15db) kiterjesztéseket lsd. lejjebb!<br>
    (opcionális: további kiterjesztések telepítése igény szerint)
7.  Billentyűkombinációk beállítása (opcionális):<br>
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattíntással, törlés: Del bill.<br>
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
8.  Opcionális: VSCode beállítása: lsd. az oldal végén

## Javasolt 15db kiterjesztés:

1. Auto Close Tag<br>
   https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag

2. Auto Rename Tag<br>
   https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

3. Beautify<br>
   https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

4. CSS Peek<br>
   https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek

5. Debugger for Chrome<br>
   https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

6. ESLint<br>
   https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint<br>
   Telepíteni kellett korábban hozzá: npm install -g eslint<br>
   Dokumentáció: https://eslint.org/docs/rules/<br>
   Konfigurátor: http://rapilabs.github.io/eslintrc-generator/<br>

7. Formatting Toggle<br>
   https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle

8. HTML CSS Support<br>
   https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

9. HTMLHint<br>
   https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint

10. htmltagwrap<br>
    https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap

11. Live Server<br>
    https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer<br>

    - Töréspontok elhelyezése a JavaScript kódban (csak external JS-ben lehet)
    - Live Server indítása (állapotsorban "Go Live") - Nyomkövetés: F5-el<br>
      (.vscode\launch.json fájlban a port (8080) átírása 5050-re!)

12. open in browser<br>
    https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser

13. Path Intellisense<br>
    https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

14. vscode-icons<br>
    https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons

15. vscode-pdf<br>
    https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf

## GitHub JedlikHtmlCssJsTemplate repó klónozása
1. Parancsor (CMD.EXE) indítása
2. Szülő könyvtár kijelőlése pl.: cd D:\HTMLprojektek
3. git clone https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate
4. Project mappa átnevezése pl.: ren JedlikHtmlCssJsTemplate myNewHtmlProject
5. cd myNewHtmlProject
6. ".git" mappa törlése: rd /s /q .git
7. VS Code indítása: code .

## Hasznos linkek:

- https://code.visualstudio.com/docs/languages/html
- https://code.visualstudio.com/docs/languages/css
- https://code.visualstudio.com/docs/languages/javascript
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://github.com/Microsoft/vscode-tips-and-tricks
- https://git-scm.com/book/en/v2
- https://help.github.com/articles/basic-writing-and-formatting-syntax/

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):

1. Github account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikHtmlCssJsTemplate a repository neve a példában)
3. Git konfigurálása Git CMD ablakból (1x kell csak, Windows megjegyzi):<br>
   git config --global user.email nitslaszlo@gmail.com<br>
   git config --global user.name nitslaszlo<br>
   git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
6. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate.git"
   - "git push -u origin master"

### Fel/le töltés GitHub-ra későbbiekben:

1. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
2. Változások szinkronizálása ("feltöltés"):<br>
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## VS Code editor beállítása:

1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónált tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/nitslaszlo/AppData/Roaming/Code/User/settings.json
