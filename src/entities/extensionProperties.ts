export type ExtensionProperties = {
  wrapLogMessage: boolean;
  logMessagePrefix: string;
  addSemicolonInTheEnd: boolean;
  insertEnclosingClass: boolean;
  insertEnclosingFunction: boolean;
  insertEmptyLineBeforeLogMessage: boolean;
  insertEmptyLineAfterLogMessage: boolean;
  delimiterInsideMessage: string;
  includeFileNameAndLineNum: boolean;
  quote: string;
  logType: enumLogType;
  logFunction: string;

  //From Fork
  hasMessagePrefix: boolean;
  logMessageSubfix: string;
  hasMessageSubfix: boolean;
  delimitterPosition: enumDelimiterPosition;
  hasFilePrefix: boolean;
};

export enum enumLogType {
  log = 'log',
  warn = 'warn',
  error = 'error',
  debug = 'debug',
  table = 'table',
}

//From Fork
export enum enumDelimiterPosition {
  before = 'before',
  after = 'after',
  both = 'both',
  none = 'none',
}

export type PartialExtensionProperties = Omit<
  ExtensionProperties,
  'wrapLogMessage' | 'insertEmptyLineAfterLogMessage'
>;
