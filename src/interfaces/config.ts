export interface IConfig {
  ConfigVersion: number;
  AppProtocolVersion: string;
  GenesisBlockPath: string;
  TrustedAppProtocolVersionSigners: string[];
  BlockchainStoreDirParent: string;
  BlockchainStoreDirName: string;
  Locale: string;
  Workers: number;
  Confirmations: number;
  Mixpanel: boolean;
  Sentry: boolean;
  MuteTeaser: boolean;
  LogSizeBytes: number;
  Network: string;
  SwapAddress: string | undefined;
  DataProviderUrl: string | undefined;
  LaunchPlayer: boolean;
  RemoteNodeList: string[];
  RemoteClientStaleTipLimit: number;
  DownloadBaseURL: string;
  UseUpdate: boolean;
  OnboardingPortalUrl: string;
  ActivationCodeUrl: string;
  KeystoreBackupDocumentationUrl: string;
  UnitySentrySampleRate: number;
  DiscordUrl: string;
  MarketServiceUrl: string;
  TrayOnClose: boolean;
  Planet: string;
  PlanetRegistryUrl: string;
  PlayerUpdateRetryCount: number;
  PatrolRewardServiceUrl: string;
  MeadPledgePortalUrl: string;
  SeasonPassServiceUrl: string;
  IAPServiceHostUrl: string;
  AppleMarketUrl: string;
  GoogleMarketUrl: string;
  GuildServiceUrl: string | undefined;
  GuildIconBucket: string | undefined;
  Maintenance: boolean;
}
