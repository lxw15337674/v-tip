declare type Theme = 'dark' | 'light';
interface Options {
    directiveName?: string;
    theme?: Theme;
}
declare const tip: {
    install(Vue: any, options?: Options): void;
};
export default tip;
