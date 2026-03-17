import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/user/login', data);
      console.log(response.data, "TKN")
      localStorage.setItem('token', response.data.token); // сохраняем токен
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Ошибка входа');
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  'user/check',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().user.token;
    if (!token) {
      return rejectWithValue('Нет токена');
    }
    try {
      const response = await axios.get('/api/user/profile', {
        data: token,
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.user; // сервер должен вернуть объект пользователя
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Ошибка загрузки профиля');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        // state.token = localStorage.getItem('token');
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
       });
      
  },
});

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;