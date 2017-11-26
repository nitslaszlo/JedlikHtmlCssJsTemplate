# HTML oldalak szerkeszése Visual Studio Code-al

## Fejlesztői környezet telepítése, beállítása (Windows)
1.  Node.js letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Node.js command prompt, globális Node.js csomag(ok) telepítése:<br>
    "npm install -g jshint"<br>
    parancsa<br>
    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.EXE) kiadott "tsc"<br> parancs nem található:<br>
      1. Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Új...
      2. "%APPDATA%\npm" hozzáadása (idézőjelek nélkül)
2.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
3.  Visual Studio Code (továbbiakban VSCode) telepítése:<br>
    https://code.visualstudio.com/docs/setup/setup-overview
4.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztés keresése, telepítés:<br>
    Javasolt kiterjesztéseket lsd. a következő pontban!
    (opcionális: további kiterjesztések telepítése igény szerint)
5.  Billentyűkombinációk beállítása: 
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattíntással, törlés: Del bill.<br>
     - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
     - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
6.  Opcionális: VSCode beállítása: lsd. az oldal végén


## Javasolt kiterjesztések és bemutatásuk:
1. HTML Snippets
https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets

2. Debugger for Chrome
https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

3. HTML CSS Support
https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

4. HTMLHint
https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint

5. JSHint 0.10.15
https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint
Telepíteni: npm install -g jshint

6. open in browser 1.1.0
https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser

7. Auto Rename Tag
https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

8. htmltagwrap
https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap

9. Path Intellisense
https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

10. Live Server
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
Nyomkövetés: F5
.vscode\launch.json fájlban a port (8080) átírása 5050-re!

11. vscode-pdf
https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf

## Hasznos linkek:
- https://code.visualstudio.com/docs
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
5. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G<br>
   majd "Initialize Repository"-ra kattint (felül)
6. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
7. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikCsharpTemplate.git"
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
