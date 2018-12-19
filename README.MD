# HTML oldalak szerkesztése Visual Studio Code-al

## Fejlesztői környezet telepítése, beállítása (Windows)

1. Node.js letöltése, telepítése:  
    <https://nodejs.org/en/download/>
2. Node.js command prompt, globális Node.js csomag telepítése:  
    "npm install -g htmlhint" paranccsal  
3. Git for windows telepítése (opcionális, git-hez):  
    <https://git-for-windows.github.io/>
4. Visual Studio Code (User Installer) telepítése:  
    <https://code.visualstudio.com/Download>  
    (User installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
5. Jedlikes AD hiba - PATH "megtelik..."
    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.EXE) kiadott "npm" vagy  
    "code ." parancs nem található:  
    - Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Rendszerváltozók
    - Ismétlődő PATH bejegyzések törlése a Rendszerváltozóknál
    - Új bejegyzések (felhasználói) hozzáadása, ha hiányoznak (idézőjelek nélkül):
      - "C:\Program Files\nodejs\"
      - "C:\Program Files\Git\cmd"
      - "%LocalAppData%\Programs\Microsoft VS Code\bin"
      - "%APPDATA%\npm"
6. VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X  
    Kiterjesztés keresése, telepítés:  
    Javasolt (8db) kiterjesztéseket lsd. lejjebb!  
    (opcionális: további kiterjesztések telepítése igény szerint)
7. Billentyűkombinációk beállítása (opcionális):  
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S  
    Parancs keresése: gépeléssel  
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Del bill.  
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - gépel: "wrap" > parancs: "Wrap with Abbreviation" > hozzárendel: Ctrl-í
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
8. Opcionális: VSCode beállítása: lsd. az oldal végén

## Javasolt 8 darab kiterjesztés

1. Auto Rename Tag  
   <https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag>

2. Beautify  
   <https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify>  
   .jsbeautifyrc fájlt hozzál léte a project könyvtárban, ha az alapértelmezett beállítások nem megfelelőek:  
   <https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md>

3. CSS Peek  
   <https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek>

4. Debugger for Chrome  
   <https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome>

5. HTML CSS Support  
   <https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css>

6. HTMLHint  
   <https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint>  
    Telepíteni kellett korábban hozzá: npm install -g htmlhint  

7. Live Server  
    <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>  
    - Töréspontok elhelyezése a JavaScript kódban (csak external JS-ben lehet)
    - Live Server indítása (állapotsorban "Go Live") - Nyomkövetés: F5-el  
      (.vscode\launch.json fájlban a port (8080) átírása 5500-ra!)

8. LaTeX Workshop  
    <https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop>  

## GitHub JedlikHtmlCssJsTemplate repó klónozása

1. Parancssor (CMD.EXE) indítása
2. Aktuáls meghajtó váltása: pl.: D: (enter)
3. Szülő könyvtár kijelölése pl.: cd D:\HTMLprojektek
4. git clone <https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate>
5. Project mappa átnevezése pl.: ren JedlikHtmlCssJsTemplate myNewHtmlProject
6. cd myNewHtmlProject
7. ".git" mappa törlése: rd /s /q .git
8. VS Code indítása: code .

## Hasznos linkek

- <https://code.visualstudio.com/docs/languages/html><>
- <https://code.visualstudio.com/docs/languages/css><>
- <https://code.visualstudio.com/docs/languages/javascript><>
- <https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf><>
- <https://github.com/Microsoft/vscode-tips-and-tricks><>
- <https://git-scm.com/book/en/v2><>
- <https://help.github.com/articles/basic-writing-and-formatting-syntax/><>

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális)

1. Github account létrehozása:  
   <https://github.com/>  
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:  
   pl.: GitHub asztali alkalmazással vagy github.com-on  
   (JedlikHtmlCssJsTemplate a repository neve a példában)
3. Git konfigurálása Git CMD ablakból (1x kell csak, Windows megjegyzi):  
   git config --global user.email nitslaszlo@gmail.com  
   git config --global user.name nitslaszlo  
   git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
6. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin <https://github.com/nitslaszlo/JedlikHtmlCssJsTemplate.git">
   - "git push -u origin master"

### Fel/le töltés GitHub-ra későbbiekben

1. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
2. Változások szinkronizálása ("feltöltés"):  
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## VS Code editor beállítása

1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónált tárolt beállításokhoz  
   Konfig fájl workspace: projekt/.vscode/settings.json  
   Konfig fájl user: c:/Users/nitslaszlo/AppData/Roaming/Code/User/settings.json
