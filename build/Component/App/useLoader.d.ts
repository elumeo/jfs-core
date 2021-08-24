declare const useLoader: ({ allowRobotLogin, packageJson, translations }: {
    allowRobotLogin: boolean;
    packageJson: object;
    translations: Record<string, Record<string, string>>;
}) => {
    appInitialized: boolean;
    language: string;
};
export default useLoader;
