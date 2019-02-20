# HTML oldalak szerkesztése Visual Studio Code-al

## Fejlesztői környezet telepítése, beállítása (Windows)

1. Node.js letöltése, telepítése:  
    <https://nodejs.org/en/download/>
2. Node.js command prompt, globális Node.js csomagok telepítése:  
    "npm install -g htmlhint" paranccsal  
    "npm install -g jshint" paranccsal
3. Git for Windows telepítése (opcionális, git-hez):  
    <https://git-for-windows.github.io/>
4. Visual Studio Code (User Installer) telepítése:  
    <https://code.visualstudio.com/Download>  
    (User Installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
5. VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X  
    Kiterjesztés keresése, telepítés:  
    Javasolt kiterjesztések telepítése lsd. lejjebb!  
    (opcionális: további kiterjesztések telepítése igény szerint)
6. Billentyűkombinációk beállítása (opcionális):  
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S  
    Parancs keresése: gépeléssel  
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Del bill.  
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - gépel: "wrap" > parancs: "Wrap with Individual Lines with Abbreviation" > hozzárendel: Ctrl-í
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
7. File\Auto Save -> Automatikus mentés bekapcsolása
8. Opcionális: VSCode beállítása: lsd. az oldal végén

## Javasolt kiterjesztések

1. Auto Rename Tag  
   <https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag>

2. CSS Peek  
   <https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek>

3. Debugger for Chrome  
   <https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome>

4. GitLens - Git supercharged (opcionális, extra Git funkciókhoz)
   <https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens>

5. HTML CSS Support  
   <https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css>

6. HTMLHint  
   <https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint>  
    Telepíteni kellett korábban hozzá: npm install -g htmlhint

7. JSHint  
   <https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint>  
   Telepíteni kellett korábban hozzá: npm install -g jshint

8. LaTeX Workshop (opcionális, PDF állományok megjelenítéséhez)
    <https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop>

9. Live Server  
    <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>  
    - Töréspontok elhelyezése a JavaScript kódban (csak external JS-ben lehet)
    - Live Server indítása (állapotsorban "Go Live")
    - Nyomkövetés indítása: F5-el  
      (.vscode\launch.json fájlban a port (8080) átírása 5500-ra az első indítás után!)

10. Spell Right (opcionális, magyar helyesírás ellenőrző)<br>
    <https://marketplace.visualstudio.com/items?itemName=ban.spellright><br>
    Saját szótár definiálása a .vscode\spellright.dict állományban<br>
    Angol (en-GB) szótár telepítése:<br>
    Start menü > Gépház > Idő és nyelv > Nyelv > Nyelv hozzáadása

## GitHub JedlikHtmlCssJsTemplate repository klónozása

1. Parancssor (CMD.EXE) indítása
2. Aktuális meghajtó váltása: pl.: D: (enter)
3. Szülő könyvtár kijelölése pl.: cd D:\HTMLprojektek
4. git clone <https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate>
5. Project mappa átnevezése pl.: ren JedlikHtmlCssJsTemplate myNewHtmlProject
6. cd myNewHtmlProject
7. ".git" mappa törlése: rd /s /q .git
8. VS Code indítása: code .

## Hasznos linkek

- <https://code.visualstudio.com/docs/languages/html>
- <https://code.visualstudio.com/docs/languages/css>
- <https://code.visualstudio.com/docs/languages/javascript>
- <https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf>
- <https://github.com/Microsoft/vscode-tips-and-tricks>
- <https://git-scm.com/book/en/v2>
- <https://help.github.com/articles/basic-writing-and-formatting-syntax/>

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális)
1. GitHub account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikHtmlCssJsTemplate a repository neve a példában)
3. Git konfigurálása CMD vagy "Git CMD" ablakból, például:
   - git config --global user.name nitslaszlo
   - git config --global user.email nitslaszlo@gmail.com
   - git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ha van klónozott projektben .Git (rejtett!!!) mappa, akkor törölni kell
6. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G<br>
   majd "Initialize Repository"-ra kattint (felül a rombusz ikonnal)<br>
   majd meg kell adni a projekt könyvtárát a git-nek
7. Remote repository megadása új terminál ablakból (Ctr-Shift-ö), például:
   - "git remote add origin https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate"<br>
   (A pontos parancsot a repo létrehozásakor kiírja a GitHub)   
8. ".gitignore" fájl szerkesztése/létrehozása (ezek a mappák/állományok nem lesznek feltöltve):<br>
   Ctrl-N -el új fájl létrehozása vagy meglévő szerkesztése<br>
   A fájl tartalma:<br>
   node_modules<br>
   npm-debug.log<br>
   (További mappák és fájlok megadhatók, melyek nem kerülnek "feltöltésre")<br>
   Ctrl-S -> .gitignore néven menteni a projekt főkönyvtárába
9. Ctrl-Shift-G -> Commit message megadása felül, majd "commit" utasítás kiadása<br>
   Ctrl-Enter -el, vagy felül a "pipa" ikonnal<br>
10. "There are no staged ..." kérdésre válaszolj "always"-el
11. Változások szinkronizálása ("feltöltés")<br>
    Alul a státus sorban balra "Synchronize Changes" ikonra kattint<br>
    Első alkalommal a GitHub felhasználói nevet vagy e-mail címet és jelszót kér!
10. Változások szinkronizálása ("feltöltés")<br>
    Alul a státus sorban balra "Synchronize Changes" (felhő) ikonra kattint<br>
    Később fel- és letöltésnél egymást "kergető" nyilak lesznek.
11. A "Would you like Code to periodically run 'git fetch'?"  kérdésére válaszoljunk "yes"-el<br>                    ("git.autofetch": true lesz beállítva, alapértelmezésben 3 percenként ellenőrzi a változásokat)


## VS Code editor beállítása

1. Ctrl-Shift-P vagy F1
2. "Preferences..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónál tárolt beállításokhoz  
   Beállítások "workspace": projekt/.vscode/settings.json  
   Beállítások "user": c:/Users/nitslaszlo/AppData/Roaming/Code/User/settings.json
