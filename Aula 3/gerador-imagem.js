// Puppeteer runCustomScript - pega HTML do item anterior e retorna PNG base64

// Tenta obter o HTML (ajuste a chave se necessário)
const html = $json.output

// Define o conteúdo da página corretamente (NÃO stringify)
await $page.setContent(html, { waitUntil: 'networkidle0' });

// Opcional: espera fontes/carregamentos adicionais (se necessário)
// await $page.waitForTimeout(200);

// Faz screenshot em PNG e retorna base64
const screenshotBase64 = await $page.screenshot({ type: 'png', fullPage: true, encoding: 'base64' });

// Retorna o base64 para o fluxo (campo image)
return [{
  json: {
    image: 'data:image/png;base64,' + screenshotBase64
  }
}];
 {{ $json.output }}