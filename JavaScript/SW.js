alert("Welkom!");
alert("Je speelt zo als een Jedi die op missie gaat om een Sith lord uit te schakelen en je leerling te bevrijden.");
alert("Druk op 'enter' om te beginnen!");
alert("Type alles letterlijk over als hoe het er staat!")

var vraag = prompt("Voordat we beginnen weet je wat over Star Wars? ja of nee");
if (vraag != "ja") {
    alert("Waarom speel je dit spel dan al begrijp je toch niks van Star Wars");
    alert("Je mag eigenlijk dit spel niet spelen nu! Maar vooruit ik ben in een goede bui!")
}
alert("Je bent op de Republieken landingsbasis, de Sith Lord zit in een 'Stardestroyer' en vliegt door de ruimte heen.");
alert("Je moet snel zijn want de locatie van het schip is vrijgegeven");
alert("Ga snel naar het schip!");
alert("Voordat je gaat moet jij snel een schip kiezen!");

var ship = prompt("Kies uit: X-Wing of  Snowspeeder");

if (ship != "X-Wing") {
    console.log("Snowspeeder");
    alert("Je vliegt naar de Stardestroyer toe")
    alert("Je bent in de atmosfeer uit maar de 'Snowspeeder' kan niet uit de atmosfeer gaan.")
    alert("De 'Snowspeeder' piept en begint te roken naar maten je verder in de ruimte komt")
    alert("Dan ontploft de 'Snowspeeder'")
    document.write("Je bent dood gegaan door de Snowspeeder!")
} else {


    var hoeveelheid = prompt("Hoeveel X-Wing's wil je in je vloot?");

    if (hoeveelheid <= 20) {
        console.log("Hoeveelheid niet genoeg")
        alert("De andere X-Wing's vliegen achter je aan");
        alert("Je bent klaar om aan te vallen!");
        alert("Je valt aan met de andere X-Wing's");
        alert("De Stardestroyer stuurt de Tie Fighters er op uit om de tegenaanval in te zetten");
        alert("Je hebt te weinig mensen in je vloot om ze tegen te houden");
        document.write("Je bent dood!")

    } else if (hoeveelheid >= 20) {
        console.log("Hoeveelheid genoeg")
        alert("De andere X-Wing's vliegen achter je aan");
        alert("Je bent klaar om aan te vallen!");
        alert("Je valt aan met de andere X-Wing's");
        alert("De Stardestroyer stuurt de Tie Fighters er op uit om de tegenaanval in te zetten");

        var help = prompt("Help je of ga je naar regel recht naar het schip? Type: Help of Negeer");

        if (help == "Help") {
            console.log("Help");
            alert("Je bent op weg naar de overwinning om daarna het schip te enteren");
            alert("Alle vijandige schepen zijn uitgeschakeld nu is het tijd om het schip te enteren!");
            alert("Nu je in het schip bent moet je nog uitvinden hoe je bij de Sith Lord komt en je leerling bevrijden.");
            alert("Je hoort dat de Sith Lord omroept dat hij weet dat je de leerling komt halen hij zegt dat hij hem gaat vermoorden, je moet snel zijn!");
            alert("Je ziet twee vijanden val je ze aan of negeer je ze of ga je een andere doorgang zoeken");

            var gang = prompt("Kies uit: aanvallen of negeer");

            if (gang == "aanvallen") {
                console.log("aanvallen");
                alert("Je valt de vijanden aan.");
                alert("Je wilt de vijand net afmaken maar dan roept hij net versterking op");
                alert("De andere vijanden komen er aan");
                alert("snel val aan!");

                var aanval = prompt("Kies ut: Force of Lightsaber");

                if (aanval == "Force") {
                    console.log("Force");
                    alert("Je blaast alle vijanden weg!");
                } else {
                    console.log("Lightsaber");
                    alert("Je slaat de vijanden met de Lightsaber!");
                    alert("Het is je gelukt alleen heeft het veel tijd gekost");
                }

                alert("Je rent verder");
                alert("Je komt aan bij de Sith Lord");
                alert("Je ziet je leerling. Hij leeft! Denk je bij jezelf.");
                alert("Val je de Sith Lord eerst aan of ga je je leerling eerst helpen?");

                var keuze2 = prompt("Kies uit: aanvallen of helpen");

                if (keuze2 == "aanvallen") {
                    alert("Je valt de Sith Lord aan, hij springt over je heen en vermoord je leerling.");
                    alert("Je bent woest!");
                    prompt("Kies uit: Force of Lightsaber");
                    alert("De aanval doet zoveel damage dat hij in één keer dood is");
                    document.write("De Sith Lord is dood, maar je leerling ook! Helaas Probeer het nog eens.");

                } else {
                    alert("Je helpt je leerling en jullie vallen de Sith Lord samen aan");
                    alert("Jullie hebben hem vermoord!");
                    alert("'We hebben het gered' zegt de leerling");
                    document.write("Je hebt je doel bereikt, bedankt voor het spelen!");
                }

                if (aanval == "Lightsaber") {
                    console.log("Lightsaber");
                    alert("De deur gaat open en daar zie je de Sith Lord met het hoofd van je leerling staan in zijn handen");
                    alert("Het heeft te lang geduurd voordat je daar was.");
                    alert("Je bent woest, je valt hem aan!")
                    var aanvalSith = prompt("Kies uit: Force of Lightsaber");

                    if (aanvalSith == "Force") {
                        console.log("Force")
                        alert("De Sith Lord ontwijkt de aanval en slaat jou met zijn Lightsaber.");
                        var aanvalSith2 = prompt("Kies uit: Force of Lightsaber");

                        if (aanvalSith2 == "Force" && aanvalSith == "Force") {
                            console.log("Force")
                            alert("De Sith Lord ontwijkt weer de aanval en slaat jou weer terug met zijn Lightsaber");
                            alert("Hij doet zoveel schade dat je niet meer op kan staan, hij vermoord je daarna.");
                            document.write("Je bent dood gegaan door de Sith Lord");

                        } else {
                            console.log("Lightsaber");
                            alert("Je slaat je Sith Lord met je Lightsaber, het is niet heel effectief");
                            alert("Je realiseert dat je het anders moet aanpakken");
                            alert("Hij slaat jou met zijn Lightsaber, het doet veel pijn");
                            alert("Je doet de Force deze keer werkt het super goed!");
                            alert("De Sith Lord word tegen de muur aan geknalt en is bewusteloos");
                            alert("Je maakt hem dood");
                            document.write("De Sith Lord is dood, maar je leerling ook! Helaas Probeer het nog eens.");
                        }
                    } else if (aanvalSith = "Lightsaber") {
                        console.log("Lightsaber");
                        alert("Je raakt de Sith Lord met je Lightsaber maar het is niet heel effectief.")
                        alert("Je probeert een manier te vinden om de Sith Lord te vermoorden");
                        alert("Boven je hangt een grote luchtschacht die je misschien wel met de Force naar beneden kan trekken en dan op de Sith Lord te gooien.");
                        alert("Je besluit het te proberen, totdat hij jou aanvalt en je op de grond ligt");
                        prompt("Snel type: Force!");
                        alert("De luchtschacht komt naar beneden en land op de Sith Lord hij is dood");
                        document.wrtie("De Sith Lord is dood, maar je leerling ook! Helaas Probeer het nog eens.");
                    }
                }


            } else {
                console.log("negeer")
                alert("Je loopt door de gang opzoek naar je leerling");
                alert("Je ziet dat er versterking is geroepen omdat je op het schip bent beland");
                alert("Boven je is een luchtschacht maar je kan ook proberen de vijanden aan te vallen");

                var luchtschacht = prompt("Kies uit: luchtschacht of aanvallen");

                if (luchtschacht == "luchtschacht") {
                    console.log("luchtschacht");
                    alert("Je besluit door de luchtschacht heen te kruipen");
                    alert("Je voelt de energie van de leerling en je weet ongeveer waar die is.");
                    alert("Gelukkig leeft hij nog");
                    alert("Je ziet een splitsing");

                    var kant = prompt("Kies uit: links of rechts");

                    if (kant == "links") {
                        console.log("links");
                        alert("Je hoort vreemde geluiden");
                        alert("Je kruipt verder door de luchtschacht totdat je opeens door een valluik heen valt");
                        alert("Je komt terecht bij een monster!");
                        document.write("Je bent dood gegaan door het monster!");

                    } else {
                        console.log("rechts");
                        alert("Je bent naar rechts gegaan.");
                        alert("Je ziet dat het naar beneden gaat");

                        alert("Je springt naar beneden");
                        alert("Je voelt dat je leerling steeds dichterbij komt");
                        alert("Je springt op een rooster en je ziet je leerling er doorheen");
                        alert("Je gaat snel door het rooster heen om hem te bevrijden");
                        alert("Je ziet dat de Sith Lord niet aan het opletten is, je kan hem ook aanvallen of je kan eerst je leerling bevrijden.");

                        var dilemma = prompt("kies uit: bevrijden of aanvallen")

                        if (dilemma == "bevrijden") {
                            console.log("bevrijden");
                            alert("Je bevrijd je leerling");
                            alert("Jullie vallen hem samen aan");

                            var gevecht = prompt("Kies uit: Lightsaber of Force");

                            if (gevecht == "Lightsaber") {
                                console.log("Lightsaber");
                                alert("Jullie vallen allebei aan met een Lightsaber");
                                alert("Het is heel effectief.");
                                alert("Het is zelfs zo effectief dat het zo veel damage heeft gedaan dat hij dood is");
                                document.write("Je hebt je doel bereikt bedankt voor het spelen!");

                            } else {
                                console.log("Force");
                                alert("Jullie doen allebei de force tegen de Sith Lord");
                                alert("Het is niet heel effectief");
                                alert("De Sith Lord valt jullie aan, je kan het nog net ontwijken je leerling is geraakt hij ligt bewusteloos op de grond");
                                alert("Je moet het nu in je eentje voor elkaar zien te krijgen");
                                alert("Ga je je leerling helpen of niet")

                                var hulp = prompt("Kies uit: helpen of aanvallen");

                                if (hulp == "helpen") {
                                    console.log("Helpen")
                                    alert("Terwijl je aan het helpen bent komt de Sith Lord in je rug");
                                    document.write("Je bent dood!");

                                } else {
                                    console.log("aanvallen");
                                    alert("Je valt de Sith lord aan!");
                                    alert("Je hebt vermoord!");
                                    alert("Je helpt de leerling overeind");
                                    alert("'We hebben het gered' zegt de leerling");
                                    document.write("Je hebt je doel bereikt, bedankt voor het spelen!");
                                }
                            }

                        } else {
                            console.log("aanvallen");
                            alert("Je valt hem aan! Je wilt net met je Lightsaber aanvallen tot dat...");
                            alert("De Sith Lord draait zich om en schiet je weg met zijn force");
                            alert("Je word tegen de muur aan gegooid je bent half bewusteloos.");
                            alert("Je ziet de Sith Lord op je leerling aflopen en hij vermoord hem");
                            alert("Je bent woest");
                            prompt("Kies uit: Lightsaber of Force");
                            alert("Je valt hem aan met een intense kracht!");
                            alert("Zo hard dat de Sith Lord dood gaat!");
                            document.write("De Sith Lord is dood, maar je leerling ook! Helaas Probeer het nog eens.");
                        }

                    }

                } else {
                    console.log("aanvallen")
                    alert("Je besluit om aan te vallen");

                    var onnodig = prompt("kies uit: Force of Lightsaber");

                    if (onnodig == "Force" || onnodig == "Lightsaber") {
                        console.log("Onnodige aanval je bent hoe dan ook dood")
                        alert("De aanval mislukt omdat er teveel zijn");
                        alert("Je kan ze niet tegen houden");
                        document.write("Je bent dood gegaan door de vijanden!");
                    }

                }
            }

        } else {
            console.log("negeer")
            alert("Je negeert de aanval en gaat regel recht naar het schip");
            alert("Het schip schiet je neer");

            document.write("Je bent dood gegaan door de Stardestroyer!")
        }

    } else {
        console.log("Snowspeeder");
        alert("Je vliegt naar de Stardestroyer toe")
        alert("Je bent in de atmosfeer uit maar de 'Snowspeeder' kan niet uit de atmosfeer gaan.")
        alert("De 'Snowspeeder' piept en begint te roken naar maten je verder in de ruimte komt")
        alert("Dan ontploft de 'Snowspeeder'")
        document.write("Je bent dood gegaan door de Snowspeeder!")
    }

}