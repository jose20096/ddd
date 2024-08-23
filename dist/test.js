"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const scraper = async (text, limit) => {
    try {
        const { data: htmlMain } = await axios_1.default.get('https://www.npmjs.com/search?q=chalk', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0',
                'Accept-Language': ' es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
                'x-spiferack': 1,
            }
        });
        if (limit < htmlMain.total) {
            return htmlMain.objects.splice(0, limit);
        }
        return `There are no results for that limit, limit: ${htmlMain.toal}`;
    }
    catch (error) {
        console.error(error);
        return 'server error';
    }
};
scraper('', 2);
