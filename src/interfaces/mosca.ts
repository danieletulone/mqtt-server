export interface MoscaHttpSettings {
    port: number,
    bundle: boolean,
    static: string,
}

export interface MoscaHttpsSettings {
    port: number,
    bundle: boolean,
    static: string,
}

export interface MoscaSecureSettings {
    port: number,
    keyPath: string,
    certPath: string,
}

export interface MoscaSettings {
    port: number,
    http?: MoscaHttpSettings,
    https?: MoscaHttpsSettings,
    secure?: MoscaSecureSettings,
    allowNonSecure?: boolean,
    host: string
}