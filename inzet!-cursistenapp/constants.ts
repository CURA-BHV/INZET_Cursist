
import { Skill, Question } from './types';

export const SKILLS: Skill[] = [
  { id: '1', name: 'Buik → rug draaien', rewards: ['Samenwerking', 'Tijd'] },
  { id: '2', name: 'Stabiele zijligging', rewards: ['Samenwerking', 'Tijd'] },
  { id: '3', name: 'AED-elektrodes plakken', rewards: ['Kennis', 'Besluitkracht'] },
  { id: '4', name: 'Reanimatie', rewards: ['Tijd', 'Besluitkracht'] },
  { id: '5', name: 'Pleisters plakken', rewards: ['Materiaal', 'Tijd'] },
  { id: '6', name: 'Steunverband aanleggen', rewards: ['Materiaal', 'Samenwerking'] },
  { id: '7', name: 'Dekenrol aanleggen', rewards: ['Materiaal', 'Samenwerking'] },
  { id: '8', name: 'Wond steriel afdekken', rewards: ['Materiaal', 'Tijd'] },
];

export const ALL_QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'Je loopt door de kantine en ziet een collega plotseling in elkaar zakken. Je snelt erheen. Wat zijn de eerste drie stappen die je neemt bij de benadering van dit slachtoffer?',
    options: [
      'Je stelt de veiligheid van jezelf en het slachtoffer vast, controleert het bewustzijn door aan de schouders te schudden en luid aan te spreken, en roept direct om hulp (omstanders).',
      'Je opent de luchtweg met de kinlift, controleert de ademhaling gedurende maximaal 10 seconden en laat direct 112 bellen door een collega.',
      'Je controleert het bewustzijn, belt direct 112 via de luidsprekerfunctie van je telefoon en begint onmiddellijk met 30 borstcompressies.',
      'Je controleert of de omgeving veilig is, legt het slachtoffer in de stabiele zijligging om de luchtweg vrij te houden en zoekt naar een voelbare polsslag in de hals.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q2',
    text: 'Wat is het belangrijkste verschil in de verdere benadering op basis van de ademhaling?',
    options: [
      'Bij een normale ademhaling leg je het slachtoffer in de stabiele zijligging om de luchtweg vrij te houden; zonder normale ademhaling bel je direct 112 en start je de reanimatie.',
      'Bij een normale ademhaling sluit je preventief de AED aan om het hartritme te bewaken; zonder ademhaling start je eerst met 5 beademingen voordat je 112 belt.',
      'Bij een normale ademhaling houd je het slachtoffer op de rug en pas je de kinlift continu toe; zonder ademhaling breng je het slachtoffer eerst naar een harde ondergrond voor borstcompressies.',
      'Bij een normale ademhaling wacht je tot het slachtoffer vanzelf bijkomt voordat je hulp inschakelt; zonder ademhaling start je direct met compressies en beademingen in een ratio van 15:2.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q3',
    text: 'Wat zijn de juiste richtlijnen voor de diepte en het tempo van de borstcompressies bij een volwassene?',
    options: [
      'Een diepte van 5 tot maximaal 6 cm met een tempo van 100 tot 120 borstcompressies per minuut.',
      'Een diepte van minimaal 4 cm met een tempo van precies 100 borstcompressies per minuut.',
      'Een diepte van 6 tot 7 cm met een tempo van minimaal 130 borstcompressies per minuut.',
      'Een diepte die afhankelijk is van de lichaamsbouw met een tempo dat gelijkloopt aan je eigen hartslag.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q4',
    text: 'In welke situatie kies je voor de stabiele zijligging?',
    options: [
      'Bij een slachtoffer dat niet ademt en waarbij je wacht op de AED.',
      'Bij een slachtoffer met een vermoeden van een actieve inwendige bloeding in de buik.',
      'Bij een slachtoffer dat bij bewustzijn is maar klaagt over hevige rugpijn.',
      'Bij een bewusteloos slachtoffer dat een normale ademhaling heeft.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q5',
    text: 'Hoe controleer je de ademhaling volgens de \'kijk, luister en voel\'-methode en hoe lang mag deze controle maximaal duren?',
    options: [
      'Je controleert de ademhaling door je hand op de borstkas te leggen en gedurende minimaal 30 seconden te luisteren of er sprake is van een regelmatige cyclus.',
      'Je kijkt 5 seconden naar de beweging van de borstkas terwijl je tegelijkertijd de polsslag in de hals controleert voor een volledige check van de vitale functies.',
      'Je kijkt naar de beweging van de borstkas, luistert bij de mond en voelt met je wang of er luchtstroom is gedurende maximaal 10 seconden.',
      'Je observeert de beweging van de buik en luistert 20 seconden bij de mond of er sprake is van een snurkende of reutelende ademhaling (gasping).'
    ],
    correctIndex: 2,
  },
  {
    id: 'q6',
    text: 'Wat is de primaire functie van de AED tijdens een reanimatie?',
    options: [
      'Het apparaat geeft een elektrische schok om een chaotisch hartritme te stoppen, zodat het hart weer normaal kan gaan kloppen.',
      'Het apparaat neemt de functie van de borstcompressies en de beademing volledig over.',
      'Het apparaat dient als een monitor die alleen de hartslag registreert voor de ambulancebroeders.',
      'Het apparaat pompt mechanisch bloed door het lichaam via de opgeplakte elektroden.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q7',
    text: 'Wat is de definitie van een \'shock\' in medische termen?',
    options: [
      'Een kortstondige psychische reactie op een schokkende gebeurtenis of ongeval.',
      'Een plotselinge daling van de hartslag door een emotionele blokkade.',
      'Een ander woord voor een flauwte die ontstaat door een te lage bloedsuikerspiegel.',
      'Een levensbedreigende toestand waarbij de doorstroming van bloed naar de vitale organen onvoldoende is.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q8',
    text: 'Welke drie uiterlijke kenmerken horen bij een beginnende shock?',
    options: [
      'Een rode huid, een zeer trage ademhaling en een sterke pols.',
      'Hoge koorts, praten in wartaal en een droge, warme huid.',
      'Een bleke of grauwe huid, koude klamme huid (zweet) en een snelle, zwakke pols.',
      'Gezwollen pupillen, hevige hoofdpijn en blauwe plekken over het hele lichaam.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q9',
    text: 'Waarom mag je een slachtoffer in shock nooit iets te drinken geven?',
    options: [
      'Vanwege het grote risico op braken en verslikken, en omdat het slachtoffer mogelijk geopereerd moet worden.',
      'Omdat vloeistof de bloeddruk te snel laat stijgen, wat gevaarlijk is voor het hart.',
      'Omdat de nieren tijdens een shock geen water kunnen verwerken en de blaas dan kan scheuren.',
      'Omdat drinken de effectiviteit van de pijnstillers die de ambulance geeft vermindert.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q10',
    text: 'Wat is het belangrijkste verschil in de oorzaak tussen Angina Pectoris en een hartinfarct?',
    options: [
      'Angina Pectoris is een ontsteking van de hartspier, terwijl een infarct een gesprongen blovat is.',
      'Angina Pectoris ontstaat door stress, terwijl een hartinfarct alleen door ouderdom komt.',
      'Er is geen verschil in oorzaak; het verschil zit enkel in de duur van de pijn.',
      'Bij Angina Pectoris is er een tijdelijk zuurstoftekort; bij een infarct is een kransslagader volledig afgesloten.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q11',
    text: 'Welke atypische symptomen van een hartinfarct zie je vaker bij vrouwen dan bij mannen?',
    options: [
      'Alleen een hevige, drukkende pijn op het borstbeen die uitstraalt naar de linkerarm.',
      'Een onbedwingbare drang om te bewegen en een zeer rode gelaatskleur.',
      'Pijn in de bovenbuik, misselijkheid, extreme vermoeidheid of pijn tussen de schouderbladen.',
      'Plotselinge doofheid aan één oor en een branderig gevoel in de voetzolen.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q12',
    text: 'Wat gebeurt er met de bloedsuikerspiegel bij een \'hypo\' en wat is een kenmerkend symptoom?',
    options: [
      'De bloedsuikerspiegel is te laag; het slachtoffer kan last krijgen van trillen, zweten en een wisselend humeur.',
      'De bloedsuikerspiegel is te hoog; het slachtoffer heeft een adem die naar aceton ruikt.',
      'De bloedsuikerspiegel is stabiel, maar het insulinegehalte in het bloed is plotseling verdwenen.',
      'De bloedsuikerspiegel stijgt zeer snel, waardoor het slachtoffer enorme dorst krijgt.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q13',
    text: 'Wat is een \'hyper\' en welke actie is hier op de lange termijn meestal voor nodig?',
    options: [
      'Een te lage suikerspiegel door te veel lichaamsbeweging; suiker eten is de oplossing.',
      'Een toestand van extreme vrolijkheid door een teveel aan cafeïne op de werkvloer.',
      'Een bloeddruk die te hoog is door het eten van te veel zout.',
      'Een te hoge suikerspiegel; dit vereist vaak medische tussenkomst of toediening van insuline.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q14',
    text: 'Waarom is het protocol om bij twijfel tussen een hypo en een hyper áltijd suiker aan te bieden?',
    options: [
      'Omdat suiker ook helpt om een te hoge suikerspiegel (hyper) omlaag te brengen.',
      'Omdat het slachtoffer door de suiker sneller weer aanspreekbaar wordt, ongeacht de oorzaak.',
      'Omdat een hypo op korte termijn veel gevaarlijker is; suiker geven kan dan levensreddend zijn.',
      'Omdat suiker de bloeddruk stabiliseert bij alle soorten interne noodsituaties.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q15',
    text: 'Wat is het belangrijkste verschil tussen een open en een gesloten botbreuk qua risico?',
    options: [
      'Een gesloten breuk is gevaarlijker omdat de druk binnenin het lichaam nergens heen kan.',
      'Bij een open breuk geneest het bot altijd sneller omdat er zuurstof bij komt.',
      'Er is geen verschil in risico; alleen de manier van verbinden verschilt.',
      'Een open breuk heeft een veel groter risico op ernstige infecties en uitwendig bloedverlies.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q16',
    text: 'Waarom is het immobiliseren van een ledemaat belangrijk bij een vermoedelijke breuk?',
    options: [
      'Zodat de BHV\'er kan bewijzen dat hij het slachtoffer goed heeft geholpen.',
      'Om de bloedtoevoer naar het ledemaat volledig af te sluiten totdat de arts er is.',
      'Om verdere schade aan bloedvaten, zenuwen en weefsel te voorkomen en pijn te verminderen.',
      'Omdat het bot anders binnen enkele minuten weer aan elkaar kan groeien in een verkeerde stand.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q17',
    text: 'Hoe kun je een verstuiking onderscheiden van een botbreuk op basis van de stand van het gewricht?',
    options: [
      'Bij een botbreuk is er vaak een abnormale stand of verkorting; bij een verstuiking meestal niet.',
      'Bij een verstuiking staat het gewricht altijd in een abnormale hoek; bij een breuk niet.',
      'Een verstuiving is altijd blauw van kleur, terwijl een botbreuk altijd wit ziet.',
      'Er is op basis van de stand van het gewricht nooit een onderscheid te maken tussen een breuk en een verstuiking.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q18',
    text: 'Wat moet je absoluut niet doen als er een vuiltje in het oog zit?',
    options: [
      'Knipperen met de ogen.',
      'Het oog spoelen met lauw stromend water.',
      'Het slachtoffer vragen naar de grond te kijken.',
      'In het oog wrijven, omdat dit het hoornvlies kan beschadigen.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q19',
    text: 'Wat is de juiste procedure voor het spoelen van een oog waar een bijtende vloeistof in is gekomen?',
    options: [
      'Het oog 2 minuten lang heel krachtig spoelen met een brandslanghaspel.',
      'Spoelen met een neutraliserende vloeistof zoals melk of vruchtensap.',
      'Minimaal 15 tot 20 minuten spoelen met lauw water, van de neus af naar de buitenkant.',
      'Alleen spoelen als het slachtoffer aangeeft dat de pijn onhoudbaar wordt.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q20',
    text: 'Hoe handel je wanneer er een splinter of voorwerp in de oogbol zelf vastzit?',
    options: [
      'Je dekt beide ogen af (om oogbeweging te voorkomen) en zorgt dat het slachtoffer direct naar een arts gaat.',
      'Je probeert het voorwerp voorzichtig te verwijderen met een steriel pincet.',
      'Je laat het slachtoffer hard in het oog wrijven om het voorwerp los te krijgen.',
      'Je spoelt het oog minimaal een uur lang onder een harde kraan.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q21',
    text: 'Waarom mag je een vreemd voorwerp dat diep in een wond zit nooit zelf verwijderen?',
    options: [
      'Omdat je dan verantwoordelijk bent voor de schade aan het voorwerp zelf.',
      'Omdat de wond dan te snel aan de lucht wordt blootgesteld.',
      'Omdat het voorwerp de bloeding deels kan stelpen; verwijdering kan een hevige bloeding veroorzaken.',
      'Omdat het voorwerp in het ziekenhuis als bewijsmateriaal moet dienen.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q22',
    text: 'Hoe stabiliseer je een groot vreemd voorwerp in een wond tijdens het afdekken?',
    options: [
      'Door er een strak drukverband direct bovenop het voorwerp aan te leggen.',
      'Door de ruimte rondom het voorwerp op te vullen met gazen of rollen verband voor stabiliteit.',
      'Door het voorwerp met plakband vastzet aan de kleding van het slachtoffer.',
      'Door het voorwerp met een draaiende beweging dieper in de wond te duwen voor stevigheid.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q23',
    text: 'Op welke signalen let je om te controleren of een verband niet te strak zit?',
    options: [
      'Of het slachtoffer nog steeds pijn voelt in de buurt van de wond.',
      'Of het verband na 10 minuten nog steeds op dezelfde plek zit.',
      'Of de vingers of tenen onder het verband blauw worden, koud aanvoelen of gaan tintelen.',
      'Of er bloed door het verband heen begint te lekken.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q24',
    text: 'Wat is de functie van een wonddrukverband en in welke specifieke situatie pas je dit toe?',
    options: [
      'Het fixeren van een gewricht bij een vermoedelijke verstuiking of kneuzing om de zwelling te minimaliseren.',
      'Het steriel afdekken en beschermen van een gedeeltelijke brandwond tegen infectiegevaar en warmteverlies.',
      'Het stabiliseren van een groot vreemd voorwerp in een wond, zonder direct op het voorwerp zelf te drukken.',
      'Het uitoefenen van mechanische druk op een ernstige, actieve bloeding om het bloedverlies te stelpen.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q25',
    text: 'Wat is de functie van een nevenindicator in een gebouw?',
    options: [
      'Het aangeven van de actuele temperatuur in de gangen.',
      'Het aangeven hoeveel mensen er nog in een compartiment aanwezig zijn.',
      'Het dienen als noodverlichting als de stroom in het gebouw uitvalt.',
      'Het visueel zichtbaar maken dat een melder in een afgesloten ruimte is geactiveerd.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q26',
    text: 'Wat is de belangrijkste rol van de BHV\'er bij het nevenpaneel van de brandmeldcentrale (BMC)?',
    options: [
      'Het paneel zelf repareren als er een storing wordt aangegeven.',
      'Snel aflezen in welke zone of ruimte de brandmelding is ontstaan om op onderzoek uit te gaan.',
      'De code van de BMC wijzigen zodat onbevoegden er niet bij kunnen.',
      'De centrale direct resetten zodra het alarm afgaat om de rust te bewaren.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q27',
    text: 'Wat is het verschil tussen een optische rookmelder en een thermische melder?',
    options: [
      'Een optische melder reageert op rookdeeltjes, een thermische melder op een snelle temperatuurstijging.',
      'Een optische melder reageert op licht, een thermische melder op geluid.',
      'Een optische melder werkt alleen overdag, een thermische melder alleen \'s nachts.',
      'Er is geen verschil; ze worden beide in elke ruimte van het gebouw geplaatst.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q28',
    text: 'Hoe treedt een sprinklerinstallatie in werking?',
    options: [
      'Door de detectie van rook door een centrale computer.',
      'Door het indrukken van een willekeurige handbrandmelder in het gebouw.',
      'Door een timer die elke avond om 18:00 uur de installatie test.',
      'Door hitte die een glazen buisje laat knappen of een smeltzekering doet smelten in de kop.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q29',
    text: 'Wat is het doel van brandcompartimentering in een gebouw?',
    options: [
      'De brand en rook beperken tot één gebied, zodat mensen veilig kunnen vluchten.',
      'Zorgen dat het gebouw er van binnen georganiseerd uitziet voor bezoekers.',
      'Het verlagen van de kosten voor de opstalverzekering van het pand.',
      'Zorgen dat er in elke kamer een aparte BHV\'er aanwezig moet zijn.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q30',
    text: 'Wat is de eerste actie die je onderneemt nadat je de veiligheid hebt gecontroleerd en hebt vastgesteld dat een slachtoffer niet reageert?',
    options: [
      'Direct beginnen met 30 borstcompressies.',
      'De luchtweg vrijmaken door de kinlift.',
      'Om hulp roepen en direct 112 (laten) bellen.',
      'De ademhaling controleren gedurende 1 minuut.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q31',
    text: 'Welke handeling voert de BHV\'er uit direct vóórdat de ademhaling gecontroleerd wordt?',
    options: [
      'De borstkas ontbloten.',
      'De stabiele zijligging toepassen.',
      'De luchtweg vrijmaken (kinlift).',
      'De buik van het slachtoffer masseren.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q32',
    text: 'Je hebt 112 gebeld en een AED laten halen. Wat doe je terwijl je op de AED wacht?',
    options: [
      'Je brengt het slachtoffer in de stabiele zijligging.',
      'Je voert ononderbroken reanimatie uit (30 borstcompressies, 2 beademingen).',
      'Je controleert elke minuut of de ademhaling weer spontaan begint.',
      'Je probeert de luchtweg vrij te maken met water.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q33',
    text: 'Wat doe je als de AED aangeeft: \'Geen schok geadviseerd\'?',
    options: [
      'Je stopt met alle hulpverlening en wacht op de ambulance.',
      'Je start direct weer met de borstcompressies en beademingen.',
      'Je zet de AED uit en controleert de ademhaling opnieuw.',
      'Je verwijdert de elektroden van de borstkas.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q34',
    text: 'Waarom moet je bij de stabiele zijligging de ademhaling blijven controleren?',
    options: [
      'Omdat een bewusteloos slachtoffer alsnog een circulatiestilstand kan krijgen.',
      'Om te zien of het slachtoffer alweer wakker wordt.',
      'Omdat de ambulancebroeders willen weten hoe vaak het slachtoffer ademt.',
      'Om te voorkomen dat het slachtoffer te diep in slaap valt.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q35',
    text: 'Welke houding is het meest geschikt voor een slachtoffer dat tekenen van shock vertoont, maar nog wel bij bewustzijn is?',
    options: [
      'De stabiele zijligging.',
      'Plat op de rug laten liggen en rust laten houden.',
      'Voorovergebogen laten zitten met het hoofd tussen de knieën.',
      'Rechtop laten staan om de bloeddruk te verhogen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q36',
    text: 'Wat is een kenmerkend gedrag van een slachtoffer in shock?',
    options: [
      'Extreme vrolijkheid en veel praten.',
      'Rusteloosheid, angst en soms agressie door zuurstofgebrek in de hersenen.',
      'Diepe slaap waaruit het slachtoffer makkelijk wakker te schudden is.',
      'Een constante honger naar suikerhoudende producten.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q37',
    text: 'Je ziet iemand zweten, bleek zien en hoort hem klagen over een \'strakke band\' om de borst. Waar denk je aan?',
    options: [
      'Een hypo (lage bloedsuiker).',
      'Shock door inwendig letsel.',
      'Hartklachten (bijv. Angina Pectoris of hartinfarct).',
      'Een zonnesteek.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q38',
    text: 'Wat is het belangrijkste kenmerk van een open botbreuk?',
    options: [
      'Er is altijd een botstuk zichtbaar dat naar buiten steekt.',
      'Er is een verbinding tussen de breukplaats en de buitenlucht (wond).',
      'Het slachtoffer kan het ledemaat nog volledig bewegen.',
      'De breuk zit altijd in een gewricht zoals de knie of elleboog.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q39',
    text: 'Er zit een splinter in het witte gedeelte van het oog van een collega. Wat doe je?',
    options: [
      'Je verwijdert de splinter voorzichtig met een pincet.',
      'Je probeert de splinter weg te vegen met een gaasje',
      'Je blijft eraf, dekt het oog af en verwijst door naar een arts.',
      'Je vraagt de collega om hard in het oog te wrijven.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q40',
    text: 'Waarom moet je bij ernstig oogletsel vaak beide ogen afdekken?',
    options: [
      'Om te voorkomen dat het slachtoffer schrikt van de omgeving.',
      'Omdat de ogen samenwerken; als het gezonde oog beweegt, beweegt het gewonde oog mee.',
      'Om te zorgen dat het slachtoffer niet kan zien hoe erg het letsel is.',
      'Dat is een verouderde richtlijn en wordt niet meer gedaan.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q41',
    text: 'Wat is de minimale spoeltijd bij een chemische verbranding (bijtende stof) in het oog?',
    options: [
      '30 seconden.',
      '5 minuten.',
      '15 tot 20 minuten (of tot de ambulance er is).',
      'Een uur, maar alleen met gedestilleerd water.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q42',
    text: 'Waarom mag je de zijde van een wondgaasje dat op de wond komt niet aanraken met je vingers?',
    options: [
      'Omdat het gaasje dan aan je vingers blijft plakken.',
      'Om besmetting van de wond met bacteriën vanaf je handen te voorkomen.',
      'Omdat het vet op je vingers de absorberende werking van het gaasje stopt.',
      'Omdat je vingers anders gewond kunnen raken door het gaas.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q43',
    text: 'Een slachtoffer heeft een grote wond aan het bovenbeen die hard bloedt. Je hebt geen wonddrukverband bij de hand. Wat doe je?',
    options: [
      'Je drukt met je handen of een schoon doekje direct krachtig op de wond.',
      'Je rent weg om een verbanddoos te zoeken en laat het slachtoffer alleen.',
      'Je legt een knoop in het been om de bloedtoevoer te stoppen.',
      'Je giet alcohol over de wond om het bloeden te stelpen.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q44',
    text: 'Wat is het doel van een rookmelder (optisch)?',
    options: [
      'Het blussen van de brand in een vroeg stadium.',
      'Het detecteren van rookdeeltjes en het doorgeven van een alarm aan de BMC.',
      'Het automatisch openen van alle ramen in het gebouw.',
      'Het meten van de hoeveelheid zuurstof in de lucht.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q45',
    text: 'In welke ruimte tref je vaak een thermische melder aan in plaats van een optische rookmelder?',
    options: [
      'In een kantoortuin.',
      'In een archiefruimte.',
      'In een grootkeuken of werkplaats waar veel stof/damp vrijkomt.',
      'In de gangen van het trappenhuis.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q46',
    text: 'Wat is de functie van een sprinklerkop?',
    options: [
      'De brand ontdekken en direct de brandweer bellen.',
      'De brand beheersen of blussen door water te sproeien bij een bepaalde temperatuur.',
      'Rook uit de ruimte zuigen.',
      'Het gebouw koelen tijdens een warme zomerdag.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q47',
    text: 'Waarom zijn nooduitgangen altijd voorzien van een groen vluchtwegbordje met verlichting?',
    options: [
      'Zodat de elektriciteitsrekening van het bedrijf lager is.',
      'Zodat de vluchtweg ook bij rook of stroomuitval goed vindbaar blijft.',
      'Omdat groen de favoriete kleur is van de brandweer.',
      'Om aan te geven dat het gebouw duurzaam is.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q48',
    text: 'Je bent alleen en treft een volwassen slachtoffer aan met een circulatiestilstand. Wanneer mag je de reanimatie tijdelijk onderbreken?',
    options: [
      'Alleen om de AED aan te sluiten en het hartritme te laten analyseren door het apparaat.',
      'Elke twee minuten om te controleren of de ademhaling weer spontaan is teruggekeerd.',
      'Zodra je merkt dat je zelf vermoeid raakt en je hartslag boven de 120 slagen per minuut komt.',
      'Om het slachtoffer naar een andere ruimte te verplaatsen waar meer licht en ruimte is voor hulpverlening.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q49',
    text: 'Wat is de juiste handelwijze als de AED een schok adviseert?',
    options: [
      'Je houdt de hand van het slachtoffer vast om hem gerust te stellen tijdens de schok.',
      'Je zorgt dat de borstcompressies doorgaan totdat de schok daadwerkelijk wordt toegediend.',
      'Je roept luid \'iedereen afstand\', controleert visueel of niemand het slachtoffer aanraakt en drukt op de schokknop.',
      'Je verwijdert eerst de beademingsmaskers en zuurstofflessen voordat je de schok toedient.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q50',
    text: 'Waarom is het \'volledig omhoog laten komen\' van de borstkas na elke compressie belangrijk?',
    options: [
      'Om te voorkomen dat de ribben van het slachtoffer breken door te veel opgebouwde spanning.',
      'Om het hart de kans te geven zich weer volledig met bloed te vullen voor de volgende compressie.',
      'Om de lucht uit de longen te persen zodat de beademing daarna makkelijker gaat.',
      'Zodat de AED-elektroden niet loslaten door de voortdurende beweging van de borstkas.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q51',
    text: 'Hoe herken je een \'gasping\' ademhaling en wat is de juiste actie?',
    options: [
      'Het is een snelle, oppervlakkige ademhaling die hoort bij hyperventilatie; je laat het slachtoffer in een zakje ademen.',
      'Het is een snurkende, onregelmatige ademhaling vlak na een circulatiestilstand; je behandelt dit als \'geen ademhaling\' en start reanimatie.',
      'Het is een zeer diepe ademhaling met een acetonlucht; dit wijst op een hyper en je dient direct suiker toe.',
      'Het is een fluitende ademhaling door een vernauwde luchtpijp; je past direct de Heimlich-greep toe.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q52',
    text: 'Wat is het grootste gevaar bij een slachtoffer met een zeer lage bloedsuikerspiegel (hypo) dat suf wordt?',
    options: [
      'Dat het slachtoffer agressief wordt naar omstanders en de BHV-inzet belemmert.',
      'Dat het slachtoffer door het trillen een botbreuk oploopt aan de ledematen.',
      'Dat het bewustzijn daalt waardoor de luchtweg geblokkeerd raakt of het slachtoffer stikt in aangeboden eten/drinken.',
      'Dat de lichaamstemperatuur gevaarlijk stijgt door de verhoogde adrenalineproductie.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q53',
    text: 'Wat is de correcte manier om een slachtoffer met een vermoedelijke enkelbreuk te verplaatsen als de situatie ter plaatse veilig is?',
    options: [
      'Je ondersteunt het slachtoffer en laat hem voorzichtig op de aangedane enkel naar de EHBO-post hinken.',
      'Je tilt het slachtoffer direct op in de \'brandweergreep\' om het gewricht volledig te ontlasten.',
      'Je verplaatst het slachtoffer niet en wacht op professionele hulp, tenzij er direct gevaar is door brand of instorting.',
      'Je laat het slachtoffer over de grond kruipen om de druk op de wervelkolom te minimaliseren.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q54',
    text: 'Welk symptoom wijst bij oogletsel op een spoedsituatie die direct door een oogarts beoordeeld moet worden?',
    options: [
      'Een verminderd gezichtsvermogen, het zien van zwarte vlekken of een vervormde pupil.',
      'Een lichte irritatie aan het ooglid door stof in de lucht.',
      'Het vloeien van normale tranen na het knipperen met de ogen.',
      'Een tijdelijke verblinding door een felle zaklamp van een collega.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q55',
    text: 'Je ziet dat het bloed door een aangelegd wonddrukverband heen blijft sijpelen. Wat is de juiste actie?',
    options: [
      'Je verwijdert het eerste verband en begint opnieuw met een strakkere knoop.',
      'Je legt een tweede wonddrukverband direct over het eerste verband aan en verhoogt de druk.',
      'Je stopt met verbinden en laat de wond aan de buitenlucht drogen zodat er een korst ontstaat.',
      'Je giet heet water over het verband om de bloedstolling te activeren.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q56',
    text: 'Wat is een nadeel van het gebruik van een CO2-blusser in een kleine, afgesloten ruimte?',
    options: [
      'De blusstof laat een hardnekkige laag poeder achter die alle elektronica vernielt.',
      'De CO2 verdrijft zuurstof, waardoor er verstikkingsgevaar voor de BHV\'er ontstaat.',
      'Het blusgas is zo heet dat het de muren van de ruimte kan doen smelten.',
      'De CO2-blusser werkt alleen op branden van vloeistoffen in de buitenlucht.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q57',
    text: 'Waarom is een \'verzamelplaats\' buiten het gebouw essentieel bij een ontruiming?',
    options: [
      'Zodat medewerkers daar kunnen wachten op instructies voor de rest van de werkdag.',
      'Om aan de hand van presentielijsten te controleren of er nog mensen in het brandende gebouw achtergebleven zijn.',
      'Omdat de brandweer daar de namen van alle BHV\'ers wil noteren voor het logboek.',
      'Om te voorkomen dat mensen naar huis gaan voordat de brand is geblust.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q58',
    text: 'Wat is het grootste gevaar van rookontwikkeling bij een brand in een modern kantoorpand met veel kunststoffen?',
    options: [
      'De rook belemmert alleen het zicht, waardoor mensen de uitgang niet kunnen vinden.',
      'De rook bevat giftige gassen zoals koolmonoxide en blauwzuurgas, die al na enkele inademingen fataal kunnen zijn.',
      'De rook zorgt ervoor dat de temperatuur in de gangen daalt tot onder het vriespunt.',
      'De rookdeeltjes kunnen de werking van de zaklampen van de BHV\'ers uitschakelen.'
    ],
    correctIndex: 1,
  },
];
