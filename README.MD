# HTML oldalak szerkeszése Visual Studio Code-al

## Fejlesztői környezet telepítése, beállítása (Windows)
1.  Node.js letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Node.js command prompt, globális Node.js csomag(ok) telepítése:<br>
    "npm install -g eslint"  parancsal<br>
    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.EXE) kiadott "npm"<br> parancs nem található:<br>
      - Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Új...
      - "%APPDATA%\npm" hozzáadása (idézőjelek nélkül)
2.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
3.  Visual Studio Code (továbbiakban VSCode) telepítése:<br>
    https://code.visualstudio.com/docs/setup/setup-overview
4.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztés keresése, telepítés:<br>
    Javasolt (12db) kiterjesztéseket lsd. a következő pontban!<br>
    (opcionális: további kiterjesztések telepítése igény szerint)
5.  Billentyűkombinációk beállítása (opcionális):<br> 
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattíntással, törlés: Del bill.<br>
     - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
     - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
6.  Opcionális: VSCode beállítása: lsd. az oldal végén


## Javasolt kiterjesztések és bemutatásuk:
1. vscode-icons 7.19.0<br>
https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons

2. Debugger for Chrome<br>
https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

3. HTML CSS Support<br>
https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

4. HTMLHint<br>
https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint

5. ESLint 1.4.4<br>
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
Telepíteni kellett korábban hozzá: npm install -g eslint

6. open in browser 1.1.0<br>
https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser

7. Auto Rename Tag<br>
https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

8. htmltagwrap<br>
https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap

9. Path Intellisense<br>
https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

10. Live Server<br>
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer<br>
    - Töréspontok elhelyezése a JavaScript kódban (csak external JS-ben lehet)
    - Live Server indítása (állapotsorban "Go Live")
    - Nyomkövetés: F5-el<br>
    (.vscode\launch.json fájlban a port (8080) átírása 5050-re!)

11. CSS Peek 1.3.1<br>
https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek

12. vscode-pdf<br>
https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf

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
   (JedlikCsharpTemplate a repository neve a példában)
3. Git konfigurálása Git CMD ablakból (1x kell csak, Windows megjegyzi):<br>
   git config --global user.name nitslaszlo@gmail.com<br>
   git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. ".gitignore" fájl létrehozása project főkönyvtárban (opcionális):<br>
    Ctrl-N -el új fájl létrehozása<br>
    A fájl tartalma:<br>
    bin<br>
    (További mappák és fájlok megadhatóak, melyek nem kerülnek "feltöltésre")<br>
    Ctrl-S -> mentés
6. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G<br>
   majd "Initialize Repository"-ra kattint (felül)
7. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
8. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikHtmlCssTemplate.git"
   - "git push -u origin master"

### Fel/le töltés GitHub-ra későbbiekben:
1. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
2. Változások szinkronizálása ("feltöltés")<br>
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## VS Code editor beállítása:
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónált tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/UserName/AppData/Roaming/Code/User/settings.json
