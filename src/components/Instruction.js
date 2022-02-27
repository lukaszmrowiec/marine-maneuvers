import React from "react";
import shipsInfo from "../images/general/ships-info.png";

function Instruction() {
    return (
        <div id="tekst" class="centerBack">
            <h2>Gra Manwery Morskie </h2>
            <h2>wersja alfa (jeszcze nie wszystkie opcje działają)</h2>
            <p>
                Jest to próba przeniesienia do wersji online kultowej gry
                planszowej z lat 90 o tym samym tytule.
            </p>
            <p>
                Gra składa się z dwóch kompletów po 36 pionków symbolizujących
                floty grających oraz kolorowej planszy.
            </p>
            <p>
                Na planszy kolorem żółtym i czerwonym zaznaczono porty
                grających. Gra toczy się na morzu oznaczonym kolorem niebieskim.
            </p>
            <p>Na środku morza teren zakropkowany oznacza wody neutralne.</p>
            <p>
                Białe linie oznaczają brzegi, linii tej nie mogą przekraczać
                żadne jednostki. Czarną kratką podzielono całą planszę na pola,
                po których poruszają się okręty – pionki.
            </p>
            <ol>
                <li>
                    <strong>Cel gry: </strong> Przeprowadzenie okrętu
                    desantowego z własnego portu do portu przeciwnika. Gracz
                    tracący okręt desantowy przegrywa partię.
                </li>
                <li>
                    <strong>Liczba grających: </strong> Dwie osoby lub dwa
                    zespoły graczy
                </li>
                <li>
                    <strong>Siły grających:</strong> Każdy z graczy rozporządza
                    siłami wymienionymi w tabelce. Podane są w niej również:
                    liczba pól, którą za jednym razem może przejść jednostka
                    oraz „Siła jednostki” – kogo bije a komu ulega
                </li>
                <li>
                    <strong>Rozpoczęcie gry: </strong>Okręty ustawiane są losowo
                    w danym porcie (czerwone lub żółte pola na planszy). Kolory
                    są przyznawana na zmianę, żółty- czerwony -zółty -
                    czerwony... Następnie przeciwnicy również na zmianę
                    wyprowadzają okręty z portu przez pola oznaczone białymi
                    liniami prostopadłymi do linii brzegowej. Baterie nabrzeżne
                    ustawionę są na stałe, na polach swojego wybrzeża
                    sąsiadujących z wejściami do portu. Miny ustawia się na
                    planszy dopiero w trakcie gry.
                </li>
                <li>
                    <strong>Poruszanie się: </strong>Dowolny okręt może
                    przesuwać się we wszystkich kierunkach (również na skos). W
                    celu zamaskowania typu jednostki można ją przesuwać o
                    mniejszą liczbę pól, niż to wskazano w tabelce. Zajętych pól
                    nie wolno przeskakiwać. W obrębie portu obowiązują te same
                    zasady gry, co na pełnym morzu.
                </li>
                <li>
                    <strong>Bicie: </strong>Gracz chcąc zaatakować jednostkę
                    przeciwnika mówi: „ATAKUJĘ” i wykonuje ruch na pole, z
                    którego okręt przeciwnika znajduje się w zasięgu bicia, lub
                    może zaatakować nie wykonując ruchu, jeżeli przeciwnik
                    wszedł sam w zasięg jego bicia. Gracze ujawniają swoje
                    jednostki. Jednostka silniejsza pozostaje na planszy,
                    słabszą zdejmuje się. Jeżeli okaże się, że jednostki są tego
                    samego typu, wówczas obie zdejmuje się z planszy. Zasięg
                    bicia równy jest liczbie pól, którą za jednym ruchem może
                    przejść jednostka.
                </li>
                <li>
                    <strong>Miny: </strong> Minę może postawić tylko trałowiec w
                    dowolnej chwili, na jednym z pól sąsiadujących z zajętym
                    przez trałowiec polem. Postawienie miny nie liczy się za
                    ruch, jednak gracz wykonując ruch trałowcem powinien
                    powiedzieć: „STAWIAM MINĘ”. Postawionej miny nie wolno
                    przesuwać na inne miejsce. Mina może być zdjęta z planszy
                    tylko przez trałowiec przeciwnika, gdy ten wykonując ruch
                    trałowcem zaatakuje pole zajęte przez minę mówiąc: „ZDEJMUJĘ
                    MINĘ”. Jeżeli mina zostanie zaatakowana konwencjonalnie
                    (słowem „ATAKUJĘ”) przez okręt (również przez trałowiec) –
                    to zdejmuje się z planszy zarówno okręt atakujący jak i
                    minę.
                </li>
                <li>
                    <strong>Baterie nabrzeżne: </strong>Przez pola leżące w
                    zasięgu baterii nabrzeżnych okręty przeciwnika nie mogą
                    przechodzić. Bateria może być zniszczona tylko przez okręt
                    rakietowy.
                </li>
                <li>
                    <strong>Wody neutralne: </strong>Na środku planszy znajduje
                    się wyspa neutralna otoczona wodami neutralnymi, które
                    oznaczono czarnymi kropkami. Każdy okręt może schronić się
                    na wody neutralne i pozostać tam na przeciąg trzech
                    kolejnych ruchów danego gracza. Jeżeli w czwartym ruchu nie
                    opuści tych wód zostaje wyeliminowany z gry (ulega
                    internowaniu). Zdjęcie z planszy takiej jednostki nie liczy
                    się za ruch. Jednostka znajdująca się w granicach wód
                    neutralnych nie może być atakowana. Na wodach tych nie wolno
                    też stawiać min.
                </li>
            </ol>
            <img
                src="../images/general/ships-info.png"
                width="800"
                height="438"
                alt=""
                id="tabelka"
            >
                {" "}
            </img>
            <a href="../index.js">
                <div id="powrot">
                    <span>POWRÓT DO STRONY GŁÓWNEJ</span>
                </div>
            </a>
        </div>
    );
}

export default Instruction;
