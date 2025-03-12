import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Create-Politica launcher',
};

export const api = {
    ws: 'wss://api.create-politica.su/ws',
    web: 'https://api.create-politica.su',
    publicKey,
};

export const appPath = '.aurora-launcher';

export const discordRPC = {
    appId: '1214685301793103902',
    default: {
        firstLineText: 'Тестирую лаунчер',
        secondLineText: 'Чувак, ты думал здесь что-то будет?',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft',
    },
    profile: {
        firstLineText: 'Выбираю тестируемый профиль игры',
        secondLineText: 'Загружаю {server}',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft',
    },
    game: {
        firstLineText: 'Играю на тестовом сервере',
        secondLineText: 'Играю за {nickname}',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft',
    },
};
