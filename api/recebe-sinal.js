const axios = require('axios');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'erro', mensagem: 'Método não permitido' });
  }

  try {
    const data = req.body;
    console.log('📥 Sinal recebido:', data);

    if (!data.signal || !data.symbol) {
      return res.status(400).json({ status: 'erro', mensagem: 'Dados incompletos' });
    }

    const LOVABLE_ENDPOINT = 'https://sualovable.com/api/entrada-sinal';
    const response = await axios.post(LOVABLE_ENDPOINT, data);

    if (response.status === 200) {
      console.log('✅ Sinal enviado para Lovable com sucesso.');
      return res.status(200).json({ status: 'ok', mensagem: 'Sinal enviado para Lovable' });
    } else {
      console.log('⚠ Erro ao enviar para Lovable:', response.data);
      return res.status(500).json({ status: 'erro', mensagem: 'Falha ao enviar para Lovable' });
    }
  } catch (error) {
    console.error('❌ Erro no servidor:', error.message);
    return res.status(500).json({ status: 'erro', mensagem: error.message });
  }
}