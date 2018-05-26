const data = {
	adjectives: ["afraid","angry","brave","breezy","bright","calm","chatty","chilly","chilled","clever","cold","cuddly","curly","curvy","dirty","dry","dull","early","empty","famous","fast","fluffy","fresh","friendly","funny","fuzzy","gentle","giant","good","great","gorgeous","grumpy","happy","healthy","heavy","honest","hip","hungry","itchy","kind","late","light","little","long","loud","lovely","lucky","mean","mighty","modern","moody","nasty","neat","nervous","nice","odd","perfect","polite","popular","pretty","proud","quick","quiet","rich","rotten","rude","selfish","serious","shaggy","sharp","short","shy","silent","silly","slimy","slow","smart","smooth","sour","spicy","spotty","stale","strange","strong","stupid","sweet","swift","tall","tame","tender","thick","thin","tidy","tricky","unlucky","warm","weak","wicked","witty","young","new","old","large","small","big","tiny","tough","soft","tasty","wet","hot","cool","rare","lazy","wise","few","poor","real","flat","fair","wild","clean","plenty","many","metal","shiny","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","twenty","thirty","forty","fifty","sixty","eighty","ninety","beige","blue","cyan","gold","silver","purple","orange","khaki","yellow","red","green","olive","lemon","pink","violet","brown"],
	nouns: ["apes","ants","baboons","badgers","bats","bears","birds","bobcats","bulldogs","cats","camels","cheetahs","chicken","cobras","cougars","cows","crabs","deers","dingos","dodos","dogs","dolphins","donkeys","dragons","ducks","eagles","eels","elephants","emus","falcons","fireants","fishes","flies","foxes","frogs","geckos","goats","gorillas","geese","horses","hornets","hounds","impalas","insects","kangaroos","ladybugs","ligers","llamas","lions","lizards","lobsters","mayflies","moles","monkeys","moose","mice","otters","owls","pandas","panthers","parrots","penguins","pigs","pumas","pugs","rabbits","rats","ravens","seals","seahorses","sheep","shrimps","sloths","snails","snakes","spiders","squids","starfishes","stingrays","swans","tigers","turkeys","turtles","wasps","wolves","wombats","yaks","zebras","cars","buses","trains","boats","planes","bikes","trees","plants","planets","rockets","rocks","bags","houses","clouds","rivers","countries","seas","singers","dancers","trainers","teachers","experts","kids","adults","humans","drinks","meals","hotels","kings","queens","parents","schools","readers","guests","students","numbers","cameras","phones","eyes","carrots","apples","peaches","berries","apricots","avocados","bananas","cherries","grapes","kiwis","lemons","mangos","papayas","olives","oranges","pears","plums","beans","carrots","garlics","melons","onions","peas","pumpkins","tomatoes","candles","carpets","chairs","books","brooms","buckets","clocks","cups","dryers","fans","flowers","roses","forks","games","glasses","knives","lamps","pans","pants","pianos","pillows","pots","radios","scissors","shirts","shoes","socks","spoons","tables","timers","beds","mirrors","walls","doors","windows","balloons","needles","buttons","dolls","islands","eggs","steaks","bottles","keys","pens","files","actors","ads","bees","beers","boxes","bugs","chefs","coats","coins","colts","comics","cooks","crabs","crews","cycles","dots","ducks","ears","feet","ghosts","gifts","hairs","hats","icons","mails","items","jars","jeans","jobs","jokes","laws","lies","maps","masks","moons","mugs","news","paws","pets","poems","poets","points","rice","rings","rules","spies","suits","ties","suns","taxis","terms","tips","toes","nails","tools","toys","vans","walls","waves","ways","worms","years","days","months","weeks","zoos","donuts"],
	verbs: ["accept","add","admire","allow","applaud","approve","appear","argue","arrive","attack","attend","bake","bathe","battle","beam","beg","behave","boil","bow","brake","breathe","brush","burn","call","camp","care","carry","cheat","cheer","chew","clap","clean","collect","compare","compete","complain","confess","cough","count","cover","crash","cry","dance","decide","deliver","destroy","develop","divide","double","doubt","dream","drop","drum","end","exercise","exist","explain","explode","fetch","film","fix","flash","float","flow","fry","glow","grab","greet","grin","guess","hammer","hang","happen","heal","help","hope","hug","hunt","impress","invent","invite","itch","jam","jog","join","joke","judge","juggle","jump","kick","kiss","kneel","knock","laugh","learn","lick","lie","look","love","march","marry","mate","matter","melt","mix","move","nail","obey","own","peel","perform","play","poke","pretend","promise","protect","provide","pull","pump","punch","push","relax","remain","remember","repair","reply","rescue","retire","return","rhyme","roll","rule","rush","scream","search","serve","share","shave","shop","sin","sip","smash","smell","smile","smoke","sneeze","sniff","sparkle","stare","suffer","switch","swim","tan","talk","tap","taste","tease","thank","tickle","tie","trade","train","travel","try","type","dress","unite","vanish","visit","wait","walk","warn","wash","watch","wave","whisper","wink","wonder","work","worry","yawn","yell","study","buy","pay","teach","tell","think","turn","ring","act","agree","begin","build","change","check","cross","deny","design","do","draw","drive","eat","enjoy","fail","fly","fold","give","grow","hear","hide","know","lay","leave","listen","live","notice","occur","press","prove","raise","reflect","refuse","relate","repeat","report","rest","run","sell","shake","shout","sing","sit","sleep","sort","speak"]
};

// console.log('variations =', data.adjectives.length * data.nouns.length * data.verbs.length);

function get(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}

function humanId(opt={}){
	opt = Object.assign({
		separator: '',
		capitalize: true
	}, typeof opt === 'string' ? {separator:opt} : opt);

	let res = [
		get(data.adjectives),
		get(data.nouns),
		get(data.verbs)
	];

	if(opt.capitalize)
		res = res.map(r => r.charAt(0).toUpperCase() + r.substr(1));

	return res.join(opt.separator);
}

module.exports = humanId;