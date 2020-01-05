export interface BConfig {
  dbUrl: string;
  env: string;
  port: number;
  isTest: boolean;
  isDev: boolean;
  secrets: {
    [key: string]: string | undefined;
  };
}
