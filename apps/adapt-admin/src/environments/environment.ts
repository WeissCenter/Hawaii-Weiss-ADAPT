import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  // NgxLoggerLevels: TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
  logLevel: NgxLoggerLevel.OFF,
  API_URL: 'https://2goillhc50.execute-api.us-east-1.amazonaws.com/hi-prod',
  VAPID_KEY: 'BFx0mUT16qfHb-kAcDPHLKHkQgJgXeqVmcigJzAY3ltHXLayq9InRYgvs0LlwKNsyKQyC2mtSczag95foXFNde0',
  cognitoRegion: 'us-east-1',
  cognitoDomainName: 'hi-prod-adaptadmin',
  s3PublicAssetsDomainName: 'hi-prod-adaptpublicassetsbucket',
  clientId: '6pqcmk75jn8teef1fc4bc81j2i',
  contentRoot: 'assets/text',
  contentFileName: 'admin-content-text.json',
  appDomain: 'admin.adapt.k12.hi.us',    
  enforceLogin: true,
  envLabel: 'Prod',
  enforceRole: true,
  callbackUrl: 'https://admin.adapt.k12.hi.us/auth/redirect',
  Cognito: {
    userPoolId: 'us-east-1_VlmjvrLdz',
    userPoolClientId: '6pqcmk75jn8teef1fc4bc81j2i',
  },
  loginContent: 'assets/content-labels.json',
  pagesContent: 'assets/text/admin-content-text.json',
  organizationName: 'The State of Hawaii',
  logoStyleClass: 'width-card',
  logoPath: 'assets/shared/logos/states/hi',
  logoExtension: 'svg',
  copyrightText: 'The State of Hawaii.',
};
