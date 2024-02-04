const slowka = document.querySelector("#slowka");
const cwiczenia = document.querySelector("#cwiczenia");
const test = document.querySelector("#test");
const slownictwo = document.querySelector("#slownictwo");
const problematyczne = document.querySelector("#problematyczne");
const trudne = document.querySelector("#trudne");
const pole = document.querySelector("#pole");
const wyswietlacz = document.querySelector("#wyswietlacz");
const informacja = document.querySelector("#informacja");
const slowo = document.querySelector("#slowo");
const pozostalo = document.querySelector("#pozostalo");
const wpisano = document.querySelector("#wpisano");
const blok = document.querySelector("#blok");
const sprawdzian = document.querySelector("#sprawdzian");

/*
let angielskie = ['address', 'email', 'postal', 'age', 'birth', 'date of birth', 'place of birth', 'citizen', 'divorced', 'family name', 'female', 'first name', 'ID', 'ID number', 'male', 'marital status', 'married', 'mobile phone number', 'nationality', 'occupation', 'passport number', 'sex', 'single', 'surname', 'widow', 'widower', 'adolescent', 'adult', 'age group', 'at the age of', 'baby', 'child', 'childhood', 'dead', 'death', 'elderly', 'generation', 'grow older', 'grow up', 'grown-up', 'in his early twenties', 'in his late thirties', 'in his mid-fifties', 'infant', 'kid', 'middle age', 'middle-aged', 'old age', 'over twenty', 'teenager', 'young', 'youth', 'attractive', 'beautiful', 'good-looking', 'plain', 'pretty', 'foot', 'inch', 'of medium height', 'short', 'tall', 'athletic build', 'broad shoulders', 'overweight', 'plump', 'skinny', 'slim', 'thin', 'well-built', 'beard', 'cheek', 'pale cheeks', 'chin', 'complexion', 'rosy complexion', 'tanned complexion', 'dark circles under your eyes', 'eyebrow', 'eyelash', 'forehead', 'freckles', 'lip', 'full lips', 'lower lip', 'top lip', 'lovely smile', 'moustache', 'mouth', 'tongue', 'tooth', 'teeth', 'wrinkles', 'bald', 'curly', 'dyed', 'fair', 'fringe', 'go bald', 'grey', 'ponytail', 'shiny', 'short', 'shoulder-lenght', 'spiky', 'straight', 'waist-length', 'wavy', 'white', 'look', 'looks', 'put on weight', 'tattoo', 'blouse', 'bra', 'button', 'coat', 'dress', 'dress code', 'fleece', 'hood', 'jacket', 'jeans', 'jumper', 'label'
,'outfit', 'pocket', 'pyjamas', 'shirt' ,'skirt', 'sleeve', 'sock', 'suit', 'sweater', 'sweatshirt', 'tie', 'tights', 'tracksuit', 'bottoms', 'trousers', 'underpants', 'underwear', 'uniform', 'zip', 'baseball cap', 'belt', 'boots', 'snow boots', 'bracelet', 'briefcase', 'earrings', 'flat shoes', 'glasses', 'gloves', 'handbag', 'hat','high heels', 'jewellery', 'necklace', 'piercing', 'sandals', 'scarf', 'sunglasses', 'prescription sunglasses', 'trainers',
'casual', 'checked', 'comfortable', 'uncomfortable', 'cotton', 'denim', 'designer', 'elegant', 'fashionable', 'unfashionable', 'floral', 'formal', 'informal', 'good quality', 'in good condition', 'khaki', 'leather', 'loose', 'old-fashioned', 'patterned', 'poor quality', 'second-hand', 'smart', 'silk', 'straight leg', 'stunning', 'tight', 'trendy', 'ugly', 'warm', 'dress', 'dress up as sb', 'fit', 'get a haircut', 'get changed', 'get dressed', 'iron a shirt', 'match', 'polish shoes', 'put on', 'put on make up', 'suit', 'take off', 'try on', 'wear', 'aggressive', 'ambitious', 'arrogant', 'artistic', 'bossy',
'brave', 'bright', 'calm', 'careful', 'careless', 'caring', 'cheerful', 'clever', 'cold', 'confident', 'cruel', 'disciplined', 'dull', 'easy-going', 'friendly', 'unfriendly', 'funny', 'generous', 'gentle', 'hard-working', 'helpful', 'honest', 'impatient', 'independent', 'insecure', 'intelligent', 'kind', 'unkind', 'kind-hearted', 'lazy', 'lively', 'loyal', 'disloyal', 'mean', 'messy', 'modest', 'nasty', 'neat', 'ordinary', 'outgoing', 'peaceful', 'polite', 'impolite', 'quiet', 'relaxed', 'reliable', 'responsible', 'irresponsible', 'rude', 'selfish',
'sensible', 'sensitive', 'insensitive', 'serious', 'shallow', 'shy', 'sociable', 'unsociable', 'stubborn', 'talkative', 'tolerant', 'intolerant', 'untidy', 'violent', 'wise', 'annoyed', 'annoying', 'bored', 'boring', 'depressed', 'depressing', 'disappointed', 'disappointing', 'embarrassed', 'embarrassing', 'excited', 'exciting', 'frightened', 'frightening', 'frustrated', 'frustrating', 'moved', 'moving', 'pleased', 'puzzled', 'stressed out', 'stressful', 'surprised', 'surprising', 'worried', 'worrying', 'be angry with sb', 'be in a bad mood', 'be in a good mood', 'be nervous about sth', 'be fed up with sb', 'change your mind', 'cheer up', 'feel like sth', 'have a bad day',
'have a good sense of humour', 'lose your temper', 'make up your mind', 'worry about sth', 'able to', 'unable to', 'adore', 'be an expert on sth', 'be bad at sth', 'be terrible at sth', 'be crazy about sth', 'be fond of sb', 'be good at sth', 'be interested in sth', 'be into sth', 'be keen on sth', "can't stand sb", 'come naturally to sb', 'competent', 'dislike', 'enjoy', 'gifted', 'skill', 'skilled', 'talented', 'belief', 'betray', 'change your mind', 'courage', 'faith', 'friendship', 'honesty', 'ideal', 'loyalty', 'moral standards', 'realise', 'self-respect', 'tolerance', 'treat sb the same way', 'truth', 'value system', 'wellness', 'have a positive impact', 'look down on sb', 'look up to sb', 'mentor', 'role model', 'respect', 'set an example'
]*/
/*
let polskie = ['adres', 'adres email', 'adres pocztowy', 'wiek', 'narodziny', 'data urodzenia', 'miejsce urodzenia', 'obywatel', 'rozwiedziony', 'nazwisko (na f)', 'kobieta/żeński', 'imię', 'dokument tożsamości', 'numer dokumentu tożsamości', 'mężczyzna/męski', 'stan cywilny', 'żonaty;zamężna', 'numer telefonu komurkowego', 'narodowość', 'zawód', 'numer paszportu', 'płeć', 'stanu wolnego', 'nazwisko', 'wdowa', 'wdowiec',
'osoba w wieku dojrzewania', 'dorosły', 'grupa wiekowa', 'w wieku', 'niemowlę', 'dziecko', 'dzieciństwo', 'martwy', 'śmierć', 'w starszym wieku', 'pokolenie', 'starzeć się', 'dorastać', 'osoba dorosła', 'po dwudziestce (in)', 'przed czterdziestką', 'w wieku około pięćdziesięciu pięciu lat', 'małe dziecko', 'dzieciek', 'wiek średni', 'w średnim wieku', 'starość', 'po dwudziestce', 'nastolatek', 'młody', 'młodość', 'atrakcyjny', 'piękny', 'przystojny', 'przeciętny', 'ładny', 'stopa/m', 'cal', 'średniego wzrostu', 'niski', 'wysoki', 'sportowa sylwetka', 'szerokie ramiona', 'z nadwagą', 'puszysty', 'bardzo chudy', 'szczuply', 'chudy', 'dobrze zbudowany', 'broda', 'policzek', 'blade policzki', 'podbródek', 'cera', 'rumiana cera', 'opalona cera', 'podkrążone oczy', 'brew', 'rzęsa', 'czoło', 'piegi', 'warga', 'pełne usta', 'dolna warga', 'górna warga', 'uroczy uśmiech', 'wąsy', 'usta', 'język', 'ząb', 'zęby', 'zmarszczki', 'łysy', 'kręcone ', 'farbowane', 'jasne', 'grzywka', 'łysieć', 'siwa', 'kucyk', 'lśniące', 'krótkie', 'do ramion', 'sterczące', 'proste', 'do pasa', 'faliste', 'siwe', 'wyglądać', 'wygląd', 'przybierać na wadzę', 'tatuaż', 'bluzka', 'stanik', 'guzik', 'płaszcz', 'sukienka', 'zasady dotyczące ubioru', 'polar', 'kaputr', 'marynarka', 'dżinsy', 'sweter (j)', 'metka',
'strój', 'kieszeń', 'piżama', 'koszula', 'spódnica', 'rękaw', 'skarpetka', 'garnitur', 'sweter', 'bluza', 'krawat', 'rajstopy', 'dres', 'spodnie od dresu', 'spodnie', 'slipy', 'bielizna', 'mundur', 'zamek błyskawiczny', 'czapka z daszkiem', 'pasek', 'wysokie buty', 'śniegowce', 'bransoletka', 'teczka', 'kolczyki', 'buty na płaskim obcasie', 'okulary', 'rękawiczki', 'torebka', 'czapka', 'buty na wysokim obcasie', 'biżuteria', 'naszyjnik', 'kolczyk', 'sandały', 'szalik', 'okulary przeciwsłoneczne', 'korygujące okulary przeciwsłoneczne', "buty sportowe",
'nieformalny', 'w kratkę', 'wygodny', 'niwygodny', 'bawełniany', 'dżinsowy', 'markowy', 'elegancki', 'modny (f)', 'niemodny', 'kwiecisty', 'formalny', 'nieformalny', 'dobrej jakości', 'w dobrym stanie', 'w kolorze khaki', 'skórzany', 'luźny', 'staromodny', 'wzorzysty', 'złej jakości', 'używany', 'elegancki', 'jedwabny', 'o prostej nogawce', 'olśniewający', 'obcisły', 'modny', 'brzydki', 'ciepły', 'ubierać się', 'przebierać się za kogoś', 'posować pod względem rozmiaru', 'ostrzyc się', 'przebrać się', 'ubrać się', 'wyprasować koszulę', 'pasować pod względem koloru, wzoru', 'wypastować buty', 'zakładać (ubranie)', 'nakładać makijaż', 'pasować do stylu osoby', 'zdjąc z siebie (ubranie)', 'przymierzyć', 'nosić', 'agresywny', 'ambitny', 'arogancki', 'uzdolniony artystycznie', 'apodyktyczny',
'odważny', 'bystry', 'opanowany', 'ostrożny', 'nieostrożny', 'troskliw', 'radosny', 'zdolny', 'oschły', 'pewny siebie', 'okrutny', 'zdyscyplinowany', 'nieciekawy', 'wyluzowany', 'przyjazny', 'nieprzyjazny', 'zabawny', 'szczodry', 'łagodny', 'pracowidy', 'uczynny', 'uczciwy', 'niecierpliwy', 'niezależny', 'niepewny', 'inteligentny', 'miły', 'niemiły', 'dobrotliwy', 'leniwy', 'żywiołowy', 'lojalny', 'nielojalny', 'skąpy', 'nieporządny', 'skromny', 'wstrętny', 'staranny', 'zwykły', 'otwarty', 'spokojny', 'uprzejmy', 'nieuprzejmy', 'cichy', 'wyluzowany', 'godny zaufania', 'odpowiedzialny', 'nieodpowiedzialny', 'niegrzeczny', 'samolubny',
'rozdądny', 'wrażliwy', 'niewrażliwy', 'poważny', 'płytki', 'nieśmiały', 'towarzyski', 'nietowarzyski', 'uparty', 'gadatliwy', 'tolerancyjny', 'nietolerancyjny', 'nieporządny', 'agresywny', 'mądry', 'zirytowany', 'irytujący', 'znudzony', 'nudny', 'załamany', 'przygnębiający', 'rozczarowany', 'rozczarowujący', 'zawstydzony', 'wprawiający w zażenowanie', 'podekscytowany', 'ekscytujący', 'przerażony', 'przerażający', 'sfrustrowany', 'frustrujący', 'wzruszony', 'wzruszający', 'zadowolony', 'zaskoczony', 'zestresowany', 'stresujący', 'zdziwiony', 'zadziwiający', 'zmartwiony', 'martwiący', 'być złym na kogoś', 'być w złym nastroju', 'być w dobrym nastroju', 'denerwować się czymś', 'mieć kogoś dość', 'zmienić zdanie', 'rozweselić się', 'mieć na coś ochotę', 'mieć zły dzień',
'mieć poczucie humoru', 'stracić panowanie nad sobą', 'zdecydować się', 'martwić się czymś', 'zdolny do', 'niezdolny do', 'uwielbiać', 'być ekspertem w jakiejś dziedzinie', 'być w czymś zły', 'być w czymś kiepskim', 'szaleć za czymś', 'lubić kogoś', 'być w czymś dobrym', 'interesować się czymś (interested)', 'interesować się czymś', 'bardzo coś lubić', 'nie cierpieć kogoś', 'przychodzić komuś z łatwością', 'kompetentny', 'nie lubić', 'czerpać przyjemność', 'utalentowany', 'umiejętność', 'wykwalifikowany', 'utalentowany', 'przekonanie', 'zdradzić', 'zmienić zdanie', 'odwaga', 'wiara', 'przyjaźń', 'uczciwość', 'ideał', 'lojalność', 'standardy moralne', 'uświadomić sobie', 'szacunek do samego siebie', 'tolerancja', 'traktować kogoś tak samo', 'prawda', 'system wartośći', 'dobrostan', 'wpływać pozytywnie', 'patrzeć na kogoś z góry', 'podziwiać kogoś', 'mentor', 'wzór do naśladowania', 'szanować', 'dawać przykład',
]*/

