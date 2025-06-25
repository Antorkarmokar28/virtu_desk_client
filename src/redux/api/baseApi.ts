import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "authPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
