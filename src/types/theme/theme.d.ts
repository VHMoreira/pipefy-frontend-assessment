declare interface Shades {
    default: string
    light: string
}

declare interface Colors {
    green: Shades
    blue: Shades
    cyan: Shades
    orange: Shades
    pink: Shades
    purple: Shades
    gray: Shades
}

declare type ColorKeys = keyof Colors

declare interface Theme {
    colors: Colors
}