const angielskie = [
    'brick', 'bush', 'ceiling', 'chimney', 'door', 'back door', 'front door', 'downstairs', 'fence', 'floor', 'first floor', 'ground floor', 'wooden floor', 'garden', 'front garden', 'rear garden', 'roof garden', 'vegetable garden', 'gate', 'iron', 'ladder', 'lawn', 'lift', 'pavement', 'porch', 'roof', 'security', 'solar panel', 'staircase', 'stairs', 'step', 'sun terrace', 'tree', 'fruit tree', 'upstairs', 'wall', 'window', 'windowsill', 'apartment', 'apartment block', 'block of flats', 'building', 'bungalow', 'castle', 'cottage', 'flat', 'houseboat', 'mansion', 'one-bedroom flat', 'semi-detached house', 'skyscraper', 'studio', 'terraced house', 'two-room flat', 'allotment', 'area', 'capital city', 'city', 'conveniently located', 'country', 'district', 'easy access to sth', 'home town', 'inhabitant', 'neighbour', 'neighbourhood', 'old town', 'parking space', 'resident', 'residential area', 'rural', 'slums', 'suburbs', 'tourist resort', 'town', 'tourist town', 'underground station', 'urban', 'village', 'across the street', 'at the top of a building', 'by the sea', 'go inside', 'in front of sth', 'in the city centre', 'in the countryside', 'in the suburbs', 'make yourself at home', 'next to sth', 'on the corner', 'on the first floor', 'on the top floor', 'opposite sth', 'within walking distance of sth', 'ancient', 'bright', 'comfortable', 'uncomfortable', 'cosy', 'empty', 'in bad condition', 'messy', 'modern', 'neat', 'old-fashioned', 'recently renovated', 'roomy', 'spacious', 'stylish', 'tidy', 'tiny', 'traditional', 'attic', 'balcony', 'basement', 'bathroom', 'bedroom', 'boiler room', 'cellar', 'corridor', 'games room', 'garage', 'underground garage', 'hall', 'kitchen', 'laundry room', 'living room', 'sitting room', 'study', 'toilet', 'blind', 'clock', 'curtain', 'net curtain', 'door handle', 'doorbell', 'doormat', 'electrical appliances', 'heater', 'light', 'light bulb', 'plant', 'house plant', 'vacuum cleaner', 'bath', 'mirror', 'pipe', 'shower', 'shower cabin', 'soap', 'tap', 'toilet seat', 'toothbrush', 'toothpaste', 'towel', 'washbasin', 'washing machine', 'bed', 'bunk bed', 'double bed', 'blanket', 'bookshelf', 'chair', 'desk', 'duvet', 'lamp', 'pillow', 'rug', 'sheet', 'shelf', 'wardrobe', 'fitted wardrobe', 'armchair', 'bookcase', 'carpet', 'CD player', 'coffee table', 'couch', 'cushion', 'dining table', 'fireplace', 'sofa', 'stereo', 'TV set', 'bowl', 'coffee maker', 'cooker', 'electric cooker', 'gas cooker', 'cup', 'cupboard', 'cutlery', 'dishwasher', 'fork', 'freezer', 'fridge', 'kettle', 'electric kettle', 'kitchen table', 'knife', 'microwave oven', 'mug', 'oven', 'pan', 'plate', 'pot', 'sink', 'spoon', 'teapot', 'toaster', 'be at home', 'be in', 'change a light bulb', 'clean the bathroom', 'clean the carpet', 'clean the floors', 'clean the windows', 'clear up the table', 'cook', 'do household jobs', 'do the cleaning', 'do the cooking', 'do the housework', 'do the ironing', 'do the shopping', 'do the washing', 'do the washing-up', 'draw the curtains', 'dry the dishes', 'dust the surfaces', 'empty the dishwasher', 'feed the cat', 'fix sth', 'fold the washing', 'get home', 'hang up the washing', 'iron clothes', 'leave the house', 'lie on the bed', 'load the dishwasher', 'lock the door', 'make the bed', 'make dinner', 'mend sth', 'mop the floor', 'mow the lawn', 'put away', 'roll down the blinds', 'see sb home', 'share the housework', 'stay in', 'stay out', 'switch on', 'switch off', 'take it in turns to do sth', 'take out the rubbish', 'take the dog for a walk', 'throw away', 'tidy your room', 'vacuum the carpet', 'wash clothes', 'wash the dishes', 'water the plants', 'accommodation', 'student accommodation', 'ad', 'amenities', 'bill', 'electricity bill', 'telephone bill', 'commute', 'en-suite bathroom', 'facilities', 'flatmate', 'for rent', 'for sale', 'fully fitted kitchen', 'furnished', 'unfurnished', 'house rules', 'per month', 'per week', 'private garden', 'public transport', 'reasonable price', 'redecorate a house', 'renovate a house', 'rent', 'roommate', 'spare room', 'to let', 'view', 'with a view of sth', 'can afford sth', 'exchange flats', 'find a place of your own', 'pay in advance', 'pay the bills', 'pay the rent', 'rent a flat', 'share a flat with sb', 'split the costs', 'carton', 'fall apart', 'fall down', 'house-warming party', 'knock down', 'makeover', 'move in', 'pack', 'unpack', 'permanent address', 'possessions', 'removal', 'secure', 'tape', 'temporary address', 'transfer'
];

