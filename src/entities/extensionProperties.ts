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
};

enum enumLogType {
  log = 'log',
  warn = 'warn',
  error = 'error',
  debug = 'debug',
  table = 'table',
}

//From Fork
enum enumDelimiterPosition {
  before = 'before',
  after = 'after',
  both = 'both',
}
