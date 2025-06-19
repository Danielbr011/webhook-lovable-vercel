# 🚀 Webhook Lovable Vercel  

Servidor Node.js para receber sinais do TradingView via webhook e repassar para o seu robô na Lovable. Feito para rodar no Vercel.

## 📂 Estrutura  
```
/
 └── api/
      └── recebe-sinal.js
 └── package.json
```

## ⚙ Como usar  

### 1️⃣ Clone o repositório  
HEAD
git clone https://github.com/Danielbr011/webhook-lovable-vercel.git  

git clone https://github.com/seu-usuario/webhook-lovable-vercel.git  
0988a3891331c2bb28a50a2f66aa0e7f06de62fe
cd webhook-lovable-vercel  

### 2️⃣ Instale as dependências  
npm install  

### 3️⃣ Suba no GitHub  
git init  
git add .  
git commit -m "Inicial"  
git branch -M main  
HEAD
git remote add origin git remote set-url origin https://github.com/Danielbr011/webhook-lovable-vercel.git 

git remote add origin https://github.com/seu-usuario/webhook-lovable-vercel.git  
>>>>>>> 0988a3891331c2bb28a50a2f66aa0e7f06de62fe
git push -u origin main  

### 4️⃣ Deploy no Vercel  
Acesse https://vercel.com  
Clique **New Project** → Conecte o GitHub → Selecione o repositório.  
Vercel detecta Node.js automaticamente → Clique **Deploy**.  

### 5️⃣ Use o webhook URL  
Vercel cria um link como:  
https://webhook-lovable-vercel.vercel.app/api/recebe-sinal  

Coloque este link no webhook do seu alerta do TradingView.

## ⚠ Atenção  
✅ Altere no código LOVABLE_ENDPOINT para o link real da sua Lovable.  
✅ O Vercel trata automaticamente o ambiente serverless; não precisa configurar porta.