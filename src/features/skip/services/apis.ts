import { api } from '../../../config/api';
import type { ISkippData } from '../components/interfaces';
import { getSkipsByLocationsUrl } from './urls';

export const skipApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSkipsByLocations: builder.query<ISkippData[], void>({
      query: () => getSkipsByLocationsUrl,
    }),
  }),
});

export const { 
  useGetSkipsByLocationsQuery
} = skipApi;