# JavaScript Advanced - Proiectul 1

## Rularea proiectului

#### 1. `git clone https://github.com/razvancir96/react-admin-panel.git`

#### 2. `cd react-admin-panel`

#### 3. `npm install` (posibil sa dureze)

#### 4. `npm start`

## Cursuri precedente

Pentru a vedea progresiv cum a fost realizat acest proiect urmariti urmatoarele repo-uri. Comentariile/console.log-urile din fiecare fisier sunt specifice cursurului la care au fost facute. Versiunea finala este fara comentarii sau console.log-uri.

#### Cursul 2: https://github.com/razvancir96/react-curs02

#### Cursul 3: https://github.com/razvancir96/react-curs03

#### Cursul 4: https://github.com/razvancir96/react-curs04

## Cerințe de implementat

Pentru a continua proiectul, aveți de implementat cerințele care au fost date de-a lungul cursurilor 2-4:

2.1. Adăugați două proprietăți noi pentru fiecare user: salariu și imagine. Dați valori pentru acestea și afișați-le pe ecran.

2.2. Adăugați un nou input de tip culoare. La schimbarea culorii lui, culoarea textului pentru întreaga aplicație se va schimba.

3.1. Creați două componente noi, numite PostList și PostItem. PostList va fi o listă de componente de tip PostItem.
În componenta PostList, atunci când este afișată pe ecran, faceți un request catre endpoint-ul /posts, de pe JSON placeholder, afișând datele preluate. Practic, o singură dată veți face request către url-ul https://jsonplaceholder.typicode.com/posts.

3.2. Creați două butoane: Afișează useri și Afișează postări. Implicit, vor fi afișați userii. La click pe oricare din cele două butoane, va fi actualizată lista afișată pe ecran. Dacă dăm click pe butonul Afișează useri va fi afișată lista userilor, dacă dăm click pe Afișează postări va fi afișată lista postărilor.

4.1 Adăugați pe fiecare user un buton de ștergere.

4.2. Faceți puțină validare a datelor. Spre exemplu, să nu poată fi introdus un nume gol, iar emailul să conțină caracterele `@` și `.`.

4.3. Stilizați aplicația, astfel încât să arate mai frumos.

