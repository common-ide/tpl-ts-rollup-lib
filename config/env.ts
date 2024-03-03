/**
 * 分析
 */
export const isAnalyzer = process.env.ANALYZER === 'true';

/**
 * 开发环境
 */
export const isDev = process.env.NODE_ENV === 'development';

/**
 * 开发环境
 */
export const isAllFile = process.env.ALL_FILE === 'true';