const polskie = [
    'cegła', 'krzak', 'sufit', 'komin', 'drzwi', 'tylne drzwi', 'drzwi frontowe', 'na dole', 'płot', 'piętro', 'pierwsze piętro', 'parter', 'drewniana podłoga', 'ogród', 'ogród z przodu budynku', 'ogród z tyłu budynku', 'ogród na dachu', 'ogród warzywny', 'brama', 'żelazny', 'drabina', 'trawnik', 'winda', 'chodnik', 'ganek', 'dach', 'ochrona', 'panel słoneczny', 'klatka schodowa', 'schody', 'schodek', 'taras do opalania', 'drzewo', 'drzewo owocowe', 'na górze', 'ściana', 'okno', 'parapet', 'mieszkanie', 'blok mieszkalny', 'blok mieszkalny [na b]', 'budynek', 'bungalow', 'zamek', 'domek wiejski', 'mieszkanie [na f]', 'łódź mieszkalna', 'luksusowa rezydencja', 'mieszkanie z jedną sypialnią', 'dom bliźniak', 'drapacz chmur', 'kawalerka', 'dom szeregowy', 'mieszkanie dwupokojowe', 'działka', 'okolica', 'stolica', 'duże miasto', 'dogodnie położony', 'wieś', 'dzielnica', 'łatwy dostęp do czegoś', 'miasto rodzinne', 'mieszkaniec', 'sąsiad', 'okolica', 'starówka', 'miejsce parkingowe', 'mieszkaniec [na r]', 'dzielnica mieszkaniowa', 'wiejski', 'slumsy', 'przedmieścia', 'kurort', 'male miasto', 'miasto turystyczne', 'stacja metra', 'miejski', 'wieś', 'po drugiej stronie ulicy', 'na ostatnim piętrze', 'nad morzem', 'wejście do środka', 'przed czymś', 'w centrum miasta', 'na wsi', 'na przedmieściu', 'czuj się jak u siebie w domu', 'obok czegoś', 'na rogu', 'na pierwszym piętrze', 'na ostatnim piętrze', 'naprzeciwko czegoś', 'w bliskiej odległości od czegoś', 'starożytny', 'jasny', 'wygodny', 'niewygodny', 'przytulny', 'pusty', 'w złym stanie', 'nieuporządkowany', 'nowoczesny', 'schludny', 'staroświecki', 'niedawno odnowiony', 'przestronny', 'przestronny [na s]', 'stylowy', 'uporządkowany', 'malutki', 'tradycyjny', 'strych', 'balkon', 'piwnica', 'łazienka', 'sypialnia', 'kotłownia', 'piwnica [na c]', 'korytarz', 'pomieszczenie rekreacyjne', 'garaż', 'garaż podziemny', 'przedpokój', 'kuchnia', 'pralnia', 'pokój dzienny', 'pokój dzienny [na s]', 'gabinet', 'toaleta', 'roleta', 'zegar', 'zasłona', 'firanka', 'klamka', 'dzwonek', 'wycieraczka do butów', 'urządzenia elektryczne', 'grzejnik', 'światło', 'żarówka', 'roślina', 'roślina doniczkowa', 'odkurzacz', 'wanna', 'lustro', 'rura', 'prysznic', 'kabina prysznicowa', 'mydło', 'kran', 'deska sedesowa', 'szczoteczka do zębów', 'pasta do zębów', 'ręcznik', 'umywalka', 'pralka', 'łóżko', 'łóżko piętrowe', 'łóżko dwuosobowe', 'koc', 'półka na książki', 'krzesło', 'biurko', 'kołdra', 'lampa', 'poduszka', 'dywanik', 'prześcieradło', 'półka', 'szafa', 'szafa wnękowa', 'fotel', 'biblioteczka', 'dywan', 'odtwarzacz płyt CD', 'stolik kawowy', 'kanapa', 'poduszka dekoracyjna', 'stół jadalny', 'kominek', 'kanapa', 'sprzęt audio', 'telewizor', 'miska', 'ekspres do kawy', 'kuchenka', 'kuchenka elektryczna', 'kuchenka gazowa', 'filiżanka', 'szafka kuchenna', 'sztućce', 'zmywarka', 'widelec', 'zamrażarka', 'lodówka', 'czajnik', 'czajnik elektryczny', 'stół kuchenny', 'nóż', 'kuchenka mikrofalowa', 'kubek', 'piekarnik', 'rondel', 'talerz', 'garnek', 'zlew', 'łyżka', 'dzbanek do herbaty', 'toster', 'być w domu', 'być w domu [na b i i]', 'wymienić żarówkę', 'sprzątać łazienkę', 'czyścić dywan', 'myć podłogi', 'myć okna', 'sprzątać ze stołu', 'gotować', 'wykonywać prace domowe', 'sprzątać', 'gotować [z ing]', 'wykonywać prace domowe [housework]', 'prasować', 'robić zakupy', 'prać', 'myć naczynia', 'zaciągać załony', 'wycierać naczynia', 'ścierać kurze', 'wyjmować naczynia ze zmywarki', 'nakarmić kota', 'naprawić coś', 'składać pranie', 'dotrzeć do domu', 'wieszać pranie', 'prasować ubrania', 'wychodzić z domu', 'leżeć na łóżku', 'napełnić zmywarkę', 'zamknąć drzwi na klucz', 'ścielić łóżko', 'ugotować obiad', 'naprawić coś [na m]', 'myć podłogę mopem', 'kosić trawę', 'odkładać na miejsce', 'spuścić rolety', 'odprowadzić kogoś do domu', 'szielić się pracami domowymi', 'zostać w domu', 'przebywać poza domem', 'włączyć', 'wyłączyć', 'robić coś na zmianę', 'wynosić śmieci', 'wyprowadzić psa na spacer', 'wyrzucać', 'posprzątać pokój', 'odkurzyć dywan', 'prać ubrania', 'myć naczynai', 'podlewać rośliny', 'zakwaterowanie', 'akademik', 'ogłoszenie', 'udogodnienia', 'rachunek', 'rachunek za prąd', 'rachunek za telefon', 'dojeżdżać do pracy', 'łazienka przy sypialni', 'udogodnienia [na f]', 'współlokator', 'do wynajęcia', 'na sprzedaż', 'w pełni wyposażona kuchnia', 'umeblowany', 'nieumeblowany', 'zasady panujące w domu', 'miesięcznie', 'tygodniowo', 'prywatny ogród', 'transport publiczny', 'rozsądna cena', 'odnowić dom', 'odnowić dom [na re]', 'czynsz', 'współlokator [na r]', 'pokój gościnny', 'do wynajęcia', 'widok', 'z widokiem na coś', 'móc sobie pozwolić na coś', 'zamienić się mieszkaniami', 'znaleźć swój kąt', 'płacić z góry', 'płacić rachunki', 'płacić czynsz', 'wynajmować mieszkanie', 'dzielić z kimś mieszkanie', 'dzieliś się kosztami', 'karton', 'rozpaść się', 'przewróciś się', 'parepetówka', 'burzyć', 'remont', 'wprowadzać się', 'pakować', 'rozpakować', 'ogłoszenie', 'przeprowadzka', 'zabezpieczyć', 'taśma', 'adres tymczasowy', 'przeprowadzka [na t]'
];
/*
const angielskie = ["marek", "arek", "czernica", "malina", "śliwa", "porzeczka"]
const polskie = ["marek", "arek", "czernica", "malina", "śliwa", "porzeczka"]*/
const problematyczneAngielskie = [];
const problematycznePolskie = [];
  

