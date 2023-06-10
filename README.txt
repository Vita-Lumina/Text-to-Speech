Título: Text to Speech

Descrição: Criei este sistema de Text to Speech em JavaScript para ler os backstories dos jogadores de D&D 5º, pois o Google não tinha capacidade de caracteres suficiente para ler o background completo. O sistema também inclui um botão para interromper a leitura do texto em andamento.

Recursos:
- Utiliza a API de síntese de fala (speechSynthesis) do navegador.
- Obtém as vozes disponíveis utilizando a função getVoices().
- Permite selecionar a voz desejada pelo nome.
- O texto do backstory é obtido do campo de texto com o ID "text-input".
- O botão com o ID "speak-button" inicia a leitura do texto em áudio.
- O botão com o ID "stop-speaking" interrompe a leitura em andamento.

Como utilizar:
1. Inclua o arquivo JavaScript fornecido no seu HTML.
2. Certifique-se de que o HTML contenha os elementos necessários:
   - Um campo de texto com o ID "text-input" para digitar o backstory.
   - Uma imagem ou botão com o ID "speak-button" para iniciar a leitura.
   - Uma imagem ou botão com o ID "stop-speaking" para interromper a leitura.
3. Ao clicar no botão "speak-button", o texto digitado no campo de texto será lido em áudio utilizando a voz selecionada.
4. Ao clicar no botão "stop-speaking", a leitura em andamento será interrompida.

Observações:
- Verifique se o navegador suporta a API de síntese de fala (speechSynthesis).
- Certifique-se de fornecer o nome correto da voz desejada ao alterar a voz utilizada.