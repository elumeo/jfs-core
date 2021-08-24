declare const useLoader: ({ allowRobotLogin, packageJson, translations, }: {
    allowRobotLogin: boolean;
    packageJson: Record<string, unknown>;
    translations: Record<string, Record<string, string>>;
}) => {
    appInitialized: boolean;
    language: string;
};
export default useLoader;
