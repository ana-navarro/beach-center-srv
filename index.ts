import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import agendaRoutes from './src/app/routes/agenda.route.js';
import campeonatoRoutes from './src/app/routes/campeonato.route.js';
import eventoRoutes from './src/app/routes/evento.route.js';
import finalRoutes from './src/app/routes/final.route.js';
import gruposRoutes from './src/app/routes/grupo.route.js';
import participanteRoutes from './src/app/routes/participante.route.js';
import partidaRoutes from './src/app/routes/partida.route.js';
import repescagemRoutes from './src/app/routes/repescagem.route.js';
import reservaRoutes from './src/app/routes/reserva.route.js';
import tabelaRoutes from './src/app/routes/tabela.route.js';
import usuarioRoutes from './src/app/routes/usuario.route.js';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json' with { type: 'json' };


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app: Application = express();

const connect = async (): Promise<void> => {
  const dbUri = process.env.DB;

  if (!dbUri) {
    console.error('ERRO: Variável de ambiente DB não definida.');
    process.exit(1);
  }

  try {
    await mongoose.connect(dbUri);
    console.log('DB está conectado!');
  } catch (err) {
    console.error('Falha na conexão com o DB:', err);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Backend está rodando na porta ${PORT}`);
  connect();
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/agenda', agendaRoutes);
app.use('/api/campeonato', campeonatoRoutes);
app.use('/api/evento', eventoRoutes);
app.use('/api/final', finalRoutes);
app.use('/api/grupos', gruposRoutes);
app.use('/api/participante', participanteRoutes);
app.use('/api/partida', partidaRoutes);
app.use('/api/repescagem', repescagemRoutes);
app.use('/api/reserva', reservaRoutes);
app.use('/api/tabela', tabelaRoutes);
app.use('/api/usuario', usuarioRoutes);

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://181.215.134.184:8000',
    changeOrigin: true,
  })
);

const staticBuildPath = path.join(__dirname, '');
app.use(express.static(staticBuildPath));

app.get(/.*/, (_: Request, res: Response) => {
  res.sendFile(
    path.join(staticBuildPath, 'index.html'),
    (err: Error | any) => {
      if (err) {
        res.status(500).send(err.message || err);
      }
    }
  );
});

export default app;