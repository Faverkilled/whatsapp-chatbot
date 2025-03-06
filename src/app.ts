import WhatsAppBot from './bot/index';
import { WhatsAppService } from './services/whatsappService';

const apiUrl = 
const apiKey = 


const whatsappService = new WhatsAppService();
const bot = new WhatsAppBot(whatsappService);

const startBot = () => {
    bot.onMessage(async (message) => {
        await bot.onMessage(message);
    });
};

startBot();