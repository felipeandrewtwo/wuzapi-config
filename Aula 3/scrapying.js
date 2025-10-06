// 1. Navega para a página desejada
const url = $json.output;

await $page.goto(url, { waitUntil: 'networkidle2' });

// 2. Aguarda até que pelo menos um elemento com a classe "trip-container" esteja presente
await $page.waitForSelector('.trip-container', { timeout: 20000 }); // até 20s de espera

// 3. Extrai o HTML de todos os elementos com a classe "trip-container"
const trips = await $page.evaluate(() => {
    return Array.from(document.querySelectorAll('.trip-container'))
        .map(el => el.innerHTML);
});

// 4. Log para debug
console.log("Trip-containers encontrados:", trips.length);

// 5. Retorna no formato esperado pelo n8n (um array de objetos)
return trips.map(html => ({
    tripContainer: html,
    ...$json
}));
