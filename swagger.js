// Este arquivo é usado para gerar o swagger.json
// Rode com: npm run swagger

// O swagger-autogen é um módulo CommonJS, mas estamos em um projeto ESM.
// Precisamos usar o 'createRequire' para importá-lo corretamente.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerAutogen = require('swagger-autogen');

// Inicializa o swagger-autogen
const autogen = swaggerAutogen();

const doc = {
  info: {
    title: 'Beach Center API',
    description: 'API para gerenciamento do Beach Center (Campeonatos, Eventos, Reservas, etc.)'
  },
  host: 'localhost:8000',
  schemes: ['http'] 
};

const outputFile = './swagger.json';

const endpointsFiles = [
  './src/app/routes/agenda.route.ts',
  './src/app/routes/campeonato.route.ts',
  './src/app/routes/evento.route.ts',
  './src/app/routes/final.route.ts',
  './src/app/routes/grupo.route.ts',
  './src/app/routes/participante.route.ts',
  './src/app/routes/partida.route.ts',
  './src/app/routes/repescagem.route.ts',
  './src/app/routes/reserva.route.ts',
  './src/app/routes/tabela.route.ts',
  './src/app/routes/usuario.route.ts'
];

// Gerar o swagger.json
autogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Arquivo swagger.json gerado com sucesso.');
});
