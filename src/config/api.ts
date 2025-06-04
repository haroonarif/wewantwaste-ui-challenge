import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL,
  contentType: 'application/json',
  cacheTime: 60, 
};

const setContentTypeHeader = (headers: Headers): Headers => {
  const newHeaders = new Headers(headers);
  newHeaders.set('Content-Type', API_CONFIG.contentType);
  return newHeaders;
};

const isModifyingMethod = (method?: string): boolean => 
  ['POST', 'PUT', 'PATCH'].includes(method || '');

const transformRequestBody = (body: unknown): unknown => 
  typeof body === 'object' && body !== null ? { ...body } : body;

const processRequestArgs = (args: FetchArgs): FetchArgs => {
  if (!isModifyingMethod(args.method)) return args;
  
  return {
    ...args,
    body: args.body ? transformRequestBody(args.body) : args.body,
  };
};

const createApiErrorEvent = (error: FetchBaseQueryError) => ({
  type: 'api/globalError',
  payload: error,
});

const extractErrorMessage = (error: unknown): string => {
  if (!error) return 'Unknown error occurred';

  const apiError = error as { status?: number; data?: unknown; error?: string };
  
  if (typeof apiError.data === 'string') return apiError.data;
  if (apiError.error) return apiError.error;
  
  return `Error ${apiError.status || 'Unknown'}`;
};

const createBaseQuery = (): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  const baseQuery = fetchBaseQuery({
    baseUrl: API_CONFIG.baseUrl,
    prepareHeaders: setContentTypeHeader,
  });

  return async (args, api, extraOptions) => {
    const processedArgs = typeof args === 'string' 
      ? { url: args } 
      : processRequestArgs(args);
    
    const result = await baseQuery(processedArgs, api, extraOptions);
    
    if (result.error) {
      api.dispatch(createApiErrorEvent(result.error));
      throw result.error;
    }
    
    return result;
  };
};

export const api = createApi({
  baseQuery: createBaseQuery(),
  keepUnusedDataFor: API_CONFIG.cacheTime,
  endpoints: () => ({}),
});

export const handleApiError = (error: unknown): never => {
  throw new Error(extractErrorMessage(error));
};