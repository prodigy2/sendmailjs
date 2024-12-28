# Guida all'uso di sendmailjs

## Descrizione

**sendmailjs** è un'applicazione Node.js che consente di inviare email utilizzando Nodemailer e un account Gmail. 
È progettata per essere semplice da configurare e utilizzare, facilitando l'invio di email direttamente da applicazioni Node.js.

## Installazione

1. **Clona il repository:**

   git clone https://github.com/prodigy2/sendmailjs.git
   
   cd sendmailjs

npm install nodemailer

Configurazione
Crea una password per le app nel tuo account Gmail:

Accedi al tuo Account Google.
Vai alla sezione Sicurezza.
Assicurati che la Verifica in due passaggi sia attivata.
Nella sezione Accesso a Google, seleziona Password per le app.
Segui le istruzioni per generare una nuova password per l'applicazione che utilizzerai con Nodemailer.
Per una guida dettagliata, consulta la documentazione ufficiale di Google.

Utilizzo
Esegui l'applicazione:
node sendEmail.js

Disclaimer
Uso del Software: Il software è fornito "così com'è", senza alcuna garanzia di alcun tipo, espressa o implicita, inclusa, ma non limitata a, le garanzie implicite di commerciabilità o idoneità per uno scopo particolare. L'uso del software è a proprio rischio.

Limiti di Invio di Gmail: Gmail impone limiti sul numero di email che possono essere inviate giornalmente. Per gli account Gmail gratuiti, è possibile inviare fino a 500 email al giorno. Superare questi limiti può comportare il blocco temporaneo dell'account. Si consiglia di consultare la documentazione ufficiale di Google per informazioni aggiornate sui limiti di invio.
