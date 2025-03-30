class DevConsoleMessage {
    private static instance: DevConsoleMessage | null = null;

    private messages: { text: string; styles: string[] }[] = [
        {
            text: '🚀 Welcome to Solitea!',
            styles: ['font-size: 24px', 'font-family: monospace', 'font-weight: bold', 'color: green']
        },
        {
            text: '💡 Hi 👋! This is a browser feature for developers. Enjoy coding!',
            styles: [
                'font-size: 12px',
                'font-family: monospace',
                'background: white',
                'color: blue',
                'border: 1px dashed'
            ]
        }
    ];

    private constructor() {}

    public static getInstance(): DevConsoleMessage {
        if (!this.instance) {
            this.instance = new DevConsoleMessage();
        }
        return this.instance;
    }

    public welcome(): void {
        this.messages.forEach(({ text, styles }) => {
            console.log(`%c${text}`, styles.join(';'));
        });
    }
}

export default DevConsoleMessage.getInstance();
