# HTML oldalak szerkesztése Visual Studio Code-al

## Fejlesztői környezet telepítése, beállítása (Windows)

1.  Node.js letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Node.js command prompt, globális Node.js csomag telepítése:<br>
    "npm install -g htmlhint" paranccsal<br>
3.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
4.  Visual Studio Code (User Installer) telepítése:<br>
    https://code.visualstudio.com/Download<br>
    (User installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
5.  Jedlikes AD hiba - PATH "megtelik..."
    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.EXE) kiadott "npm" vagy<br>
    "code ." parancs nem található:<br>
    - Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Rendszerváltozók
    - Ismétlődő PATH bejegyzések törlése a Rendszerváltozóknál
    - Új bejegyzések (felhasználói) hozzáadása, ha hiányoznak (idézőjelek nélkül):
      - "C:\Program Files\nodejs\"
      - "C:\Program Files\Git\cmd"
      - "%LocalAppData%\Programs\Microsoft VS Code\bin"
      - "%APPDATA%\npm"
6.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztés keresése, telepítés:<br>
    Javasolt (8db) kiterjesztéseket lsd. lejjebb!<br>
    (opcionális: további kiterjesztések telepítése igény szerint)
7.  Billentyűkombinációk beállítása (opcionális):<br>
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Del bill.<br>
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - gépel: "wrap" > parancs: "Wrap with Abbreviation" > hozzárendel: Ctrl-í
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
8.  Opcionális: VSCode beállítása: lsd. az oldal végén

## Javasolt 8 darab kiterjesztés:

1. Auto Rename Tag<br>
   https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

2. Beautify<br>
   https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify<br>
   .jsbeautifyrc fájlt hozzál léte a project könyvtárban, ha az alapértelmezett beállítások nem megfelelőek:<br>
   https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md

3. CSS Peek<br>
   https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek

4. Debugger for Chrome<br>
   https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

5. HTML CSS Support<br>
   https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

6. HTMLHint<br>
   https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint<br>
    Telepíteni kellett korábban hozzá: npm install -g htmlhint<br>

7. Live Server<br>
    https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer<br>
    - Töréspontok elhelyezése a JavaScript kódban (csak external JS-ben lehet)
    - Live Server indítása (állapotsorban "Go Live") - Nyomkövetés: F5-el<br>
      (.vscode\launch.json fájlban a port (8080) átírása 5500-ra!)

8. vscode-pdf<br>
    https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf<br>


## GitHub JedlikHtmlCssJsTemplate repó klónozása
1. Parancssor (CMD.EXE) indítása
2. Aktuáls meghajtó váltása: pl.: D: (enter)
3. Szülő könyvtár kijelölése pl.: cd D:\HTMLprojektek
4. git clone https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate
5. Project mappa átnevezése pl.: ren JedlikHtmlCssJsTemplate myNewHtmlProject
6. cd myNewHtmlProject
7. ".git" mappa törlése: rd /s /q .git
8. VS Code indítása: code .

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
