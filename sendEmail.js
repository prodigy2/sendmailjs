
// Configura il trasportatore SMTP utilizzando Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'roxsoundstudio@gmail.com', // Sostituisci con il tuo indirizzo Gmail
    pass: 'your_password_here'  // Sostituisci con la Password per le app generata
  }
});

// Definisci le opzioni dell'email
const mailOptions = {
  from: 'roxsoundstudio@gmail.com',       // Mittente
  to: 'rossini72@gmail.com',            // Destinatario
  subject: 'Oggetto dell\'email',
  text: 'Questo è il contenuto dell\'email in formato testo semplice.',
  html: '<p>Questo è il contenuto dell\'email in <b>HTML</b>.</p>' // Contenuto in HTML
};

// Invia l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Errore durante l\'invio dell\'email:', error);
  }
  console.log('Email inviata con successo:', info.response);
});
