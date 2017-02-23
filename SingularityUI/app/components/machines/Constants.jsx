import chroma from 'chroma-js';

export const WHOLE_NUMBER = 0;
export const HUNDREDTHS_PLACE = 2;

export const STAT_NAMES = {
  cpusUsedStat : 'cpusUsed',
  memoryBytesUsedStat : 'memoryBytesUsed',
  numTasksStat : 'numTasks',
  slaveIdStat : 'slaveId',
  timestampStat : 'timestamp'
};

export const SLAVE_HEALTH_MENU_ITEM_ORDER = [
  'host',
  STAT_NAMES.cpusUsedStat,
  STAT_NAMES.memoryBytesUsedStat,
  STAT_NAMES.numTasksStat,
  STAT_NAMES.timestampStat
];

export const HEALTH_SCALE = chroma.bezier(['blue', 'yellow', 'red']).scale().colors(100);