const loremText = `Aparecium petrificus immobilus peskipiksi. Impedimenta immobilus sonorus sonorus. Immobilus quietus lumos aparecium legilimens petrificus incantartem engorgio mobilicorpus. Expelliarmus funnunculus charm totalus. Legilimens wingardium mortis nox. Rictusempra totalus aparecium evanesco stupefy lumos nox immobulus.

Morsmordre lacarnum lumos levicorpus. Sectumsempra patronum funnunculus quodpot serpensortia. Elixir tergeo impedimenta rictusempra aresto protego imperio serpensortia curse incarcerous diffindo. Unctuous protego bulbadox lumos mortis legilimens wolfsbane tarantallegra sonorus protean. Stupefy ennervate totalus tarantallegra imperio impedimenta. Wingardium portus apparate impedimenta lacarnum aresto crucio nox incendio tarantallegra funnunculus.

Impedimenta impedimenta incendio langlock. Petrificus immobilus reparo serpensortia impedimenta quietus. Momentum locomotor nox leviosa tarantallegra alohomora portus mobilicorpus immobilus serpensortia. Incantartem leviosa incarcerous evanesco.

Lumos petrificus rictusempra curse. Funnunculus sonorus legilimens leviosa. Levicorpus engorgio sonorus charm aparecium locomotor mortis. Charm incantato locomotor momentum lumos.

Quietus confundus funnunculus polyjuice lacarnum impedimenta. Crucio totalus banishing protego leviosa aparecium kedavra. Protego serpensortia mortis quietus aresto sonorus imperio peskipiksi protego protego. Funnunculus legilimens skele-gro petrificus amortentia alohomora impedimenta leviosa serpensortia wingardium.

Serpensortia polyjuice expecto immobilus funnunculus. Impedimenta serpensortia ennervate quietus sleekeazys tarantallegra. Momentum serpensortia impedimenta kedavra wingardium engorgio.

Stupefy mortis leviosa felicis lumos impedimenta. Momentum inflamarae avada engorgio. Portus engorgio mobilicorpus sonorus stupefy lumos lacarnum immobilus nox vow lacarnum. Locomotor stupefy sonorus quietus. Tarantallegra.` ;
const input = document.querySelector(".input");
const generateButton = document.querySelector(".generate");
const copyButton = document.querySelector(".copy");
const hiddenInput = document.querySelector(".hidden-input");
const textBox = document.querySelector(".bottom-side");
generateButton.addEventListener("click" , event => getValue());
copyButton.addEventListener("click" , event => copyClipboard());

function getValue(){
    const inputValue = Number(input.value) ;
    if(inputValue === NaN || inputValue <= 0 || inputValue == null){
        textBox.querySelector("p").innerText = "You are so funny , please ReEnter the value ;)";
        copyButton.style.display = "none" ;
        copyButton.classList.remove("active");
    }else{
       getIpsum(inputValue); 
    }
}

function getIpsum(number){
    copyButton.classList.remove("active");
    copyButton.style.display = "flex" ;
    const ipsums = loremText.split(" ");
    let textArr = [];
    for(let i=1 ; i <= number ; i++){
        const randomNumber = Math.floor(Math.random()*194) ;
        textArr[i] = ipsums[randomNumber];
    }
    const text = textArr.join(" ");
    textBox.querySelector("p").innerText = text ;
    hiddenInput.value = text ;
}

function copyClipboard(){
    const loremText = hiddenInput ;
    loremText.select();
    document.execCommand("copy");
    copyButton.classList.add("active");
}