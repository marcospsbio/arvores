// Função auxiliar para verificar e retornar valor ou '-'
function getValueOrDefault(value) {
    return value || '-';
}

// Função para gerar o conteúdo do popup
function getPopupContent(feature) {
    return `
        <b>FID:</b> ${getValueOrDefault(feature.properties['fid'])}<br>
        <b>GPS campo:</b> ${getValueOrDefault(feature.properties['gps campo'])}<br>
        <b>Eixo x:</b> ${getValueOrDefault(feature.properties['eixo x'])}<br>
        <b>Eixo y:</b> ${getValueOrDefault(feature.properties['eixo y'])}<br>
        <b>Nome:</b> ${getValueOrDefault(feature.properties.nome)}<br>
        <b>Nome Científico:</b> ${getValueOrDefault(feature.properties['nome ciêntifico'])}<br>
        <b>Família:</b> ${getValueOrDefault(feature.properties.familia)}<br>
        <b>Nativa / Exótica:</b> ${getValueOrDefault(feature.properties['nativa / exótica'])}<br>
        <b>CAP 1 (cm):</b> ${getValueOrDefault(feature.properties['cap 1 (cm)'])}<br>
        <b>CAP 2 (cm):</b> ${getValueOrDefault(feature.properties['cap 2 (cm)'])}<br>
        <b>CAP 3 (cm):</b> ${getValueOrDefault(feature.properties['cap 3 (cm)'])}<br>
        <b>DAP 1 (cm):</b> ${getValueOrDefault(feature.properties['dap 1'])}<br>
        <b>DAP 2 (cm):</b> ${getValueOrDefault(feature.properties['dap 2'])}<br>
        <b>DAP 3 (cm):</b> ${getValueOrDefault(feature.properties['dap 3'])}<br>
        <b>Volume Lenhoso Total (m³):</b> ${getValueOrDefault(feature.properties['volumle lenhoso total (m3)'])}<br>
        <b>Altura (m):</b> ${getValueOrDefault(feature.properties['altura (m)'])}<br>
        <b>Presença de Tillandisia:</b> ${getValueOrDefault(feature.properties['presença de tillandisia'])}<br>
        <b>Presença de Outras Epífitas:</b> ${getValueOrDefault(feature.properties['presença de outras epfitias'])}<br>
        <b>Viva / Morta:</b> ${getValueOrDefault(feature.properties['viva / morta'])}<br>
        <b>Doente:</b> ${getValueOrDefault(feature.properties['doente'])}<br>
        <b>Parasita:</b> ${getValueOrDefault(feature.properties['parasita'])}<br>
        <b>Sintomas de Patologia:</b> ${getValueOrDefault(feature.properties['sintomas de patologia'])}<br>
        <b>Raízes Fora da Calçada:</b> ${getValueOrDefault(feature.properties['raizes fora da calçada'])}<br>
        <b>Necessidade de Poda:</b> ${getValueOrDefault(feature.properties['necessidade de poda'])}<br>
        <b>Presença de Plaqueta:</b> ${getValueOrDefault(feature.properties['preseça de plaqueta'])}<br>
        <b>Numeração de Plaqueta:</b> ${getValueOrDefault(feature.properties['numeração de plaqueta'])}<br>
        <b>Observações Adicionais:</b> ${getValueOrDefault(feature.properties['observações adicionais'])}<br>
    `;
}
