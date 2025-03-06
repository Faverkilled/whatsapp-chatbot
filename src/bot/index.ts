import { WhatsAppService } from '../services/whatsappService';

class WhatsAppBot {
    private whatsappService: WhatsAppService;
    private managerContact: string;

    constructor(whatsappService: WhatsAppService, managerContact: string) {
        this.whatsappService = whatsappService;
        this.managerContact = managerContact;
    }

    public async onMessage(message: { body: string; from: string }): Promise<void> {
        const userMessage = message.body;
        const userContact = message.from;

        // Отправить приветственное сообщение
        const greeting = this.greetUser();
        await this.whatsappService.sendMessage(userContact, greeting);

        // Запросить проблему пользователя
        const problemRequest = "Пожалуйста, опишите вашу проблему.";
        await this.whatsappService.sendMessage(userContact, problemRequest);

        // Уведомить пользователя, что его запрос передан менеджеру
        const forwardNotification = "Ваш запрос передан менеджеру.";
        await this.whatsappService.sendMessage(userContact, forwardNotification);

        // Передать проблему пользователя менеджеру
        const managerMessage = this.forwardToManager(userContact, userMessage);
        // Это должно быть заменено на фактический ввод пользователя!!!
        await this.whatsappService.sendMessage(this.managerContact, managerMessage);

        const managerAnswer = "Ответ менеджера"; // Это должно быть заменено на фактический ввод менеджера!!!
        
        // Ответить пользователю
        const userAnswer = this.answerUser(managerAnswer);
        await this.whatsappService.sendMessage(userContact, userAnswer);
    }

    private greetUser(): string {
        return "Добрый день. Подскажите, пожалуйста, какой Вопрос Вас интересует?";
    }

    private forwardToManager(userContact: string, userMessage: string): string {
        return `Контакт: ${userContact}, Запрос: ${userMessage}`;
    }

    private answerUser(managerAnswer: string): string {
        return `Менеджер ответил на ваш запрос: \n ${managerAnswer}`;
    }
}

export default WhatsAppBot;