let lista = "";
let listaProblematycznych = "";
let liczba = polskie.length + 1;
let punkty = 0;

pozostalo.innerText = polskie.length;
let otwarta = false;

function losoweSlowo() {
    liczba -= 1;
    return Math.floor(Math.random() * liczba);
}

sprawdzian.style.display = "none";
problematyczne.style.display = "none";
let losuj = losoweSlowo();
slowo.innerHTML = polskie[losuj];

slowka.addEventListener("click", () => {
    if (otwarta == false) {
        otwarta = true;
        for (let i = 0; i < polskie.length; i++) {
            lista += ("<b>"+polskie[i]+"</b>"+" - "+angielskie[i]+"<br/>")
        }
        slownictwo.innerHTML = lista;
    }
    else {
        slownictwo.style.display = "block";
    }
    blok.style.display = "none";
    sprawdzian.style.display = "none";
})

function pokazProblematyczne() {
    for (let i = 0; i < problematyczneAngielskie.length; i++) {
        listaProblematycznych += ("<b>"+problematycznePolskie[i]+"</b> - "+problematyczneAngielskie[i]+"<br/>");
    }
    blok.style.display = "none";
    problematyczne.style.display = "block";
    trudne.innerHTML = listaProblematycznych;
}

cwiczenia.addEventListener("click", () => {
    slownictwo.style.display = "none";
    sprawdzian.style.display = "none"
    blok.style.display = "block";
})

