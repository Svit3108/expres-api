const express = require('express');
const app = express();

// Setze den Standard-Log-Level auf INFO, falls nicht anders angegeben
const logLevel = process.env.LOG_LEVEL || 'INFO';

// Middleware zum Loggen von Nachrichten
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const message = `Requested ${req.method} ${req.url}`;

  // Überprüfe den Log-Level und logge entsprechend
  switch (logLevel.toUpperCase()) {
    case 'INFO':
      console.info(`${timestamp} info: ${message}`);
      break;
    case 'DEBUG':
      console.debug(`${timestamp} debug: ${message}`);
      break;
    case 'ERROR':
      console.error(`${timestamp} error: ${message}`);
      break;
    case 'FATAL':
      console.error(`${timestamp} fatal: ${message}`);
      break;
    default:
      console.warn(`${timestamp} Unknown log level: ${logLevel}`);
  }

  next();
});

// Routen
app.get('/info', (req, res) => {
  logMessage('info', 'This is an info message');
  res.send('Info route');
});

app.get('/debug', (req, res) => {
  logMessage('debug', 'This is a debug message');
  res.send('Debug route');
});

app.get('/error', (req, res) => {
  logMessage('error', 'This is an error message');
  res.send('Error route');
});

app.get('/fatal', (req, res) => {
  logMessage('fatal', 'This is a fatal message');
  res.send('Fatal route');
});

// Funktion zum Loggen von Nachrichten basierend auf dem Log-Level
function logMessage(level, message) {
  const timestamp = new Date().toISOString();
  switch (level.toUpperCase()) {
    case 'INFO':
      console.info(`${timestamp} info: ${message}`);
      break;
    case 'DEBUG':
      console.debug(`${timestamp} debug: ${message}`);
      break;
    case 'ERROR':
      console.error(`${timestamp} error: ${message}`);
      break;
    case 'FATAL':
      console.error(`${timestamp} fatal: ${message}`);
      break;
    default:
      console.warn(`${timestamp} Unknown log level: ${level}`);
  }
}

// Starte den Server

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
