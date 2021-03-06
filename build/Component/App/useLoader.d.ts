declare const useLoader: ({ allowRobotLogin, packageJson, translations }: {
    allowRobotLogin: boolean;
    packageJson: object;
    translations: {
        [language: string]: {
            [key: string]: string;
        };
    };
}) => {
    appInitialized: boolean;
    language: string;
};
export default useLoader;
