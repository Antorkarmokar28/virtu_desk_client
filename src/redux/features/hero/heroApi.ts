import { baseApi } from "@/redux/api/baseApi";

const heroApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createHeroContent: builder.mutation({
      query: (data) => ({
        url: "/hero-content",
        method: "POST",
        body: data,
      }),
    }),
    // get all hero content
    getAllHeroContent: builder.query({
      query: () => ({
        url: "/hero-content",
        method: "GET",
      }),
    }),
    // get single hero content
    getSingleHeroContent: builder.query({
      query: (heroId) => ({
        url: `/hero-content/${heroId}`,
        method: "GET",
      }),
    }),
    // update hero content
    updateHeroContent: builder.mutation({
      query: ({ heroId, data }) => ({
        url: `/hero-content/${heroId}`,
        method: "PUT",
        body: data,
      }),
    }),
    // delete hero content
    deleteHeroContent: builder.mutation({
      query: (heroId) => ({
        url: `/hero-content/${heroId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateHeroContentMutation,
  useGetAllHeroContentQuery,
  useGetSingleHeroContentQuery,
  useUpdateHeroContentMutation,
  useDeleteHeroContentMutation,
} = heroApi;
