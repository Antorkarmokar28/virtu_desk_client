import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: "/service",
        method: "POST",
        body: data,
      }),
    }),
    // get all hero content
    getAllService: builder.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    // get single hero content
    getSingleService: builder.query({
      query: (serviceId) => ({
        url: `/service/${serviceId}`,
        method: "GET",
      }),
    }),
    // update hero content
    updateService: builder.mutation({
      query: ({ serviceId, data }) => ({
        url: `/service/${serviceId}`,
        method: "PUT",
        body: data,
      }),
    }),
    // delete hero content
    deleteService: builder.mutation({
      query: (serviceId) => ({
        url: `/service/${serviceId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
