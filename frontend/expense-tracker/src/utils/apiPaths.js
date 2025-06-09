export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const API_PATHS = {
  AUTH: {
    LOGIN: `${BASE_URL}/api/v1/auth/login`,
    REGISTER: `${BASE_URL}/api/v1/auth/register`,
    GET_USER_INFO: `${BASE_URL}/api/v1/auth/getUser`
  },
  DASHBOARD: {
    GET_DATA: `${BASE_URL}/api/v1/dashboard/`
  },
  INCOME: {
    ADD_INCOME: `${BASE_URL}/api/v1/income/add`,
    DELETE_INCOME: (incomeId) => `${BASE_URL}/api/v1/income/${incomeId}`,
    GET_ALL_INCOME: `${BASE_URL}/api/v1/income/get`,
    DOWNLOAD_INCOME: `${BASE_URL}/api/v1/income/downloadexcel`
  },
  EXPENSE: {
    ADD_EXPENSE: `${BASE_URL}/api/v1/expense/add`,
    DELETE_EXPENSE: (expenseId) => `${BASE_URL}/api/v1/expense/${expenseId}`,
    GET_ALL_EXPENSE: `${BASE_URL}/api/v1/expense/get`,
    DOWNLOAD_EXPENSE: `${BASE_URL}/api/v1/expense/downloadexcel`
  },
  IMAGE: {
    UPLOAD_IMAGE: `${BASE_URL}/api/v1/auth/upload-image`
  }
};
