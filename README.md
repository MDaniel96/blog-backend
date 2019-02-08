# Blog server

Interjú feladatként elkészített blog bejegyzéseket tároló backend szerver.


### Használt technológiák és csomagok

* NodeJS
  * express
  * body-parser
  * chai
* JSON
* MySql adatbázis
* Swagger api leírás


### Megvalósított funkciók

* Bejegyzések és kategóriák létrehozása, frissítése, törlése
* Bejegyzések kategóriához rendelése és az összerendelés visszavonása
* Bejegyzések keresése kategória címke alapján
* Pár egyszerű unit teszt írása


### Megoldások

Az adatok tárolásához MySql adatbázist használtam, amelyre a config.js fájlban csatlakozok.

Az adatbázisban 3 fő entitást tárolok, köztük kapcsolótáblákkal:
* Entry
  * EntriesCategories (kapcsolótábla)
* Category
  * CategoriesLabels (kapcsolótábla)
* Label

Az itt megvalósítható kényszereket adatbázisszinten elértem (bejegyzés nevek egyediek, kapcsolótáblák valódi egyedekre mutassanak,
címkék max hossza). Az egy bejegyzés maximum 5 kategóriához rendelhető kényszert js kódból oldottam meg.

A lekérdezéseket a kódban egyszerű, szöveges sql utasításokkal írtam meg. Itt lehetett volna akár ORM-et is használni. 


### Tesztelés

* Postman (blog_backend.postman_collection.json)
* Teszt MySql szkript (mysql_setup.txt)
* Pár egyszerű unit teszt (appTest.js)

### Nem megvalósított funkciók

* Lapozás
* Címkék három karakternél rövidebbek

