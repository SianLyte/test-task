import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from '../../api/tickets/ticket.type';
import getTicketsRequest from '../../api/tickets/getTicketsRequest';

interface TicketsState {
  tickets: Ticket[];
  filters: (number | string)[];
  status: 'idle' | 'loading' | 'failed';
  showAll: boolean;
}

const initialState: TicketsState = {
  tickets: [],
  filters: [],
  showAll: true,
  status: 'idle',
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  try {
    const response = await getTicketsRequest();
    return response;
  } catch (error) {
    throw new Error('Failed to fetch tickets');
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    toggleFilter(state, action: PayloadAction<number>) {
      const filter = action.payload;
      if (state.showAll) {
        state.showAll = false;
      }
      state.filters = state.filters.includes(filter)
        ? state.filters.filter((f) => f !== filter)
        : [...state.filters, filter];
    },
    toggleAll(state) {
      state.showAll = !state.showAll;
    },
    setOnlyFilter(state, action: PayloadAction<number>) {
      state.showAll = false;
      state.filters = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tickets = action.payload!;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { toggleFilter, toggleAll, setOnlyFilter } = ticketsSlice.actions;
export default ticketsSlice.reducer;