function przygotuj_test() {
    sprawdzian.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        const punkt = document.createElement("h4");
        punkt.innerText = polskie[losoweSlowo()];
        sprawdzian.appendChild(punkt);
        const wypelnij = document.createElement("input");
        sprawdzian.appendChild(wypelnij);
    }
    const przycisk = document.createElement("button");
    przycisk.addEventListener("click", () => {
        window.alert("To jeszcze nie działa, musisz sprawdzić test sam :)")
    })
    sprawdzian.appendChild(przycisk)
}

test.addEventListener("click", () => {
    slownictwo.style.display = "none";
    blok.style.display = "none";
    sprawdzian.style.display = "block"
    przygotuj_test();
})

pole.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (pole.value == angielskie[losuj]) {
            angielskie.splice(losuj, 1);
            polskie.splice(losuj, 1);
            losuj = losoweSlowo();
            pole.value = "";
            punkty++;
            wpisano.innerText = punkty;
            wyswietlacz.style.backgroundColor = "rgb(7, 155, 229)";
            informacja.style.color = "rgb(6, 107, 157)";
            informacja.innerText = "Correct!";
            slowo.innerText = polskie[losuj];
            pozostalo.innerText = polskie.length;
            sprawdz();
            if (polskie.length <= 0) {
                pokazProblematyczne();
            }
        } else {
            if (problematycznePolskie.includes(polskie[losuj])) {
                console.log(":D");
            }else {
                problematycznePolskie.push(polskie[losuj]);
                problematyczneAngielskie.push(angielskie[losuj]);
            }
            console.log(problematycznePolskie);
            console.log(problematyczneAngielskie);
            wyswietlacz.style.backgroundColor = "rgb(255, 79, 76)";
            informacja.style.color = "rgb(180, 20, 20)";
            informacja.innerText = angielskie[losuj];
            sprawdz();
        }
    }
})

function sprawdz() {
    setTimeout(() => {
        wyswietlacz.style.backgroundColor = "ghostwhite";
        informacja.innerText = "";
    }, 400)
}