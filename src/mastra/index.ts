
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { CloudflareDeployer } from "@mastra/deployer-cloudflare"; 
import { weatherAgent } from './agents';

export const mastra = new Mastra({
  agents: { weatherAgent },
  deployer: new CloudflareDeployer({
    scope: process.env.CLOUDFLARE_ACCOUNT_ID || 'your-cloudflare-scope',
    projectName: process.env.PROJECT_NAME,
    //workerNamespace: 'production',
    auth: {
      apiToken: process.env.CLOUDFLARE_API_TOKEN || '',
      apiEmail: process.env.API_EMAIL,
    },
  }),
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
