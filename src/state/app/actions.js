export const APP_LOADING = 'APP_LOADING'

export const appLoading = (loading) => (
  {
    type: APP_LOADING,
    payload: {
      loading: loading
    }
  }
)

